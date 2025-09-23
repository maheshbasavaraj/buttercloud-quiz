# Fresher Level

# 1. Collaborative Whiteboard

*   Description:
    json
    {
      "summary": "A real-time collaborative whiteboard application where multiple users can draw simultaneously.",
      "functional_requirements": [
        "Users can draw freeform lines on a canvas.",
        "Users can choose different colors and brush sizes.",
        "Changes made by one user should appear on all other users' screens in real-time.",
        "An undo feature to revert the last action.",
        "The whiteboard state should be saved so users can return to it later."
      ],
      "non_functional_requirements": [
        "Low latency for drawing updates (<100ms).",
        "The application must handle multiple concurrent users smoothly.",
        "The server must be scalable to handle many simultaneous sessions.",
        "The application should be secure, preventing unauthorized users from joining a session.",
        "Efficient data transfer to minimize bandwidth usage."
      ],
      "ui_ux_requirements": [
        "A large, unobstructed canvas for drawing.",
        "An intuitive toolbar for selecting tools (pen, color, size).",
        "A smooth and natural drawing experience.",
        "A visual indicator of other users cursors or presence.",
        "The interface should be simple and not distract from the drawing area."
      ]
    }
    
*   Questions:
    1.  What is the best technology for real-time collaboration?
        *   Options:
            *   WebSockets:
                *   Score: +3
                *   Justification: WebSockets provide a persistent, bidirectional communication channel between the client and server, which is ideal for real-time applications like a collaborative whiteboard.
            *   HTTP Long Polling:
                *   Score: +1
                *   Justification: This can simulate a persistent connection, but it's less efficient than WebSockets and introduces more latency.
            *   Server-Sent Events (SSE):
                *   Score: 0
                *   Justification: SSE is for one-way communication (server to client), so it's not suitable for a collaborative application where clients also need to send data.
            *   Peer-to-Peer (WebRTC):
                *   Score: +2
                *   Justification: A powerful option for direct client-to-client communication, which can reduce server load. However, it's more complex to set up and manage than a WebSocket-based solution.