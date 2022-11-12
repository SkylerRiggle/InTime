import express from 'express';
import dotenv from 'dotenv';
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import http from 'http';
import router from '../src/routes';
const debug = require('debug')('server:server');

/**
 * Configure environment variables
 */
dotenv.config();

/**
 * Create a new express application
 */
const app = express();

/**
 * Configure express app
 */
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use("/", router);

/**
 * Configure app port
 */
const port = normalizePort(process.env.PORT || '3333');
app.set('port', port);

/**
 * Create an HTTP server
 */
const server = http.createServer(app);

/**
 * Listen on provided port, and on all network interfaces
 */
server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

/**
 * Normalize a port into a number, string, or false.
 */
function normalizePort(val: string) {
    var port = parseInt(val, 10);

    if (isNaN(port)) {
        // Named pipe
        return val;
    }

    if (port >= 0) {
        // Port number
        return port;
    }

    return false;
}

/**
 * Event listener for HTTP server "error" event
 */
function onError(error: { syscall: string; code: any; }) {
    if (error.syscall !== 'listen') {
        throw error;
    }

    var bind = typeof port === 'string'
        ? 'Pipe ' + port
        : 'Port ' + port;

    // Handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
        console.error(bind + ' requires elevated privileges');
        process.exit(1);
        case 'EADDRINUSE':
        console.error(bind + ' is already in use');
        process.exit(1);
        default:
        throw error;
    }
}

/**
 * Event listener for HTTP server "listening" event
 */
function onListening() {
    const addr = server.address();
    const bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr?.port;
    debug('Listening on ' + bind);

    console.log("\u001B[32m" + "App listening on " + bind);
    console.log("\u001B[0m" + "----------------------------------");
}