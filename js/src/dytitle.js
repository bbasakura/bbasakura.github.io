// build time:Tue Dec 24 2019 18:28:08 GMT+0800 (GMT+08:00)
var OriginTitile=document.title,titleTime;document.addEventListener("visibilitychange",function(){document.hidden?($('[rel="shortcut icon"]').attr("href","/TEP.png"),document.title="w(?Д?)w 你快回来~~~",clearTimeout(titleTime)):($('[rel="shortcut icon"]').attr("href","/favicon.png"),document.title="?(^?^*)又好了. . . "+OriginTitile,titleTime=setTimeout(function(){document.title=OriginTitile},2e3))});
//rebuild by neat 