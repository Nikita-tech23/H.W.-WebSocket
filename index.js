const socket = new WebSocket('ws:localhost:8080');
        // Когда соединение установлено
        socket.addEventListener('open', function() {
            console.log('Соединение установлено');
        });
        // Обработка получения сообщений от сервера
        socket.addEventListener('message', function(event) {
            const messagesDiv = document.getElementById('messages');
            const message = document.createElement('p');
            message.textContent = event.data;
            messagesContainer.appendChild(message);
            // Автопрокрутка к последнему сообщению
            messagesContainer.scrollTop = messagesDiv.scrollHeight;
        });
        // Отправка сообщения по нажатию на кнопку
        document.getElementById('sendButton').addEventListener('click', function() {
            const messageInput = document.getElementById('messageInput');
            const message = messageInput.value;
            if(message) {
                socket.send(message);
                messageInput.value = '';
            }
        });
        // Отправка сообщения по нажатию клавиши Enter
        document.getElementById('messageInput').addEventListener('keydown', function(event) {
            if (event.key === 'Enter') {
                document.getElementById('sendButton').click();
            }
        });