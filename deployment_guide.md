# Web App Deployment Guide for Google Cloud VM

This guide provides step-by-step instructions to deploy the ButterCloud Quiz application to a Google Cloud VM.

This guide assumes you are using a standard Linux-based VM (like Debian or Ubuntu) on Google Cloud.

### 1. Connect to Your VM

First, connect to your VM using SSH. You can do this from the Google Cloud Console or using the `gcloud` command-line tool.

### 2. Install Prerequisites

You'll need to install Node.js, npm, Git, and a process manager called `pm2` to keep your app running. You'll also need Nginx as a reverse proxy.

```bash
# Update your package list
sudo apt update

# Install Git
sudo apt install git

# Install Node.js and npm (this example installs Node.js 18.x)
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install pm2 globally
sudo npm install -g pm2

# Install Nginx
sudo apt install nginx
```

### 3. Deploy Your Code

You can get your code onto the VM by cloning it from a Git repository.

```bash
# Clone your repository (replace with your repository URL)
git clone https://github.com/your-username/your-repo.git

# Navigate into your project directory
cd your-repo/buttercloud-quiz
```

### 4. Install Dependencies and Build

Now, install the necessary npm packages for both the frontend and backend, and then build them for production.

```bash
# Install backend dependencies
cd backend
npm install

# Build the backend
npm run build

# Go back to the buttercloud-quiz directory and into the frontend
cd ../frontend
npm install

# Build the frontend
npm run build
```

### 5. Start Your Application with PM2

Using `pm2`, you can start both the frontend and backend servers. `pm2` will keep them running in the background and automatically restart them if they crash.

```bash
# Navigate back to the backend directory
cd ../backend

# Start the backend server with pm2 (it will run on its configured port, e.g., 3001)
pm2 start npm --name "backend" -- run start

# Navigate to the frontend directory
cd ../frontend

# Start the frontend server with pm2 (it will run on port 3000 by default)
pm2 start npm --name "frontend" -- run start

# Save the pm2 process list to have it restart on server reboots
pm2 save
```

At this point, your backend and frontend are running, but they are not accessible from the internet.

### 6. Configure Nginx as a Reverse Proxy

Nginx will act as the entry point for all traffic and direct it to either your frontend or backend.

1.  **Create a new Nginx configuration file:**

    ```bash
    sudo nano /etc/nginx/sites-available/buttercloud-quiz
    ```

2.  **Paste the following configuration into the file.** This configures Nginx to listen on port 80. It serves the frontend application and forwards any request starting with `/api` to your backend.

    ```nginx
    server {
        listen 80;
        server_name YOUR_VM_IP_OR_DOMAIN; # Replace with your VM's external IP or domain

        location / {
            proxy_pass http://localhost:3000; # Your Next.js frontend
            proxy_http_version 1.1;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection 'upgrade';
            proxy_set_header Host $host;
            proxy_cache_bypass $http_upgrade;
        }

        location /api/ {
            proxy_pass http://localhost:3001/; # Your Express backend
            proxy_http_version 1.1;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection 'upgrade';
            proxy_set_header Host $host;
            proxy_cache_bypass $http_upgrade;
        }
    }
    ```

3.  **Enable the new configuration:**

    ```bash
    # Create a symbolic link to enable the site
    sudo ln -s /etc/nginx/sites-available/buttercloud-quiz /etc/nginx/sites-enabled/

    # Test your Nginx configuration for syntax errors
    sudo nginx -t

    # Restart Nginx to apply the changes
    sudo systemctl restart nginx
    ```

### 7. Configure Firewall Rules

Finally, you need to allow HTTP traffic to your VM.

1.  Go to the Google Cloud Console.
2.  Navigate to **VPC network -> Firewall**.
3.  Create a new firewall rule that allows TCP traffic on port `80` for your VM. You can usually do this by adding a network tag to your VM (e.g., `http-server`) and creating a firewall rule that applies to that tag.

After completing these steps, you should be able to access your application by visiting your VM's external IP address in a web browser.
