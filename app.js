
const express = require("express");
const os = require("os");

const app = express();
const PORT = process.env.PORT || 3000;

// Home route
app.get("/", (req, res) => {
    res.send(`
        <html>
            <head>
                <title>Jenkins CI/CD App</title>
            </head>
            <body style="font-family: Arial; text-align: center; padding: 50px;">
                <h1>Welcome to Jenkins CI/CD Deployment!</h1>
                <h2>Node.js Application is Running</h2>
                <p>Deployment successful using Jenkins.</p>
                <p>Server: ${os.hostname()}</p>
                <p>Version: 1.0.0</p>
            </body>
        </html>
    `);
});

// Health check route
app.get("/health", (req, res) => {
    res.status(200).json({
        status: "healthy",
        application: "jenkins-node-app"
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
