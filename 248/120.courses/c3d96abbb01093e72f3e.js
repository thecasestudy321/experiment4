webpackJsonp([120],{169:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,a,n){for(var i=new PIXI.Container,r=new PIXI.filters.ColorMatrixFilter,o=a||!1,l=n||{addArrow:!1,type:"horizontal",scale:1},d=new PIXI.Container,s=0;s<3;++s){var h=s+1,c=PIXI.Sprite.fromFrame("TAP_1"+h);c.x=-c.width/2,c.y=-c.height/2;var u=new PIXI.Container;u.addChild(c),d.addChild(u)}var f=0;if(l.direction)switch(l.direction){case"top":f=-Math.PI/2;break;case"bottom":f=Math.PI/2;break;case"left":f=Math.PI;break;case"right":f=0;break;default:f=0}d.filters=[r];for(var v=0;v<d.children.length;v++){var g=d.children[v];g.scale.x=g.scale.y=2,v<2&&w(g,.75*v)}if(i.addChild(d),l.addArrow){var x,p;if(l.direction){x=PIXI.Sprite.fromFrame("oneArrow"),p=new PIXI.extras.MovieClip([x]);var m=l.scale?l.scale:1;p.scale.x=p.scale.y=m,p.pivot={x:0,y:p.height/2},p.rotation=f}else{x=PIXI.Sprite.fromFrame("NBarrow"),(p=new PIXI.extras.MovieClip([x])).pivot={x:p.width/2,y:p.height/2};var T=l.scale?l.scale:1;p.scale.x=p.scale.y=T,"horizontal"!==(l.type?l.type:"horizontal")&&(p.rotation=Math.PI/2)}i.addChild(p),i.arrow=p,i.addEventListener("hideArrow",function(){p.alpha=0,p.visible=!1}),i.addEventListener("showArrow",function(){p.alpha=1,p.visible=!0})}d.alpha=.4;var D=new PIXI.Graphics;function w(e,t){TweenMax.to(e,1.5,{delay:t,alpha:0,repeat:-1}),TweenMax.to(e.scale,1.5,{x:5,y:5,delay:t,repeat:-1})}return D.beginFill(16776960,0),D.drawRect(-50,-50,100,100),i.addChild(D),i.addEventListener(MouseEvent.MOUSE_OVER,function(){d.alpha=.6}),i.addEventListener(MouseEvent.MOUSE_OUT,function(){d.alpha=.4}),i.addEventListener(TouchEvent.TOUCH_BEGIN,function(){i.emit(i.event.TAP),!o&&i.parent&&i.parent.removeChild(i)}),i.x=e,i.y=t,i.setColor=function(e){var t=e>>16,a=e>>8&255,n=255&e;r._loadMatrix([t,0,0,0,0,0,a,0,0,0,0,0,n,0,0,0,0,0,255,0],!1),d.filters=[r]},i.setRotation=function(e){i.rotation=e},i.showAllDir=function(){if(l.direction)for(var e=0;e<3;e++){var t=new PIXI.Container;t.addChild(PIXI.Sprite.fromFrame("oneArrow")),i.addChild(t),t.pivot={x:0,y:p.height/2},t.rotation=Math.PI/2*(e+1)}else{var a=new PIXI.Container;a.addChild(PIXI.Sprite.fromFrame("NBarrow")),i.addChild(a),a.pivot={x:p.width/2,y:p.height/2},a.rotation=i.rotation+Math.PI/2}},i.event={TAP:"pointTap",HIDEARR:"hideArrow",SHOWARR:"showArrow"},instance.info&&instance.info.newLayOut&&i.scale.set(.6,.6),i}},481:function(e,t,a){"use strict";var n=r(a(169)),i=r(a(526));function r(e){return e&&e.__esModule?e:{default:e}}nb.substance0665=extendsClass(ScienceMain,{frame0:function(){var e=this,t=e.tieqiao,a=t.earth,r=(0,n.default)(0,0);e.tieqiaoMask.alpha=0,a.alpha=0,e.earthworm0=a.earthworm0,e.wugong0=a.wugong0,e.wugongV.alpha=e.earthwormV.alpha=0,t.addChild(r),(0,i.default)(t,{del:-19.3}),t.on(nb.simpleDrag.event.START_DRAG,l),t.on(nb.simpleDrag.event.REACH_TARGET,s),t.on(nb.simpleDrag.event.NOT_REACH_TARGET,d),c("Step0",2),c("Step1",6),h({dragObjName:"yueji",label:"txt0Step0"},1),h({dragObjName:"gouwei",label:"txt1Step0"},17),h({dragObjName:"chong",label:"txt4Step1"},1),h({dragObjName:"butterfly",label:"txt1Step1"},2),h({dragObjName:"ant",label:"txt3Step1"},2),h({dragObjName:"spider",label:"txt2Step1"},2);var o=[{x:e.txt0Step0.x,y:e.txt0Step0.y},{x:e.txt0Step1.x,y:e.txt0Step1.y}];function l(){t.removeChild(r)}function d(){TweenMax.to(t,.5,{x:t.defaultX,y:t.defaultY})}function s(){t.removeSimpleDrag(),t.mask=e.tieqiaoMask.children[0];var n=e.tieqiaoPos,i=new TimelineMax({onComplete:function(){e.addChildWithSamePos(a.wugong0),e.addChildWithSamePos(a.earthworm0),e.addChildWithSamePos(a.tu),h({dragObjName:"wugong",label:"txt0Step1"},1),h({dragObjName:"earthworm",label:"txt5Step1"},1)}});i.add(TweenMax.to(t,1,{rotation:-40.7*Math.PI/180,x:n.x,y:n.y,onComplete:function(){a.alpha=1}})),i.add(TweenMax.to(t,1,{x:e.tieqiaoTarget0.x,y:e.tieqiaoTarget0.y,rotation:0,onComplete:function(){t.mask=null}})),i.add(TweenMax.to(t,.5,{x:t.defaultX,y:t.defaultY}))}function h(t,n){for(var i=[],r=function(n){var r=e[t.dragObjName+n];["yueji","gouwei"].indexOf(t.dragObjName)<0&&(r.type="animal"),i[n]=r,r.defaultScale=r.scale.x,r.defaultIndex=e.getChildIndex(r),r.label=e[t.label],r.virtual=e[t.dragObjName+"V"],function(e,t){e.virtual.alpha=0,e.label.alpha=0,e.defaultX=e.x,e.defaultY=e.y,NBDrag.addDrag(e),e.on(NBDrag.event.START_DRAG,t.startDrag),e.on(NBDrag.event.STOP_DRAG,t.stopDrag)}(r,{startDrag:function(){!function(t){var a=t.virtual,n=t.type?1:0;a.x=o[n].x,a.y=o[n].y,a.alpha=1,e.addChild(t)}(r)},stopDrag:function(){!function(t,n){"frame0"===a.tu.parent.name&&e.addChild(a.tu);t.virtual.alpha=0;var i=t.type?1:0,r=o[i];t.hitTest(e["ref"+i])?(t.label.x=r.x,n.forEach(function(e){NBDrag.removeDrag(e)}),TweenMax.to(t,.5,{x:r.x,y:r.y,rotation:0}),TweenMax.to(t.scale,.5,{x:t.virtual.scale.x,y:t.virtual.scale.y,onComplete:function(){TweenMax.to(t.label,.3,{alpha:1}),TweenMax.to(t,.3,{alpha:0})}}),r.x=r.x+t.label.width/2+40):(t.scale.set(t.defaultScale,t.defaultScale),e.setChildIndex(t,t.defaultIndex),TweenMax.to(t,.5,{x:t.defaultX,y:t.defaultY}))}(r,i)}})},l=0;l<n;l++)r(l)}function c(t,a){for(var n=0;n<a;n++){var i=e["txt"+n+t];i.pivot.set(i.width/2,i.height/2),i.x+=i.width/2,i.y+=i.height/2,i.alpha=0}}},start:function(){this.bindScriptToSprite(this.frame0,"frame0")},info:{experimentImport:"观察一下校园中有哪些动植物？",labName:"观察花坛生物",title0:"校园",CONCLUSION:"鱼的身体形状可以使鱼游动时，游的更远。",noTitle:!0,isOffset:!0,isNoResetBtn:!0,newLayOut:!0},const:{},event:{}}),e.exports=nb.substance0665},526:function(e,t,a){"use strict";(function(t){var a=t.nb;a.simpleDrag=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e||this,i=n.parent,r=-1,o=0;n.defaultX=n.x,n.defaultY=n.y,n.defaultScale=n.scale.x,n.defaultRotation=n.rotation,n.backDefaultFun=function(e){var t=this,n=e.Interactive,i=void 0===n||n,r=this;TweenMax.to(r,.5,{x:r.defaultX,y:r.defaultY,rotation:r.defaultRotation,onComplete:function(){r.interactive=i,t.dragging=!1,r.txtObj&&r.txtFun({show:!0}),r.emit(a.simpleDrag.event.BACK_DEFAULT_POS)}}),TweenMax.to(r.scale,.5,{x:r.defaultScale,y:r.defaultScale})};var l=Object.assign({scale:1,del:0,backDefaultPos:!1,alphaReach:.6,alphaNotReach:.3,expandRadius:0,txtName:"lable"},t),d=l.scale,s=l.del,h=l.backDefaultPos,c=l.alphaReach,u=l.alphaNotReach,f=l.expandRadius,v=d,g=s,x=c,p=u,m=l.txtName;function T(e){var t=e.tempObj,a=e.targetArray,r=e.targetString,o=e.number;if(t){var l,d=new PIXI.Sprite,s=!1;n.totalFrames>0?(s=!0,(l=n[0]).reverse()):(l=n.children.concat(),n.background instanceof PIXI.DisplayObject&&(l=[n.background])),l.forEach(function(e){if(e instanceof PIXI.DisplayObject||(e=e.dis),!e.mask)if(s){if(e.dis instanceof PIXI.Text)return;var t=e.clone();e.name=t.name,t&&(t.x=e.x,t.y=e.y,d.addChild(t))}else{if(e instanceof PIXI.Text)return;var a=e.clone();a&&a.name&&(e.name=a.name),a&&(a.x=e.x,a.y=e.y,d.addChild(a))}}),d.x=t.x,d.y=t.y;var h=i.getChildIndex(t);if(-1===h&&(h=i.children.length-1),i.addChildAt(d,h),window.cloneSSS=d,f){var c=new PIXI.Graphics;c.beginFill(16711680,0),c.drawCircle(0,0,f),c.endFill(),d.addChild(c)}if(TweenMax.to(d,0,{x:t.x,y:t.y,rotation:g*Math.PI/180,width:d.width*v,height:d.height*v}),r)(t=d).alpha=0,t.name=r,a[o]=t;else{d.name=t.name;var u=t.index;(t=d).alpha=0,t.name=d.name,a[u]=d}}}n[m]?(n.txtObj=n[m],n.txtFun=function(e){var t=e.show;this.txtObj.visible=Number(t)}):n.txtObj=null;var D=void 0===t.vAlpha?1:t.vAlpha;NBDrag.addDrag(n),n.addEventListener(NBDrag.event.START_DRAG,w),n.removeSimpleDrag=function(){NBDrag.removeDrag(n),n.removeEventListener(NBDrag.event.START_DRAG,w)},n.resetSimpleDrag=function(){r=-1,n.dragging=!1,n.removeSimpleDrag(),NBDrag.addDrag(n),n.addEventListener(NBDrag.event.START_DRAG,w)},n.setRotation=function(e){g=e},n.setScale=function(e){v=e},n.hideVirtuals=function(e){n.isHideVirtuals=e};function w(){if(!this.dragging&&(n.txtObj&&n.txtFun({show:!1}),-1===r?(r=function(e){if(n.targetArray){for(var t=n.targetArray,a=[],r=0;r<t.length;r++)t[r].index=r,T({tempObj:t[r],targetArray:a});return a}var o=[],l=1,d=void 0,s=0;do{T({tempObj:l=i[d=e+"Target"+s],targetArray:o,targetString:d,number:s}),s++}while(l);return o}(n.name)).length:r.length,!n.isHideVirtuals)){o=0;for(var e=0;e<r.length;e++)TweenMax.to(r[e],.5,{alpha:p*D});n.addEventListener(NBDrag.event.DRAG_MOVE,A),n.addEventListener(NBDrag.event.STOP_DRAG,b),n.addEventListener(TouchEvent.TOUCH_END_OUDSIDE,b),n.emit(a.simpleDrag.event.START_DRAG),this.dragging=!0}}function A(){TweenMax.killTweensOf(n);for(var e=a.scienceCommonFun.hitTest2(n,r),t=0;t<r.length;t++){var i=r[t];TweenMax.to(i,.5,{alpha:p*D}),TweenMax.to(i.scale,.3,{x:v,y:v,ease:Power0.easeOut})}e&&(TweenMax.to(e,.5,{alpha:x*D}),TweenMax.to(e.scale,.3,{x:1.1*v,y:1.1*v,ease:Power0.easeIn}))}function b(){var e=this,t=-1,i=-1,l=0;n.removeEventListener(NBDrag.event.START_DRAG,w),n.removeEventListener(NBDrag.event.DRAG_MOVE,A),n.removeEventListener(NBDrag.event.STOP_DRAG,b),n.removeEventListener(TouchEvent.TOUCH_END_OUDSIDE,b),NBDrag.removeDrag(n),n.emit(a.simpleDrag.event.STOP_DRAG);for(var d=0;d<r.length;d++)TweenMax.to(r[d],.5,{alpha:0}),!1!==(l=n.hitTest(r[d]))&&(o=1,(-1===t||i<l)&&(t=d,i=l));if(1!==o)return NBDrag.addDrag(n),n.addEventListener(NBDrag.event.START_DRAG,w),n.emit(a.simpleDrag.event.NOT_REACH_TARGET,o),n.interactive=!1,o=0,h?(TweenMax.to(n,.5,{x:n.defaultX,y:n.defaultY,rotation:n.defaultRotation,onComplete:function(){n.interactive=!0,e.dragging=!1,n.txtObj&&n.txtFun({show:!0}),n.emit(a.simpleDrag.event.BACK_DEFAULT_POS)}}),TweenMax.to(n.scale,.5,{x:n.defaultScale,y:n.defaultScale}),void(o=0)):(this.dragging=!1,n.interactive=!0,void(n.txt&&(n.txt.visible=!0)));TweenMax.to(n.scale,.5,{x:v,y:v}),TweenMax.to(n,.5,{x:r[t].x,y:r[t].y,rotation:g*Math.PI/180,onComplete:function(){return this.target.dragging=!1,n.emit(a.simpleDrag.event.REACH_TARGET,r[t].name.valueOf()),r.splice(t,1),0===r.length?void 0:(o=0,NBDrag.addDrag(n),n.addEventListener(NBDrag.event.START_DRAG,w),void(n.interactive=!1))}}),n.emit(a.simpleDrag.event.REACH_TARGET_HITTED,r[t].name.valueOf())}n.setFreeDrag=function(e){e}},a.simpleDrag.event={START_DRAG:"startSimpleDrag",ON_HITTED:"hitted",REACH_TARGET_HITTED:"onReachHitted",REACH_TARGET:"onReachTarget",NOT_REACH_TARGET:"notReachTarget",FINISH_DRAG:"finishDrag",STOP_DRAG:"stopSimpleDrag",BACK_DEFAULT_POS:"backdefaultPos"},e.exports=a.simpleDrag}).call(t,a(5))}});