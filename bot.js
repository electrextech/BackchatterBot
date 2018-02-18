const Discord = require('discord.js')
const client = new Discord.Client();
const config = require("./config.json");
client.on("ready", ()=> {
  console.log("Starting up the bot.")
  console.log("-----------------------")
  console.log(`${client.user.username} is ready! ID: ${client.user.id}.`)
  client.user.setActivity(`on Discord | &help`, { type: `PLAYING` });
})

client.on("message", async message => {
  if(message.content.startsWith("&ping")) {
      const m = await ({embed: {
              "color": 3447003,
              "fields": [{
                  "name": `:clock330: Pong!`,
                  "value": `Awaiting response from the Discord API...`,
                }
              ],
              "timestamp": new Date(),
              "footer": {
                "icon_url": client.user.avatarURL,
                "text": `Command executed by ${message.author.username}`
              }
            }
          });
    };
      m.edit({embed: {
              "color": 3447003,
              "fields": [{
                  "name": `:clock330: Pong!`,
                  "value": `Client latency is ${m.createdTimestamp - message.createdTimestamp}ms. API latency is ${Math.round(client.ping)}ms.`,
                }
              ],
              "timestamp": new Date(),
              "footer": {
                "icon_url": client.user.avatarURL,
                "text": `Command executed by ${message.author.username}`
              }
            }
          });
    }
    if(message.content.startsWith("&help")) {
     message.channel.send({embed: {
             "color": 3447003,
             "fields": [{
                 "name": `:pencil: Commands List`,
                 "value": "help = Prints this help message.\nping = Pings the client and API to fetch the current latency.\ncode = Links the bot's GitHub repository.\ninfo **[WIP]** = Lists information about the bot, including build info, version and more.",
          },
             ],
             "timestamp": new Date(),
             "footer": {
              "icon_url": client.user.avatarURL,
              "text": `Command executed by ${message.author.username}`
                  }
                }
              });
  }
  if(message.content.startsWith("&code")) {
   message.channel.send({embed: {
           "color": 3447003,
           "fields": [{
               "name": `:computer: GitHub Repository`,
               "value": "You can follow along with the development in real-time by visiting the GitHub repository for the project here:",
        },
           ],
           "timestamp": new Date(),
           "footer": {
            "icon_url": client.user.avatarURL,
            "text": `Command executed by ${message.author.username}`
                }
              }
            });
}
if(message.content.startsWith("&inviteme")) {
 message.channel.send({embed: {
         "color": 3447003,
         "fields": [{
             "name": `:airplane: OAuth2 Link [Dev Only]`,
             "value": "This link may only be used by the developer of the bot. If you have adaquate permissions, go to https://discordapp.com/oauth2/authorize?client_id=414811928922161152&permissions=8&scope=bot.",
      },
         ],
         "timestamp": new Date(),
         "footer": {
          "icon_url": client.user.avatarURL,
          "text": `Command executed by ${message.author.username}`
              }
            }
          });
}
})
client.login(config.token)
