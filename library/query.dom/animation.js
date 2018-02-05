$(function(){var t=window.requestAnimationFrame;t||(t=function(t){setTimeout(t,50)});var e=function(t,e,i,n){this.reference=t,this.from=new $.dom.CSSMatrix(e),this.to=new $.dom.CSSMatrix(i),this.interpolation=n};e.prototype.calculate=function(t){for(var e=[],i=0;i<this.from.data.length;)e[i]=this.from.data[i]+this.interpolation(t)*(this.to.data[i]-this.from.data[i]),++i;return new $.dom.CSSMatrix(e)};var i=function(t,e,i,n){this.reference=t,this.from=parseInt(e),this.to=parseInt(i),this.interpolation=n};i.prototype.calculate=function(t){return Math.round(this.from+this.interpolation(t)*(this.to-this.from))};var n=function(t,e,i,n){this.reference=t,this.from=parseFloat(e),this.to=parseFloat(i),this.interpolation=n};n.prototype.calculate=function(t){return this.from+this.interpolation(t)*(this.to-this.from)};var r={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",gold:"#ffd700",goldenrod:"#daa520",gray:"#808080",green:"#008000",greenyellow:"#adff2f",honeydew:"#f0fff0",hotpink:"#ff69b4","indianred ":"#cd5c5c","indigo ":"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavender:"#e6e6fa",lavenderblush:"#fff0f5",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32",transparent:"rgba(0, 0, 0, 0)"},s=function(t){if(r.hasOwnProperty(t)&&(t=r[t]),t.hasOwnProperty("red")&&t.hasOwnProperty("green")&&t.hasOwnProperty("blue")&&t.hasOwnProperty("alpha"))this.red=parseFloat(t.red),this.green=parseFloat(t.green),this.blue=parseFloat(t.blue),this.alpha=parseFloat(t.alpha);else if("#"===t[0])if(4===t.length)this.red=parseInt(t.substring(1,2),16)/15,this.green=parseInt(t.substring(2,3),16)/15,this.blue=parseInt(t.substring(3,4),16)/15,this.alpha=1;else{if(!(t.length=7))throw new Error("Invalid color");this.red=parseInt(t.substring(1,3),16)/255,this.green=parseInt(t.substring(3,5),16)/255,this.blue=parseInt(t.substring(5,7),16)/255,this.alpha=1}else if("rgb("===t.substring(0,4)){e=t.slice(4,-1).split(",");this.red=parseInt(e[0])/255,this.green=parseInt(e[1])/255,this.blue=parseInt(e[2])/255,this.alpha=1}else{if("rgba("!==t.substring(0,5))throw new Error("Invalid color");var e=t.slice(5,-1).split(",");this.red=parseInt(e[0])/255,this.green=parseInt(e[1])/255,this.blue=parseInt(e[2])/255,this.alpha=parseFloat(e[3])}};s.prototype.toString=function(){return"rgba("+Math.round(255*this.red)+", "+Math.round(255*this.green)+", "+Math.round(255*this.blue)+", "+this.alpha.toFixed(2)+")"};var o=function(t,e,i,n){this.reference=t,this.from=new s(e),this.to=new s(i),this.interpolation=n};o.prototype.calculate=function(t){var e=this.interpolation(t);return new s({red:this.from.red+e*(this.to.red-this.from.red),green:this.from.green+e*(this.to.green-this.from.green),blue:this.from.blue+e*(this.to.blue-this.from.blue),alpha:this.from.alpha+e*(this.to.alpha-this.from.alpha)})};var a=function(t,e){if(e)if($.is(e,Number))this.unit="px",this.number=e;else if(e.hasOwnProperty&&e.hasOwnProperty("unit"))this.unit=e.unit,this.number=e.number;else{var i=e.indexOf(/[^0-9]/);this.unit=-1!=i?e.substring(i):"px",this.number=parseFloat(e)}else this.unit="px",this.number=0;this.reference=t};a.prototype.getNumberInPixels=function(){switch(this.unit){case"px":return this.number;case"pt":return 72*this.number/96;case"pc":return 6*this.number/96;case"in":return 96*this.number;case"cm":return 96*this.number*2.54;case"mm":return 96*this.number*25.4;case"em":return new a(this.reference.reference,this.reference.getValue()).getNumberInPixels()*this.number;case"rem":return new a(null,$(document.body).style("font-size")).getNumberInPixels()*this.number;case"ex":return new a(this.reference.reference,this.reference.getValue()).getNumberInPixels()*this.number*.65;case"rex":return new a(null,$(document.body).style("font-size")).getNumberInPixels()*this.number*.65;case"vh":return document.body.clientHeight*this.number/100;case"vw":return document.body.clientWidth*this.number/100;case"vmin":return Math.min(document.body.clientWidth,document.body.clientHeight)*this.number/100;case"vmax":return Math.max(document.body.clientWidth,document.body.clientHeight)*this.number/100;case"%":return this.number*new a(this.reference.reference,this.reference.getValue()).getNumberInPixels()/100;default:return NaN}},a.prototype.toString=function(){return this.number.toFixed(2)+this.unit};var l=function(t,e,i,n){this.reference=t,this.from=new a(t,e),this.to=new a(t,i),this.interpolation=n};l.prototype.calculate=function(t){return new a(null,{number:(this.from.getNumberInPixels()+this.interpolation(t)*(this.to.getNumberInPixels()-this.from.getNumberInPixels()))/96*25.4,unit:"mm"})};var h=function(t,e,i,n){},f={};f["scroll-top"]={animation:i,field:"property",property:"scrollTop",cssTransition:!1},f["scroll-left"]={animation:i,field:"property",property:"scrollLeft",cssTransition:!1},f.transform={animation:e,field:"style",property:"transform",cssTransition:!0},["column-count","order","z-index","font-weight","font-stretch"].forEach(function(t){f[t]={animation:i,field:"style",property:t,cssTransition:!0}}),["opacity","flex-grow","flex-shrink","font-size-adjust","shape-image-threshold"].forEach(function(t){f[t]={animation:n,field:"style",property:t,cssTransition:!0}}),f.zoom={animation:n,field:"style",property:"zoom",cssTransition:!1},["perspective","column-width","column-gap","column-rule-width","flex-basis","border-left-width","border-right-width","border-bottom-left-radius","border-bottom-right-radius","border-top-left-radius","border-top-right-radius","margin-left","margin-right","padding-left","padding-right","min-width","max-width","left","right","width","outline-offset","outline-width","shape-margin"].forEach(function(t){f[t]={animation:l,reference:"width",field:"style",property:t,cssTransition:!0}}),["border-bottom-width","border-top-width","margin-bottom","margin-top","padding-bottom","padding-top","min-height","max-height","bottom","top","height"].forEach(function(t){f[t]={animation:l,reference:"height",field:"style",property:t,cssTransition:!0}}),["letter-spacing","tab-size","text-indent","word-spacing","font-size","line-height"].forEach(function(t){f[t]={animation:l,reference:"font-size",field:"style",property:t,cssTransition:!0}}),["color","column-rule-color","text-decoration-color","background-color","border-bottom-color","border-left-color","border-right-color","border-top-color","outline-color"].forEach(function(t){f[t]={animation:o,field:"style",property:t,cssTransition:!0}}),["text-shadow","box-shadow"].forEach(function(t){f[t]={field:"style",property:t,cssTransition:!0}}),["transform-origin","perspective-origin","background-position","background-size","clip","object-position"].forEach(function(t){f[t]={animation:h,field:"style",property:t,cssTransition:!0}});var c={"border-width":["border-bottom-width","border-left-width","border-right-width","border-top-width"],"border-color":["border-bottom-color","border-left-color","border-right-color","border-top-color"],"border-radius":["border-bottom-left-radius","border-bottom-right-radius","border-top-left-radius","border-top-right-radius"],padding:["padding-bottom","padding-left","padding-right","padding-top"],margin:["margin-bottom","margin-left","margin-right","margin-top"]},d=function(t,e,i){this.object=t,this.field=e,this.property=i,"style"===this.field?this.reference=this.object.parentElement:this.reference=null};d.prototype.getValue=function(){return"style"===this.field?$(this.object).style(this.property):null};var u=Symbol("animators"),p=function(){var t={WebkitTransition:["webkitTransitionEnd"],MozTransition:["transitionend"],OTransition:["oTransitionEnd","otransitionend"],transition:["transitionend"]};if(document.body.style.hasOwnProperty)for(var e in t)if(document.body.style.hasOwnProperty(e))return t[e];return["transitionend"]}(),m=function(t,e,i,n,r,s,o,a,l){this.id=$.uuid(),this.usingCSSTransition=a,t[u]||(t[u]={});var h=f[e],c=null,p=null;"style"===h.field?(p=$(t).style(h.property),c=t.parentElement):"property"===h.field&&(p=$(t).property(h.property)),this.object=t,this.property=e,this.settings=h,this.listeners=$.merge.simple({},o);let m=this.listeners.finished;this.listeners.finished=function(){return l&&("style"===h.field?$(t).style(h.property,null):"property"===h.field&&$(t).property(h.property,null)),m.apply(this,arguments)},this.delay=n,this.duration=r,this.settings.animation?this.animation=new this.settings.animation(new d(c,h.field,h.reference),p,i,s):this.animation={interpolation:s,reference:new d(c,h.field,h.reference),from:p,to:i},this.state="inited",this.version=$.uuid(),this.restoreNotSetAfterFinished=l,this.listeners.inited&&this.listeners.inited(this)};m.prototype.play=function(){if("inited"!==this.state)throw new Error("Animator not prepared");var e=this;Object.keys(this.object[u]).slice(0).forEach(function(t){this.object[u][t]instanceof Array||this.object[u][t]&&this.object[u][t].settings.field===e.settings.field&&this.object[u][t].property===e.property&&this.object[u][t].cancel()}.bind(this)),this.object[u][this.id]=this,this.state="playing";var i=$.uuid();if(this.version=i,this.listeners.prepared&&this.listeners.prepared(this),this.usingCSSTransition&&this.settings.cssTransition&&"style"===this.settings.field&&this.animation.interpolation.cssFunction&&"msie"!==$.browser.name){var n=$(this.object),r=n.style([e.settings.property,"transition-property","transition-duration","transition-delay","transition-timing-function"]);if(r&&r[e.settings.property]!==e.animation.to.toString()){n.style(e.settings.property,r[e.settings.property]);var s=r["transition-property"].split(",").map(function(t){return t.trim()}),o=r["transition-duration"].split(",").map(function(t){return t.trim()}),a=r["transition-delay"].split(",").map(function(t){return t.trim()}),l=[];r["transition-timing-function"].split(",").forEach(function(t){if(l.length>0){var e=l[l.length-1];e.split("(").length===e.split(")").length?l.push(t):l[l.length-1]=e+t}else l.push(t)}),l=l.map(function(t){return t.trim()});var h=s.indexOf("all");-1!==h&&(s.splice(h,1),o.splice(h,1),a.splice(h,1),l.splice(h,1)),-1!==(h=s.indexOf(e.settings.property))&&(s.splice(h,1),o.splice(h,1),a.splice(h,1),l.splice(h,1),n.style(e.settings.property,n.style(e.settings.property))),s.push(e.settings.property),o.push(this.duration+"ms"),a.push(this.delay+"ms"),l.push(this.animation.interpolation.cssFunction);var f=!1,c=function(){f||(f=!0,n.off("animation."+e.id+"."+e.settings.property+".*"),b.call(this),"playing"===this.state&&i===this.version&&this.listeners.finished&&this.listeners.finished(this),y.call(this))}.bind(this);n.styles({"transition-property":s.join(", "),"transition-duration":o.join(", "),"transition-delay":a.join(", "),"transition-timing-function":l.join(", ")}),n.on(p.map(function(t){return"animation."+e.id+"."+e.settings.property+"."+t}).join(" "),function(t){t.propertyName===e.settings.property&&c()}.bind(this)),$.delay(this.delay+this.duration,function(){c()}),$.delay(()=>{"playing"===this.state&&i===this.version&&n.styles(e.settings.property,e.animation.to.toString())})}else b.call(this),n.style(e.settings.property,e.animation.to),"playing"===this.state&&i===this.version&&this.listeners.finished&&this.listeners.finished(this),y.call(this)}else this.delayHandle=$.delay(this.delay,function(){if(delete this.delayHandle,"playing"===this.state&&i===this.version){this.listeners.started&&this.listeners.started(this);var e=(new Date).getTime(),n=function(){t(function(){if("playing"===this.state&&i===this.version){var t=(new Date).getTime()-e;if(t<this.duration){this.listeners.playing&&this.listeners.playing(this);var r=this.animation.calculate(t/this.duration);"style"===this.settings.field?$(this.object).style(this.settings.property,r.toString()):"property"===this.settings.field&&$(this.object).property(this.settings.property,r),n()}else this.state="finished","style"===this.settings.field?$(this.object).style(this.settings.property,this.animation.to.toString()):"property"===this.settings.field&&$(this.object).property(this.settings.property,this.animation.to),delete this.object[u][this.id],this.listeners.finished&&this.listeners.finished(this)}}.bind(this))}.bind(this);n()}}.bind(this))},m.prototype.reset=function(){"inited"!==this.state&&(this.state="inited",this.version=$.uuid(),delete this.object[u][this.id],this.delayHandle&&(this.delayHandle.cancel(),delete this.delayHandle),"playing"===this.state&&this.listeners.canceled&&this.listeners.canceled(this),this.listeners.reset&&this.listeners.reset(this),b.call(this))};var b=function(){if(this.usingCSSTransition&&this.settings.cssTransition&&"style"===this.settings.field&&this.animation.interpolation.cssFunction){var t=this,e=$(this.object),i=e.style();if(i){var n=i["transition-property"].split(",").map(function(t){return t.trim()}),r=i["transition-duration"].split(",").map(function(t){return t.trim()}),s=i["transition-delay"].split(",").map(function(t){return t.trim()}),o=[];i["transition-timing-function"].split(",").forEach(function(t){if(o.length>0){var e=o[o.length-1];e.split("(").length===e.split(")").length?o.push(t):o[o.length-1]=e+t}else o.push(t)}),o=o.map(function(t){return t.trim()});var a=n.indexOf("all");-1!==a&&(n.splice(a,1),r.splice(a,1),s.splice(a,1),o.splice(a,1)),-1!==(a=n.indexOf(t.settings.property))&&(n.splice(a,1),r.splice(a,1),s.splice(a,1),o.splice(a,1)),e.styles({"transition-property":n.join(", "),"transition-duration":r.join(", "),"transition-delay":s.join(", "),"transition-timing-function":o.join(", ")})}}},y=function(){"playing"===this.state&&(this.state="canceled",this.version=$.uuid(),delete this.object[u][this.id])};m.prototype.cancel=function(t){if("playing"===this.state){this.state="canceled",this.version=$.uuid(),delete this.object[u][this.id],this.delayHandle&&(this.delayHandle.cancel(),delete this.delayHandle),this.listeners.canceled&&this.listeners.canceled(this);var e=$(this.object).style(this.settings.property);b.call(this),t?"style"===this.settings.field?$(this.object).style(this.settings.property,e):this.settings.field:"style"===this.settings.field?$(this.object).style(this.settings.property,this.animation.to.toString()):"property"===this.settings.field&&$(this.object).property(this.settings.property,this.animation.to)}};var g=Symbol("version"),v=1;$.upgrade({domain:"dom",addons:{then:function(t){var e=this,i=e.clone(),n=v,r=$.async(function(){e.async?e.async.pipe(this):this.next()}).then(function(){0===e.filter(function(t){return!!t[g]&&t[g]>=n}).length?t.apply(this,[i]):this.reject($.error.little("Animation canceled"))}).rejected(function(t){$.error(t)});try{Object.defineProperty(i,"async",{enumerable:!1,value:r})}catch(t){i.async=r}return i},rejected:function(t){return this.async&&this.async.rejected(t),this},delay:function(t){var e=v;return this.then(function(i){$.delay(t,function(){0===i.filter(function(t){return!!t[g]&&t[g]>=e}).length?this.next():this.reject($.error.little("Animation canceled"))}.bind(this))})},stop:function(t,e){var i=this;t&&(i=this.clone()).query("*").forEach(function(t){i.include(t)});var n=v;return++v,i.forEach(function(t){t[u]&&Object.keys(t[u]).slice(0).forEach(function(i){t[u][i].cancel(e)}),t[g]=n}),this},animate:function(){var t={},e={};1===arguments.length?t=arguments[0]:arguments.length>1&&($.is(arguments[0],String)?(t[arguments[0]]=t[arguments[1]],arguments.length>2&&(e=arguments[2])):(t=arguments[0],e=arguments[1]));var i=(e=$.merge.advanced({"!valueType":"object","!numberFields":"duration",duration:{"!valueType":"number","!defaultValue":1e3},delay:{"!valueType":"number","!defaultValue":0},noCSSTransition:{"!valueType":"boolean","!defaultValue":!1},interpolation:{"!defaultValue":"default"},stopAllAtCurrentState:{"!defaultValue":!1},restoreNotSetAfterFinished:{"!defaultValue":!1}},e)).interpolation;$.is(i,String)&&(i=$.dom.interpolations[i]),i||(i=$.dom.interpolations.default);var n={};Object.keys(t).forEach(function(e){c[e]?c[e].forEach(function(i){t.hasOwnProperty(i)||(n[i]=t[e])}):n[e]=t[e]});var r=v,s=this;return this.then(function(t){e.delay?$.delay(e.delay,()=>{this.next()}):this.next()}).then(function(t){r===v&&e.stopAllAtCurrentState&&(s.stop(!1,!0),r=v);var o=this,a=0,l=0,h=!1,f=function(){h||(l>0?(h=!0,o.reject($.error.little("Animation canceled"))):a===t.length&&(h=!0,o.next()))};0===t.filter(function(t){return!!t[g]&&t[g]>=r}).length?t.forEach(function(t){var r={},s=0,o=0,h=!1,c=function(){h||(o>0?(h=!0,++l,f()):s===Object.keys(n).length&&(h=!0,++a,f()))};Object.keys(n).forEach(function(a){r[a]=new m(t,a,n[a],0,e.duration,i,{finished:function(t){++s,c()},canceled:function(t){++o,c()}},!e.noCSSTransition,e.restoreNotSetAfterFinished)}),Object.keys(r).slice(0).forEach(function(t){r[t].play()})}):o.reject($.error.little("Animation canceled"))})},animateFrom:function(t,e){const i=this.style(Object.keys(t));return this.style(t),this.animate(i,e)},transform:function(t,e,i){let n={};t.forEach(t=>{n[t]=null});let r=this.style(t);e();const s=this.style(n).style(t);this.style(r).animate(s,i)}}});var w=function(){var t=null,e={};1===arguments.length?(t=$("html"),e=arguments[0]):arguments.length>1&&(t=$(arguments[0]),e=arguments[1]),this.query=t,this.animations=e};w.prototype.play=function(t,e){var i=this;return this.animations.hasOwnProperty(t)?$.async(function(){var n=i.animations[t],r=0,s=0,o=function(){r===Object.keys(n).length&&(s>0?this.reject($.error.little("Animation canceled")):this.next())}.bind(this);Object.keys(n).forEach(function(t){var a=null;n[t].forEach(function(n){var r=null;n.selector?r="&"===n.selector||0===n.selector.length?i.query.clone():null===a?i.query.query(n.selector):a.query(n.selector):null===a?(r="&"===t||0===t.length?i.query.clone():i.query.query(t),a=r):r=a;var s={},o={};if(Object.keys(n).forEach(function(t){var i=$.format(n[t]+"",e);"!"===t[0]?o[t.substring(1)]=i:s[t]=i}),a!=r){var l=a;a=r.then(function(){var t=this;l.then(function(){r.clone().animate(s,o).then(function(){this.next(),t.next()}).rejected(function(e){t.reject(e)}),this.next()}).rejected(function(e){t.reject(e)})})}else a=a.animate(s,o)}),a.then(function(){++r,o()}).rejected(function(t){++s,++r,o()})})}):$.async.reject(new Error("Animation not found"))},$.dom.animation=function(t){return new w(t)}});