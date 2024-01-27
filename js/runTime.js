var now = new Date;

function createtime() {
    // 更新当前时间
    now.setTime(now.getTime() + 1e3);

    // 计算时间间隔
    var startDate = new Date("08/01/2022 00:00:00");
    var travelDistance = Math.trunc(234e8 + (now - startDate) / 1e3 * 17);
    var astronomicalUnits = (travelDistance / 1496e5).toFixed(6);

    var endDate = new Date("08/09/2022 00:00:00");
    var days = Math.floor((now - endDate) / 1e3 / 60 / 60 / 24);
    var hours = Math.floor((now - endDate) / 1e3 / 60 / 60 - 24 * days);
    var minutes = Math.floor((now - endDate) / 1e3 / 60 - 1440 * days - 60 * hours);
    var seconds = Math.round((now - endDate) / 1e3 - 86400 * days - 3600 * hours - 60 * minutes);

    // 根据条件生成 HTML 内容
    var htmlContent = `本站居然运行了 ${days} 天 ${hours} 小时 ${minutes} 分 ${seconds} 秒 <i id="heartbeat" class='fas fa-heartbeat'></i>";`

    // 更新页面内容
    if (document.getElementById("workboard")) {
        document.getElementById("workboard").innerHTML = htmlContent;
    }
}

// 每隔一秒调用一次 createtime 函数
setInterval(() => {
    createtime();
}, 1000);
