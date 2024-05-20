const { Queue } = require('bullmq');

const emailQueue = new Queue('emailQueue', {
    connection: {
        host: '127.0.0.1',
        port: 6379
    }
});

async function init(name) {
    const res = await emailQueue.add(`email to ${name}`, {
        name: name,
        sub: 'email send'
    });
    console.log("Job added to queue", res.id);
}

module.exports = { init };
