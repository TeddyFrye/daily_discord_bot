const cron = require("node-cron");

module.exports = (client) => {
  cron.schedule(
    "0 0 9 * * 1-5",
    async () => {
      try {
        const channelId = "1157703568011317309";
        const channel = await client.channels.fetch(channelId);
        if (!channel)
          return console.error(`Channel with ID ${channelId} not found.`);
        await channel.send(
          `**STATEMENT:** This is your reminder to send a stand-up report.\n\n` +
            `**QUALIFICATION:** Your report should include a summary of your work yesterday and your plan for today.\n\n` +
            `**CAUTIONARY:** Stand-ups are for you and GJT Industries. Do not stall in sending them.`
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
