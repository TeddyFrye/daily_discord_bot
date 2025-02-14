const cron = require("node-cron");

module.exports = (client) => {
  // Schedule for 5:00 PM server time:
  // second (0) minute (0) hour (17) dayOfMonth (*) month (*) dayOfWeek (*)
  cron.schedule("0 0 17 * * *", async () => {
    try {
      const channelId = "1157703568011317309"; // <--- The channel you want to post in
      const channel = await client.channels.fetch(channelId);

      if (!channel) {
        console.error(`Channel with ID ${channelId} not found.`);
        return;
      }

      // Send your reminder message
      await channel.send(
        "**STATEMENT:** This is your reminder to send a stand-up summary of your work today."
      );
      console.log("Daily reminder sent at 5pm!");
    } catch (error) {
      console.error("Error sending daily reminder:", error);
    }
  });
};
