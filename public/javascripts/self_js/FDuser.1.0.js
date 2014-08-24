/*
* author         行者
* createTime     2014-08-24
* description    操作用户信息
* version        1.0
*/
var FDuser = (function(window,$){

/**************服务器操作用户信息**********************/
	var url = {
		validateUrl: "/validateUser",
		userinfo: "/getUserInfo",
		userinsert: "/insertUser"
	};
	//验证用户
	function validateUser(name){
		$.ajax({
			url: url.validateUrl,
			type: 'get',
			dataType: 'json',
			data: {name: name},
			success : function(data,err){
				console.dir(data);
			}
		})
		
	}
	//获取用户信息
	function getUserInfo(name, psw){
		$.ajax({
			url: url.userinfo,
			type: 'get',
			dataType: 'json',
			data: {name: name, psw: psw},
			success: function(data, err){
				console.dir(data);
			}
		})
	}
	//注册用户信息
	function insertUserInfo(data){
		$.ajax({
			url: url.userinsert,
			type: "post",
			dataType: "json",
			data: data,
			success: function(data, err){
				var msg = data.affectedRows;
				if(msg == "1"){
					alert("注册成功！")
				}
			}
		});
	}

/****************用户信息本地cookies操作***********************/
	function setCookie(c_name, value, expiredays) {
	    var exdate = new Date();
	    exdate.setDate(exdate.getDate() + expiredays);
	    document.cookie = c_name + "=" + escape(value) +
	        ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString());
	}

	function getCookie(c_name) {
	    if (document.cookie.length > 0) {
	        c_start = document.cookie.indexOf(c_name + "=")
	        if (c_start != -1) {
	            c_start = c_start + c_name.length + 1
	            c_end = document.cookie.indexOf(";", c_start)
	            if (c_end == -1) c_end = document.cookie.length
	            return unescape(document.cookie.substring(c_start, c_end))
	        }
	    }
	    return ""
	}


	function init(){
		return {
			validateUser : validateUser,
			getUserInfo: getUserInfo,
			insertUser: insertUserInfo,
			getCookie: getCookie,
			setCookie: setCookie
		}
	}
	return init();
})(window,jQuery || Zepto);