const { Plugin } = require("powercord/entities");
const { get } = require("powercord/http");
module.exports = class GetFursona extends Plugin {
  startPlugin() {
    powercord.api.commands.registerCommand({
      command: "fursona",
      description: "Get a Fursona",
      usage: "{c}fursona < random | code (number 1-99999) >",
      execute: (args) => {
        switch (args[0]) {
          case "random":
            return {
              send: false,
              result:
                "https://thisfursonadoesnotexist.com/v2/jpgs-2x/seed" +
                String(Math.random()).substring(2, 7) +
                ".jpg",
            };
            break;
          case "code":
            return {
              send: false,
              result:
                "https://thisfursonadoesnotexist.com/v2/jpgs-2x/seed" +
                args[1] +
                ".jpg",
            };
            break;
          default:
            return {
              send: false,
              result:
                "That's not a valid subcommand.\nUsage: {c}fursona < random | code (number 1-99999) >",
            };
            break;
        }
      },
    });
  }
  pluginWillUnload() {
    powercord.api.commands.unregisterCommand("fursona");
  }
};
