(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[0],{44:function(e,t,n){},47:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){},72:function(e,t,n){},73:function(e,t,n){},74:function(e,t,n){},75:function(e,t,n){},78:function(e,t,n){},79:function(e,t,n){},80:function(e,t,n){},81:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(12),s=n.n(c),i=(n(43),n(44),n(17)),l=n(4),r=n(13),o=n.n(r),d=(n(47),n(15)),u=n.n(d),v=n(21),j=n(22),g=n.n(j),b=function(){var e=Object(v.a)(u.a.mark((function e(t,n,a,c){var s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s={event_category:t,event_sub_category:n,tag_list:o.a.join(a,","),offset:c},e.next=3,g.a.get("https://api.codingninjas.com/api/v3/events",{params:s}).catch((function(e){return console.log(e)}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t,n,a,c){return e.apply(this,arguments)}}(),m=function(){var e=Object(v.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.get("https://api.codingninjas.com/api/v3/event_tags").catch((function(e){return console.log(e)}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),h="ALL_EVENTS",O="Upcoming",f=[O,"Archived","All Time Favorites"],p=[{name:h,value:"All Events",selectedImage:"https://www.codingninjas.com/assets-landing/images/all-events-selected.svg",unselectedImage:"https://www.codingninjas.com/assets-landing/images/all-events-unselected.svg"},{name:"WEBINAR",value:"Webinars",selectedImage:"https://www.codingninjas.com/assets-landing/images/webinar-selected.svg",unselectedImage:"https://www.codingninjas.com/assets-landing/images/webinar-unselected.svg"},{name:"CODING_EVENT",value:"Coding Events",selectedImage:"https://www.codingninjas.com/assets-landing/images/coding-events-selected.svg",unselectedImage:"https://www.codingninjas.com/assets-landing/images/coding-events-unselected.svg"},{name:"BOOTCAMP_EVENT",value:"Bootcamp Events",selectedImage:"https://files.codingninjas.in/bootcamp_events_selected-5398.png",unselectedImage:"https://files.codingninjas.in/bootcamp_events_unselected-5397.png"},{name:"WORKSHOP",value:"Workshop",selectedImage:"https://files.codingninjas.in/workshop_selected-5396.png",unselectedImage:"https://files.codingninjas.in/workshop_unselected-5395.png"}],x=(n(67),n(2)),w=(n(68),n(86)),N=n(90),S=n(87),y=n(88),_=n(1);function E(e){var t,n,a,c,s,i,l,r,d,u,v,j,g,b,m,h=new Date(null===e||void 0===e?void 0:e.event.event_start_time).toLocaleString("de-DE",{timeStyle:"short",hour12:!0}),O=new Date(null===e||void 0===e?void 0:e.event.event_start_time).toLocaleString("en-IE",{dateStyle:"medium"});new Date(null===e||void 0===e?void 0:e.event.registration_end_time).toLocaleString("de-DE",{timeStyle:"short",hour12:!0}),new Date(null===e||void 0===e?void 0:e.event.registration_end_time).toLocaleString("en-IE",{dateStyle:"medium"});return Object(_.jsx)("div",{className:"event-card-container",children:Object(_.jsxs)(N.a,{className:"event-card-c",children:[Object(_.jsx)(N.a.Img,{variant:"top",src:e.windowWidth>768?null===e||void 0===e?void 0:e.event.cover_picture:null===e||void 0===e||null===(t=e.event)||void 0===t?void 0:t.mobile_cover_picture,style:{maxWidth:"100%"},alt:null===e||void 0===e?void 0:e.event.name}),Object(_.jsxs)(N.a.Body,{className:"card-body-c",children:[Object(_.jsx)(N.a.Title,{className:"card-title-c",children:null===e||void 0===e?void 0:e.event.name}),Object(_.jsxs)("div",{className:"event-details",children:[Object(_.jsxs)("div",{className:"event-details-container",children:[Object(_.jsx)("p",{className:"card-details-label",children:" Starts from"}),Object(_.jsxs)("p",{className:"card-details-label-value",children:[" ","".concat(h,", ").concat(O)]})]}),Object(_.jsxs)("div",{className:"event-details-container",children:[Object(_.jsx)("p",{className:"card-details-label",children:" Entry fee "}),Object(_.jsxs)("p",{className:"card-details-label-value",children:[" ",(null===e||void 0===e||null===(n=e.event)||void 0===n?void 0:n.fees)?"".concat(null===e||void 0===e||null===(a=e.event)||void 0===a?void 0:a.currency," ").concat(null===e||void 0===e||null===(c=e.event)||void 0===c?void 0:c.fees):"Free"," "]})]}),Object(_.jsxs)("div",{className:"event-details-container",children:[Object(_.jsx)("p",{className:"card-details-label",children:" Venue "}),Object(_.jsxs)("p",{className:"card-details-label-value",children:[null===e||void 0===e||null===(s=e.event)||void 0===s?void 0:s.venue," "]})]})]}),Object(_.jsx)("hr",{}),Object(_.jsx)(N.a.Text,{className:"card-text-c",children:null===e||void 0===e||null===(i=e.event)||void 0===i?void 0:i.short_desc}),Object(_.jsxs)("div",{className:"card-badge-container",children:[o.a.map(null===e||void 0===e||null===(l=e.event)||void 0===l?void 0:l.card_tags.slice(0,Math.min(3,null===e||void 0===e||null===(r=e.event)||void 0===r?void 0:r.card_tags.length)),(function(e,t){return Object(_.jsxs)("div",{children:[Object(_.jsx)(S.a,{className:"card-badge-c",variant:"primary",children:e})," "]},t)})),(null===e||void 0===e||null===(d=e.event)||void 0===d?void 0:d.card_tags.length)>3?"+".concat((null===e||void 0===e||null===(u=e.event)||void 0===u?void 0:u.card_tags.length)-3," more"):null]})]}),Object(_.jsx)(N.a.Footer,{children:Object(_.jsxs)("div",{className:"card-footer-container",children:[Object(_.jsxs)("div",{className:"card-participants",children:[Object(_.jsx)("div",{className:"card-participant-img",children:o.a.map(e.event.registered_users.top_users,(function(e,t){return Object(_.jsx)(y.a,{placement:"top",delay:{show:0,hide:0},overlay:function(t){return function(e,t){return Object(_.jsx)(w.a,Object(x.a)(Object(x.a)({id:"button-tooltip"},e),{},{children:t}))}(t,e.name)},children:Object(_.jsx)("img",{className:"participant-img",src:e.image_url?e.image_url:"https://files.codingninjas.in/0000000000001270.png",alt:""})},t)}))}),(null===e||void 0===e||null===(v=e.event)||void 0===v||null===(j=v.registered_users)||void 0===j?void 0:j.show_users_count)&&Object(_.jsxs)("p",{className:"participant-data",children:["and"," ",Object(_.jsx)("span",{style:{fontWeight:"700",color:"#000"},children:null===e||void 0===e||null===(g=e.event)||void 0===g||null===(b=g.registered_users)||void 0===b?void 0:b.other_users_count})," ","others participating"," "]})]}),"REGISTRATIONS_OPEN"===(null===e||void 0===e||null===(m=e.event)||void 0===m?void 0:m.registration_status)&&Object(_.jsx)("div",{children:Object(_.jsx)("button",{className:"card-button-c",children:"REGISTER NOW"})})]})})]})})}function I(e){return Object(_.jsx)("div",{children:Object(_.jsx)("div",{className:"events-cards-list-container",children:o.a.map(null===e||void 0===e?void 0:e.events,(function(t,n){return Object(_.jsx)(E,{event:t,windowWidth:e.windowWidth},n)}))})})}n(72);function k(e){var t=Object(a.useState)(!1),n=Object(l.a)(t,2),c=n[0],s=n[1];return Object(_.jsxs)("div",{children:[Object(_.jsx)(S.a,{className:"category-tag ".concat(c&&"category-tag-selected"),variant:"primary",onClick:function(){s(!c),e.handleSelectedTags(e.text,!c)},children:e.text})," "]})}n(73);function T(e){var t=Object(a.useState)(12),n=Object(l.a)(t,2),c=n[0],s=n[1];Object(a.useEffect)((function(){e.mobileView&&s(e.tags.length)}),[e.mobileView,e.tags.length]),console.log(e.mobileView,c,e.tags);return Object(_.jsxs)("div",{className:"tags-list-container",children:[Object(_.jsx)("div",{className:"tags-list-heading",children:"Tags"}),Object(_.jsx)("div",{className:"tags-container",children:e.tags.slice(0,c).map((function(t,n){return Object(_.jsx)(k,{text:t,handleSelectedTags:e.handleSelectedTags},n)}))}),!e.mobileView&&e.tags.length>12&&Object(_.jsx)("div",{className:"see-more-tags",onClick:function(){s(12!==c?12:e.tags.length)},children:c>12?"See less tags":"See ".concat(e.tags.length-12," more tags")})]})}n(74);function C(e){return Object(_.jsx)("div",{children:Object(_.jsxs)("div",{className:"filter-tags-button-container",onClick:e.handleShowTagsInMobile,children:[Object(_.jsx)("img",{alt:"filter events",className:"filter-tags-button-img",src:"https://www.codingninjas.com/assets-landing/images/filter-events-wave.svg"}),Object(_.jsx)("div",{className:"filter-tags-button-text",children:" Filter Events "})]})})}var W=n(89);n(75);function L(e){var t=Object(a.useState)(p[0].name),n=Object(l.a)(t,2),c=n[0],s=n[1];return Object(_.jsx)("div",{children:Object(_.jsx)("div",{className:"events-bar",children:Object(_.jsx)(W.a,{className:"nav-elements-container flex-nowrap",defaultActiveKey:"/home",children:p.map((function(t,n){return Object(_.jsx)(W.a.Item,{onClick:function(){return n=t.name,s(n),void e.handleSelectedCategory(n);var n},children:Object(_.jsxs)(W.a.Link,{className:"nav-elements-c ".concat(c===t.name&&"event-category-selected"),children:[Object(_.jsx)("img",{alt:"something",className:"nav-elements-img",src:c===t.name?t.selectedImage:t.unselectedImage}),t.value]})},n)}))})})})}n(78);function A(e){var t=Object(a.useState)(f[0]),n=Object(l.a)(t,2),c=n[0],s=n[1];return Object(_.jsx)("div",{children:Object(_.jsx)(W.a,{defaultActiveKey:"Account",className:"flex-nowrap event-sub-category-list-container",bg:"dark",children:f.map((function(t,n){return Object(_.jsx)(W.a.Item,{children:Object(_.jsx)(W.a.Link,{className:"event-sub-category ".concat(c===t&&"event-sub-category-selected"),eventKey:"Upcoming",onClick:function(){return s(n=t),void e.handleSelectedSubCategory(n);var n},children:t})},n)}))})})}n(79);function P(e){var t=Object(a.useState)((function(){return 1})),n=Object(l.a)(t,2),c=n[0],s=n[1];return Object(_.jsxs)("div",{className:"paging-cotnaienr",children:[Object(_.jsx)("div",{className:"nav-arrow-container ".concat(c<=1&&"arrow-disabled"),onClick:function(){c>1&&(e.handleSelectedOffset(c-2),document.getElementById("page-number-input").value=c-1,s(c-1))},children:Object(_.jsx)("img",{className:"left-arrow-img",src:"https://files.codingninjas.in/left-arrow-5581.svg",alt:"left arrow"})}),Object(_.jsxs)("div",{className:"page-number-container",children:["Page",Object(_.jsx)("input",{type:"number",step:"1",min:"1",placeHolder:"1",max:e.totalPages,onKeyUp:function(t){return"Enter"===t.key&&function(t){t.target.value>=1&&t.target.value<=e.totalPages?(e.handleSelectedOffset(parseInt(t.target.value)-1),s(parseInt(t.target.value))):(e.handleSelectedOffset(1),document.getElementById("page-number-input").value=1,s(1))}(t)},className:"page-number-input",id:"page-number-input"}),"of ",e.totalPages]}),Object(_.jsx)("div",{className:"nav-arrow-container ".concat(c>=e.totalPages&&"arrow-disabled"),onClick:function(){c<e.totalPages&&(e.handleSelectedOffset(c),document.getElementById("page-number-input").value=c+1,s(c+1))},children:Object(_.jsx)("img",{className:"right-arrow-img",src:"https://files.codingninjas.in/right-arrow-5582.svg",alt:"left arrow"})})]})}function V(){var e=Object(a.useState)((function(){return[]})),t=Object(l.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)((function(){return h})),r=Object(l.a)(s,2),d=r[0],u=r[1],v=Object(a.useState)((function(){return O})),j=Object(l.a)(v,2),g=j[0],f=j[1],p=Object(a.useState)((function(){return[]})),x=Object(l.a)(p,2),w=x[0],N=x[1],S=Object(a.useState)((function(){return 0})),y=Object(l.a)(S,2),E=y[0],k=y[1],W=Object(a.useState)((function(){return!1})),V=Object(l.a)(W,2),B=V[0],R=V[1],D=Object(a.useState)(!1),F=Object(l.a)(D,2),K=F[0],M=F[1],G=Object(a.useState)(window.innerWidth),U=Object(l.a)(G,2),z=U[0],H=U[1];function J(){H(window.innerWidth)}Object(a.useEffect)((function(){return window.addEventListener("resize",J),function(){window.removeEventListener("resize",J)}}),[]),Object(a.useEffect)((function(){m().then((function(e){var t,n;c(null===e||void 0===e||null===(t=e.data)||void 0===t||null===(n=t.data)||void 0===n?void 0:n.tags)}))}),[]),Object(a.useEffect)((function(){b(d,g,w,E).then((function(e){var t;R(null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.data)}))}),[d,g,w,E]);return Object(_.jsxs)("div",{children:[Object(_.jsx)("div",{className:"events-outer-container",children:Object(_.jsxs)("div",{className:"events-container",children:[Object(_.jsx)(L,{handleSelectedCategory:function(e){u(e)}}),Object(_.jsx)(A,{handleSelectedSubCategory:function(e){f(e)}}),Object(_.jsxs)("div",{className:"events-tags-container",children:[Object(_.jsx)("div",{className:"events-cards-list-outer-container",children:(null===B||void 0===B?void 0:B.events)&&((null===B||void 0===B?void 0:B.events.length)?Object(_.jsxs)("div",{children:[Object(_.jsx)(I,{events:null===B||void 0===B?void 0:B.events,windowWidth:z}),Object(_.jsx)(P,{totalPages:B.page_count,handleSelectedOffset:function(e){k(e)}})]}):"No Events Found")}),n.length&&Object(_.jsxs)("div",{className:z>768?"events-tags-outer-container":"offcanvas offcanvas-end ".concat(K&&"show"," w-100"),id:z<=768&&"offcanvasRight",style:z<=768?{visibility:"visible"}:{display:"block"},children:[z<=768&&Object(_.jsxs)("div",{className:"offcanvas-header",children:[Object(_.jsx)("h5",{id:"offcanvasRightLabel",children:"Offcanvas right"}),Object(_.jsx)("button",{type:"button",className:"btn-close text-reset",onClick:function(){return M(!1)}})]}),Object(_.jsx)("div",{className:z<=768&&"offcanvas-body",children:Object(_.jsx)(T,{tags:n,handleSelectedTags:function(e,t){if(t)N([].concat(Object(i.a)(w),[e]));else{var n=o.a.remove(Object(i.a)(w),(function(t){return t!==e}));N(n)}},mobileView:z<=768})})]})]})]})}),z<=768&&n&&Object(_.jsx)(C,{handleShowTagsInMobile:function(){M(!0)}})]})}n(80);function B(){return Object(_.jsxs)("div",{className:"header-container",children:[Object(_.jsx)("div",{className:"header-title",children:"Events & News"}),Object(_.jsx)("div",{className:"header-subtitle",children:"Learn, Compete & Grow"})]})}function R(){return Object(_.jsxs)("div",{className:"App",children:[Object(_.jsx)(B,{}),Object(_.jsx)(V,{})]})}var D=document.getElementById("root");s.a.render(Object(_.jsx)(a.StrictMode,{children:Object(_.jsx)(R,{})}),D)}},[[81,1,2]]]);
//# sourceMappingURL=main.ec0f34c0.chunk.js.map