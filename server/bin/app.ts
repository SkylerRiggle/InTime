import express from 'express';
import dotenv from 'dotenv';
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import http from 'http';
import routes from '../src/routes';
import cors from 'cors';

/**
 * Configure environment constiables
 */
dotenv.config();

/**
 * Create a new express application
 */
const app = express();

/**
 * Enable CORS
 */
app.use(cors({
     origin: '*'
}));

/**
 * Configure express app
 */
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use("/", routes);

/**
 * Configure app port
 */
const port = normalizePort(process.env.PORT || '3333');
app.set('port', port);

/**
 * Establish a connection to the app's database
 */
import db from '../src/config/db'; //We import this here since 
// we need the env to be configued first
db.sync().then(() => {
    console.log("\u001B[32m" + "Database Successfully Synced.");
    console.log("\u001B[0m" + "----------------------------------");
}).catch((error) => {
    console.error("Unable to sync with database: ", error);
});

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
    const port = parseInt(val, 10);

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

    const bind = typeof port === 'string'
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

    console.log("\u001B[32m" + "App listening on " + bind);
    console.log("\u001B[0m" + "----------------------------------");
}