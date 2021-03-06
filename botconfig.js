module.exports = {
  Admins: ["340479704962301952", "340479704962301952"], //Admins of the bot
  ExpressServer: true, //If you wanted to make the website run or not
  DefaultPrefix: process.env.Prefix || "?", //Default prefix, Server Admins can change the prefix
  Port: 3000, //Which port website gonna be hosted (HTTPS: 443, HTTP: 80)
  SupportServer: "https://kutt.it/GrenadeGaming", //Support Server Link
  Token: process.env.Token || "", //Discord Bot Token
  ClientID: process.env.Discord_ClientID || "", //Discord Client ID
  ClientSecret: process.env.Discord_ClientSecret || "", //Discord Client Secret
  Scopes: ["identify", "guilds", "applications.commands"], //Discord OAuth2 Scopes
  ServerDeafen: true, //If you want bot to stay deafened
  DefaultVolume: 100, //Sets the default volume of the bot, You can change this number anywhere from 1 to 100
  CallbackURL: "/api/callback", //Discord OAuth2 Callback URL
  "24/7": true, //If you want the bot to be stay in the vc 24/7
  CookieSecret: "Maskiilov Mai", //A Secret like a password
  IconURL:
    "https://raw.githubusercontent.com/SudhanPlayz/Discord-MusicBot/master/assets/logo.gif", //URL of all embed author icons | Dont edit unless you dont need that Music CD Spining
  EmbedColor: "RANDOM", //Color of most embeds | Dont edit unless you want a specific color instead of a random one each time
  Permissions: 2205281600, //Bot Inviting Permissions
  Website: process.env.Website || "https://localhost", //Website where it was hosted at includes http or https || Use "0.0.0.0" if you using Heroku
  
  Presence: {
    status: process.env.Presence_Status || "online", // You can show online, idle, and dnd
    name: process.env.Presence_Name || "Name of status", // The message shown
    type: process.env.Presence_Type || "LISTENING", // PLAYING, WATCHING, LISTENING, STREAMING
    url: process.env.Presence_URL || "https://twitch.tv/username" // Set url Twitch if you set type is STREAMING
  },

  //Lavalink
  Lavalink: {
    id: process.env.Lavalink_ID || "id",
    host: process.env.Lavalink_Host || "host name",
    port: 443, // The port that lavalink is listening to. This must be a number!
    pass: process.env.Lavalink_Pass || "pass", // You can customize this!
    secure: true, // Set this to true if the lavalink uses SSL or you're hosting lavalink on repl.it. If not set it to false
  },

  //Please go to https://developer.spotify.com/dashboard/
  Spotify: {
    ClientID: process.env.Spotify_ClientID || "", //Spotify Client ID
    ClientSecret: process.env.Spotify_ClientSecret || "", //Spotify Client Secret
  },
};
