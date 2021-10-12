function bbInit(){addListener(window,"load",onDocReady)}function addListener(element,eventName,handler){element.addEventListener?element.addEventListener(eventName,handler,!1):element.attachEvent?element.attachEvent("on"+eventName,handler):element["on"+eventName]=handler}function removeHandler(elem,eventType,handler){elem.removeEventListener?elem.removeEventListener(eventType,handler,!1):elem.detachEvent&&elem.detachEvent("on"+eventType,handler)}function onDocReady(){document.getElementById(BB_APP.id).classList.remove("boe_canvas__creative_preload"),void 0!=BB_APP.item_animation&&"function"==typeof setupAnimation&&setupAnimation(BB_APP.item_animation)}function setupAnimation(item_animation){var animation_tweens=[];if(void 0!=item_animation.objects){for(var i in item_animation.objects)if(void 0!=item_animation.objects[i].id){var item=document.getElementById(item_animation.objects[i].id);void 0!=item&&(item_animation.objects[i].target=item,item_animation.objects[i].target=item,animation_tweens.push(item_animation.objects[i]))}}else for(var i in item_animation)if(void 0!=item_animation[i].id){var item=document.getElementById(item_animation[i].id);void 0!=item&&(item_animation[i].target=item,animation_tweens.push(item_animation[i]))}void 0!=item_animation.objects?startAnimation(animation_tweens,item_animation.playtimes):startAnimation(animation_tweens)}var BB_APP=BB_APP||{};BB_APP.REPEAT_COUNT=0,BB_APP.IS_PLAYING=0,function(){function ClassList(element){this.element=element}var regExp=function(name){return new RegExp("(^| )"+name+"( |$)")},forEach=function(list,fn,scope){for(var i=0;i<list.length;i++)fn.call(scope,list[i])};ClassList.prototype={add:function(){forEach(arguments,function(name){this.contains(name)||(this.element.className+=" "+name)},this)},remove:function(){forEach(arguments,function(name){this.element.className=this.element.className.replace(regExp(name),"")},this)},toggle:function(name){return this.contains(name)?(this.remove(name),!1):(this.add(name),!0)},contains:function(name){return regExp(name).test(this.element.className)},replace:function(oldName,newName){this.remove(oldName),this.add(newName)}},"classList"in Element.prototype||Object.defineProperty(Element.prototype,"classList",{get:function(){return new ClassList(this)}}),window.DOMTokenList&&null==DOMTokenList.prototype.replace&&(DOMTokenList.prototype.replace=ClassList.prototype.replace)}();function startAnimation(animation_tweens,repeat){if(animation_tweens.length){void 0==repeat||0==repeat?repeat=-1:(repeat=parseInt(repeat),repeat--);var isStatic=!0,params=getTweensParams(animation_tweens),canvasTimeLine=new TimelineMax({autoRemoveChildren:!1,align:"normal",repeat:repeat,repeatDelay:0}),timelineData={};canvasTimeLine.eventCallback("onStart",function(){BB_APP.IS_PLAYING=1}),repeat>0&&canvasTimeLine.eventCallback("onRepeat",function(){var $this=this;BB_APP.REPEAT_COUNT++,BB_APP.REPEAT_COUNT==repeat&&$this.addPause(params.stop_plaing)}),canvasTimeLine.eventCallback("onComplete",function(){BB_APP.IS_PLAYING=0}),params.repeat=repeat,timelineData=buildTimeline(animation_tweens,canvasTimeLine,params),animation_tweens=timelineData.animation_tweens,isStatic=timelineData.isStatic,BB_APP.IS_PLAYING=1,setTimeout(function(){BB_APP.IS_PLAYING=0},1e3*BB_APP.item_animation.animtime)}}function getTweensParams(animation_tweens){var params={start_time:0,max_time:0,max_start_show_time:0,min_end_show_time:animation_tweens[0].animend,stop_plaing:0},start_show_time=0,end_show_time=0;for(i=0;i<animation_tweens.length;i++)start_show_time=animation_tweens[i].animstart+animation_tweens[i].animin.duration,end_show_time=animation_tweens[i].animend-animation_tweens[i].animout.duration,params.start_time<animation_tweens[i].animstart&&(params.start_time=animation_tweens[i].animstart),params.max_start_show_time<start_show_time&&(params.max_start_show_time=start_show_time),params.min_end_show_time>end_show_time&&(params.min_end_show_time=end_show_time),params.max_time<animation_tweens[i].animend&&(params.max_time=animation_tweens[i].animend);return params.stop_plaing=params.max_start_show_time,params}function buildTweens(animation_tweens,params){var i,j,targetItem,isStatic=!0,animation_vars={animin:"from",animout:"to"},amin_var={},amin_settings={},end_time=0,will_change={},will_change_keys=[];for(i=0;i<animation_tweens.length;i++){will_change={},will_change_keys=[],amin_var={from:{},to:{},duration_in:animation_tweens[i].animin.duration,duration_out:animation_tweens[i].animout.duration},targetItem=animation_tweens[i].target,animation_tweens[i].style=targetItem.getAttribute("style"),0==end_time?end_time=animation_tweens[i].animend:end_time!=animation_tweens[i].animend&&(isStatic=isStatic&&!1);for(anim_trans in animation_vars)tween_func=animation_vars[anim_trans],amin_settings=animation_tweens[i][anim_trans].settings,amin_var[tween_func].runBackwards=!1,0==params.repeat&&"animout"==anim_trans&&params.max_time==animation_tweens[i].animend||("none"!=animation_tweens[i][anim_trans].code?(isStatic=isStatic&&!1,void 0!=amin_settings.left&&(amin_settings.left>0?(amin_settings.left=1.3*(targetItem.clientWidth>BB_APP.item_width?targetItem.clientWidth:BB_APP.item_width),amin_var[tween_func].x=amin_settings.left+"px"):amin_settings.left<0&&(amin_settings.left=1.3*-(targetItem.clientWidth>BB_APP.item_width?targetItem.clientWidth:BB_APP.item_width),amin_var[tween_func].x=amin_settings.left+"px"),will_change.transform=1),void 0!=amin_settings.top&&(amin_settings.top>0?(amin_settings.top=1.3*(targetItem.clientHeight>BB_APP.item_height?targetItem.clientHeight:BB_APP.item_height),amin_var[tween_func].y=amin_settings.top+"px"):amin_settings.top<0&&(amin_settings.top=1.3*-(targetItem.clientHeight>BB_APP.item_height?targetItem.clientHeight:BB_APP.item_height),amin_var[tween_func].y=amin_settings.top+"px"),will_change.transform=1),null!=amin_settings.opacity&&void 0!=amin_settings.opacity&&(amin_var[tween_func].opacity=amin_settings.opacity/100,will_change.opacity=1),void 0!=amin_settings.easing&&amin_settings.easing&&(amin_var[tween_func].ease=convertEasing(amin_settings.easing.value,anim_trans)),void 0!=amin_settings.scale&&amin_settings.scale<100&&(amin_var[tween_func].scaleX=amin_settings.scale,amin_var[tween_func].scaleY=amin_settings.scale,will_change.transform=1),void 0!=amin_settings.rotatex&&amin_settings.rotatex>0&&(amin_var[tween_func].rotationX=amin_settings.rotatex,will_change.transform=1),void 0!=amin_settings.rotatey&&amin_settings.rotatey>0&&(amin_var[tween_func].rotationY=amin_settings.rotatey,will_change.transform=1),void 0!=amin_settings.rotatez&&amin_settings.rotatez>0&&(amin_var[tween_func].rotationZ=amin_settings.rotatez,will_change.transform=1),void 0==amin_settings.originx&&(amin_settings.originx=0,will_change.transform=1),void 0==amin_settings.originy&&(amin_settings.originy=0,will_change.transform=1),50==amin_settings.originx&&50==amin_settings.originy||(amin_var[tween_func].transformOrigin=amin_settings.originx+"% "+amin_settings.originy+"%",will_change.transform=1)):(0==animation_tweens[i].animstart&&params.max_time<=animation_tweens[i].animend||params.repeat>=0||("animin"==anim_trans&&(amin_var[tween_func].autoAlpha=0,amin_var.duration_in=.01),"animout"==anim_trans&&(amin_var[tween_func].autoAlpha=0,animation_tweens[i].animend+=amin_var.duration_out,amin_var.duration_out=0),amin_var[tween_func].ease=Power0.easeNone),isStatic=isStatic&&!0));if("none"!=animation_tweens[i].animpulse.code){var pulsate_class=animation_tweens[i].animpulse.value;if(pulsate_class.indexOf("slide")>=0){animation_tweens[i].pulsate_from={transformOrigin:"50% 50%",ease:Power0.easeNone};var pulse_width=parseInt(targetItem.style.width);pulse_width=pulse_width?pulse_width:Math.floor(parseInt(targetItem.clientWidth)/2);var pulse_height=parseInt(targetItem.style.height);switch(pulse_height=pulse_height?pulse_height:Math.floor(parseInt(targetItem.clientHeight)/2),pulsate_class){case"slideLeft":pulse_width<BB_APP.item_width?animation_tweens[i].pulsate_from.x=-parseInt(BB_APP.item_width)+"px":animation_tweens[i].pulsate_from.x=-(pulse_width-parseInt(BB_APP.item_width))+"px";break;case"slideRight":pulse_width<BB_APP.item_width?animation_tweens[i].pulsate_from.x=parseInt(BB_APP.item_width)+"px":animation_tweens[i].pulsate_from.x=pulse_width-parseInt(BB_APP.item_width)+"px";break;case"slideUp":pulse_height<BB_APP.item_height?animation_tweens[i].pulsate_from.y=-parseInt(BB_APP.item_height):animation_tweens[i].pulsate_from.y=-(pulse_height-parseInt(BB_APP.item_height)),animation_tweens[i].pulsate_from.y+="px";break;case"slideDown":pulse_height<BB_APP.item_height?animation_tweens[i].pulsate_from.y=parseInt(BB_APP.item_height):animation_tweens[i].pulsate_from.y=pulse_height-parseInt(BB_APP.item_height),animation_tweens[i].pulsate_from.y+="px"}animation_tweens[i].pulsate_to={}}else animation_tweens[i].pulsate_class_from={className:"+=animated infinite "+pulsate_class},animation_tweens[i].pulsate_class_to={className:"-=animated infinite "+pulsate_class}}animation_tweens[i].anim_from=amin_var.from,animation_tweens[i].anim_duration_in=amin_var.duration_in,animation_tweens[i].anim_to=amin_var.to,animation_tweens[i].anim_duration_out=amin_var.duration_out;for(j in will_change)will_change_keys.push(j);animation_tweens[i].will_change=will_change_keys.join(",")}return{tweens:animation_tweens,"static":!(0!=params.start_time||!isStatic)}}function buildTimeline(animation_tweens,canvas_timeline,params){canvas_timeline.clear();var i,targetItem,isStatic=!1;if(animation_tweens&&(animation_tweens=buildTweens(animation_tweens,params),isStatic=animation_tweens["static"],animation_tweens=animation_tweens.tweens,!isStatic))for(i=0;i<animation_tweens.length;i++)targetItem=animation_tweens[i].target,animation_tweens[i].will_change&&(targetItem.style["will-change"]=animation_tweens[i].will_change),animation_tweens[i].pulsate_from?canvas_timeline.to(targetItem,animation_tweens[i].animend-animation_tweens[i].animstart-animation_tweens[i].animin.duration-animation_tweens[i].animout.duration,animation_tweens[i].pulsate_from,animation_tweens[i].animstart+animation_tweens[i].anim_duration_in):animation_tweens[i].pulsate_class_from&&canvas_timeline.to(targetItem,0,animation_tweens[i].pulsate_class_from,animation_tweens[i].animstart+animation_tweens[i].anim_duration_in),animation_tweens[i].pulsate_class_to&&canvas_timeline.to(targetItem,0,animation_tweens[i].pulsate_class_to,animation_tweens[i].animend-animation_tweens[i].animout.duration),animation_tweens[i].anim_from!={}&&canvas_timeline.from(targetItem,animation_tweens[i].anim_duration_in,animation_tweens[i].anim_from,animation_tweens[i].animstart),animation_tweens[i].anim_to!={}&&canvas_timeline.to(targetItem,animation_tweens[i].anim_duration_out,animation_tweens[i].anim_to,animation_tweens[i].animend-animation_tweens[i].animout.duration);return{animation_tweens:animation_tweens,isStatic:isStatic}}function convertEasing(value){var result=null;return void 0==value&&(value=""),value.indexOf("cubic-bezier")!=-1?result=Bounce.easeOut:"linear"==value?result=Power0.easeNone:(value=value.replace(/\-in/,"In"),value=value.replace(/\-out/,"Out"),result=Power1[value]),result}function debug(){window.console}renderCreative(BB_APP);function onCreativeClick(){var url=BB_APP.item_link,url_params={};window.location.search.replace(new RegExp("([^?=&]+)(=([^&]*))?","g"),function($0,$1,$2,$3){url_params[$1]=$3});var click_url=url;url_params.target_url&&(click_url=decodeURIComponent(url_params.target_url)),void 0==url_params.target_window&&(url_params.target_window="_blank"),click_url&&(click_url=click_url.replace(/\[target_url\]/gi,url).replace(/\[target_url_esc\]/gi,encodeURIComponent(url)).replace(/\[target_url_esc_esc\]/gi,encodeURIComponent(encodeURIComponent(url))),window.open(click_url,url_params.target_window))}BB_APP.item_link&&addListener(document,"click",onCreativeClick);bbInit();