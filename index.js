const { Plugin } = require("powercord/entities");
const { get } = require("powercord/http");
const { getModule, channels } = require("powercord/webpack");
const { createBotMessage } = getModule([ "createBotMessage" ], false)
const { receiveMessage }   = getModule([ "receiveMessage" ], false)
module.exports = class GetFursona extends Plugin {
  startPlugin() {
    powercord.api.commands.registerCommand({
      command: "fursona",
      description: "Get a Fursona",
      usage: "{c}fursona < random | code (number 1-99999) >",
      executor: (args) => {
        switch (args[0]) {
          case "random":
          case "":
                let uri = "https://thisfursonadoesnotexist.com/v2/jpgs-2x/seed" +
                String(Math.random()).substring(2, 7) +
                ".jpg",
            break;
          case "code":
                            let uri = "https://thisfursonadoesnotexist.com/v2/jpgs-2x/seed" +
                args[1] +
                ".jpg",
            break;
          default:
                return {send: false, result: "Invalid subcommand."};
        }

      },
    });
  }
  sendBotMessage(media_uri) {
      let m = createBotMessage(channels.getChannelId(), "");
      m.embeds.push({
          type: "image",
          image: {
              url: media_uri,
              proxy_url: media_uri,
              width: 1024,
              height: 1024,
          },
          }
      );
  }

  pluginWillUnload() {
    powercord.api.commands.unregisterCommand("fursona");
  }
};
