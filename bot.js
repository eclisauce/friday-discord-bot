require("dotenv").config();
const cron = require('cron');

const Discord = require("discord.js")
const client = new Discord.Client({disableEveryone: false})

const MUFASA_GIF = process.env.MUFASA_GIF;
const THURSDAY_VIDEO = process.env.THURSDAY_VIDEO;
const WEDENSDAY_VIDEO = process.env.WEDENSDAY_VIDEO;
const DISCORD_CHANNEL_DANKESTMEMES = process.env.DISCORD_CHANNEL_DANKESTMEMES;
const DISCORD_CHANNEL_RAID = process.env.DISCORD_CHANNEL_RAID;
const SKION = process.env.SKION;
const NOT_FRIDAY= process.env.NOT_FRIDAY;
const HAPPY_FRIDAY= process.env.HAPPY_FRIDAY;
const MERRY_CHRISTMAS = process.env.MERRY_CHRISTMAS;
const MUFASA_SONG_LINK = process.env.MUFASA_SONG_LINK;
const SPIN_GIF = process.env.SPIN_GIF;
const PEPO_CLAP_GIF = process.env.PEPO_CLAP_GIF;
const OFFICE_GIF = process.env.OFFICE_GIF;
const ROLE_RAIDER = process.env.ROLE_RAIDER;
const ROLE_TRIAL = process.env.ROLE_TRIAL;
const ROLE_VETERAN = process.env.ROLE_VETERAN;
const ROLE_OFFICER = process.env.ROLE_OFFICER;

client.on("ready", () => {
  console.log("Our bot is ready to go!!!!")
});

client.on('message', msg => {
  const myDate = new Date();
  const time = myDate.getHours() + ":" + myDate.getMinutes() + ":" + myDate.getSeconds();
  if(msg.content === "!is it friday?") {
    if(myDate.getDay() === 5) {
      client.channels.cache.find(channel => channel.name === DISCORD_CHANNEL_DANKESTMEMES).send('Yes its friday');
      client.channels.cache.find(channel => channel.name === DISCORD_CHANNEL_DANKESTMEMES).send(HAPPY_FRIDAY);
      client.channels.cache.find(channel => channel.name === DISCORD_CHANNEL_DANKESTMEMES).send(MUFASA_SONG_LINK);
    }
    else {
      client.channels.cache.find(channel => channel.name === DISCORD_CHANNEL_DANKESTMEMES).send('No its not')
      client.channels.cache.find(channel => channel.name === DISCORD_CHANNEL_DANKESTMEMES).send(NOT_FRIDAY)
    }
  }
});

client.on('message', msg => {
  if(msg.content === "!spin") {
    client.channels.cache.find(channel => channel.name === DISCORD_CHANNEL_DANKESTMEMES).send(SPIN_GIF);
    client.channels.cache.find(channel => channel.name === DISCORD_CHANNEL_DANKESTMEMES).send(ROLE_OFFICER);
  }
});


client.on('message', msg => {
  const myDate = new Date();
  const time = myDate.getHours() + ":" + myDate.getMinutes() + ":" + myDate.getSeconds();
  if(msg.content === "!is it friday?") {
    if(myDate.getDay() === 1 || 3 || 4) {
      client.channels.cache.find(channel => channel.name === DISCORD_CHANNEL_RAID).send('Raid today');
      client.channels.cache.find(channel => channel.name === DISCORD_CHANNEL_RAID).send(PEPO_CLAP_GIF);
    }
    else {
      client.channels.cache.find(channel => channel.name === DISCORD_CHANNEL_RAID).send('No raid today');
      client.channels.cache.find(channel => channel.name === DISCORD_CHANNEL_RAID).send(OFFICE_GIF);
    }
  }
});

// seconds, minutes, hours, day of month, month, day of week. Time set is in UTC (+1 for real time)
let scheduledMessageWednesday = new cron.CronJob('00 00 16 * * 3', () => {
  client.channels.cache.find(channel => channel.name === DISCORD_CHANNEL_DANKESTMEMES).send(WEDENSDAY_VIDEO);
  client.channels.cache.find(channel => channel.name === DISCORD_CHANNEL_DANKESTMEMES).send("it is Wednesday");
});

let scheduledMessageThursday = new cron.CronJob('00 00 16 * * 4', () => {
  client.channels.cache.find(channel => channel.name === DISCORD_CHANNEL_DANKESTMEMES).send(THURSDAY_VIDEO);
  client.channels.cache.find(channel => channel.name === DISCORD_CHANNEL_DANKESTMEMES).send(SKION);
});

let scheduledMessageFriday = new cron.CronJob('00 00 10 * * 5', () => {
  client.channels.cache.find(channel => channel.name === DISCORD_CHANNEL_DANKESTMEMES).send(MUFASA_GIF);
  client.channels.cache.find(channel => channel.name === DISCORD_CHANNEL_DANKESTMEMES).send("@everyone it's friday");
  client.channels.cache.find(channel => channel.name === DISCORD_CHANNEL_DANKESTMEMES).send(MUFASA_SONG_LINK);
});

let scheduledMessageChristmas = new cron.CronJob('00 00 14 24 11 *', () => {
  client.channels.cache.find(channel => channel.name === DISCORD_CHANNEL_DANKESTMEMES).send(MERRY_CHRISTMAS);
  client.channels.cache.find(channel => channel.name === DISCORD_CHANNEL_DANKESTMEMES).send("@everyone Merry christmas boys");
  client.channels.cache.find(channel => channel.name === DISCORD_CHANNEL_DANKESTMEMES).send("On real christmas");
});

scheduledMessageWednesday.start();
scheduledMessageThursday.start();
scheduledMessageFriday.start();
scheduledMessageChristmas.start();

client.login(process.env.BOT_TOKEN)