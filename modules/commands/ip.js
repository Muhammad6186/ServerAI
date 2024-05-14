module.exports.config = {
  name: "ip",
  version: "1.0.0",
  hasPermission: 0,
  credits: "Marjhxn",
  description: "Shows the server IP",
  usePrefix: false,
  allowPrefix: false,
  commandCategory: "no prefix",
  cooldowns: 5 // seconds to activate again
};

module.exports.run = function ({ api, event, box }) {
  box.send(`𝗦𝗘𝗥𝗩𝗘𝗥 𝗡𝗔𝗠𝗘\n𝗜𝗣: undefined\n𝗣𝗼𝗿𝘁: Default\n\n𝗘𝗻𝗷𝗼𝘆 𝗣𝗹𝗮𝘆𝗶𝗻𝗴!!\n𝗕𝗼𝘁 𝗗𝗲𝘃𝗲𝗹𝗼𝗽𝗲𝗿: Marjhxn`, event.threadID);
  box.react("🚀");
}