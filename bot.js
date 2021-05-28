require("dotenv").config();
const cron = require('cron');

const Discord = require("discord.js")
const client = new Discord.Client({disableEveryone: False})

const MUFASA_GIF = process.env.MUFASA_GIF;
const THURSDAY_VIDEO = process.env.THURSDAY_VIDEO;
const WEDENSDAY_VIDEO = process.env.WEDENSDAY_VIDEO;
const DISCORD_CHANNEL = process.env.DISCORD_CHANNEL;
const SKION = process.env.SKION;
const NOT_FRIDAY= process.env.NOT_FRIDAY;
const HAPPY_FRIDAY= process.env.HAPPY_FRIDAY;
const MERRY_CHRISTMAS = process.env.MERRY_CHRISTMAS;
const UFASA_SONG_LINK = process.env.MUFASA_SONG_LINK;

client.on("ready", () => {
  console.log("Our bot is ready to go!!!!")
});

client.on('message', msg => {
  const myDate = new Date();
  const time = myDate.getHours() + ":" + myDate.getMinutes() + ":" + myDate.getSeconds();
  if(msg.content === "!is it friday?") {
    if(myDate.getDay() === 5) {
      client.channels.cache.find(channel => channel.name === DISCORD_CHANNEL).send('Yes its friday')
      client.channels.cache.find(channel => channel.name === DISCORD_CHANNEL).send(HAPPY_FRIDAY)
      client.channels.cache.find(channel => channel.name === DISCORD_CHANNEL).send(SKION)
    }
    else {
      client.channels.cache.find(channel => channel.name === DISCORD_CHANNEL).send('No its not')
      client.channels.cache.find(channel => channel.name === DISCORD_CHANNEL).send(NOT_FRIDAY)
    }
  }
});

// seconds, minutes, hours, day of month, month, day of week. Time set is in UTC (+1 for real time)
let scheduledMessageWednesday = new cron.CronJob('00 00 16 * * 3', () => {
  client.channels.cache.find(channel => channel.name === DISCORD_CHANNEL).send(WEDENSDAY_VIDEO);
  client.channels.cache.find(channel => channel.name === DISCORD_CHANNEL).send("it is Wednesday");
});

let scheduledMessageThursday = new cron.CronJob('00 00 16 * * 4', () => {
  client.channels.cache.find(channel => channel.name === DISCORD_CHANNEL).send(THURSDAY_VIDEO);
  client.channels.cache.find(channel => channel.name === DISCORD_CHANNEL).send(SKION);
});

let scheduledMessageFriday = new cron.CronJob('00 00 10 * * 5', () => {
  client.channels.cache.find(channel => channel.name === DISCORD_CHANNEL).send(MUFASA_GIF);
  client.channels.cache.find(channel => channel.name === DISCORD_CHANNEL).send("@everyone it's friday");
  client.channels.cache.find(channel => channel.name === DISCORD_CHANNEL).send(MUFASA_SONG_LINK);
});

let scheduledMessageChristmas = new cron.CronJob('00 00 14 24 11 *', () => {
  client.channels.cache.find(channel => channel.name === DISCORD_CHANNEL).send(MERRY_CHRISTMAS);
  client.channels.cache.find(channel => channel.name === DISCORD_CHANNEL).send("@everyone Merry christmas boys");
  client.channels.cache.find(channel => channel.name === DISCORD_CHANNEL).send("On real christmas");
});

scheduledMessageWednesday.start();
scheduledMessageThursday.start();
scheduledMessageFriday.start();
scheduledMessageChristmas.start();

client.login(process.env.BOT_TOKEN)