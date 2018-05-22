require('libs/weapp-adapter-min');
var Parser = require('libs/xmldom/dom-parser');
window.DOMParser = Parser.DOMParser;
require('libs/wx-downloader.js');
wxDownloader.REMOTE_SERVER_ROOT = "https://dev.zovew.com/Json/";
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
  if (xhr.readyState == 4 && (xhr.status >= 200 && xhr.status < 400)) {
    var response = xhr.responseText;
    window._CCSettings = JSON.parse(response);
    require('main');
  }
};
xhr.open("GET", 'https://dev.zovew.com/Json/setting.json', true);
xhr.send();