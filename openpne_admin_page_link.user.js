// ==UserScript==
// @name           OpenPNE admin page link
// @namespace      openpne_admin_link
// @description    OpenPNE Link to admin page
// @include        *
// ==/UserScript==

var VERSION = '2010.11.17';

var GM_infoPanel = document.createElement('div');
(function () {
    var attr_map = {
        top : 0,
        left : 0,
        padding : '15px',
        opacity : 0.8,
        fontsize : 'x-small',
        color : '#000000',
        backgroundColor : '#EEEEEE',
        border : '1px solid #C0C0C0',
        zIndex : 100,
        position : 'fixed'
    };
    for (var attr in attr_map) {
        GM_infoPanel.style[attr] = attr_map[attr];
    }
})();

//OpenPNEのページか確認
    var opsite =document.getElementsByTagName('body')[0].id.match(/page_member_login/);

    if (opsite == "page_member_login")
    {
    //OpenPNEのベースURL取得
        var protocol = location.protocol;
        var base = location.hostname;

        //URL生成部(To pc_backend & mobile_frontend)
        GM_infoPanel.innerHTML = '<a href="'+protocol+'//'+base+'/pc_backend.php/" target="_blank">管理画面へ</a><br><br><a href="http://'+base+'/mobile_frontend.php/" target="_blank">携帯画面へ</a>';
        document.body.appendChild(GM_infoPanel);
    }
