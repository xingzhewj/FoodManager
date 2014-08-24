var sql = require("mysql");
var Walk_DataBase = "walkpeople";

var connection = sql.createConnection({
	host: "localhost",
	port: 3306,
	user: "root",
	password: "123"
});
connection.query("USE " + Walk_DataBase);

/*************用户********************/
this.user = {
	insertData : function(data, fn){
		var query = connection.query("insert into user set name = ?, password = ?, other = ?",[data.name, data.psw, data.other], function(err,result){
			if(err) throw err;
			fn(result);
		});
	},
	findData : function(name, fn){
		var query = connection.query("select * from user where name = ?", [name], function(err,result){
			if(err) throw err;
			if (result.length) {
				fn(true);
			}else{
				fn(false);
			}
		});
	},
	getInfo : function(data, fn){
		var query = connection.query("select name,other from user where name = ? and password = ?",[data.name, data.psw],function(err,result){
			if(err) throw err;
			fn(result);
		});
	},
	deleteData : function(name, fn){
		var query = connection.query("delete from user where name = ?",[name],function(err,result){
			if(err) throw err;
			fn(result);
		});
	},
	modifyData : function(data, fn){
		var query = connection.query("update user set name = ?, password = ?, other = ? where name = ?",[data.name, data.password, data.other, data.name], function(err, result){
			if(err) throw err;
			fn(result);
		})
	}
};