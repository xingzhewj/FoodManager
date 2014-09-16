var walk = (function(win){
	
	/******************ajax begin*************************/
	/**
	 * [createXHR 创建XHR]
	 * @return {[type]}
	 */
	function createXHR(){
		if(typeof XMLHttpRequest != "undefinded"){
			return new XMLHttpRequest();
		}else if(typeof ActiveXObject != "undefinded"){
			var versions = ["MSXML2.XMLHttp.6.0","MSXML2.XMLHttp.3.0","MSXML2.XMLHttp"];
			while(true){
				try{
					new ActiveXObject(versions[versions.length-1]);
					arguments.callee.activeXString = versions[versions.length-1];
					break;
				}catch(e){
					throw new Error(e);
				}
			}
			return new ActiveXObject(arguments.callee.activeXString);
		}else{
			throw new Error("No XHR");
		}
	}
	/**
	 * [wAjax 发送ajax请求]
	 * @param  {[type]} paramObj ajax请求参数配置对象
	 * @return {[type]}
	 */
	function wAjax(paramObj){
		var xhr = new createXHR();
		xhr.open(paramObj.type, paramObj.url, false);
		xhr.onreadystatechange = function(){
			if(xhr.readyState == 4){
				paramObj.success();
			}
		}
		xhr.send(null);
	}
	/****************************ajax end*********************************/

	return {
		ajax: wAjax
	};
})(window);