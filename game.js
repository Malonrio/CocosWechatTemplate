require('libs/weapp-adapter-min');
var Parser = require('libs/xmldom/dom-parser');
window.DOMParser = Parser.DOMParser;
require('libs/wx-downloader.js');
wxDownloader.REMOTE_SERVER_ROOT = "https://dev.zovew.com/Json/";
wx.request({
  url: 'https://dev.zovew.com/Json/setting.json',
  success: (res) => {
    var response = res.data;
    window._CCSettings = response;
    require('main');
  },
});