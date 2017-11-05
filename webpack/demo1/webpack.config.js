module.exports = {
    //单入口文件
   /* entry:"./main.js",
    output:{
        filename:'bundle.js'
    }*/

   //多入口文件
    entry:{
        dunble1:"./main1.js",
        dunble2:"./main2.js"
    },
    output:{
        filename:"[name].js"
    }
};