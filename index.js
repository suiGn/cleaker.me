// server.js
import express from 'express';
import { subdomainHandler } from './handlers/subdomainHandler.js';

/**
 * Initializes and starts the Express server.
 * @module server
 */

// Initialize express app
const app = express();

// Use subdomain handler
app.use(subdomainHandler);

// Starting the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
