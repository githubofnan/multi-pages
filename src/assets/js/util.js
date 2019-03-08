var Rxports = {
  /* 获取url传过来的参数 */
  getUrlQuery(name, Url) {
    //URL GET 获取值
    var reg = new RegExp("(^|\\?|&)" + name + "=([^&]*)(\\s|&|$)", "i"),
      url = Url || location.href;
    if (reg.test(url))
      return decodeURIComponent(RegExp.$2.replace(/\+/g, " "));
    return "";
  },
  /* 跳转 */
  jump(url, query) {
    var str = '';
    for (var key in query) {
      if (!query[key]) continue;
      str += '&' + key + '=' + query[key];
    }
    if (url.indexOf('?') == -1 || url.indexOf('=') == -1) {
      str = str.replace('&', '?');
    }
    console.log(url + str)
    location.href = url + str;
  },
  jumpWithParme(newLink) {
    var url = location.search; //获取url中"?"符后的字串  
    var theRequest = new Object();
    if (url.indexOf("?") != -1) {
      var str = url.substr(1);
      var strs = str.split("&");
      for (var i = 0; i < strs.length; i++) {
        theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
      }
    }
    this.jump(newLink, theRequest)
  },
  /* 图片转为base64 */
  getBase64Image(files) {
    return new Promise((resolve) => {
      var imgFile = new FileReader();
      imgFile.readAsDataURL(files);
      imgFile.onload = function () {
        resolve(this.result);
      }
    })
  },
  /* 图片压缩转为base64 */
  getSmallImage(files) {
    const url = window.URL.createObjectURL(files);
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    var image = new Image();
    image.src = url;
    return new Promise((resolve) => {
      image.onload = function () {
        canvas.width = this.width;
        canvas.height = this.height;
        ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
        resolve(canvas.toDataURL(files.type, 0.3));
      }
      image.onerror = function () {
        resolve(false);
      }
    })

  },
  /* base64转文件 */
  getBolbData(dataurl) {
    var arr = dataurl.split(','),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([u8arr], {
      type: mime
    });
  },
  /* blobToFile */
  blobToFile(theBlob, fileName) {
    //A Blob() is almost a File() - it's just missing the two properties below which we will add
    theBlob.lastModifiedDate = new Date();
    theBlob.name = fileName;
    return theBlob;
  },
};
export default Rxports;
