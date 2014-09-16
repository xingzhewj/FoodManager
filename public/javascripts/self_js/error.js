/**
 * [logEroor 注释问题]
 * @param  {[Object/String]} con 错误内容
 * @param  {[String]} info 错误说明
 * @param  {[Number]} level 提示等级
 * @return {[type]} 无返回值
 */
function logEroor(con, info, level) {
	switch(level){
		case "1":
			console.info(con, info);
		break;
		case "2":
			console.warn(con, info);
		break;
		case "3":
			console.error(con, info);
		break;
		default:
			console.dir(con, info);
	}
}
/**
 * [logGroup 分组提示信息]
 * @param  {[Object/S突然难过]} groupN 分组名
 * @param  {[Array]} groupInfo  分组内容
 * @return {[type]}  无返回信息
 */
function logGroup(groupN, groupInfo){
	console.group(groupN);
	for (var i = 0; i < groupInfo.length; i++) {
		console.log(groupInfo[i]);
	};
	console.groupEnd();
}