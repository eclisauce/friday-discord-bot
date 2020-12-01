require("dotenv").config();
const cron = require('cron');

const Discord = require("discord.js")
const client = new Discord.Client({})


client.on("ready", () => {
  console.log("Our bot is ready to go!!!!")
})

client.on('message', msg => {
  const myDate = new Date();
  if(msg.content === "!is it friday?") {
    if(myDate.getDay() == 5) {
      client.channels.cache.find(channel => channel.name === 'dankestmemes').send('Yes its friday')
    }
    else {
      client.channels.cache.find(channel => channel.name === 'dankestmemes').send('No its not')
    }

  }
})

let scheduledMessage = new cron.CronJob('00 00 12 * * 5', () => {
  client.channels.cache.find(channel => channel.name === 'dankestmemes').send("https://tenor.com/view/mufasa-ghost-cousinskeether-mood-gif-14812360");
  client.channels.cache.find(channel => channel.name === 'dankestmemes').send("@everyone it's friday");
});

scheduledMessage.start()

client.login(process.env.BOT_TOKEN)