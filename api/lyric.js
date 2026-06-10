const axios = require('axios');

module.exports = async (req, res) => {
  // 允许跨域（方便所有歌词软件调用）
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  
  const { id } = req.query;
  if (!id) {
    return res.status(400).json({ error: '请提供歌曲 id' });
  }

  try {
    // 换用公益不限流的公共镜像代理接口，绕过网易云机房IP风控
    const response = await axios.get(`https://api.p6p.net/api/neteaselyric.php?id=${id}`);
    
    // 统一封装格式输出
    return res.status(200).json(response.data);
  } catch (error) {
    return res.status(500).json({ error: '获取歌词失败，节点正在维护', details: error.message });
  }
};
