const cron = require('node-cron');
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

console.log("App reminder starting!!!");
