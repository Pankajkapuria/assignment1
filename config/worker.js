const { Worker, Queue } = require('bullmq');
const IORedis = require('ioredis');

const connection = new IORedis({
    host: '127.0.0.1', // Redis server hostname
    port: 6379,        // Redis server port
    maxRetriesPerRequest: null
});

async function createWorkerForUser() {

    const worker = new Worker('emailQueue', async job => {
        console.log("Processing job:", job.id, job.data);
        const process = processRequest(job.data);
        return process
    }, {
        connection
    });

}

function processRequest(request) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Processed request: ${JSON.stringify(request)} completed.`);
            resolve();
        }, 5000);
    });
}

createWorkerForUser();
