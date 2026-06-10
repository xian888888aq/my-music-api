const axios = require('axios');

module.exports = async (req, res) => {
  // 允许跨域
  res.setHeader('Access-Control-Allow-Origin', '*');

  const { id } = req.query;
  if (!id) {
    return res.status(400).json({ error: '请提供歌曲 id' });
  }

  try {
    // 直接请求网易云官方的歌词接口
    const response = await axios.get(`https://music.163.com/api/song/lyric?id=${id}&lv=1&kv=1&tv=-1`);
    return res.status(200).json(response.data);
  } catch (error) {
    return res.status(500).json({ error: '获取歌词失败', details: error.message });
  }
};
