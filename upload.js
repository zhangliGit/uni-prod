/**
 *
 * @Description 压缩文件后上传服务器
 * @Author 张立
 * @Created 2019-06-21
 *
 */
const request = require("request")
const inquirer = require('inquirer')
const os = require("os");
const path = require("path");
const fs = require("fs");
const AdmZip = require("adm-zip");
var zip = new AdmZip();
const env = process.argv[process.argv.length - 1];
const buildModule = "云平台移动端";
const envHost = {
  prod: {
    url: 'http://39.97.164.4:8090/upload-zip',
    uploadPath: '/usr/local/openresty/nginx/html/mobile-protal/'
  },
  test: {
    url: "http://112.125.89.37:8090/upload-zip",
    uploadPath: "/usr/local/openresty/nginx/html/mobile-protal/",
  },
};
/**
 * @des 获取ip地址
 */
function getIPAdress() {
  var interfaces = os.networkInterfaces();

  for (var devName in interfaces) {
    var iface = interfaces[devName];
    for (var i = 0; i < iface.length; i++) {
      var alias = iface[i];
      if (
        alias.family === "IPv4" &&
        alias.address !== "127.0.0.1" &&
        !alias.internal
      ) {
        return alias.address;
      }
    }
  }
}
const promptList = [
  {
    type: 'input',
    message: '请输入用户名',
    name: 'userName',
    validate: function(val) {
      if (val !== '') {
        return true
      }
      return '请输入用户名'
    }
  },
  {
    type: 'input',
    message: '请输入详情的版本更新内容',
    name: 'des',
    validate: function(val) {
      if (val !== '') { 
        return true
      }
      return '请输入详情的版本更新内容'
    }
  }
]
const url = envHost[env].url + "?uploadPath=" + envHost[env].uploadPath;
const msg = env === "prod" ? "正式环境" : "测试环境";
console.log(`正在上传${buildModule}模块到${msg}, 请输入更新内容，(发布时确保代码已经更新，避免每个人发布版本时把其他人修复的功能覆盖)`);
inquirer.prompt(promptList).then(answers => {
	zip.addLocalFolder("unpackage/dist/build/h5");
	zip.writeZip("unpackage/dist/build/protal.zip");
	var formData = {
	  file: fs.createReadStream(
	    path.resolve(__dirname, "unpackage/dist/build/protal.zip")
	  ),
	};
	request.post(
	  {
	    url: url,
	    formData: formData,
	  },
	  function (error, response, body) {
	    if (!error && response.statusCode === 200) {
	      // 删除压缩包
	      fs.unlink(
	        path.resolve(__dirname, "unpackage/dist/build/protal.zip"),
	        function () {
	          console.log(`上传成功，${buildModule}模块已上传到${msg}`);
	          request(
	            {
	              url: "http://canpointtest.com:8090/errorApi/addVersion",
	              method: "POST",
	              json: true,
	              headers: {
	                "content-type": "application/json",
	              },
	              body: {
	                env: env === "prod" ? 2 : 1,
	                platform: 1,
	                system: buildModule,
	                createTime: new Date().getTime(),
	                des: answers.des,
	                userName: answers.userName,
	                ip: getIPAdress(),
	              },
	            },
	            function (error, response) {
	              if (!error && response.statusCode === 200) {
	                console.log("版本已发布");
	                process.exit();
	              }
	            }
	          );
	        }
	      );
	    }
	  }
	);
})

