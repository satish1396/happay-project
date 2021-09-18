(this["webpackJsonpcart-app"]=this["webpackJsonpcart-app"]||[]).push([[0],{50:function(e,t,c){},51:function(e,t,c){},56:function(e,t,c){},62:function(e,t,c){"use strict";c.r(t);var n=c(1),i=c(0),a=c.n(i),s=c(16),r=c.n(s),d=(c(50),c(4)),l=(c(51),c(17)),o="qnt_up",j="qnt_down",b="remove_item";function u(e){return{type:o,id:e}}function h(e){return{type:j,id:e}}var m=function(e){return{state:e}},p=Object(l.b)(m)((function(e){var t=e.item,c=e.dispatch,i=e.state.find((function(e){return e.id===t.id})),a=i?i.quantity:0;return Object(n.jsxs)("div",{className:"cart",children:[Object(n.jsx)("img",{className:"cart_img bottom-margin",src:t.img_url}),Object(n.jsxs)("div",{className:"flex",children:[Object(n.jsx)("div",{className:"item_name",children:Object(n.jsx)("h3",{children:t.name})}),Object(n.jsx)("div",{className:"price",children:Object(n.jsxs)("h3",{children:[t.original_price&&Object(n.jsx)("span",{className:"left-margin gray",children:Object(n.jsx)("strike",{children:"$ ".concat(t.original_price," ")})}),Object(n.jsx)("span",{children:"$ "+t.final_price})]})})]}),Object(n.jsx)("div",{className:"item-description",children:t.description}),0!==a?Object(n.jsxs)("div",{className:"border-blue",children:[Object(n.jsx)("div",{children:Object(n.jsx)("button",{onClick:function(){return c(h(t.id))},className:"blue button",children:"-"})}),Object(n.jsx)("div",{className:"addtocart center",children:a}),Object(n.jsx)("div",{children:Object(n.jsx)("button",{onClick:function(){return c(u(t.id))},className:"blue button",children:"+"})})]}):Object(n.jsx)("div",{className:"border-blue",children:Object(n.jsx)("button",{className:"addtocart button",onClick:function(){return c(u(t.id))},children:"Add to Cart"})})]})})),O=[{id:1,name:"food card",description:"This card is used for spending on Food merchants",final_price:21,original_price:30,img_url:"https://react-coding-assignment.s3.ap-south-1.amazonaws.com/cards/orange_card.png"},{id:2,name:"travel card",description:"This card is used for spending on Travel and hotel bookings",final_price:20,img_url:"https://react-coding-assignment.s3.ap-south-1.amazonaws.com/cards/blue_card.png"},{id:3,name:"epic card",description:"Use this card and get benefits on every transaction",final_price:40,img_url:"https://react-coding-assignment.s3.ap-south-1.amazonaws.com/cards/golden_card.png"},{id:4,name:"happay premium card",description:"Use this card and get benefits on every transaction",final_price:40,img_url:"https://react-coding-assignment.s3.ap-south-1.amazonaws.com/cards/black_card.png"}];function x(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("div",{className:"popular",children:Object(n.jsx)("h1",{children:"Most Popular"})}),Object(n.jsx)("div",{className:"center",children:Object(n.jsx)("div",{id:"cart-items",children:O.map((function(e,t){return Object(n.jsx)(p,{item:e},t)}))})})]})}c(56);var f=c(19);var g=Object(l.b)(m)((function(e){var t=0,c=0;return Object(n.jsxs)("div",{className:"wrap cf",children:[Object(n.jsx)("div",{className:"heading cf",children:Object(n.jsx)(f.b,{to:"/",className:"continue",children:"Back to Home"})}),Object(n.jsx)("h1",{className:"projTitle",children:"Order Summary"}),Object(n.jsxs)("div",{className:"summary_cards",children:[Object(n.jsxs)("div",{className:"quantity",children:[Object(n.jsx)("ol",{className:"cartWrap",children:e.state.map((function(i,a){return t+=O.find((function(e){return i.id===e.id})).final_price*i.quantity,O.find((function(e){return i.id===e.id})).original_price&&(c+=(O.find((function(e){return i.id===e.id})).original_price-O.find((function(e){return i.id===e.id})).final_price)*i.quantity),Object(n.jsx)("li",{className:"items odd",children:Object(n.jsx)("div",{className:"infoWrap",children:Object(n.jsxs)("div",{className:"cartSection",children:[Object(n.jsx)("h3",{children:O.find((function(e){return i.id===e.id})).name}),Object(n.jsxs)("p",{children:[" ",Object(n.jsx)("button",{onClick:function(){return e.dispatch(h(i.id))},className:"summary_btn",children:"-"}),Object(n.jsx)("span",{className:"summary_count",children:i.quantity}),Object(n.jsx)("button",{onClick:function(){return e.dispatch(u(i.id))},className:"summary_btn",children:"+"}),"x","$".concat(O.find((function(e){return i.id===e.id})).final_price,".00")]})]})})})}))}),Object(n.jsx)("div",{className:"heading cf",children:Object(n.jsx)(f.b,{to:"/",className:"continue",children:"+ Add More Items"})})]}),Object(n.jsxs)("div",{className:"subtotal cf",children:[Object(n.jsx)("h3",{children:"Price Details"}),Object(n.jsxs)("ul",{children:[Object(n.jsxs)("li",{className:"totalRow",children:[Object(n.jsx)("span",{className:"label",children:"Subtotal"}),Object(n.jsx)("span",{className:"value",children:"$".concat(t,".00")})]}),Object(n.jsxs)("li",{className:"totalRow",children:[Object(n.jsx)("span",{className:"label",children:"Total Savings"}),Object(n.jsx)("span",{className:"value",children:0===e.state.length?"$0.00":"$".concat(c,".00")})]}),Object(n.jsxs)("li",{className:"totalRow",children:[Object(n.jsx)("span",{className:"label",children:"Shipping"}),Object(n.jsx)("span",{className:"value",children:0===e.state.length?"$0.00":"$5.00"})]}),Object(n.jsxs)("li",{className:"totalRow",children:[Object(n.jsx)("span",{className:"label",children:"Tax"}),Object(n.jsx)("span",{className:"value",children:0===e.state.length?"$0.00":"$4.00"})]}),Object(n.jsxs)("li",{className:"totalRow",children:[Object(n.jsxs)("div",{className:"totalRow final",children:[Object(n.jsx)("span",{className:"label",children:"To Pay"}),Object(n.jsx)("span",{className:"value",children:0===e.state.length?"$0.00":"".concat(t+9,".00")})]}),Object(n.jsx)("a",{href:"#",className:"btn continue",children:"Place Order"})]})]})]})]})]})})),v=c(81),N=c(12),C=c(82),_=c(41),y=c.n(_);function w(){return Object(n.jsx)("div",{className:"left-margin",children:Object(n.jsxs)("svg",{width:"36px",height:"36px",viewBox:"0 0 36 36",version:"1.1",xmlns:"http://www.w3.org/2000/svg",children:[Object(n.jsx)("title",{children:"Group"}),Object(n.jsx)("desc",{children:"Created with Sketch."}),Object(n.jsx)("g",{id:"Page-1",stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd",children:Object(n.jsx)("g",{id:"Happay-cards-HOME",transform:"translate(-62.000000, -35.000000)",fill:"#1D7CBF","fill-rule":"nonzero",children:Object(n.jsx)("g",{id:"Group-12",transform:"translate(62.000000, 32.000000)",children:Object(n.jsx)("g",{id:"Group",transform:"translate(0.000000, 3.000000)",children:Object(n.jsx)("path",{d:"M29.9367692,-2.27373675e-13 C33.2826974,-2.27373675e-13 35.9961796,2.70538719 36,6.04514742 L36,29.9548526 C35.9961796,33.2946128 33.2826974,36 29.9367692,36 L6.05630769,36 C2.71308288,35.9961919 0.00381516384,33.2919167 3.12638804e-13,29.9548526 L3.12638804e-13,6.04514742 C0.00381516384,2.70808334 2.71308288,0.00380813344 6.05630769,-2.27373675e-13 L29.9367692,-2.27373675e-13 Z M29.9367692,1.09874079 L6.05630769,1.10288698 C3.32534217,1.11048608 1.11377762,3.31921056 1.10769231,6.04514742 L1.10769231,29.9548526 C1.11150562,32.6850994 3.32794353,34.8974529 6.06323077,34.9012592 L29.9367692,34.9012592 C32.6723723,34.8982126 34.8892554,32.6854146 34.8923077,29.9548526 L34.8923077,6.04514742 C34.8892554,3.31458543 32.6723723,1.10178744 29.9367692,1.09874079 Z M31.8464377,8.71268071 C31.9387646,9.01663866 32.0068278,9.32762247 32.0499699,9.64262857 C32.1044019,9.97951541 32.1354404,10.3198555 32.1428571,10.6611429 C32.1319292,12.7908895 31.3751717,14.4127629 29.9750337,15.7523306 C28.9713446,16.7257604 27.6959054,17.362155 26.3223811,17.5748624 C25.7309081,17.6703481 25.1326053,17.662045 24.5370344,17.7007928 C23.2943762,17.7758097 22.065432,18.0044575 20.8775518,18.3816475 C19.3148612,18.8867531 18.4187729,20.0035209 18.0759098,21.6074041 C17.813645,22.8323008 17.6410608,24.0751523 17.5595662,25.3258117 C17.4366273,27.27289 16.7399733,28.9736429 15.3111495,30.3256653 C14.3015737,31.2947466 13.0107122,31.9085846 11.6298111,32.0762368 C9.76113913,32.3197946 8.04818982,31.9004877 6.55379864,30.736669 C5.05940746,29.5728504 4.19610286,28.0035634 3.92290521,26.1104552 C3.44207733,22.769839 5.6372205,19.2991407 9.22157376,18.4577593 C9.81228518,18.3326861 10.4131442,18.263198 11.0164824,18.2501817 C12.4199994,18.1950273 13.814446,17.9965935 15.1786487,17.6578934 C16.7386073,17.2662636 17.6811392,16.2615878 18.1045956,14.7158263 C18.4336429,13.5391502 18.5688692,12.3155499 18.5048301,11.0942882 C18.347465,7.61950335 20.7609319,4.56651098 24.1423795,3.9628895 C27.523827,3.35926802 30.8219782,5.39268066 31.8464377,8.71268071 Z M26.3893444,20.5714286 C29.5934914,20.5728214 32.1294369,23.0978446 32.1428571,26.3544669 C32.1442789,27.8891407 31.5359088,29.3614461 30.4517293,30.4471283 C29.3675498,31.5328106 27.8964824,32.1428571 26.362509,32.1428571 C23.2080075,32.1535633 20.5821634,29.5332308 20.5714286,26.3705755 C20.5707019,24.8286106 21.1841138,23.3499059 22.2759622,22.2615892 C23.3678106,21.1732726 24.8480973,20.565051 26.3893444,20.5714286 Z M13.7338306,5.55188202 C15.3890267,7.20707651 15.8837649,9.69655188 14.9872276,11.8588562 C14.0906902,14.0211606 11.9795509,15.4301858 9.6387506,15.4285714 C6.48709788,15.4352642 3.86384991,12.81336 3.85714286,9.64695797 C3.85551701,7.30616003 5.26454369,5.19502272 7.42685017,4.29848628 C9.58915664,3.40194983 12.0786345,3.89668752 13.7338306,5.55188202 Z",id:"Combined-Shape"})})})})})]})})}var k=c(83);var S=Object(l.b)(m)((function(e){var t=Object(d.f)(),c=Object(N.a)((function(e){return{badge:{right:-3,top:13,border:"2px solid ".concat(e.palette.background.paper),padding:"0 4px"}}}))(v.a),i=0;return e.state.forEach((function(e){i+=e.quantity})),Object(n.jsx)("div",{children:Object(n.jsxs)("div",{className:"header",children:[Object(n.jsxs)("div",{id:"logo",children:[Object(n.jsx)(w,{}),Object(n.jsx)("h2",{id:"heading",className:"left-margin",children:"Happay"})]}),Object(n.jsxs)("div",{className:"flex",children:[Object(n.jsx)(C.a,{"aria-label":"cart",children:Object(n.jsx)(c,{onClick:function(){return t.push("/summery")},badgeContent:i,color:"secondary",children:Object(n.jsx)(y.a,{})})}),Object(n.jsx)("span",{className:"left-margin pointer right-margin top-margin",children:Object(n.jsx)(k.a,{src:"/broken-image.jpg"})})]})]})})}));var q=function(){return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(S,{}),Object(n.jsxs)(d.c,{children:[Object(n.jsx)(d.a,{exact:!0,path:"/summery",component:g}),Object(n.jsx)(d.a,{path:"/",component:x})]})]})},E=c(30),T=c(42),$=JSON.parse(localStorage.getItem("state"))||[];var L=Object(E.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case o:var c=e.find((function(e){return e.id===t.id}));return c?e.map((function(e){return e.id===t.id?{id:e.id,quantity:e.quantity+1}:e})):[].concat(Object(T.a)(e),[{id:t.id,quantity:1}]);case j:var n=e.find((function(e){return e.id===t.id}));return n?1===n.quantity?e.filter((function(e){return e.id!==t.id})):e.map((function(e){return e.id===t.id?{id:e.id,quantity:e.quantity-1}:e})):e;case b:return e.filter((function(e){return e.id!==t.id}));default:return e}}),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),M=L;L.subscribe((function(){localStorage.setItem("state",JSON.stringify(L.getState()))})),r.a.render(Object(n.jsx)(a.a.StrictMode,{children:Object(n.jsx)(f.a,{children:Object(n.jsx)(l.a,{store:M,children:Object(n.jsx)(q,{})})})}),document.getElementById("root"))}},[[62,1,2]]]);
//# sourceMappingURL=main.f93253fe.chunk.js.map