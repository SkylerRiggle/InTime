import dotenv from 'dotenv';
import db from '../src/config/db';
import { up, down } from '../seeders/20221201175859-InTime';

/**
 * Configure environment constiables
 */
dotenv.config();

/**
 * Establish a connection to the app's database
 */
db.sync().then(() => {
    console.log("\u001B[32m" + "Database Successfully Synced.");
    console.log("\u001B[0m" + "----------------------------------");
    up().then(() => {
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

