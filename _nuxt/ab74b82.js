(window.webpackJsonp=window.webpackJsonp||[]).push([[22,4,5,6,20,21],{283:function(t,e,n){"use strict";var o=n(2),r=n(289);o({target:"String",proto:!0,forced:n(290)("link")},{link:function(t){return r(this,"a","href",t)}})},284:function(t,e,n){var content=n(292);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(109).default)("1f9699de",content,!0,{sourceMap:!1})},288:function(t,e,n){"use strict";n.r(e);n(283);var o=n(1).a.extend({name:"TextLink",props:{link:{type:Object,required:!0},target:{type:String,default:"_blank"}}}),r=(n(291),n(46)),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("a",{staticClass:"link",attrs:{href:t.link.route,target:t.target}},[t._v("\n  "+t._s(t.link.text)+"\n")])}),[],!1,null,"04e264e0",null);e.default=component.exports},289:function(t,e,n){var o=n(7),r=n(24),l=n(13),c=/"/g,d=o("".replace);t.exports=function(t,e,n,o){var f=l(r(t)),x="<"+e;return""!==n&&(x+=" "+n+'="'+d(l(o),c,"&quot;")+'"'),x+">"+f+"</"+e+">"}},290:function(t,e,n){var o=n(3);t.exports=function(t){return o((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},291:function(t,e,n){"use strict";n(284)},292:function(t,e,n){var o=n(108)(!1);o.push([t.i,".link[data-v-04e264e0]{cursor:pointer;text-decoration:none}.link[data-v-04e264e0]:not(:hover){color:#6868de}.link[data-v-04e264e0]:hover{color:#4242c0}.link[data-v-04e264e0]:active{color:#6868de}",""]),t.exports=o},306:function(t,e,n){var content=n(328);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(109).default)("51ad917c",content,!0,{sourceMap:!1})},315:function(t,e,n){var content=n(338);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(109).default)("e0fc6f4a",content,!0,{sourceMap:!1})},323:function(t,e,n){"use strict";n.r(e);n(283);var o=n(1).a.extend({name:"Footer",data:()=>({text:"© 2022 Copyright: ",link:{route:"https://github.com/manuelguido/reflective-keys",text:"Reflective Keys"}})}),r=n(46),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",[e("span",{staticClass:"text-white"},[t._v("\n    "+t._s(t.text)+"\n  ")]),t._v(" "),e("TextLink",{attrs:{link:t.link}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{TextLink:n(288).default})},324:function(t,e,n){"use strict";n.r(e);n(283);var o=n(1).a.extend({name:"Footer",data:()=>({text:"Developed by: ",link:{route:"https://manuelguido.dev",text:"Manuel Guido"}})}),r=n(46),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",[e("span",{staticClass:"footer-author text-white"},[t._v("\n    "+t._s(t.text)+"\n  ")]),t._v(" "),e("TextLink",{attrs:{link:t.link}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{TextLink:n(288).default})},327:function(t,e,n){"use strict";n(306)},328:function(t,e,n){var o=n(108)(!1);o.push([t.i,".title[data-v-2890630a]{margin-bottom:10vh}@media(max-width:332px){.title[data-v-2890630a]{font-size:3rem}}@media(min-width:332px)and (max-width:576px){.title[data-v-2890630a]{font-size:3rem}}@media(min-width:576px)and (max-width:768px){.title[data-v-2890630a]{font-size:4rem}}@media(min-width:768px)and (max-width:992px){.title[data-v-2890630a]{font-size:4.5rem}}@media(min-width:992px)and (max-width:1200px){.title[data-v-2890630a]{font-size:5rem}}@media(min-width:1200px){.title[data-v-2890630a]{font-size:6rem}}",""]),t.exports=o},337:function(t,e,n){"use strict";n(315)},338:function(t,e,n){var o=n(108)(!1);o.push([t.i,".footer[data-v-172cc2c3]{background:hsla(0,0%,100%,.1);backdrop-filter:blur(5.4px);-webkit-backdrop-filter:blur(5.4px);bottom:0;display:flex;justify-content:space-between;position:fixed;width:100%}@media screen and (min-width:992px){.footer[data-v-172cc2c3]{padding:2rem 8rem}}@media screen and (max-width:992px){.footer[data-v-172cc2c3]{padding:2rem}}",""]),t.exports=o},341:function(t,e,n){var content=n(354);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(109).default)("178ab4b4",content,!0,{sourceMap:!1})},347:function(t,e,n){"use strict";n.r(e);var o=n(1).a.extend({name:"TextTItle",props:{text:{type:String,default:"Reflective Keys"}}}),r=(n(327),n(46)),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("h1",{staticClass:"title text-white"},[t._v(t._s(t.text))])}),[],!1,null,"2890630a",null);e.default=component.exports},351:function(t,e,n){"use strict";n.r(e);var o=n(1).a.extend({name:"Footer"}),r=(n(337),n(46)),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"footer"},[e("FooterCopyright"),t._v(" "),e("FooterAuthor")],1)}),[],!1,null,"172cc2c3",null);e.default=component.exports;installComponents(component,{FooterCopyright:n(323).default,FooterAuthor:n(324).default})},353:function(t,e,n){"use strict";n(341)},354:function(t,e,n){var o=n(108),r=n(355),l=n(356),c=o(!1),d=r(l);c.push([t.i,".homepage[data-v-0ca378ce]{background-image:url("+d+");background-repeat:no-repeat;background-position:0;background-size:cover;height:100vh;margin:0;padding:0;width:100vw}.homepage .filter[data-v-0ca378ce]{display:flex;flex-direction:column;justify-content:flex-start;align-items:center;padding-top:14vh;height:100vh;width:100vw;background-color:hsla(0,0%,9%,.45)}",""]),t.exports=c},355:function(t,e,n){"use strict";t.exports=function(t,e){return e||(e={}),"string"!=typeof(t=t&&t.__esModule?t.default:t)?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},356:function(t,e,n){t.exports=n.p+"img/wallpaper.a2463d9.jpg"},373:function(t,e,n){"use strict";n.r(e);var o={name:"IndexPage",data:function(){return{title:"Reflective Keys"}},head:function(){return{title:this.title}}},r=(n(353),n(46)),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"homepage"},[e("div",{staticClass:"filter"},[e("TextTitle"),t._v(" "),e("Piano"),t._v(" "),e("Footer")],1)])}),[],!1,null,"0ca378ce",null);e.default=component.exports;installComponents(component,{TextTitle:n(347).default,Piano:n(372).default,Footer:n(351).default})}}]);