module.exports = function(grunt) {
    // 配置
    grunt.initConfig({
        pkg : grunt.file.readJSON('package.json'),
        concat : {
            domop : {
                src: ['public/javascripts/self_js/FDuser.1.0.js', 'public/javascripts/self_js/test.js'],
                dest: 'public/javascripts/self_js/domop.js'
            }
        },
        uglify : {
            options : {
                banner : '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build : {
                src : 'public/javascripts/self_js/domop.js',
                dest : 'public/javascripts/self_js/domop.min.js'
            }
        },
        cssmin : {
            options : {
                banner : "/* css-test */"
            },
            build : {
                src : 'public/stylesheets/icon.css',
                dest : "public/stylesheets/icon.min.css"
            }
        },
        imagemin : {
            options : {
                optimizationLevel : "3"
            },
            build : {
                src : "public/stylesheets/images/*.{png,gif}",
                dest : "public/stylesheets/imgmin/"
            }
        }
    });

    // 载入concat和uglify插件，分别对于合并和压缩
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-css');
    grunt.loadNpmTasks("grunt-contrib-imagemin");
    // 注册任务
    grunt.registerTask('default', ['concat', 'uglify', 'cssmin', 'imagemin']);
    grunt.registerTask("mytast","测试任务",function(arg){
        grunt.log.writeln("您输入的是："+arg);
    });
};