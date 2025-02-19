const cron = require("node-cron");

module.exports = (client) => {
  cron.schedule(
    "0 0 17 * * 1-5",
    async () => {
      try {
        const channelId = "1157703568011317309";
        const channel = await client.channels.fetch(channelId);
        if (!channel)
          return console.error(`Channel with ID ${channelId} not found.`);

        await channel.send(
          "**STATEMENT:** This is your reminder to send a stand-up summary of your work today."
        );
        console.log("Daily reminder sent at 5pm (Mon-Fri)!");
      } catch (error) {
        console.error("Error sending daily reminder:", error);
      }
    },
    {
      timezone: "America/Chicago",
    }
  );
};
