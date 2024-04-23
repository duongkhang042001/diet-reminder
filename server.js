const cron = require('node-cron');
const http = require('http');
const TelegramBot = require('node-telegram-bot-api');

const token = '6318853459:AAGfJY85VPj5pioRtRxyb7TLPgkcoBhbmsI';
const chatId = '1420683503';

const bot = new TelegramBot(token, { polling: true });

function sendReminderMessage() {
    bot.sendMessage(chatId, "Đừng ăn uống để giảm cân! Hãy tập trung vào mục tiêu của bạn.");
    console.log('Reminder message sent successfully.');
}

cron.schedule('* * * * *', () => {
    console.log('Cron job triggered.');
    sendReminderMessage();
}, {
    timezone: "Asia/Ho_Chi_Minh"
});

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Welcome to my simple Node.js app!');
});

const port = 3000;

server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
