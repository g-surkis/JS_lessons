import './styles.css';

const messageTypes = {
    register: 'register',
    chat: 'chat',
    typing: 'typing',
}

const id = Math.round(1 + Math.random() * (100 - 1));

const sendBtn = document.getElementById('sender');
const chatInput = document.getElementById('chat-input');
const chatStatus = document.getElementById('chat-status');
const user = document.getElementById('user');
const sendMsg = document.getElementById('sender-message');
const contentField = document.getElementById('content');
const statusRaw = document.getElementById('status');
const loading = document.getElementById('loading');
const typing = document.getElementById('typing');

let timeout;

const showTyping = (name) => {
    if (typing.children.length > 0) {
        typing.innerHTML = '';
        clearTimeout(timeout)
    }
    typing.insertAdjacentHTML('beforeend', `<span class="typing">${name} typing</span><span class="loading" />`)

    timeout = setTimeout(() => {
        typing.innerHTML = '';
    }, 3000)
}

const addToChat = (message) => {
    const { name, msg, type, count } = message;
    console.log('count: ', count);

    if (type === messageTypes.typing) {
        showTyping(name)
        return
    }
    const counter = document.getElementById('counter');

    console.log('counter.innerHTML !== count: ', counter.innerHTML !== count, typeof counter.innerHTML, typeof count, counter.innerHTML, count);

    if (counter.getAttribute('data-count') !== count) {
        counter.innerHTML = `${count} users in chat`;
        counter.setAttribute('data-count', count)
    }


    const mes = `<div class="message"><span class="name">${name}</span>: ${msg}</div>`;
    typing.insertAdjacentHTML('beforebegin', mes);
}

const connection = new WebSocket(`ws://127.0.0.1:5656?id=${id}`);

connection.onopen = function () {
    console.log('onopen: ');

};

connection.onerror = function (error) {
    console.log('error: ', error);
};

connection.onmessage = function (message) {
    try {
        var json = JSON.parse(message.data);

        addToChat(json)

    } catch (e) {
        console.log('This doesn\'t look like a valid JSON: ',
            message.data);
        return;
    }
};


sendBtn.addEventListener('click', () => {
    connection.send(JSON.stringify({ type: messageTypes.register, id, payload: { name: user.value } }))
    chatInput.removeAttribute("disabled");
    statusRaw.innerHTML = '';
    console.log('statusRaw: ', statusRaw);
    statusRaw.insertAdjacentText('afterbegin', `Connected as ${user.value}`);
    user.classList.add('hidden');
    sendBtn.classList.add('hidden');
})


sendMsg.addEventListener('click', () => {
    connection.send(JSON.stringify({ type: messageTypes.chat, id, payload: { msg: chatInput.value } }))
})


chatInput.addEventListener('input', (event) => {
    connection.send(JSON.stringify({ type: messageTypes.typing, id, payload: {} }))
})
