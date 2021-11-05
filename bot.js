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
const RINK = process.env.RINK;
const NOT_FRIDAY= process.env.NOT_FRIDAY;
const HAPPY_FRIDAY= process.env.HAPPY_FRIDAY;
const MERRY_CHRISTMAS = process.env.MERRY_CHRISTMAS;
const MUFASA_SONG_LINK = process.env.MUFASA_SONG_LINK;
const SPIN_GIF = process.env.SPIN_GIF;
const PEPO_CLAP_GIF = process.env.PEPO_CLAP_GIF;
const OFFICE_GIF = process.env.OFFICE_GIF;
const POOL_DANCE = process.env.POOL_DANCE;
const WHAT = process.env.WHAT;


const getDay = () => {
  const d = new Date();
  const weekday = new Array(7);
  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";

  return weekday[d.getDay()]; 
}

client.on("ready", () => {
  console.log("Our bot is ready to go!!!!")
});

client.on('message', msg => {
  const myDate = new Date();
  if(msg.content === "!friday") {
    if(getDay() === "Friday") {
      client.channels.cache.find(channel => channel.name === DISCORD_CHANNEL_DANKESTMEMES).send('Yes its friday');
      client.channels.cache.find(channel => channel.name === DISCORD_CHANNEL_DANKESTMEMES).send(HAPPY_FRIDAY);
      client.channels.cache.find(channel => channel.name === DISCORD_CHANNEL_DANKESTMEMES).send(MUFASA_SONG_LINK);
    }
    else if(getDay() === ("Saturday" || "Sunday")) {
      client.channels.cache.find(channel => channel.name === DISCORD_CHANNEL_DANKESTMEMES).send('Nope, but it is the weekend')
      client.channels.cache.find(channel => channel.name === DISCORD_CHANNEL_DANKESTMEMES).send(POOL_DANCE);
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
  }
});

client.on('message', msg => {
  if(msg.content === "!rink") {
    client.channels.cache.find(channel => channel.name === DISCORD_CHANNEL_DANKESTMEMES).send(WHAT);
    client.channels.cache.find(channel => channel.name === DISCORD_CHANNEL_DANKESTMEMES).send(RINK);
  }
});


client.on('message', msg => {
  const myDate = new Date();
  if(msg.content === "!raid") {
    if(getDay() === ("Monday" || "Wednesday" || "Thursday")) {
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
let scheduledMessageWednesday = new cron.CronJob('00 00 17 * * 3', () => {
  client.channels.cache.find(channel => channel.name === DISCORD_CHANNEL_DANKESTMEMES).send(WEDENSDAY_VIDEO);
  client.channels.cache.find(channel => channel.name === DISCORD_CHANNEL_DANKESTMEMES).send("it is Wednesday my dudes");
});

let scheduledMessageThursday = new cron.CronJob('00 00 17 * * 4', () => {
  client.channels.cache.find(channel => channel.name === DISCORD_CHANNEL_DANKESTMEMES).send(THURSDAY_VIDEO);
  client.channels.cache.find(channel => channel.name === DISCORD_CHANNEL_DANKESTMEMES).send(SKION);
});

let scheduledMessageFriday = new cron.CronJob('00 00 11 * * 5', () => {
  client.channels.cache.find(channel => channel.name === DISCORD_CHANNEL_DANKESTMEMES).send(MUFASA_GIF);
  client.channels.cache.find(channel => channel.name === DISCORD_CHANNEL_DANKESTMEMES).send("@everyone" + "it's friday");
  client.channels.cache.find(channel => channel.name === DISCORD_CHANNEL_DANKESTMEMES).send(MUFASA_SONG_LINK);
});

let scheduledMessageChristmas = new cron.CronJob('00 00 14 24 11 *', () => {
  client.channels.cache.find(channel => channel.name === DISCORD_CHANNEL_DANKESTMEMES).send(MERRY_CHRISTMAS);
  client.channels.cache.find(channel => channel.name === DISCORD_CHANNEL_DANKESTMEMES).send("@everyone" + "Merry christmas boys");
  client.channels.cache.find(channel => channel.name === DISCORD_CHANNEL_DANKESTMEMES).send("On real christmas");
});

scheduledMessageWednesday.start();
scheduledMessageThursday.start();
scheduledMessageFriday.start();
scheduledMessageChristmas.start();

client.login(process.env.BOT_TOKEN)
