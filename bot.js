require("dotenv").config();
const cron = require('cron');

const Discord = require("discord.js")
const client = new Discord.Client({})

const mufasaGif = "https://tenor.com/view/mufasa-ghost-cousinskeether-mood-gif-14812360";
const thursdayVideo = "https://www.youtube.com/watch?v=qcYTzV4HCyk";
const wedensdayVideo = "https://www.youtube.com/watch?v=du-TY1GUFGk";

client.on("ready", () => {
  console.log("Our bot is ready to go!!!!")
});

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
});

let scheduledMessageWednesday = new cron.CronJob('00 00 18 * * 3', () => {
  client.channels.cache.find(channel => channel.name === 'dankestmemes').send(wedensdayVideo");
  client.channels.cache.find(channel => channel.name === 'dankestmemes').send("it is Wednesday");
});

let scheduledMessageThursday = new cron.CronJob('00 00 18 * * 4', () => {
  client.channels.cache.find(channel => channel.name === 'dankestmemes').send(thursdayVideo");
  client.channels.cache.find(channel => channel.name === 'dankestmemes').send("@Skion#4950");
});

let scheduledMessageFriday = new cron.CronJob('00 00 12 * * 5', () => {
  client.channels.cache.find(channel => channel.name === 'dankestmemes').send(mufasaGif);
  client.channels.cache.find(channel => channel.name === 'dankestmemes').send("@everyone it's friday");
});

scheduledMessageWednesday.start();
scheduledMessageThursday.start();
scheduledMessageFriday.start()

client.login(process.env.BOT_TOKEN)