_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[8],{"/EDR":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("23aj")}])},"23aj":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return k}));var a=n("q1tI"),s=n.n(a),r=n("5M6V"),o=n("o0o1"),c=n.n(o),i=n("ODXe"),l=n("HaE+"),u=n("ml1f"),f=n("UdIf"),m=n("fO3t"),p=["accountholders","balances","transactions","accounts","offline_access","openid"];function d(){return h.apply(this,arguments)}function h(){return(h=Object(l.a)(c.a.mark((function e(){var t,n,a,s,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v();case 2:return t=e.sent,n=Object(i.a)(t,3),a=n[0],s=n[1],r=n[2],Object(m.b)(r),Object(m.c)(s),e.abrupt("return",a);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(){return b.apply(this,arguments)}function b(){return(b=Object(l.a)(c.a.mark((function e(){var t,n,a,s,r,o,l,m;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(u.a)(),n=Object(u.a)(),e.next=4,Object(u.b)();case 4:return a=e.sent,s=Object(i.a)(a,2),r=s[0],o=s[1],l={client_id:f.b,code_challenge:o,code_challenge_method:"S256",redirect_uri:f.a,scope:p.join(" "),response_type:"code",nonce:n,state:t},m=Object(u.c)(l),e.abrupt("return",["https://secure.stitch.money/connect/authorize?".concat(m),r,n]);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var y=n("VtrM"),g=n("YFqc"),N=n.n(g),w=s.a.createElement;function _(){var e=Object(y.a)("stitchUrl",d).data;return null!=e?w(N.a,{href:e},w("a",{className:"button is-large is-primary"},"Apply now")):w(N.a,{href:"/"},w("a",{className:"button is-large is-primary is-disabled"},"Apply now"))}var E=s.a.createElement;function O(){return E("section",{className:"hero"},E("div",{className:"hero-body"},E("div",{className:"container"},E("h1",{className:"title is-2"},r.b),E("h2",{className:"subtitle"},"Providing the financial services you'll need for your new Martian life!"),E(_,null))))}var j=s.a.createElement;function M(){return j("section",{className:"section"},j("div",{className:"container"},j("div",{className:"columns is-vcentered"},j("div",{className:"column"},j("h2",{className:"title is-3"},"Apply for your dome loan now!"),j("p",{className:"content is-medium"},"Olympus Mons is calling, and the great migration has begun. It's time to leave behind our earthly possessions and launch ourselves at new horizons.",j("br",null),j("br",null),"The team at ",j("a",{href:"#"},r.b)," will help you transfer all your wealth to your new home on Mars, ",j("strong",null,"the mightiest of the planets!"))),j("img",{className:"column box has-shadow",src:"/images/dome.jpg",alt:""}))))}var I=s.a.createElement;function x(){return I("section",{className:"section"},I("div",{className:"container"},I("h2",{className:"title is-3"},"Testimonials"),I("article",{className:"media"},I("figure",{className:"media-left"},I("p",{className:"image is-64x64"},I("img",{src:"/images/aria.svg",alt:""}))),I("div",{className:"media-content"},I("div",{className:"content"},I("p",null,I("strong",null,"Aria Mcfarland")," ",I("small",null,"@aria_on_mars")," ",I("small",null," - 3 days"),I("br",null),"Applying for a dome loan painless and easy! I was really worried that my immigration was going to be a long process, but with MM all I had to do was link my account and boom! I was pre-approved for a loan on the spot!")),I("nav",{className:"level is-mobile"},I("div",{className:"level-left"},I("a",{className:"level-item"},I("span",{className:"icon is-small"},I("i",{className:"fas fa-reply"}))),I("a",{className:"level-item"},I("span",{className:"icon is-small"},I("i",{className:"fas fa-retweet"}))),I("a",{className:"level-item"},I("span",{className:"icon is-small"},I("i",{className:"fas fa-heart"})))))))))}var T=s.a.createElement;function k(){return T(r.a,null,T(O,null),T(M,null),T(x,null))}},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var a=n("J4zp"),s=n("284h");t.__esModule=!0,t.default=void 0;var r,o=s(n("q1tI")),c=n("elyg"),i=n("nOHt"),l=new Map,u=window.IntersectionObserver,f={};var m=function(e,t){var n=r||(u?r=new u((function(e){e.forEach((function(e){if(l.has(e.target)){var t=l.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(e.target),l.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0);return n?(n.observe(e),l.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}l.delete(e)}):function(){}};function p(e,t,n,a){(0,c.isLocalURL)(t)&&(e.prefetch(t,n,a).catch((function(e){0})),f[t+"%"+n]=!0)}var d=function(e){var t=!1!==e.prefetch,n=o.default.useState(),s=a(n,2),r=s[0],l=s[1],d=(0,i.useRouter)(),h=d&&d.pathname||"/",v=o.default.useMemo((function(){var t=(0,c.resolveHref)(h,e.href);return{href:t,as:e.as?(0,c.resolveHref)(h,e.as):t}}),[h,e.href,e.as]),b=v.href,y=v.as;o.default.useEffect((function(){if(t&&u&&r&&r.tagName&&(0,c.isLocalURL)(b)&&!f[b+"%"+y])return m(r,(function(){p(d,b,y)}))}),[t,r,b,y,d]);var g=e.children,N=e.replace,w=e.shallow,_=e.scroll;"string"===typeof g&&(g=o.default.createElement("a",null,g));var E=o.Children.only(g),O={ref:function(e){e&&l(e),E&&"object"===typeof E&&E.ref&&("function"===typeof E.ref?E.ref(e):"object"===typeof E.ref&&(E.ref.current=e))},onClick:function(e){E.props&&"function"===typeof E.props.onClick&&E.props.onClick(e),e.defaultPrevented||function(e,t,n,a,s,r,o){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,c.isLocalURL)(n))&&(e.preventDefault(),null==o&&(o=a.indexOf("#")<0),t[s?"replace":"push"](n,a,{shallow:r}).then((function(e){e&&o&&(window.scrollTo(0,0),document.body.focus())})))}(e,d,b,y,N,w,_)}};return t&&(O.onMouseEnter=function(e){(0,c.isLocalURL)(b)&&(E.props&&"function"===typeof E.props.onMouseEnter&&E.props.onMouseEnter(e),p(d,b,y,{priority:!0}))}),(e.passHref||"a"===E.type&&!("href"in E.props))&&(O.href=(0,c.addBasePath)(y)),o.default.cloneElement(E,O)};t.default=d},fO3t:function(e,t,n){"use strict";function a(e){sessionStorage.setItem("stitchNonce",e)}function s(e){sessionStorage.setItem("stitchVerifier",e)}function r(){return sessionStorage.getItem("stitchVerifier")}n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return s})),n.d(t,"a",(function(){return r}))}},[["/EDR",0,2,1,3]]]);