const TelegramBot = require("node-telegram-bot-api");

const token = "5218546539:AAHKbLXlOl0kT1DvWzwhgL61HOpNER8IapI"
const bot = new TelegramBot(token,{
    polling: true,
})

bot.on("message", async(message) => {
    let jahon = '843941660';
    let x = '5161587571';
    let me = '739752858';
    let asad = '1883636850'

    let userid = message.from.id;

    
    

    if(userid == me){
        bot.sendMessage(jahon, message.text);
    }else if(userid == jahon){
        bot.sendMessage(me, message.text);
    }


})
;(async=>{

    // bot.sendMessage('1883636850', 'hello')
})()