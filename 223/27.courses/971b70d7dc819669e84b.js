webpackJsonp([27],{169:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,a,n){for(var i=new PIXI.Container,r=new PIXI.filters.ColorMatrixFilter,o=a||!1,d=n||{addArrow:!1,type:"horizontal",scale:1},s=new PIXI.Container,l=0;l<3;++l){var h=l+1,c=PIXI.Sprite.fromFrame("TAP_1"+h);c.x=-c.width/2,c.y=-c.height/2;var v=new PIXI.Container;v.addChild(c),s.addChild(v)}var u=0;if(d.direction)switch(d.direction){case"top":u=-Math.PI/2;break;case"bottom":u=Math.PI/2;break;case"left":u=Math.PI;break;case"right":u=0;break;default:u=0}s.filters=[r];for(var f=0;f<s.children.length;f++){var p=s.children[f];p.scale.x=p.scale.y=2,f<2&&E(p,.75*f)}if(i.addChild(s),d.addArrow){var g,T;if(d.direction){g=PIXI.Sprite.fromFrame("oneArrow"),T=new PIXI.extras.MovieClip([g]);var m=d.scale?d.scale:1;T.scale.x=T.scale.y=m,T.pivot={x:0,y:T.height/2},T.rotation=u}else{g=PIXI.Sprite.fromFrame("NBarrow"),(T=new PIXI.extras.MovieClip([g])).pivot={x:T.width/2,y:T.height/2};var x=d.scale?d.scale:1;T.scale.x=T.scale.y=x,"horizontal"!==(d.type?d.type:"horizontal")&&(T.rotation=Math.PI/2)}i.addChild(T),i.arrow=T,i.addEventListener("hideArrow",function(){T.alpha=0,T.visible=!1}),i.addEventListener("showArrow",function(){T.alpha=1,T.visible=!0})}s.alpha=.4;var D=new PIXI.Graphics;function E(e,t){TweenMax.to(e,1.5,{delay:t,alpha:0,repeat:-1}),TweenMax.to(e.scale,1.5,{x:5,y:5,delay:t,repeat:-1})}return D.beginFill(16776960,0),D.drawRect(-50,-50,100,100),i.addChild(D),i.addEventListener(MouseEvent.MOUSE_OVER,function(){s.alpha=.6}),i.addEventListener(MouseEvent.MOUSE_OUT,function(){s.alpha=.4}),i.addEventListener(TouchEvent.TOUCH_BEGIN,function(){i.emit(i.event.TAP),!o&&i.parent&&i.parent.removeChild(i)}),i.x=e,i.y=t,i.setColor=function(e){var t=e>>16,a=e>>8&255,n=255&e;r._loadMatrix([t,0,0,0,0,0,a,0,0,0,0,0,n,0,0,0,0,0,255,0],!1),s.filters=[r]},i.setRotation=function(e){i.rotation=e},i.showAllDir=function(){if(d.direction)for(var e=0;e<3;e++){var t=new PIXI.Container;t.addChild(PIXI.Sprite.fromFrame("oneArrow")),i.addChild(t),t.pivot={x:0,y:T.height/2},t.rotation=Math.PI/2*(e+1)}else{var a=new PIXI.Container;a.addChild(PIXI.Sprite.fromFrame("NBarrow")),i.addChild(a),a.pivot={x:T.width/2,y:T.height/2},a.rotation=i.rotation+Math.PI/2}},i.event={TAP:"pointTap",HIDEARR:"hideArrow",SHOWARR:"showArrow"},instance.info&&instance.info.newLayOut&&i.scale.set(.6,.6),i}},446:function(e,t,a){"use strict";var n=o(a(520)),i=o(a(521)),r=o(a(539));function o(e){return e&&e.__esModule?e:{default:e}}nb.substance0625=extendsClass(ScienceMain,{frame0:function(){$("body").animate({"background-color":"#000"});var e=this;n.default.init.apply(e.timeline),i.default.apply(e);var t=e.step1;e.timeline.addEventListener("nodeTap",function(){instance.NBDownTip.hideTip()}),n.default.init.apply(t.timeline),t.timeline.a0.interactive=!1,t.timeline.a1.interactive=!1,t.timeline.alpha=0,t.t0.alpha=0,t.t1.alpha=0,t.t2.alpha=0,t.addBtn.addEventListener(TouchEvent.TAP,function a(){t.addBtn.removeEventListener(TouchEvent.TAP,a),GlobalEffect.fadeOut(t.addBtn),t.cup.setCapacityTween("100%",2);var i=instance.addParticle(t.cup.pic);function r(){t.timeline.removeEventListener("change",r),TweenMax.to([t.t0,t.t1,t.t2],1,{alpha:1}),TweenMax.to([t.timeline],1,{alpha:0,onStart:function(){t.timeline.interactiveChildren=!1}})}TweenMax.to(i,2,{y:79,onComplete:function(){TweenMax.to(t.timeline,1,{alpha:1,onComplete:function(){t.timeline.interactiveChildren=!0,t.timeline.setAutoPlay(!0,2),t.timeline.addEventListener(n.default.event.ON_COMPLETE,r)}})}}),e.addEventListener("render",function(){i.render()})}),function(){var t=e.step2,a=[1,.2,.6];t.ref.alpha=0;for(var n=0;n<3;n++){var i=t["drag"+n];NBDrag.addDrag(i),i.startX=i.x,i.startY=i.y,i.addEventListener(NBDrag.event.START_DRAG,r),i.index=n,i.addEventListener(NBDrag.event.STOP_DRAG,o),i.lightAlpha=a[n]}function r(a){var n=a.target,i=n.index;t.addChild(n),n.removeChild(n.Point),instance.NBDownTip.hideTip(),instance.NBDownTipsError.hideTip(),TweenMax.killTweensOf(t.bulb),e.preDrag==n&&TweenMax.to(t.bulb,.1,{alpha:0}),t["txt"+i].alpha=0}function o(a){var n=a.target;n.hitTest(t.ref)&&!e.preDrag?(e.preDrag=n,n.isHit=!0,TweenMax.to(t.bulb,.1,{alpha:n.lightAlpha}),TweenMax.to(n,.5,{x:t.ref.x-30,y:t.ref.y,onComplete:function(){e.preDrag=n}})):n.hitTest(t.ref)&&e.preDrag?(n.isHit=!0,TweenMax.to(t.bulb,.5,{alpha:n.lightAlpha}),e.preDrag===n?TweenMax.to(n,.5,{x:t.ref.x-30,y:t.ref.y}):(TweenMax.to(n,.5,{x:t.ref.x-30,y:t.ref.y}),TweenMax.to(e.preDrag,.5,{x:e.preDrag.startX,y:e.preDrag.startY,ease:Sine.easeInOut,onComplete:function(){t["txt"+e.preDrag.index].alpha=1,e.preDrag=n}}))):TweenMax.to(n,.5,{x:n.startX,y:n.startY,onComplete:function(){t["txt"+n.index].alpha=1,e.preDrag===n&&(e.preDrag=null)}})}t.bulb.alpha=0}(),function(){var t=e.step3;r.default.apply(t.hammer,[{hitArr:[t.a0,t.a1,t.a2]}]),t.hammer.position.set(t.bar.x,t.bar.y),t.addChild(t.bar),t.bar.alpha=0;for(var a=0;a<3;a++){var n=t["hit"+a];n.index=a,n.alpha=0}t.hammer.addEventListener(t.hammer.event.BAR_STOP,function(){for(var e=0;e<3;e++){var a=t["hit"+e];if(t.hammer.hitTest(a)){t.currentObj=t["a"+e];var n=!1;0===t.currentObj.currentFrame&&(n=!0),t.hammer.adsorb({pos:{x:a.x+150,y:a.y-51},showPoint:n});break}}}),t.hammer.addEventListener(t.hammer.event.HIT),t.hammer.addEventListener(t.hammer.event.HIT_STOP,function(e){if(t.hammer.goHit&&e.power>.2){var a=t.currentObj.name.substr(-1);t["hit"+a].isHit=!0,t.currentObj.gotoAndStop(t.currentObj.totalFrames-1),t.hit0.isHit?t.hit1.isHit?t.hit2.isHit||instance.NBDownTip.showTip("用锤子敲打铝棒观察现象"):instance.NBDownTip.showTip("用锤子敲打铁棒观察现象"):instance.NBDownTip.showTip("用锤子敲打铜棒观察现象")}})}()},start:function(){this.bindScriptToSprite(this.frame0,"frame0")},info:{experimentImport:"金属是一种非常重要的材料，有许多重要的用途，那么金属都有哪些特性呢？",labName:"金属的特征",CONCLUSION:"金属一般都有光泽，且具有导热、导电和延展的特性，且不同的金属这些特性会有差别。",newLayOut:!0},const:{},event:{},addParticle:function(e){var t=ParticleUtil.getParticle(ParticleUtil.particles.water_vapor);return e.addChild(t),e.particle=t,t.x=15,t.y=220,t.scale.x=2.2,t.scale.y=3,t.alpha=.3,t}}),e.exports=nb.substance0625},520:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={event:{CLICK_NODE:"nodeTap",CLICK_NODE_REACHED:"nodeTapReached",ON_COMPLETE:"timelineComplete",ON_PLAY:"timelinePlaying",REACHED_NODE:"reachedNode",START_DRAG:"startDrag",DRAGING:"draging",STOP_DRAG:"stopDrag"},init:function(){var e,t,a=this;if(a.bgMask){var i=a.bgMask.getChildAt(0);a.progressBar.mask=i,i.scale.x=0}var r=this.a0.x===this.a1.x?"vertical":"horizontal",o=0,d=[];a.drag.lastPos={x:a.drag.x,y:a.drag.y};for(var s=0;s<int.MAX_VALUE;s++){var l=this["a"+s];if(void 0===l){t="vertical"===r?this["a"+(s-1)].y:this["a"+(s-1)].x,o=s;break}d.push(l),0===s&&(e="vertical"===r?l.y:l.x),l.addEventListener(TouchEvent.TAP,function(){var e=this;"vertical"===r?TweenMax.to(a.drag,.5,{y:this.y}):TweenMax.to(a.drag,.5,{x:this.x,onComplete:function(){a.emit(n.event.CLICK_NODE_REACHED,{index:e.name.substr(1,1)})}}),this.totalFrames&&(d.forEach(function(e){return e.currentFrame=0}),this.currentFrame=1),a.drag.lastPos={x:this.x,y:this.y},a.emit(n.event.CLICK_NODE,{index:this.name.substr(1,1)})})}this.setDrag=function(i){i?(NBDrag.addDrag(a.drag),a.drag.on(NBDrag.event.START_DRAG,function(){var i=(a.drag.x-e)/(t-e);a.emit(n.event.START_DRAG,{time:i})}),a.drag.on(NBDrag.event.DRAG_MOVE,function(){var i=(a.drag.x-e)/(t-e);a.emit(n.event.DRAGING,{time:i})}),a.drag.on(NBDrag.event.STOP_DRAG,function(){var i=(a.drag.x-e)/(t-e);a.emit(n.event.STOP_DRAG,{time:i}),i>=1&&a.emit(n.event.ON_COMPLETE,{time:i})})):NBDrag.removeDrag(a.drag)},a.drag.addEventListener(NBDrag.event.STOP_DRAG,function(){if(!1!==a._align_){var n=o-1;if("vertical"===r){var i=Math.round((this.y-e)/(t-e)*n);i<0&&(i=0)}else{var d=Math.round((this.x-e)/(t-e)*n);d<0&&(d=0)}}}),a.drag.addEventListener(NBDrag.event.DRAG_MOVE,function(){v()});var h=!1;a.drag.constY=a.drag.y;var c,v=function(){a.drag.y=a.drag.constY,a.drag.x>=t&&(a.drag.x=t),a.drag.x<=e&&(a.drag.x=e);var i=(a.drag.x-e)/(t-e);if(i<1){h=!1,a.emit(n.event.ON_PLAY,{time:i});for(var r=0;r<d.length;r++)a.drag.lastPos.x<=d[r].x&&a.drag.x>d[r].x&&a.emit(n.event.REACHED_NODE,{index:r})}else h||(h=!0,a.emit(n.event.ON_COMPLETE,{time:i}));(a.drag.line0&&(a.drag.line0.rotation=1800*i*Math.PI/180,a.drag.line1.rotation=360*i*Math.PI/180),a.bgMask)&&(a.bgMask.getChildAt(0).scale.x=i);a.drag.lastPos={x:a.drag.x,y:a.drag.y}};this.getNodeCount=function(){return o},this.setNodePos=function(e){var t=this["a"+e];"vertical"===r?a.drag.y=t.y:a.drag.x=t.x},nb.MovieClip.ticker.add(function(){a._auto_&&!a.drag.isDragging&&("vertical"===r?a.drag.y+=a._speed_:a.drag.x+=a._speed_,v())}),this.setAutoPlay=function(e,t){this._auto_=e,this._speed_=t||.1},this.setAutoAlign=function(e){this._align_=e},this.setMomentsPause=function(e,t,n){clearTimeout(c),e&&!a.NOTafterStopPlay?(a.setAutoPlay(!1),clearTimeout(c),a.setAutoPlay(!1),c=setTimeout(function(){a.setAutoPlay(!0,n)},t)):a.setAutoPlay(!1)},this.resetTimeline=function(){(this.drag.x=this.bgMask.x,a.bgMask)&&(a.bgMask.getChildAt(0).scale.x=0)}}};t.default=n},521:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){e=e||{};var t=this,a=[];n.default.init.apply(this.timeline);for(var i=0;i<this.timeline.getNodeCount();i++){var r=this["step"+i];a.push(r),r.alpha=0,r.visible=!1}var o=this.step0;o.visible=!0,o.alpha=1;var d=0;this.timeline.on(n.default.event.CLICK_NODE,function(n){if(void 0!==n.index&&n.index!=d){var i=e.offset||1200;i=n.index>d?$s(i):-$s(i);var r=void 0!==o.currentX?o.currentX:o.currentX=o.x;TweenMax.to(o,e.oldTm||.6,{x:r+i,alpha:0,onComplete:function(t){t.visible=!1,e.isFix||(t.y=0)},onCompleteParams:[o],ease:Expo.easeOut}),d=n.index,(o=a[d]).visible=!0,r=void 0!==o.currentX?o.currentX:o.currentX=o.x,o.x=r-i,TweenMax.to(o,e.newTm||1,{x:r,alpha:1,ease:Expo.easeOut,onComplete:function(){t.emit(t.boxSwitch_event.CHANGE_COM,{target:o,index:n.index})}})}}),this.addEventListener("render",function(){o.onUpdate&&o.onUpdate()}),t.boxSwitch_event={CHANGE_COM:"changeCom"}};var n=function(e){return e&&e.__esModule?e:{default:e}}(a(520))},526:function(e,t,a){"use strict";(function(t){var a=t.nb;a.simpleDrag=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e||this,i=n.parent,r=-1,o=0;n.defaultX=n.x,n.defaultY=n.y,n.defaultScale=n.scale.x,n.defaultRotation=n.rotation,n.backDefaultFun=function(e){var t=this,n=e.Interactive,i=void 0===n||n,r=this;TweenMax.to(r,.5,{x:r.defaultX,y:r.defaultY,rotation:r.defaultRotation,onComplete:function(){r.interactive=i,t.dragging=!1,r.txtObj&&r.txtFun({show:!0}),r.emit(a.simpleDrag.event.BACK_DEFAULT_POS)}}),TweenMax.to(r.scale,.5,{x:r.defaultScale,y:r.defaultScale})};var d=Object.assign({scale:1,del:0,backDefaultPos:!1,alphaReach:.6,alphaNotReach:.3,expandRadius:0,txtName:"lable"},t),s=d.scale,l=d.del,h=d.backDefaultPos,c=d.alphaReach,v=d.alphaNotReach,u=d.expandRadius,f=s,p=l,g=c,T=v,m=d.txtName;function x(e){var t=e.tempObj,a=e.targetArray,r=e.targetString,o=e.number;if(t){var d,s=new PIXI.Sprite,l=!1;n.totalFrames>0?(l=!0,(d=n[0]).reverse()):(d=n.children.concat(),n.background instanceof PIXI.DisplayObject&&(d=[n.background])),d.forEach(function(e){if(e instanceof PIXI.DisplayObject||(e=e.dis),!e.mask)if(l){if(e.dis instanceof PIXI.Text)return;var t=e.clone();e.name=t.name,t&&(t.x=e.x,t.y=e.y,s.addChild(t))}else{if(e instanceof PIXI.Text)return;var a=e.clone();a&&a.name&&(e.name=a.name),a&&(a.x=e.x,a.y=e.y,s.addChild(a))}}),s.x=t.x,s.y=t.y;var h=i.getChildIndex(t);if(-1===h&&(h=i.children.length-1),i.addChildAt(s,h),window.cloneSSS=s,u){var c=new PIXI.Graphics;c.beginFill(16711680,0),c.drawCircle(0,0,u),c.endFill(),s.addChild(c)}if(TweenMax.to(s,0,{x:t.x,y:t.y,rotation:p*Math.PI/180,width:s.width*f,height:s.height*f}),r)(t=s).alpha=0,t.name=r,a[o]=t;else{s.name=t.name;var v=t.index;(t=s).alpha=0,t.name=s.name,a[v]=s}}}n[m]?(n.txtObj=n[m],n.txtFun=function(e){var t=e.show;this.txtObj.visible=Number(t)}):n.txtObj=null;var D=void 0===t.vAlpha?1:t.vAlpha;NBDrag.addDrag(n),n.addEventListener(NBDrag.event.START_DRAG,E),n.removeSimpleDrag=function(){NBDrag.removeDrag(n),n.removeEventListener(NBDrag.event.START_DRAG,E)},n.resetSimpleDrag=function(){r=-1,n.dragging=!1,n.removeSimpleDrag(),NBDrag.addDrag(n),n.addEventListener(NBDrag.event.START_DRAG,E)},n.setRotation=function(e){p=e},n.setScale=function(e){f=e},n.hideVirtuals=function(e){n.isHideVirtuals=e};function E(){if(!this.dragging&&(n.txtObj&&n.txtFun({show:!1}),-1===r?(r=function(e){if(n.targetArray){for(var t=n.targetArray,a=[],r=0;r<t.length;r++)t[r].index=r,x({tempObj:t[r],targetArray:a});return a}var o=[],d=1,s=void 0,l=0;do{x({tempObj:d=i[s=e+"Target"+l],targetArray:o,targetString:s,number:l}),l++}while(d);return o}(n.name)).length:r.length,!n.isHideVirtuals)){o=0;for(var e=0;e<r.length;e++)TweenMax.to(r[e],.5,{alpha:T*D});n.addEventListener(NBDrag.event.DRAG_MOVE,A),n.addEventListener(NBDrag.event.STOP_DRAG,w),n.addEventListener(TouchEvent.TOUCH_END_OUDSIDE,w),n.emit(a.simpleDrag.event.START_DRAG),this.dragging=!0}}function A(){TweenMax.killTweensOf(n);for(var e=a.scienceCommonFun.hitTest2(n,r),t=0;t<r.length;t++){var i=r[t];TweenMax.to(i,.5,{alpha:T*D}),TweenMax.to(i.scale,.3,{x:f,y:f,ease:Power0.easeOut})}e&&(TweenMax.to(e,.5,{alpha:g*D}),TweenMax.to(e.scale,.3,{x:1.1*f,y:1.1*f,ease:Power0.easeIn}))}function w(){var e=this,t=-1,i=-1,d=0;n.removeEventListener(NBDrag.event.START_DRAG,E),n.removeEventListener(NBDrag.event.DRAG_MOVE,A),n.removeEventListener(NBDrag.event.STOP_DRAG,w),n.removeEventListener(TouchEvent.TOUCH_END_OUDSIDE,w),NBDrag.removeDrag(n),n.emit(a.simpleDrag.event.STOP_DRAG);for(var s=0;s<r.length;s++)TweenMax.to(r[s],.5,{alpha:0}),!1!==(d=n.hitTest(r[s]))&&(o=1,(-1===t||i<d)&&(t=s,i=d));if(1!==o)return NBDrag.addDrag(n),n.addEventListener(NBDrag.event.START_DRAG,E),n.emit(a.simpleDrag.event.NOT_REACH_TARGET,o),n.interactive=!1,o=0,h?(TweenMax.to(n,.5,{x:n.defaultX,y:n.defaultY,rotation:n.defaultRotation,onComplete:function(){n.interactive=!0,e.dragging=!1,n.txtObj&&n.txtFun({show:!0}),n.emit(a.simpleDrag.event.BACK_DEFAULT_POS)}}),TweenMax.to(n.scale,.5,{x:n.defaultScale,y:n.defaultScale}),void(o=0)):(this.dragging=!1,n.interactive=!0,void(n.txt&&(n.txt.visible=!0)));TweenMax.to(n.scale,.5,{x:f,y:f}),TweenMax.to(n,.5,{x:r[t].x,y:r[t].y,rotation:p*Math.PI/180,onComplete:function(){return this.target.dragging=!1,n.emit(a.simpleDrag.event.REACH_TARGET,r[t].name.valueOf()),r.splice(t,1),0===r.length?void 0:(o=0,NBDrag.addDrag(n),n.addEventListener(NBDrag.event.START_DRAG,E),void(n.interactive=!1))}}),n.emit(a.simpleDrag.event.REACH_TARGET_HITTED,r[t].name.valueOf())}n.setFreeDrag=function(e){e}},a.simpleDrag.event={START_DRAG:"startSimpleDrag",ON_HITTED:"hitted",REACH_TARGET_HITTED:"onReachHitted",REACH_TARGET:"onReachTarget",NOT_REACH_TARGET:"notReachTarget",FINISH_DRAG:"finishDrag",STOP_DRAG:"stopSimpleDrag",BACK_DEFAULT_POS:"backdefaultPos"},e.exports=a.simpleDrag}).call(t,a(5))},539:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=this,a=t.parent,r=Object.assign({},e),o=(Power0.easeNone,1),d=(0,n.default)(0,0,!1,{addArrow:!0,direction:"top"});function s(){t.isDragging||(t.head.addEventListener(TouchEvent.TOUCH_MOVE,h),t.removeChild(d),instance.NBDownTip.hideTip(),instance.NBDownTipsError.hideTip(),t.head.addEventListener(TouchEvent.TOUCH_END,l),t.head.addEventListener(TouchEvent.TOUCH_END_OUDSIDE,l))}function l(){if(t.head.removeEventListener(TouchEvent.TOUCH_MOVE,h),!(t.rotation<0||t.rotation>Math.PI)){var e=Math.abs(t.rotation/3.14*o);t.startR=t.rotation,t.power=t.startR/3.14,t.rotation+=2*Math.PI,TweenMax.to(t,e,{rotation:0+2*Math.PI,ease:Power2.easeIn,onComplete:function(){!function e(){if(t.startR<Math.PI/10)return console.log("角度太小不衰减"),void TweenMax.to(t,.1,{rotation:0+2*Math.PI,onComplete:function(){t.rotation=0}});TweenMax.to(t,.1,{rotation:0+2*Math.PI+.15*t.startR,onComplete:function(){t.startR=.15*t.startR,e()},onUpdate:function(){t.currentHit&&t.head.hitTest(t.currentHit)&&(t.currentHit.isHit=!0,t.emit(t.event.HIT,{targer:t.currentHit}))}})}(),t.emit(t.event.HIT_STOP,{power:t.power,index:t.reachIndex})}}),t.emit(t.event.SLIDE_STOP,{power:t.power})}}function h(e){var a=e.data.global,n=t.toGlobal(new PIXI.Point),i=(-Math.atan2(a.x-n.x,a.y-n.y)+1.5*Math.PI)%(2*Math.PI);i>=0&&i<=Math.PI&&(t.rotation=i)}d.emit(d.event.HIDEARR),i.default.apply(t,[t,{backDefaultPos:!r.notBack}]),t.hit&&(r.ifHItArea&&(t.hitArea=new PIXI.Polygon(t.hit.children[0].currentPath.shape.points)),t.hit.alpha=0),t.addChild(d),t.addEventListener(i.default.event.START_DRAG,function(e){a.addChild(t),t.goHit=!1,instance.NBDownTip.hideTip(),instance.NBDownTipsError.hideTip(),t.head.interactive=!1,t.removeChild(d),t.head.removeAllListeners()}),t.addEventListener(i.default.event.REACH_TARGET,function(e){var a=e.substr(-1);t.head.interactive=!0,t.emit(t.event.HAMMER_REACH,{index:a}),t.reachIndex=a,t.head.addEventListener(TouchEvent.TOUCH_BEGIN,s)}),t.addEventListener(i.default.event.BACK_DEFAULT_POS,function(){t.emit(t.event.HAMMER_BACK),t.head.interactive=!1}),t.event={HIT:"hitObj",BAR_STOP:"barDragStop",SLIDE_STOP:"headDragStop",HIT_STOP:"headHitStop",HAMMER_REACH:"hammerReach",HAMMER_BACK:"hammerBacK",HIDEARR:"hideArrow",SHOWARR:"showArrow"},t.adsorb=function(n){t.goHit=!0,TweenMax.killTweensOf(t),TweenMax.killTweensOf(bar),TweenMax.to([t,bar],.5,{x:n.pos.x,y:n.pos.y,onComplete:function(){a.addChildAt(t,0),bar.interactive=!0,n.showPoint&&(e.tapPoint?(d.x=e.tapPoint.x,d.y=e.tapPoint.y):(d.x=-180,d.y=10),t.tap=d,t.addChild(d),d.emit(d.event.SHOWARR))},onStart:function(){bar.interactive=!1}})},t.addEventListener(t.event.HIDEARR,function(){d.emit(d.event.HIDEARR)}),t.addEventListener(t.event.SHOWARR,function(e){d&&(t.addChild(d),d.position=e),d.emit(d.event.SHOWARR)})};var n=r(a(169)),i=r(a(526));function r(e){return e&&e.__esModule?e:{default:e}}}});