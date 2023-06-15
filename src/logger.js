

function log(...args) {
    const timestamp = new Date().toISOString();
    const message = args.map(arg => (typeof arg === 'string' ? arg : JSON.stringify(arg))).join(' ');

    const logEntry = {
        timestamp,
        message
    };

    console.log(logEntry);
}


export { log };