webpackJsonp([68],{169:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,a,n){for(var i=new PIXI.Container,r=new PIXI.filters.ColorMatrixFilter,o=a||!1,s=n||{addArrow:!1,type:"horizontal",scale:1},d=new PIXI.Container,l=0;l<3;++l){var c=l+1,u=PIXI.Sprite.fromFrame("TAP_1"+c);u.x=-u.width/2,u.y=-u.height/2;var p=new PIXI.Container;p.addChild(u),d.addChild(p)}var f=0;if(s.direction)switch(s.direction){case"top":f=-Math.PI/2;break;case"bottom":f=Math.PI/2;break;case"left":f=Math.PI;break;case"right":f=0;break;default:f=0}d.filters=[r];for(var h=0;h<d.children.length;h++){var v=d.children[h];v.scale.x=v.scale.y=2,h<2&&P(v,.75*h)}if(i.addChild(d),s.addArrow){var g,m;if(s.direction){g=PIXI.Sprite.fromFrame("oneArrow"),m=new PIXI.extras.MovieClip([g]);var x=s.scale?s.scale:1;m.scale.x=m.scale.y=x,m.pivot={x:0,y:m.height/2},m.rotation=f}else{g=PIXI.Sprite.fromFrame("NBarrow"),(m=new PIXI.extras.MovieClip([g])).pivot={x:m.width/2,y:m.height/2};var T=s.scale?s.scale:1;m.scale.x=m.scale.y=T,"horizontal"!==(s.type?s.type:"horizontal")&&(m.rotation=Math.PI/2)}i.addChild(m),i.arrow=m,i.addEventListener("hideArrow",function(){m.alpha=0,m.visible=!1}),i.addEventListener("showArrow",function(){m.alpha=1,m.visible=!0})}d.alpha=.4;var C=new PIXI.Graphics;function P(e,t){TweenMax.to(e,1.5,{delay:t,alpha:0,repeat:-1}),TweenMax.to(e.scale,1.5,{x:5,y:5,delay:t,repeat:-1})}return C.beginFill(16776960,0),C.drawRect(-50,-50,100,100),i.addChild(C),i.addEventListener(MouseEvent.MOUSE_OVER,function(){d.alpha=.6}),i.addEventListener(MouseEvent.MOUSE_OUT,function(){d.alpha=.4}),i.addEventListener(TouchEvent.TOUCH_BEGIN,function(){i.emit(i.event.TAP),!o&&i.parent&&i.parent.removeChild(i)}),i.x=e,i.y=t,i.setColor=function(e){var t=e>>16,a=e>>8&255,n=255&e;r._loadMatrix([t,0,0,0,0,0,a,0,0,0,0,0,n,0,0,0,0,0,255,0],!1),d.filters=[r]},i.setRotation=function(e){i.rotation=e},i.showAllDir=function(){if(s.direction)for(var e=0;e<3;e++){var t=new PIXI.Container;t.addChild(PIXI.Sprite.fromFrame("oneArrow")),i.addChild(t),t.pivot={x:0,y:m.height/2},t.rotation=Math.PI/2*(e+1)}else{var a=new PIXI.Container;a.addChild(PIXI.Sprite.fromFrame("NBarrow")),i.addChild(a),a.pivot={x:m.width/2,y:m.height/2},a.rotation=i.rotation+Math.PI/2}},i.event={TAP:"pointTap",HIDEARR:"hideArrow",SHOWARR:"showArrow"},instance.info&&instance.info.newLayOut&&i.scale.set(.6,.6),i}},460:function(e,t,a){"use strict";var n=r(a(520)),i=r(a(525));function r(e){return e&&e.__esModule?e:{default:e}}var o=["食盐","沙子"];nb.substance0640=extendsClass(ScienceMain,{frame0:function(){var e=this,t=e.timeline,a=e.btn,r=[],s=[];instance.NBDownTip.showTip("点击按钮同时将沙和盐倒入水中"),a.addEventListener(TouchEvent.TAP,function e(){instance.NBDownTip.hideTip();a.removeListener(TouchEvent.TAP,e);TweenMax.to(a,.5,{alpha:0});r[0].dumpPlay();r[1].dumpPlay();s[0].txt.visible=!1;s[1].txt.visible=!1}),t.alpha=0,n.default.init.apply(t);for(var d=function(a){var d=e["beaker"+a],l=e["particle"+a],u=e["spoon"+a];s.push(u);var p=i.default.dump({from:u,to:d,startColor:16777215,startAlpha:.3,startCapacity:"100%",tip:"将食盐和沙子加入水中",particle:l,endAlpha:.4,substance:u.medicine,isAuto:!0,onComplete:function(){d.txt.text=o[a],TweenMax.to(u,.5,{alpha:0}),1===a&&TweenMax.to(t,.5,{alpha:1,delay:.5,onComplete:function(){t.setAutoPlay(!0,5),t.on(n.default.event.ON_COMPLETE,c)}})}});r[a]=p},l=0;l<2;l++)d(l);function c(){instance.NBStepsShow(1)}},frame1:function(){for(var e=this,t=[],a=[],n=[],r=e.btn,s=0;s<2;s++){var d=e["beaker"+s],l=e["particle"+s];l.currentFrame=l.totalFrames-1,d.txt.text=o[s],i.default.initCapacity(d,{alpha:.4,color:16777215,capacity:"100%"}),a.push(e["ref"+s]),n.push(e["gllassRod"+s+"Pos"]);var c=e["gllassRod"+s];c.visible=!1,t.push(c)}r.addEventListener(TouchEvent.TAP,function(){r.visible=!1;for(var e=0;e<2;e++)t[e].visible=!0,p(t[e],e)});var u=[{color:16777215,alpha:.4},{color:16619522,alpha:.3}];function p(t,a){TweenMax.to(t,.5,{x:n[a].x,y:n[a].y,onComplete:function(){var n=e["particle"+a];TweenMax.to(n,3,{alpha:.2*a}),i.default.stir({container:e["beaker"+a],timer:.5,repeat:6,tool:t,endColor:u[a].color,endAlpha:u[a].alpha,onComplete:function(){1===a&&(TweenMax.to(n,3,{alpha:1}),e.beaker1.setColor(16619522,.1,{timer:1})),TweenMax.to(t,.5,{alpha:0})}})}})}},start:function(){this.bindScriptToSprite(this.frame0,"frame0"),this.bindScriptToSprite(this.frame1,"frame1")},info:{experimentImport:"食盐和沙子放到水中会溶解吗？",labName:"水能溶解一些物质",title0:"放入食盐和沙子观察现象",title1:"搅拌液体观察现象",CONCLUSION:"食盐在水中溶解了，沙子在水中没有溶解。",newLayOut:!0},const:{},event:{}}),e.exports=nb.substance0640},520:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={event:{CLICK_NODE:"nodeTap",CLICK_NODE_REACHED:"nodeTapReached",ON_COMPLETE:"timelineComplete",ON_PLAY:"timelinePlaying",REACHED_NODE:"reachedNode",START_DRAG:"startDrag",DRAGING:"draging",STOP_DRAG:"stopDrag"},init:function(){var e,t,a=this;if(a.bgMask){var i=a.bgMask.getChildAt(0);a.progressBar.mask=i,i.scale.x=0}var r=this.a0.x===this.a1.x?"vertical":"horizontal",o=0,s=[];a.drag.lastPos={x:a.drag.x,y:a.drag.y};for(var d=0;d<int.MAX_VALUE;d++){var l=this["a"+d];if(void 0===l){t="vertical"===r?this["a"+(d-1)].y:this["a"+(d-1)].x,o=d;break}s.push(l),0===d&&(e="vertical"===r?l.y:l.x),l.addEventListener(TouchEvent.TAP,function(){var e=this;"vertical"===r?TweenMax.to(a.drag,.5,{y:this.y}):TweenMax.to(a.drag,.5,{x:this.x,onComplete:function(){a.emit(n.event.CLICK_NODE_REACHED,{index:e.name.substr(1,1)})}}),this.totalFrames&&(s.forEach(function(e){return e.currentFrame=0}),this.currentFrame=1),a.drag.lastPos={x:this.x,y:this.y},a.emit(n.event.CLICK_NODE,{index:this.name.substr(1,1)})})}this.setDrag=function(i){i?(NBDrag.addDrag(a.drag),a.drag.on(NBDrag.event.START_DRAG,function(){var i=(a.drag.x-e)/(t-e);a.emit(n.event.START_DRAG,{time:i})}),a.drag.on(NBDrag.event.DRAG_MOVE,function(){var i=(a.drag.x-e)/(t-e);a.emit(n.event.DRAGING,{time:i})}),a.drag.on(NBDrag.event.STOP_DRAG,function(){var i=(a.drag.x-e)/(t-e);a.emit(n.event.STOP_DRAG,{time:i}),i>=1&&a.emit(n.event.ON_COMPLETE,{time:i})})):NBDrag.removeDrag(a.drag)},a.drag.addEventListener(NBDrag.event.STOP_DRAG,function(){if(!1!==a._align_){var n=o-1;if("vertical"===r){var i=Math.round((this.y-e)/(t-e)*n);i<0&&(i=0)}else{var s=Math.round((this.x-e)/(t-e)*n);s<0&&(s=0)}}}),a.drag.addEventListener(NBDrag.event.DRAG_MOVE,function(){p()});var c=!1;a.drag.constY=a.drag.y;var u,p=function(){a.drag.y=a.drag.constY,a.drag.x>=t&&(a.drag.x=t),a.drag.x<=e&&(a.drag.x=e);var i=(a.drag.x-e)/(t-e);if(i<1){c=!1,a.emit(n.event.ON_PLAY,{time:i});for(var r=0;r<s.length;r++)a.drag.lastPos.x<=s[r].x&&a.drag.x>s[r].x&&a.emit(n.event.REACHED_NODE,{index:r})}else c||(c=!0,a.emit(n.event.ON_COMPLETE,{time:i}));(a.drag.line0&&(a.drag.line0.rotation=1800*i*Math.PI/180,a.drag.line1.rotation=360*i*Math.PI/180),a.bgMask)&&(a.bgMask.getChildAt(0).scale.x=i);a.drag.lastPos={x:a.drag.x,y:a.drag.y}};this.getNodeCount=function(){return o},this.setNodePos=function(e){var t=this["a"+e];"vertical"===r?a.drag.y=t.y:a.drag.x=t.x},nb.MovieClip.ticker.add(function(){a._auto_&&!a.drag.isDragging&&("vertical"===r?a.drag.y+=a._speed_:a.drag.x+=a._speed_,p())}),this.setAutoPlay=function(e,t){this._auto_=e,this._speed_=t||.1},this.setAutoAlign=function(e){this._align_=e},this.setMomentsPause=function(e,t,n){clearTimeout(u),e&&!a.NOTafterStopPlay?(a.setAutoPlay(!1),clearTimeout(u),a.setAutoPlay(!1),u=setTimeout(function(){a.setAutoPlay(!0,n)},t)):a.setAutoPlay(!1)},this.resetTimeline=function(){(this.drag.x=this.bgMask.x,a.bgMask)&&(a.bgMask.getChildAt(0).scale.x=0)}}};t.default=n},525:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){return e&&e.__esModule?e:{default:e}}(a(169));var i={},r=Power0.easeNone;function o(e){if(e){var t=e.getTotalCapacity(),a=e.getCurrentCapacity();e.setCapacityTween(98.5*a/t+"%",.2),setTimeout(function(){e.setCapacityTween(101*a/t+"%",.15)},200)}}i.initCapacity=function(e,t){var a=t.color,n=t.alpha,i=t.capacity;void 0!==a&&e.setColor(a,n),void 0!==i&&e.setCurrentCapacity(i)},i.dump=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t={},a=Object.assign({isTapPoint:!0,tapPointOffsetX:0,tapPointOffsetY:0,gotoEndTimer:.8,endPointOffsetX:0,endPointOffsetY:0,particleSpeed:1,isGoBack:!0,onBack:function(){}},e),s=a.from,d=a.to,l=a.tapPointOffsetX,c=a.tapPointOffsetY,u=a.isTapPoint,p=a.startColor,f=a.startAlpha,h=a.startCapacity,v=a.endColor,g=a.endAlpha,m=(a.endCapacity,a.tip),x=a.particle,T=a.particleSpeed,C=a.substance,P=a.endPointOffsetX,y=a.endPointOffsetY,A=a.gotoEndTimer,_=a.onInit,w=a.onReady,M=a.onComplete,D=a.isDebug,E=a.isAuto,O=a.isGoBack,b=a.onBack;if(s&&d)return i.initCapacity(d,{color:p,alpha:f,capacity:h}),x&&(x.visible=!1),E||(B(),NBDrag.addDrag(s),s.addEventListener(NBDrag.event.START_DRAG,N),s.addEventListener(NBDrag.event.STOP_DRAG,S),s._dumpStartX=s.x,s._dumpStartY=s.y),I(_),E&&(t.dumpPlay=R),t;function I(e){"function"==typeof e&&e()}function N(){instance.NBDownTip.hideTip();var e=s._dumpTapPoint;e&&(s.removeChild(e),s._dumpTapPoint=null)}function S(){(d.hitBox||d).hitTest(s)?R():O?(NBDrag.removeDrag(s),TweenMax.to(s,.8,{x:s._dumpStartX,y:s._dumpStartY,onComplete:function(){NBDrag.addDrag(s),B(),I(b)}})):B()}function R(){s.removeEventListener(NBDrag.event.START_DRAG,N),s.removeEventListener(NBDrag.event.STOP_DRAG,S),NBDrag.removeDrag(s);var e=x||d,t=e.x,a=e.y,n=new TimelineMax({onComplete:M});if(n.to(s,A,{x:t+P,y:a+y,onComplete:function(){I(w)}}),!D){var i=[TweenMax.to(s,.4,{rotation:"-=0.5"})];if(C&&i.push(TweenMax.to(C.scale,.5,{x:0,y:0})),x){var l=x.totalFrames,c=.05*l*T;i.push(TweenMax.to(x,c,{onStart:function(){x.visible=!0;new TimelineMax;o(d)},onUpdate:function(){},currentFrame:l,ease:r}))}(v||g)&&i.push(d.setColor(v||p,g||f,{timer:.8})),n.add(i)}}function B(){if(u){var e=(0,n.default)(l,c);s._dumpTapPoint=e,s.addChild(e)}m&&instance.NBDownTip.showTip(m)}console.error("请准确传入from, to")},i.stir=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object.assign({timer:.6,repeat:6},e),a=t.container,n=t.tool,i=t.endColor,s=t.endAlpha,d=(t.endCapacity,t.distance),l=t.onStart,c=t.onComplete,u=t.repeat,p=t.timer;if(a&&n){void 0===d&&(d=.5*a.width);var f=new TimelineMax({onStart:l,onComplete:c}),h=[TweenMax.to(n,p,{repeat:u,yoyo:!0,x:"+="+d,ease:r,onStart:function(){o(a)}})];return(i||s)&&h.push(a.setColor(i,s,{timer:p*u})),f.add(h),-1===u&&(n.stirStop=function(){TweenMax.killTweensOf(f)}),f}console.error("请准确传入container, tool")},t.default=i}});