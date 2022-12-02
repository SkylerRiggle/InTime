import dotenv from 'dotenv';
import { up } from '../seeders/Test-InTime';

/**
 * Configure environment constiables
 */
dotenv.config();

/**
 * Establish a connection to the app's database
 */
 import db from '../src/config/db';
db.sync().then(() => {
    console.log("\u001B[32m" + "Database Successfully Synced.");
    console.log("\u001B[0m" + "----------------------------------");
    up().then(() => { // Handle Seeding
        console.log("\u001B[32m" + "Database Successfully Seeded.");
        console.log("\u001B[0m" + "----------------------------------");

        process.kill(process.pid);
    }).catch((error) => {
        console.error("Issue while seeding database: ", error);
        process.kill(process.pid);
    })
}).catch((error) => {
    console.error("Unable to sync with database: ", error);
    process.kill(process.pid);
});

