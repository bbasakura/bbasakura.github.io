// build time:Wed Dec 25 2019 11:18:27 GMT+0800 (GMT+08:00)
window._bd_share_main.F.module("share/share_api",function(n,a,t){var e=(n("base/tangram").T,n("base/class").Class),i=n("component/comm_tools"),o=n("share/api_base");a.Api=e.create(function(n){function a(a){window._bd_share_main.F.use("trans/data",function(t){t.get({type:"share_count",url:n.bdUrl||i.getPageUrl(),callback:function(n,t){var e={count:n,display:t};a&&a(e)}})})}var t=this,e={count:0,clicked:!1};t._init=function(){var n=t.getView();n.render(),n.on("getsharecount",function(){a(function(a){e.count=a.count,n.setNumber(a.count,a.display)})}),n.init()},t._processAction=function(n){return{data:{type:"share"}}}},o.ApiBase)});
//rebuild by neat 