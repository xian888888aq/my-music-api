const { module: api } = require('@neteaseapireborn/api');
module.exports = async (req, res) => {
  res.status(200).json({ status: "歌词服务器运行正常！" });
};
