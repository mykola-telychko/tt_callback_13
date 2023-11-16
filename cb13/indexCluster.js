const cluster = require('cluster');
const fs = require('fs');

if (cluster.isMaster) {
    // The number of workers can be changed depending on the volume of work
    const numWorkers = require('os').cpus().length;

    console.log(`Master ${process.pid} is running`);

    // Creation of workers
    for (let i = 0; i < numWorkers; i++) { cluster.fork(); }

    cluster.on('exit', (worker, code, signal) => {
        console.log(`Worker ${worker.process.pid} died`);
    });
} else {
    console.log(`Worker ${process.pid} started`);

    // logic for workers

    // read file
    fs.readFile('input.txt', 'utf8', (err, data) => {
        if (err) {
            console.error(`Worker ${process.pid} - Error reading file:`, err);
            return;
        }

        console.log(`Worker ${process.pid} - Read data:`, data);

        // logic for write to file

        process.exit(0);
    });
}
