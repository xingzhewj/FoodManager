/*
 * GET home page.
 */

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

