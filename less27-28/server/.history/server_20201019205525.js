const http = require('http');
const WebSocket = require('ws').Server;
const queryString = require('query-string');
const server = http.createServer();
server.listen(5656, () => { console.log('ws 5656') });
const socketServer = new WebSocket({ server });

const messageTypes = {
    register: 'register'
}

const users = {}


socketServer.on('connection', (ws, req) => {

    const id = req.url.slice(-2);
    users[id] = {name: '', ws};


    // ws.send( JSON.stringify({mes: 'Hello Client' }) );
    ws.send('Hello Client');



    ws.on('message', (message) => {
        const parsedMessage = JSON.parse(message);
    
        const {type, id, payload} = parsedMessage

        switch (type) {
            case messageTypes.register:
                users[id].name = payload.name;
                break;
        
            default:
                break;
        }

        // messages.push(message);
        // socketServer.clients.forEach((client) => {
        //   if (client.readyState === WebSocket.OPEN) {
        //     client.send(JSON.stringify([message]));
        //   }
        // });
    });

    ws.on('close', (obj) => {
        console.log('closed');
    });
});

module.exports = { socketServer };