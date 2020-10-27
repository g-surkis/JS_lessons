const http = require('http');
const WebSocket = require('ws').Server;
const queryString = require('query-string');
const server = http.createServer();
server.listen(5656, () => { console.log('ws 5656') });
const socketServer = new WebSocket({ server });

const messageTypes = {
    register: 'register',
    chat: 'chat',
    typing: 'typing'
}

const users = {}

const sendToAll = (payload, name, type) => {
    const { msg } = payload;
    const usersArr = Object.keys(users);

    console.log('users: ', users);
    usersArr.forEach((item) => {
        users[item].ws.send(JSON.stringify({ name, msg, type, count: Object.keys(users).length }));

    })
}

socketServer.on('connection', (ws, req) => {
    const id = req.url.slice(-2);
    users[id] = { name: 'anonim', ws };

    ws.on('message', (message) => {
        const parsedMessage = JSON.parse(message);

        const { type, id, payload } = parsedMessage
        console.log('parsedMessage: ', parsedMessage);

        switch (type) {
            case messageTypes.register:
                try {
                    users[id].name = payload.name;
                } catch (error) {
                    console.log('error: ', error);
                }

                break;

            case messageTypes.chat:
                sendToAll(payload, users[id].name, type)
                break;
            case messageTypes.typing:
                sendToAll(payload, users[id].name, type)
                break;

            default:
                break;
        }

    });

    function close(id) {
        return () => {
            delete users[id]
            console.log('id: ', id);
            console.log('users: closed ', users);
            console.log('closed');
        }
    }

    ws.on('close', close(id));
});

module.exports = { socketServer };