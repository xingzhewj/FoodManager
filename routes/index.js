/*
 * GET home page.
 */

var mydata = require("./mydata.js");

/*-----------------------------------*/
exports.login = function(req,res){
	res.render("basehtml/login",{"title":"登录"});
}
exports.main = function(req, res) {
    res.render("main/mian", {
        "title": "主页",
        "navlist": [{
            "title": "个人网站",
            "url": "./main"
        }]
    });
}

exports.people = function(req, res) {
    res.render("people/people", {
        "title": "个人信息",
        "navlist": [{
            "title": "个人网站",
            "url": "./main"
        }, {
            "title": "餐食管理",
            "url": "./menus"
        }, {
            "title": "个人信息",
            "url": "./people"
        }]
    });
}


exports.menus = function(req, res) {
    res.render("menu/menu", {
        "title": "今日菜单",
        "navlist": [{
            "title": "个人网站",
            "url": "./main"
        }, {
            "title": "餐食管理",
            "url": "./menus"
        }, {
            "title": "今日菜单",
            "url": "./menus"
        }]
    });
}

exports.statischart = function(req, res) {
    res.render("basehtml/statischart", {
        "title": "统计表",
        "navlist": [{
            "title": "个人网站",
            "url": "./main"
        }, {
            "title": "餐食管理",
            "url": "./menus"
        }, {
            "title": "统计信息",
            "url": "./statischart"
        }]
    });
}

exports.peopleinfo = function(req, res) {
    res.render("basehtml/peopleinfo", {
        "title": "人员信息",
        "navlist": [{
            "title": "个人网站",
            "url": "./main"
        }, {
            "title": "餐食管理",
            "url": "./menus"
        }, {
            "title": "人员信息",
            "url": "./peopleinfo"
        }]
    });
}
exports.recharge = function(req, res) {
    res.render("basehtml/recharge", {
        "title": "充值信息",
        "navlist": [{
            "title": "个人网站",
            "url": "./main"
        }, {
            "title": "餐食管理",
            "url": "./menus"
        }, {
            "title": "充值信息",
            "url": "./recharge"
        }]
    });
}

exports.regedit = function(req, res) {
    res.render("basehtml/regedit", {
        "title": "注册信息",
        "navlist": [{
            "title": "个人网站",
            "url": "./main"
        }, {
            "title": "餐食管理",
            "url": "./menus"
        }, {
            "title": "注册信息",
            "url": "./regedit"
        }]
    });
}

/********************笔记***********************/
exports.node = function(req,res){
    res.render("basehtml/note/note",{
        "title":"笔记主页",
        "navlist": [{
            "title": "个人网站",
            "url": "./main"
        }, {
            "title": "日记管理",
            "url": "./node"
        }]
    });
}

exports.writenote = function(req,res){
    res.render("basehtml/note/writeNote",{
        "title":"写笔记",
        "navlist": [{
            "title": "个人网站",
            "url": "./main"
        }, {
            "title": "日记管理",
            "url": "./node"
        }, {
            "title": "写笔记",
            "url": "./write"
        }]
    });
}

exports.viewnote = function(req,res){
    res.render("basehtml/note/viewNote",{
        "title":"写笔记",
        "navlist": [{
            "title": "个人网站",
            "url": "./main"
        }, {
            "title": "日记管理",
            "url": "./node"
        }, {
            "title": "读笔记",
            "url": "./view"
        }]
    });
}

/***********博客****************/
exports.blog = function(req,res){
    res.render("basehtml/blog/blog",{
        "title":"博客主页",
        "navlist":[{
            "title": "个人网站",
            "url": "./main"
        },{
            "title":"个人博客",
            "url":"./blog"
        }]
    });
}

/************聊天***************/
exports.chat = function(req,res){
    res.render("basehtml/chat/chat",{
        "title":"聊天主页",
        "navlist":[{
            "title": "个人网站",
            "url": "./main"
        },{
            "title":"聊天主页",
            "url":"./chat"
        }]
    });
}
/***********娱乐****************/
exports.ent = function(req,res){
    res.render("basehtml/ent/ent",{
        "title":"娱乐主页",
        "navlist":[{
            "title": "个人网站",
            "url": "./main"
        },{
            "title": "娱乐主页",
            "url": "/ent"
        }]
    });
}

/***************用户数据操作*******************/
exports.validateUser = function(req, res){
    var name = req.query.name;
    console.dir(name);
    mydata.user.findData(name,function(data){
        res.send(data);
    });
}

exports.getUserInfo = function(req, res){
    var data = req.query;
    mydata.user.getInfo(data,function(data){
        res.send(data);
    })
}

exports.insertUser = function(req, res){
    var data = req.body;
    mydata.user.insertData(data, function(data){
        res.send(data);
    })
}