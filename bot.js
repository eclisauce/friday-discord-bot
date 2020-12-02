require("dotenv").config();
const cron = require('cron');

const Discord = require("discord.js")
const client = new Discord.Client({})

const MUFASA_GIF = process.env.MUFASA_GIF;
const THURSDAY_VIDEO = process.env.THURSDAY_VIDEO;
const WEDENSDAY_VIDEO = process.env.WEDENSDAY_VIDEO;
const DISCORD_CHANNEL = process.env.DISCORD_CHANNEL
const SKION = process.env.SKION

client.on("ready", () => {
  console.log("Our bot is ready to go!!!!")
});

client.on('message', msg => {
  const myDate = new Date();
  if(msg.content === "!is it friday?") {
    if(myDate.getDay() == 5) {
      client.channels.cache.find(channel => channel.name === DISCORD_CHANNEL).send('Yes its friday')
    }
    else {
      client.channels.cache.find(channel => channel.name === DISCORD_CHANNEL).send('No its not')
    }

  }
});

let scheduledMessageWednesday = new cron.CronJob('00 00 18 * * 3', () => {
  client.channels.cache.find(channel => channel.name === DISCORD_CHANNEL).send(WEDENSDAY_VIDEO);
  client.channels.cache.find(channel => channel.name === DISCORD_CHANNEL).send("it is Wednesday");
});

let scheduledMessageThursday = new cron.CronJob('00 00 18 * * 4', () => {
  client.channels.cache.find(channel => channel.name === DISCORD_CHANNEL).send(THURSDAY_VIDEO);
  client.channels.cache.find(channel => channel.name === DISCORD_CHANNEL).send(SKION);
});

let scheduledMessageFriday = new cron.CronJob('00 00 12 * * 5', () => {
  client.channels.cache.find(channel => channel.name === DISCORD_CHANNEL).send(MUFASA_GIF);
  client.channels.cache.find(channel => channel.name === DISCORD_CHANNEL).send("@everyone it's friday");
});

scheduledMessageWednesday.start();
scheduledMessageThursday.start();
scheduledMessageFriday.start()

client.login(process.env.BOT_TOKEN)