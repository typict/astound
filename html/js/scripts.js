!function(){for(var e,s=function(){},t=["assert","clear","count","debug","dir","dirxml","error","exception","group","groupCollapsed","groupEnd","info","log","markTimeline","profile","profileEnd","table","time","timeEnd","timeline","timelineEnd","timeStamp","trace","warn"],i=t.length,r=window.console=window.console||{};i--;)r[e=t[i]]||(r[e]=s)}(),"undefined"==typeof jQuery?console.warn("jQuery hasn't loaded"):console.log("jQuery has loaded"),$(document).ready(function(){$("#stars li").on("mouseover",function(){var e=parseInt($(this).data("value"),10);$(this).parent().children("li.star").each(function(s){s<e?$(this).addClass("hover"):$(this).removeClass("hover")})}).on("mouseout",function(){$(this).parent().children("li.star").each(function(e){$(this).removeClass("hover")})}),$("#stars li").on("click",function(){var e=parseInt($(this).data("value"),10),s=$(this).parent().children("li.star");for(i=0;i<s.length;i++)$(s[i]).removeClass("selected");for(i=0;i<e;i++)$(s[i]).addClass("selected");var t=parseInt($("#stars li.selected").last().data("value"),10),r="";r=t>1?"Thanks! You rated this "+t+" stars.":"We will improve ourselves. You rated this "+t+" stars.",responseMessage(r)})});
//# sourceMappingURL=maps/scripts.js.map