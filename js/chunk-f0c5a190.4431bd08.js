(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f0c5a190"],{ba1a:function(e,t,i){(function(t,n){e.exports=n(i("3eba"),i("007d"),i("d28f"),i("ef97"))})(0,function(e){"use strict";e=e&&e.hasOwnProperty("default")?e["default"]:e;var t={th:3,mi:6,bi:9,tr:12},i={zeroFormat:null,nullFormat:null,defaultFormat:"0,0",scalePercentBy100:!0,abbrLabel:{th:"k",mi:"m",bi:"b",tr:"t"}},n=1e12,r=1e9,a=1e6,o=1e3;function s(e){return"number"===typeof e&&isNaN(e)}function l(e,t,i,n){var r=e.toString().split("."),a=t-(n||0),o=2===r.length?Math.min(Math.max(r[1].length,a),t):a,s=Math.pow(10,o),l=(i(e+"e+"+o)/s).toFixed(o);if(n>t-o){var c=new RegExp("\\.?0{1,"+(n-(t-o))+"}$");l=l.replace(c,"")}return l}function c(e,i,s,c){var h=Math.abs(i),u=!1,f=!1,d="",p="",m=!1,y=void 0,b=void 0;s=s||"",i=i||0,~s.indexOf("(")?(u=!0,s=s.replace(/[(|)]/g,"")):(~s.indexOf("+")||~s.indexOf("-"))&&(b=~s.indexOf("+")?s.indexOf("+"):i<0?s.indexOf("-"):-1,s=s.replace(/[+|-]/g,"")),~s.indexOf("a")&&(y=s.match(/a(k|m|b|t)?/),y=!!y&&y[1],~s.indexOf(" a")&&(d=" "),s=s.replace(new RegExp(d+"a[kmbt]?"),""),h>=n&&!y||"t"===y?(d+=e.abbrLabel.tr,i/=n):h<n&&h>=r&&!y||"b"===y?(d+=e.abbrLabel.bi,i/=r):h<r&&h>=a&&!y||"m"===y?(d+=e.abbrLabel.mi,i/=a):(h<a&&h>=o&&!y||"k"===y)&&(d+=e.abbrLabel.th,i/=o)),~s.indexOf("[.]")&&(f=!0,s=s.replace("[.]","."));var g=i.toString().split(".")[0],v=s.split(".")[1],x=s.indexOf(","),O=(s.split(".")[0].split(",")[0].match(/0/g)||[]).length;if(v?(~v.indexOf("[")?(v=v.replace("]",""),v=v.split("["),p=l(i,v[0].length+v[1].length,c,v[1].length)):p=l(i,v.length,c),g=p.split(".")[0],p=~p.indexOf(".")?"."+p.split(".")[1]:"",f&&0===+p.slice(1)&&(p="")):g=l(i,0,c),d&&!y&&+g>=1e3&&d!==t.trillion&&(g=""+ +g/1e3,d=t.million),~g.indexOf("-")&&(g=g.slice(1),m=!0),g.length<O)for(var j=O-g.length;j>0;j--)g="0"+g;x>-1&&(g=g.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,")),s.indexOf(".")||(g="");var S=g+p+(d||"");return u?S=(u&&m?"(":"")+S+(u&&m?")":""):b>=0?S=0===b?(m?"-":"+")+S:S+(m?"-":"+"):m&&(S="-"+S),S}function h(e,t){Object.keys(t).forEach(function(i){e[i]=t[i]})}var u={regexp:/%/,format:function(e,t,i,n){var r=~t.indexOf(" %")?" ":"",a=void 0;return n.options.scalePercentBy100&&(e*=100),t=t.replace(/\s?%/,""),a=n._numberToFormat(e,t,i),~a.indexOf(")")?(a=a.split(""),a.splice(-1,0,r+"%"),a=a.join("")):a=a+r+"%",a}},f={},d={};function p(e,t,i){t=t||f.defaultFormat,i=i||Math.round;var n=void 0,r=void 0;if(0===e&&null!==f.zeroFormat)n=f.zeroFormat;else if(null===e&&null!==f.nullFormat)n=f.nullFormat;else{for(var a in d)if(d[a]&&t.match(d[a].regexp)){r=d[a].format;break}r=r||c.bind(null,f),n=r(e,t,i,m)}return n}function m(e,t,i){var n=void 0;return n=0===e||"undefined"===typeof e?0:null===e||s(e)?null:"string"===typeof e?f.zeroFormat&&e===f.zeroFormat?0:f.nullFormat&&e===f.nullFormat||!e.replace(/[^0-9]+/g,"").length?null:+e:+e||null,p(n,t,i)}h(f,i),m.options=f,m._numberToFormat=c.bind(null,f),m.register=function(e,t){d[e]=t},m.unregister=function(e){d[e]=null},m.setOptions=function(e){h(f,e)},m.reset=function(){h(f,i)},m.register("percentage",u);var y="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e};function g(e,t){var i=null;return function(){var n=this,r=arguments;clearTimeout(i),i=setTimeout(function(){e.apply(n,r)},t)}}function v(e,t,i){if(t){var n=e,r=t.split(".");r.forEach(function(e,t){t===r.length-1?n[e]=i:(n[e]||(n[e]={}),n=n[e])})}}var x="function"===typeof Symbol&&"symbol"===y(Symbol.iterator)?function(e){return"undefined"===typeof e?"undefined":y(e)}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":"undefined"===typeof e?"undefined":y(e)};function O(e){return Object.prototype.toString.call(e)}function j(e){return"undefined"===typeof e?"undefined":x(e)}function S(e){return"[object Object]"===O(e)}function A(e){return"[object Array]"===O(e)}function k(e){return"[object Function]"===O(e)}function w(e){return JSON.parse(JSON.stringify(e))}function z(e){return e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}function E(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function F(e,t){if(e===t)return!0;if(null===e||null===t||"object"!==j(e)||"object"!==j(t))return e===t;for(var i in e)if(E(e,i)){var n=e[i],r=t[i],a=j(n);if("undefined"===j(r))return!1;if("object"===a){if(!F(n,r))return!1}else if(n!==r)return!1}for(var o in t)if(E(t,o)&&"undefined"===j(e)[o])return!1;return!0}var L=function(e,t,i){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"-";if(isNaN(e))return n;if(!t)return e;if(k(t))return t(e,m);i=isNaN(i)?0:++i;var r=".["+new Array(i).join(0)+"]",a=t;switch(t){case"KMB":a=i?"0,0"+r+"a":"0,0a";break;case"normal":a=i?"0,0"+r:"0,0";break;case"percent":a=i?"0,0"+r+"%":"0,0.[00]%";break}return m(e,a)},C=function(e){var t={};return Object.keys(e).forEach(function(i){e[i].forEach(function(e){t[e]=i})}),t};function $(e){var t=e.dimension,i=e.rows,n=e.xAxisName,r=e.axisVisible,a=e.xAxisType;return t.map(function(e,t){return{type:a,nameLocation:"middle",nameGap:22,name:n[t]||"",axisTick:{show:!0,lineStyle:{color:"#eee"}},data:i.map(function(t){return t[e]}),show:r}})}function _(e){var t=e.rows,i=e.axisSite,n=e.metrics,r=e.area,a=e.stack,o=e.nullAddZero,s=e.labelMap,l=e.label,c=e.itemStyle,h=e.lineStyle,u=e.areaStyle,f=e.dimension,d=[],p={},m=a&&C(a);return n.forEach(function(e){p[e]=[]}),t.forEach(function(e){n.forEach(function(t){var i=null;null!=e[t]?i=e[t]:o&&(i=0),p[t].push([e[f[0]],i])})}),n.forEach(function(e){var t={name:null!=s[e]?s[e]:e,type:"line",data:p[e]};r&&(t.areaStyle={normal:{}}),i.right&&(t.yAxisIndex=~i.right.indexOf(e)?1:0),a&&m[e]&&(t.stack=m[e]),l&&(t.label=l),c&&(t.itemStyle=c),h&&(t.lineStyle=h),u&&(t.areaStyle=u),d.push(t)}),d}function T(e){for(var t=e.yAxisName,i=e.yAxisType,n=e.axisVisible,r=e.scale,a=e.min,o=e.max,s=e.digit,l={type:"value",axisTick:{show:!1},show:n},c=[],h=function(e){i[e]?c[e]=b({},l,{axisLabel:{formatter:function(t){return L(t,i[e],s)}}}):c[e]=b({},l),c[e].name=t[e]||"",c[e].scale=r[e]||!1,c[e].min=a[e]||null,c[e].max=o[e]||null},u=0;u<2;u++)h(u);return c}function H(e){var t=e.axisSite,i=e.yAxisType,n=e.digit,r=e.labelMap,a=e.tooltipFormatter,o=t.right||[],s=r?o.map(function(e){return void 0===r[e]?e:r[e]}):o;return{trigger:"axis",formatter:function(e){if(a)return a.apply(null,arguments);var t=[],r=e[0],o=r.name,l=r.axisValueLabel,c=o||l;return t.push(c+"<br>"),e.forEach(function(e){var r=e.seriesName,a=e.data,o=e.marker,l=null,c=~s.indexOf(r)?i[1]:i[0],h=A(a)?a[1]:a;l=L(h,c,n),t.push(o),t.push(r+": "+l),t.push("<br>")}),t.join("")}}}function N(e){var t=e.metrics,i=e.legendName,n=e.labelMap;if(!i&&!n)return{data:t};var r=n?t.map(function(e){return null==n[e]?e:n[e]}):t;return{data:r,formatter:function(e){return null!=i[e]?i[e]:e}}}var P=function(e,t,i,n){t=A(t)?t:[],e=A(e)?e:[];var r=i.axisSite,a=void 0===r?{}:r,o=i.yAxisType,s=void 0===o?["normal","normal"]:o,l=i.xAxisType,c=void 0===l?"category":l,h=i.yAxisName,u=void 0===h?[]:h,f=i.dimension,d=void 0===f?[e[0]]:f,p=i.xAxisName,m=void 0===p?[]:p,y=i.axisVisible,b=void 0===y||y,g=i.area,v=i.stack,x=i.scale,O=void 0===x?[!1,!1]:x,j=i.min,S=void 0===j?[null,null]:j,k=i.max,w=void 0===k?[null,null]:k,z=i.nullAddZero,E=void 0!==z&&z,F=i.digit,L=void 0===F?2:F,C=i.legendName,P=void 0===C?{}:C,R=i.labelMap,M=void 0===R?{}:R,V=i.label,B=i.itemStyle,D=i.lineStyle,W=i.areaStyle,I=n.tooltipVisible,Z=n.legendVisible,J=n.tooltipFormatter,U=e.slice();a.left&&a.right?U=a.left.concat(a.right):a.left&&!a.right?U=a.left:i.metrics?U=i.metrics:U.splice(e.indexOf(d[0]),1);var G=Z&&N({metrics:U,legendName:P,labelMap:M}),K=I&&H({axisSite:a,yAxisType:s,digit:L,labelMap:M,xAxisType:c,tooltipFormatter:J}),q=$({dimension:d,rows:t,xAxisName:m,axisVisible:b,xAxisType:c}),Q=T({yAxisName:u,yAxisType:s,axisVisible:b,scale:O,min:S,max:w,digit:L}),X=_({rows:t,axisSite:a,metrics:U,area:g,stack:v,nullAddZero:E,labelMap:M,label:V,itemStyle:B,lineStyle:D,areaStyle:W,xAxisType:c,dimension:d}),Y={legend:G,xAxis:q,series:X,yAxis:Q,tooltip:K};return Y},R={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"v-charts-component-loading"},[i("div",{staticClass:"loader"},[i("div",{staticClass:"loading-spinner"},[i("svg",{staticClass:"circular",attrs:{viewBox:"25 25 50 50"}},[i("circle",{staticClass:"path",attrs:{cx:"50",cy:"50",r:"20",fill:"none"}})])])])])},staticRenderFns:[]},M={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"v-charts-data-empty"},[e._v(" 暂无数据 ")])},staticRenderFns:[]},V={categoryAxis:{axisLine:{show:!1},axisTick:{show:!1},splitLine:{show:!1}},valueAxis:{axisLine:{show:!1}},line:{smooth:!0},grid:{containLabel:!0,left:10,right:10}},B=["#19d4ae","#5ab1ef","#fa6e86","#ffb980","#0067a6","#c4b4e4","#d87a80","#9cbbff","#d9d0c7","#87a997","#d49ea2","#5b4947","#7ba3a8"],D=["initOptions","loading","dataEmpty","judgeWidth","widthChangeDelay"],W=["grid","dataZoom","visualMap","toolbox","title","legend","xAxis","yAxis","radar","tooltip","axisPointer","brush","geo","timeline","graphic","series","backgroundColor","textStyle"];function I(e,t){Object.keys(t).forEach(function(i){var n=t[i];~i.indexOf(".")?v(e,i,n):"function"===typeof n?e[i]=n(e[i]):A(e[i])&&S(e[i][0])?e[i].forEach(function(t,r){e[i][r]=b({},t,n)}):S(e[i])?e[i]=b({},e[i],n):e[i]=n})}function Z(e,t){Object.keys(t).forEach(function(i){t[i]&&(e[i]=t[i])})}function J(e,t){Object.keys(t).forEach(function(i){e[i]=t[i]})}var U={render:function(e){return e("div",{class:[z(this.$options.name||this.$options._componentTag)],style:this.canvasStyle},[e("div",{style:this.canvasStyle,class:{"v-charts-mask-status":this.dataEmpty||this.loading},ref:"canvas"}),e(M,{style:{display:this.dataEmpty?"":"none"}}),e(R,{style:{display:this.loading?"":"none"}}),this.$slots.default])},props:{data:{type:[Object,Array],default:function(){return{}}},settings:{type:Object,default:function(){return{}}},width:{type:String,default:"auto"},height:{type:String,default:"400px"},beforeConfig:{type:Function},afterConfig:{type:Function},afterSetOption:{type:Function},afterSetOptionOnce:{type:Function},events:{type:Object},grid:{type:[Object,Array]},colors:{type:Array},tooltipVisible:{type:Boolean,default:!0},legendVisible:{type:Boolean,default:!0},legendPosition:{type:String},markLine:{type:Object},markArea:{type:Object},markPoint:{type:Object},visualMap:{type:[Object,Array]},dataZoom:{type:[Object,Array]},toolbox:{type:[Object,Array]},initOptions:{type:Object,default:function(){return{}}},title:[Object,Array],legend:[Object,Array],xAxis:[Object,Array],yAxis:[Object,Array],radar:Object,tooltip:Object,axisPointer:[Object,Array],brush:[Object,Array],geo:[Object,Array],timeline:[Object,Array],graphic:[Object,Array],series:[Object,Array],backgroundColor:[Object,String],textStyle:[Object,Array],animation:Object,theme:Object,themeName:String,loading:Boolean,dataEmpty:Boolean,extend:Object,judgeWidth:{type:Boolean,default:!1},widthChangeDelay:{type:Number,default:300},tooltipFormatter:{type:Function},resizeable:{type:Boolean,default:!0},resizeDelay:{type:Number,default:200},changeDelay:{type:Number,default:0},setOptionOpts:{type:[Boolean,Object],default:!0},cancelResizeCheck:Boolean,notSetUnchange:Array,log:Boolean},watch:{data:{deep:!0,handler:function(e){e&&this.changeHandler()}},settings:{deep:!0,handler:function(e){e.type&&this.chartLib&&(this.chartHandler=this.chartLib[e.type]),this.changeHandler()}},width:"nextTickResize",height:"nextTickResize",events:{deep:!0,handler:"createEventProxy"},theme:{deep:!0,handler:"themeChange"},themeName:"themeChange",resizeable:"resizeableHandler"},computed:{canvasStyle:function(){return{width:this.width,height:this.height,position:"relative"}},chartColor:function(){return this.colors||this.theme&&this.theme.color||B}},methods:{dataHandler:function(){if(this.chartHandler){var e=this.data,t=e,i=t.columns,n=void 0===i?[]:i,r=t.rows,a=void 0===r?[]:r,o={tooltipVisible:this.tooltipVisible,legendVisible:this.legendVisible,echarts:this.echarts,color:this.chartColor,tooltipFormatter:this.tooltipFormatter,_once:this._once};this.beforeConfig&&(e=this.beforeConfig(e));var s=this.chartHandler(n,a,this.settings,o);s&&("function"===typeof s.then?s.then(this.optionsHandler):this.optionsHandler(s))}},nextTickResize:function(){this.$nextTick(this.resize)},resize:function(){this.cancelResizeCheck?this.echartsResize():this.$el&&this.$el.clientWidth&&this.$el.clientHeight&&this.echartsResize()},echartsResize:function(){this.echarts&&this.echarts.resize()},optionsHandler:function(t){var i=this;if(this.legendPosition&&t.legend&&(t.legend[this.legendPosition]=10,~["left","right"].indexOf(this.legendPosition)&&(t.legend.top="middle",t.legend.orient="vertical")),t.color=this.chartColor,W.forEach(function(e){i[e]&&(t[e]=i[e])}),this.animation&&J(t,this.animation),this.markArea||this.markLine||this.markPoint){var n={markArea:this.markArea,markLine:this.markLine,markPoint:this.markPoint},r=t.series;A(r)?r.forEach(function(e){Z(e,n)}):S(r)&&Z(r,n)}this.extend&&I(t,this.extend),this.afterConfig&&(t=this.afterConfig(t));var a=this.setOptionOpts;!this.settings.bmap&&!this.settings.amap||S(a)||(a=!1),this.notSetUnchange&&this.notSetUnchange.length&&(this.notSetUnchange.forEach(function(e){var n=t[e];n&&(F(n,i._store[e])?t[e]=void 0:i._store[e]=w(n))}),S(a)?a.notMerge=!1:a=!1),this._isDestroyed||(this.log&&console.log(t),this.echarts.setOption(t,a),this.$emit("ready",this.echarts,t,e),this._once["ready-once"]||(this._once["ready-once"]=!0,this.$emit("ready-once",this.echarts,t,e)),this.judgeWidth&&this.judgeWidthHandler(t),this.afterSetOption&&this.afterSetOption(this.echarts,t,e),this.afterSetOptionOnce&&!this._once["afterSetOptionOnce"]&&(this._once["afterSetOptionOnce"]=!0,this.afterSetOptionOnce(this.echarts,t,e)))},judgeWidthHandler:function(e){var t=this,i=this.widthChangeDelay,n=this.resize;this.$el.clientWidth||this.$el.clientHeight?n():this.$nextTick(function(e){t.$el.clientWidth||t.$el.clientHeight?n():setTimeout(function(e){n(),t.$el.clientWidth&&t.$el.clientHeight||console.warn(" Can't get dom width or height ")},i)})},resizeableHandler:function(e){e&&!this._once.onresize&&this.addResizeListener(),!e&&this._once.onresize&&this.removeResizeListener()},init:function(){if(!this.echarts){var t=this.themeName||this.theme||V;this.echarts=e.init(this.$refs.canvas,t,this.initOptions),this.data&&this.changeHandler(),this.createEventProxy(),this.resizeable&&this.addResizeListener()}},addResizeListener:function(){window.addEventListener("resize",this.resizeHandler),this._once.onresize=!0},removeResizeListener:function(){window.removeEventListener("resize",this.resizeHandler),this._once.onresize=!1},addWatchToProps:function(){var e=this,t=this._watchers.map(function(e){return e.expression});Object.keys(this.$props).forEach(function(i){if(!~t.indexOf(i)&&!~D.indexOf(i)){var n={};~["[object Object]","[object Array]"].indexOf(O(e.$props[i]))&&(n.deep=!0),e.$watch(i,function(){e.changeHandler()},n)}})},createEventProxy:function(){var e=this,t=this,i=Object.keys(this.events||{});i.length&&i.forEach(function(i){-1===e.registeredEvents.indexOf(i)&&(e.registeredEvents.push(i),e.echarts.on(i,function(e){return function(){if(e in t.events){for(var i=arguments.length,n=Array(i),r=0;r<i;r++)n[r]=arguments[r];t.events[e].apply(null,n)}}}(i)))})},themeChange:function(e){this.clean(),this.echarts=null,this.init()},clean:function(){this.resizeable&&this.removeResizeListener(),this.echarts.dispose()}},created:function(){this.echarts=null,this.registeredEvents=[],this._once={},this._store={},this.resizeHandler=g(this.resize,this.resizeDelay),this.changeHandler=g(this.dataHandler,this.changeDelay),this.addWatchToProps()},mounted:function(){this.init()},beforeDestroy:function(){this.clean()},_numerify:m},G=b({},U,{name:"VeLine",data:function(){return this.chartHandler=P,{}}});return G})},bb64:function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("el-col",{attrs:{span:24}},[i("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:e.formInline}},[i("el-form-item",{attrs:{label:"日期选择"}},[i("el-date-picker",{attrs:{type:"daterange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:e.formInline.value,callback:function(t){e.$set(e.formInline,"value",t)},expression:"formInline.value"}})],1),i("el-form-item",[i("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("查询")])],1)],1)],1),i("el-card",[i("ve-line",{attrs:{data:e.chartData}})],1)],1)},r=[],a=i("ba1a"),o=i.n(a),s={data:function(){return{chartData:"",formInline:{value:""}}},methods:{onSubmit:function(){console.log("查询")}},created:function(){this.chartData={columns:["日期","已完成","未完成","总数"],rows:[{"日期":"2019-10-17","已完成":1232,"未完成":123,"总数":1355},{"日期":"2019-10-18","已完成":1223,"未完成":232,"总数":1555},{"日期":"2019-10-19","已完成":2123,"未完成":443,"总数":2566},{"日期":"2019-10-20","已完成":4123,"未完成":231,"总数":4354},{"日期":"2019-10-21","已完成":3123,"未完成":223,"总数":3356},{"日期":"2019-10-22","已完成":1e3,"未完成":121,"总数":1121}]}},components:{VeLine:o.a}},l=s,c=i("2877"),h=Object(c["a"])(l,n,r,!1,null,"584c3be0",null);t["default"]=h.exports}}]);
//# sourceMappingURL=chunk-f0c5a190.4431bd08.js.map