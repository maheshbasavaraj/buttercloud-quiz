# How to install a free SSL certificate with Let's Encrypt and Certbot

This guide explains how to obtain a free SSL certificate from Let's Encrypt using the Certbot tool and automatically configure Nginx to use it.

## 1. Install Certbot

First, you need to install Certbot and its Nginx plugin on your server.

```bash
sudo apt-get update
sudo apt-get install certbot python3-certbot-nginx
```

## 2. Run Certbot

Next, run this command to get the certificate and have Certbot automatically configure Nginx. Make sure to replace `SWEbenchquiz.ddnsfree.com` with your actual domain if it's different.

```bash
sudo certbot --nginx -d SWEbenchquiz.ddnsfree.com
```

Certbot will guide you through the process, asking for an email address and for you to agree to the terms of service. It will then obtain the certificate, update your Nginx configuration, and set up a cron job for automatic renewal.

After running these commands, your site should be accessible via HTTPS.
