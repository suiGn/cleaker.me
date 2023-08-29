const express = require('express');
const { Server } = require('ws');
const http = require('http');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const { parse } = require('url');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev, dir: './apps/webapp' });
const handle = nextApp.getRequestHandler();

const app = express();

// Middleware setup
app.use(cors());
app.use(bodyParser.json());

// Set up the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Mock in-memory database for simplicity
const snippets = [];

// Store a snippet
app.post('/store-snippet', (req, res) => {
    const snippet = req.body;
    snippets.push(snippet);
    res.send({ success: true, message: 'Snippet stored!' });
});

// Get snippets (for demonstration; you'd filter by user ID in real scenarios)
app.get('/get-snippets', (req, res) => {
    res.send(snippets);
});

const server = http.createServer(app);

const wss = new Server({ server });
wss.on('connection', (ws) => {
    console.log('ws Client connected');
    ws.on('message', (message) => {
        const data = JSON.parse(message);
        console.log(`Received message: ${data.channel} and ${data.hash}`);
        wss.clients.forEach((client) => {
            if (client !== ws && client.readyState === ws.OPEN) {
                client.send(message);
            }
        });
    });
    ws.on('close', () => {
        console.log('Client disconnected');
    });
});

nextApp.prepare().then(() => {
    // Now, set up the catch-all route for Next.js
    app.all('*', (req, res) => {
        return handle(req, res);
    });
  
    const PORT = process.env.PORT || 8080;
    server.listen(PORT, () => {
        console.log(`Server started on port ${PORT}`);
    });
});