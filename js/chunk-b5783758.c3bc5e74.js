(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b5783758"],{"65a0":function(e,t,l){"use strict";var a=l("c4e4"),s=l.n(a);s.a},"8d50":function(e,t,l){"use strict";l.r(t);var a=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",[e._m(0),l("el-row",{staticClass:"rowbox",attrs:{gutter:10}},[l("el-col",{attrs:{span:10}},[l("el-card",[l("ul",{staticClass:"topBox"},e._l(e.imageBox,function(t){return l("li",{staticClass:"boxs",on:{click:e.openVisible}},[l("div",[l("img",{attrs:{src:t.url,alt:"图片加载失败"}})]),l("p",{staticClass:"demonstration"},[e._v(e._s(t.tip))])])}),0),l("div",{staticClass:"center"},[l("div"),l("h3",{staticClass:"personbd"},[e._v("人像比对")]),l("div")]),l("ul",{staticClass:"topBoxs"},[e._l(e.botImageBox,function(t){return l("li",{staticClass:"boxss",on:{click:e.openVisible2}},[l("p",{staticClass:"demonstrations"},[e._v(e._s(t.tip))]),l("div",[l("img",{attrs:{src:t.url,alt:"图片加载失败"}})])])}),l("li",{staticClass:"boxss"},[l("p",{staticClass:"demonstrations"},[e._v("相似度")]),l("div",[l("el-progress",{attrs:{type:"circle",width:112,percentage:25}})],1)])],2)])],1),l("el-col",{attrs:{span:7}},[l("el-card",[l("table",{staticClass:"table"},[l("tbody",[l("tr",[l("td",[e._v("躯干和颈部")]),l("td",[l("div",{staticStyle:{opacity:"0"}},[e._v("左：")]),l("el-select",{attrs:{size:"small"},model:{value:e.form.region,callback:function(t){e.$set(e.form,"region",t)},expression:"form.region"}},[l("el-option",{attrs:{label:"待测",value:"dc"}}),l("el-option",{attrs:{label:"正常",value:"zc"}}),l("el-option",{attrs:{label:"异常",value:"yc"}})],1)],1)]),l("tr",[l("td",[e._v("视力")]),l("td",[l("div",[e._v("左：")]),l("el-input",{attrs:{size:"small"},model:{value:e.input,callback:function(t){e.input=t},expression:"input"}})],1)]),l("tr",[l("td",{staticClass:"eyesBox"},[l("el-checkbox",{attrs:{size:"mini"},model:{value:e.checked,callback:function(t){e.checked=t},expression:"checked"}},[e._v("左眼矫正")]),l("el-checkbox",{attrs:{size:"mini"},model:{value:e.checked1,callback:function(t){e.checked1=t},expression:"checked1"}},[e._v("右眼矫正")])],1),l("td",[l("div",[e._v("右：")]),l("el-input",{attrs:{size:"small"},model:{value:e.input1,callback:function(t){e.input1=t},expression:"input1"}})],1)]),l("tr",[l("td",[e._v("辨色力")]),l("td",[l("div",{staticStyle:{opacity:"0"}},[e._v("左：")]),l("el-select",{attrs:{size:"small"},model:{value:e.form.region,callback:function(t){e.$set(e.form,"region",t)},expression:"form.region"}},[l("el-option",{attrs:{label:"待测",value:"dc"}}),l("el-option",{attrs:{label:"正常",value:"zc"}}),l("el-option",{attrs:{label:"异常",value:"yc"}})],1)],1)]),l("tr",[l("td",[e._v("听力")]),l("td",[l("div",[e._v("左：")]),l("el-select",{attrs:{size:"small"},model:{value:e.form.region,callback:function(t){e.$set(e.form,"region",t)},expression:"form.region"}},[l("el-option",{attrs:{label:"待测",value:"dc"}}),l("el-option",{attrs:{label:"正常",value:"zc"}}),l("el-option",{attrs:{label:"异常",value:"yc"}})],1)],1)]),l("tr",[l("td",[l("el-checkbox",{attrs:{size:"mini"},model:{value:e.checked2,callback:function(t){e.checked2=t},expression:"checked2"}},[e._v("助听装置")])],1),l("td",[l("div",[e._v("右：")]),l("el-select",{attrs:{size:"small"},model:{value:e.form.region,callback:function(t){e.$set(e.form,"region",t)},expression:"form.region"}},[l("el-option",{attrs:{label:"待测",value:"dc"}}),l("el-option",{attrs:{label:"正常",value:"zc"}}),l("el-option",{attrs:{label:"异常",value:"yc"}})],1)],1)]),l("tr",[l("td",[e._v("上肢")]),l("td",[l("div",[e._v("左：")]),l("el-select",{attrs:{size:"small"},model:{value:e.form.region,callback:function(t){e.$set(e.form,"region",t)},expression:"form.region"}},[l("el-option",{attrs:{label:"待测",value:"dc"}}),l("el-option",{attrs:{label:"正常",value:"zc"}}),l("el-option",{attrs:{label:"异常",value:"yc"}})],1)],1)]),l("tr",[l("td"),l("td",[l("div",[e._v("右：")]),l("el-select",{attrs:{size:"small"},model:{value:e.form.region,callback:function(t){e.$set(e.form,"region",t)},expression:"form.region"}},[l("el-option",{attrs:{label:"待测",value:"dc"}}),l("el-option",{attrs:{label:"正常",value:"zc"}}),l("el-option",{attrs:{label:"异常",value:"yc"}})],1)],1)]),l("tr",[l("td",[e._v("身高")]),l("td",[l("div",{staticStyle:{opacity:"0"}},[e._v("左：")]),l("el-input",{attrs:{size:"small"},model:{value:e.input2,callback:function(t){e.input2=t},expression:"input2"}})],1)]),l("tr",[l("td",[e._v("下肢")]),l("td",[l("div",[e._v("左：")]),l("el-select",{attrs:{size:"small"},model:{value:e.form.region,callback:function(t){e.$set(e.form,"region",t)},expression:"form.region"}},[l("el-option",{attrs:{label:"待测",value:"dc"}}),l("el-option",{attrs:{label:"正常",value:"zc"}}),l("el-option",{attrs:{label:"异常",value:"yc"}})],1)],1)]),l("tr",[l("td"),l("td",[l("div",[e._v("右：")]),l("el-select",{attrs:{size:"small"},model:{value:e.form.region,callback:function(t){e.$set(e.form,"region",t)},expression:"form.region"}},[l("el-option",{attrs:{label:"待测",value:"dc"}}),l("el-option",{attrs:{label:"正常",value:"zc"}}),l("el-option",{attrs:{label:"异常",value:"yc"}})],1)],1)])])])])],1),l("el-col",{attrs:{span:7}},[l("el-card",[l("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[l("span",[e._v("个人信息")]),l("el-button",{staticStyle:{float:"right",padding:"3px 0"},attrs:{type:"text"},on:{click:e.openVisible3}},[e._v("编辑")])],1),e._l(e.personal,function(t){return l("div",{staticClass:"text item"},[l("div",[e._v(e._s(t.tip))]),l("div",{staticClass:"personal-text"},[e._v(e._s(t.text))])])}),l("el-row",{staticClass:"botvideo"},[l("el-col",{attrs:{span:12}},[l("el-button",[e._v("申告信息查看")])],1),l("el-col",{attrs:{span:6}},[l("el-button",{attrs:{icon:"el-icon-video-play",circle:""}})],1),l("el-col",{attrs:{span:6}},[l("el-button",{attrs:{icon:"el-icon-download",circle:""}})],1)],1),l("el-row",{staticClass:"botvideo"},[l("el-col",{attrs:{span:12}},[l("el-button",{attrs:{type:"success",round:""}},[e._v("审核通过")])],1),l("el-col",{attrs:{span:12}},[l("el-button",{attrs:{type:"danger",round:""},on:{click:e.openVisible4}},[e._v("审核不通过")])],1)],1)],2)],1)],1),l("el-dialog",{attrs:{title:"照片详情",visible:e.dialogVisible},on:{"update:visible":function(t){e.dialogVisible=t}}},[l("el-carousel",{attrs:{"indicator-position":"none",autoplay:!1}},e._l(e.imageBox,function(e){return l("el-carousel-item",[l("img",{staticClass:"openImage",attrs:{src:e.url,alt:"图片加载失败",title:e.tip}})])}),1),l("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[l("el-button",{attrs:{type:"primary"},on:{click:function(t){e.dialogVisible=!1}}},[e._v("关 闭")])],1)],1),l("el-dialog",{attrs:{title:"照片详情",visible:e.dialogVisible2},on:{"update:visible":function(t){e.dialogVisible2=t}}},[l("el-carousel",{attrs:{"indicator-position":"none",autoplay:!1}},e._l(e.botImageBox,function(e){return l("el-carousel-item",[l("img",{staticClass:"openImage2",attrs:{src:e.url,alt:"图片加载失败",title:e.tip}})])}),1),l("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[l("el-button",{attrs:{type:"primary"},on:{click:function(t){e.dialogVisible2=!1}}},[e._v("关 闭")])],1)],1),l("el-dialog",{attrs:{title:"个人信息",visible:e.dialogVisible3},on:{"update:visible":function(t){e.dialogVisible3=t}}},[l("el-row",[l("el-col",{attrs:{push:5,span:12}},[l("el-form",{attrs:{"label-position":"right","label-width":"100px",size:"small",model:e.personals}},[l("el-form-item",{attrs:{label:"办理业务类型"}},[l("el-input",{attrs:{disabled:!0},model:{value:e.personals.type,callback:function(t){e.$set(e.personals,"type",t)},expression:"personals.type"}})],1),l("el-form-item",{attrs:{label:"流水号"}},[l("el-input",{attrs:{disabled:!0},model:{value:e.personals.serial,callback:function(t){e.$set(e.personals,"serial",t)},expression:"personals.serial"}})],1),l("el-form-item",{attrs:{label:"车型"}},[l("el-select",{attrs:{placeholder:"请选择车型"},model:{value:e.personals.car,callback:function(t){e.$set(e.personals,"car",t)},expression:"personals.car"}},[l("el-option",{attrs:{label:"C1",value:"C1"}}),l("el-option",{attrs:{label:"C2",value:"C2"}}),l("el-option",{attrs:{label:"C3",value:"C3"}}),l("el-option",{attrs:{label:"C4",value:"C4"}}),l("el-option",{attrs:{label:"C5",value:"C5"}}),l("el-option",{attrs:{label:"A1",value:"A1"}}),l("el-option",{attrs:{label:"A2",value:"A2"}}),l("el-option",{attrs:{label:"A3",value:"A3"}}),l("el-option",{attrs:{label:"B1",value:"B1"}}),l("el-option",{attrs:{label:"B2",value:"B2"}}),l("el-option",{attrs:{label:"D",value:"D"}}),l("el-option",{attrs:{label:"E",value:"E"}}),l("el-option",{attrs:{label:"F",value:"F"}}),l("el-option",{attrs:{label:"M",value:"M"}}),l("el-option",{attrs:{label:"N",value:"N"}}),l("el-option",{attrs:{label:"P",value:"P"}})],1)],1),l("el-form-item",{attrs:{label:"姓名"}},[l("el-input",{model:{value:e.personals.name,callback:function(t){e.$set(e.personals,"name",t)},expression:"personals.name"}})],1),l("el-form-item",{attrs:{label:"性别"}},[l("el-select",{attrs:{placeholder:"请选择性别"},model:{value:e.personals.gender,callback:function(t){e.$set(e.personals,"gender",t)},expression:"personals.gender"}},[l("el-option",{attrs:{label:"男",value:"男"}}),l("el-option",{attrs:{label:"女",value:"女"}})],1)],1),l("el-form-item",{attrs:{label:"证件类型"}},[l("el-select",{attrs:{placeholder:"请选择证件类型"},model:{value:e.personals.idcardType,callback:function(t){e.$set(e.personals,"idcardType",t)},expression:"personals.idcardType"}},[l("el-option",{attrs:{label:"居民身份证",value:"居民身份证"}}),l("el-option",{attrs:{label:"军官证",value:"军官证"}}),l("el-option",{attrs:{label:"士兵证",value:"士兵证"}}),l("el-option",{attrs:{label:"离退休正",value:"离退休正"}}),l("el-option",{attrs:{label:"香港永久性居民身份证",value:"香港永久性居民身份证"}}),l("el-option",{attrs:{label:"境外人员身份证明",value:"境外人员身份证明"}}),l("el-option",{attrs:{label:"外交人员身份证明",value:"外交人员身份证明"}}),l("el-option",{attrs:{label:"港澳台居民居住证",value:"港澳台居民居住证"}}),l("el-option",{attrs:{label:"外国人永久居留身份证明",value:"外国人永久居留身份证明"}})],1)],1),l("el-form-item",{attrs:{label:"证件号码"}},[l("el-input",{model:{value:e.personals.idcardNumber,callback:function(t){e.$set(e.personals,"idcardNumber",t)},expression:"personals.idcardNumber"}})],1),l("el-form-item",{attrs:{label:"联系电话"}},[l("el-input",{model:{value:e.personals.phone,callback:function(t){e.$set(e.personals,"phone",t)},expression:"personals.phone"}})],1),l("el-form-item",{attrs:{label:"登记住所地址"}},[l("el-input",{model:{value:e.personals.address,callback:function(t){e.$set(e.personals,"address",t)},expression:"personals.address"}})],1)],1)],1)],1),l("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[l("el-button",{on:{click:function(t){e.dialogVisible3=!1}}},[e._v("关 闭")]),l("el-button",{attrs:{type:"primary"},on:{click:function(t){e.dialogVisible3=!1}}},[e._v("保 存")])],1)],1),l("el-dialog",{attrs:{title:"提示",width:"25%",visible:e.dialogVisible4},on:{"update:visible":function(t){e.dialogVisible4=t}}},[l("span",{staticStyle:{color:"red"}},[e._v("确定不通过吗？请选择不通过原因")]),l("el-form",{attrs:{model:e.reason}},[l("el-select",{attrs:{placeholder:"请选择不合格原因"},model:{value:e.reason,callback:function(t){e.reason=t},expression:"reason"}},[l("el-option",{attrs:{label:"矫正但未佩戴眼镜",value:"矫正但未佩戴眼镜"}}),l("el-option",{attrs:{label:"中途换人代替体检",value:"中途换人代替体检"}}),l("el-option",{attrs:{label:"身高不足",value:"身高不足"}}),l("el-option",{attrs:{label:"视力障碍",value:"视力障碍"}}),l("el-option",{attrs:{label:"上肢异常",value:"上肢异常"}}),l("el-option",{attrs:{label:"下肢异常",value:"下肢异常"}}),l("el-option",{attrs:{label:"监控照片信息不全",value:"监控照片信息不全"}}),l("el-option",{attrs:{label:"准驾车型选择错误",value:"准驾车型选择错误"}}),l("el-option",{attrs:{label:"其他",value:"其他"}})],1)],1),l("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[l("el-button",{on:{click:function(t){e.dialogVisible4=!1}}},[e._v("取 消")]),l("el-button",{attrs:{type:"primary"},on:{click:function(t){e.dialogVisible4=!1}}},[e._v("确 认")])],1)],1)],1)},s=[function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",[l("span",{staticClass:"top"},[e._v("待审核:10")]),l("span",{staticClass:"top1"},[e._v("已审核:1")]),l("span",{staticClass:"top2"},[e._v("审核通过:2")]),l("span",{staticClass:"top3"},[e._v("审核不通过:0")])])}],o={data:function(){return{form:{region:"dc"},input:"5.0",input1:"5.0",input2:"170",checked:!0,checked1:!1,checked2:!1,reason:"",personal:[{tip:"办理业务类型",text:"期满换证"},{tip:"流水号",text:"1910100006520"},{tip:"车型",text:"C1"},{tip:"姓名",text:"高佳琪"},{tip:"性别",text:"男"},{tip:"证件类型",text:"居民身份证"},{tip:"证件号码",text:"140424199707073639"},{tip:"联系电话",text:"18835567639"},{tip:"登记住所地址",text:"山西省长治市屯留县李高乡古城村"}],personals:{type:"期满换证",serial:"123456789",car:"C1",name:"高佳琪",gender:"男",idcardType:"居民身份证",idcardNumber:"140424199707073639",phone:"18835567639",address:"山西省长治市屯留县李高乡古城村"},imageBox:[{tip:"抓拍照片",url:"http://tm-pictures.obs.cn-north-1.myhuaweicloud.com/PhotoResources/2019/10/10/6600/1910100006520/PathQueren.jpg"},{tip:"躯干和颈部",url:"https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"},{tip:"视力(左)",url:"https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"},{tip:"视力(右)",url:"https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"},{tip:"辨色力",url:"https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"},{tip:"听力",url:"https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"},{tip:"上肢",url:"https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"},{tip:"腿部",url:"https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"}],dialogVisible:!1,dialogVisible2:!1,dialogVisible3:!1,dialogVisible4:!1,botImageBox:[{tip:"身份证照片",url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1571838531908&di=ea22fe2c4a178b7dca9e74e5f6044e91&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201806%2F30%2F20180630120752_ZPjMw.thumb.700_0.jpeg"},{tip:"体检照片",url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1571838531908&di=ea22fe2c4a178b7dca9e74e5f6044e91&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201806%2F30%2F20180630120752_ZPjMw.thumb.700_0.jpeg"}]}},methods:{openVisible:function(){this.dialogVisible=!0},openVisible2:function(){this.dialogVisible2=!0},openVisible3:function(){this.dialogVisible3=!0},openVisible4:function(){this.dialogVisible4=!0}}},i=o,r=(l("65a0"),l("2877")),n=Object(r["a"])(i,a,s,!1,null,"b7ee7970",null);t["default"]=n.exports},c4e4:function(e,t,l){}}]);
//# sourceMappingURL=chunk-b5783758.c3bc5e74.js.map