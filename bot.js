require("dotenv").config();
const cron = require('cron');

const Discord = require("discord.js")
const client = new Discord.Client({
})


client.on("ready", () => {
  console.log("Our bot is ready to go!!!!")
})

let scheduledMessage = new cron.CronJob('00 00 12 * * 5', () => {
  client.channels.cache.find(channel => channel.name === 'hallo').send("https://tenor.com/view/mufasa-ghost-cousinskeether-mood-gif-14812360");
  client.channels.cache.find(channel => channel.name === 'hallo').send("@everyone it's friday");
});

scheduledMessage.start()

client.login(process.env.BOT_TOKEN)