webpackJsonp([181],{484:function(t,e,a){"use strict";var n=function(t){return t&&t.__esModule?t:{default:t}}(a(520));nb.substance0667=extendsClass(ScienceMain,{frame0:function(){var t=this;$("body").animate({backgroundColor:"#000000"},100);var e=t.timeline;n.default.init.apply(e),e.setAutoPlay(!0,5),e.setDrag(e.drag),e.addEventListener(n.default.event.STOP_DRAG,function(){e.setMomentsPause(!1)}),e.test.a0.x+=30,e.test.a3.x+=60,e.test.a1.x+=90;for(var a=0;a<4;a++){var r=e.test["a"+a];r.x+=10,r.y-=20}var i=["二","三","四","五","六","日","一"];function s(a){var n=a.time;t.moon.currentFrame=98*n>>0,e.test.x=e.drag.x+20;var r=Math.min(31,1+(31*n>>0));e.test.a0.text=r;var s=r%7;e.test.a1.text=i[s]}t.timeline.addEventListener(n.default.event.ON_PLAY,s),t.timeline.addEventListener(n.default.event.STOP_DRAG,s)},start:function(){this.bindScriptToSprite(this.frame0,"frame0")},info:{experimentImport:"观察月相并记录在活动手册上。",labName:"观察记录月相",CONCLUSION:"无",newLayOut:!0,isOffset:!0},const:{},event:{}}),t.exports=nb.substance0667},520:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={event:{CLICK_NODE:"nodeTap",CLICK_NODE_REACHED:"nodeTapReached",ON_COMPLETE:"timelineComplete",ON_PLAY:"timelinePlaying",REACHED_NODE:"reachedNode",START_DRAG:"startDrag",DRAGING:"draging",STOP_DRAG:"stopDrag"},init:function(){var t,e,a=this;if(a.bgMask){var r=a.bgMask.getChildAt(0);a.progressBar.mask=r,r.scale.x=0}var i=this.a0.x===this.a1.x?"vertical":"horizontal",s=0,o=[];a.drag.lastPos={x:a.drag.x,y:a.drag.y};for(var d=0;d<int.MAX_VALUE;d++){var g=this["a"+d];if(void 0===g){e="vertical"===i?this["a"+(d-1)].y:this["a"+(d-1)].x,s=d;break}o.push(g),0===d&&(t="vertical"===i?g.y:g.x),g.addEventListener(TouchEvent.TAP,function(){var t=this;"vertical"===i?TweenMax.to(a.drag,.5,{y:this.y}):TweenMax.to(a.drag,.5,{x:this.x,onComplete:function(){a.emit(n.event.CLICK_NODE_REACHED,{index:t.name.substr(1,1)})}}),this.totalFrames&&(o.forEach(function(t){return t.currentFrame=0}),this.currentFrame=1),a.drag.lastPos={x:this.x,y:this.y},a.emit(n.event.CLICK_NODE,{index:this.name.substr(1,1)})})}this.setDrag=function(r){r?(NBDrag.addDrag(a.drag),a.drag.on(NBDrag.event.START_DRAG,function(){var r=(a.drag.x-t)/(e-t);a.emit(n.event.START_DRAG,{time:r})}),a.drag.on(NBDrag.event.DRAG_MOVE,function(){var r=(a.drag.x-t)/(e-t);a.emit(n.event.DRAGING,{time:r})}),a.drag.on(NBDrag.event.STOP_DRAG,function(){var r=(a.drag.x-t)/(e-t);a.emit(n.event.STOP_DRAG,{time:r}),r>=1&&a.emit(n.event.ON_COMPLETE,{time:r})})):NBDrag.removeDrag(a.drag)},a.drag.addEventListener(NBDrag.event.STOP_DRAG,function(){if(!1!==a._align_){var n=s-1;if("vertical"===i){var r=Math.round((this.y-t)/(e-t)*n);r<0&&(r=0)}else{var o=Math.round((this.x-t)/(e-t)*n);o<0&&(o=0)}}}),a.drag.addEventListener(NBDrag.event.DRAG_MOVE,function(){l()});var u=!1;a.drag.constY=a.drag.y;var v,l=function(){a.drag.y=a.drag.constY,a.drag.x>=e&&(a.drag.x=e),a.drag.x<=t&&(a.drag.x=t);var r=(a.drag.x-t)/(e-t);if(r<1){u=!1,a.emit(n.event.ON_PLAY,{time:r});for(var i=0;i<o.length;i++)a.drag.lastPos.x<=o[i].x&&a.drag.x>o[i].x&&a.emit(n.event.REACHED_NODE,{index:i})}else u||(u=!0,a.emit(n.event.ON_COMPLETE,{time:r}));(a.drag.line0&&(a.drag.line0.rotation=1800*r*Math.PI/180,a.drag.line1.rotation=360*r*Math.PI/180),a.bgMask)&&(a.bgMask.getChildAt(0).scale.x=r);a.drag.lastPos={x:a.drag.x,y:a.drag.y}};this.getNodeCount=function(){return s},this.setNodePos=function(t){var e=this["a"+t];"vertical"===i?a.drag.y=e.y:a.drag.x=e.x},nb.MovieClip.ticker.add(function(){a._auto_&&!a.drag.isDragging&&("vertical"===i?a.drag.y+=a._speed_:a.drag.x+=a._speed_,l())}),this.setAutoPlay=function(t,e){this._auto_=t,this._speed_=e||.1},this.setAutoAlign=function(t){this._align_=t},this.setMomentsPause=function(t,e,n){clearTimeout(v),t&&!a.NOTafterStopPlay?(a.setAutoPlay(!1),clearTimeout(v),a.setAutoPlay(!1),v=setTimeout(function(){a.setAutoPlay(!0,n)},e)):a.setAutoPlay(!1)},this.resetTimeline=function(){(this.drag.x=this.bgMask.x,a.bgMask)&&(a.bgMask.getChildAt(0).scale.x=0)}}};e.default=n}});