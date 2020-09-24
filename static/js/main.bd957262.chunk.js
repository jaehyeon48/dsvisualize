(this.webpackJsonpdsvisualize=this.webpackJsonpdsvisualize||[]).push([[0],{19:function(e,t,a){e.exports=a(33)},24:function(e,t,a){},30:function(e,t,a){},31:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),i=a(16),s=a.n(i),r=a(9),c=a(1),o=(a(24),function(){var e=Object(c.f)();return l.a.createElement("div",{className:"main-page"},l.a.createElement("h1",{className:"main-page-header"},"Data Structures Visualizer"),l.a.createElement("div",{className:"select-data-structures"},l.a.createElement("div",{className:"data-structures-item sll",onClick:function(){e.push("/sll")}},"Singly Linked List"),l.a.createElement("div",{className:"data-structures-item dll",onClick:function(){e.push("/dll")}},"Doubly Linked List"),l.a.createElement("div",{className:"data-structures-item stack",onClick:function(){e.push("/stack")}},"Stack"),l.a.createElement("div",{className:"data-structures-item queue",onClick:function(){e.push("/queue")}},"Queue"),l.a.createElement("div",{className:"data-structures-item bst",onClick:function(){e.push("/bst")}},"Binary Search Tree")))}),u=function(){var e=Object(c.f)();return l.a.createElement("div",{className:"return-to-home",onClick:function(){e.push("/")}},l.a.createElement("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"home",className:"svg-inline--fa fa-home fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},l.a.createElement("path",{fill:"currentColor",d:"M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"})),l.a.createElement("span",null,"HOME"))},h=(a(30),function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(u,null),l.a.createElement("div",{className:"singly-linked-list"},l.a.createElement("h1",{className:"sll-header"},"Singly Linked List")))}),d=a(7),f=function(e){var t=e.nodes,a=Object(n.useRef)(null);Object(n.useEffect)((function(){var e=a.current,n=e.getContext("2d"),l=e.offsetWidth,s=e.offsetHeight;e.style.width="100%",e.style.height="100%",e.width=l,e.height=s,i(n,t,l,s)}),[t]);var i=function(e,t,a,n){var l,i,o,u,h,d,f;a>=1408?(l=.17*a,i=.2*n,o=.01*a,u=.05*n,h=.1*a,d=.15*n,f=24):a>=992?(l=.1682*a,i=.1748*n,o=.01*a,u=.05*n,h=.1024*a,d=.1878*n,f=22):a>=736?(l=.1502*a,i=.1748*n,o=.01*a,u=.05*n,h=.1264*a,d=.1878*n,f=18):a>=393&&(l=.1799*a,i=.19*n,o=.01*a,u=.05*n,h=.0868*a,d=.165*n,f=14);var m=t.length;t.forEach((function(t,v){if(e.strokeStyle="#003FFF",e.fillStyle="#000",e.textAlign="start",e.shadowBlur=2,e.font="normal ".concat(f,"px sans-serif"),v<4){var p=o+(l+h)*v,b=u,g=o+.1*l+(l+h)*v,E=u+.25*i;if(e.strokeRect(p,b,l,i),c(e,t,g,E,20,200),e.fillStyle="red",0===v){var x=e.measureText("head").width,y=o+(l-x)/2,k=.8*u;e.fillText("head",y,k)}if(0!==v){var N=o+l+(h+l)*(v-1),T=u+.333*i,M=o+(l+h)*v,w=u+.667*i;s(e,N,T,M,T),r(e,N,w,M,w)}if(v===m-1){e.fillStyle="red";var C=e.measureText("tail").width,O=o+(l-C)/2+(l+h)*v,S=1.65*u+i;e.fillText("tail",O,S)}}else if(v>=4&&v<8){var I=a-(o+l)-(h+l)*(v-4),L=u+i+d,P=a-(o+.9*l)-(h+l)*(v-4),j=u+1.25*i+d;if(e.strokeRect(I,L,l,i),c(e,t,P,j,20,200),4!==v){var A=a-o-(l+h)*(v-4),R=u+1.333*i+d,F=a-(o+l)-(h+l)*(v-5),z=u+1.667*i+d;s(e,A,R,F,R),r(e,A,z,F,z)}else{var V=a-o-.667*l,D=a-o-.333*l,B=u+i,H=u+i+d;s(e,V,B,V,H),r(e,D,B,D,H)}if(v===m-1){e.fillStyle="red";var q=e.measureText("tail").width,J=a-o-q-(l-q)/2-(l+h)*(v-4),W=1.8*u+2*i+d;e.fillText("tail",J,W)}}else if(v>=8){var Q=o+(l+h)*(v-8),U=u+2*i+2*d,G=o+.1*l+(l+h)*(v-8),K=n-(u+.75*i);if(e.strokeRect(Q,U,l,i),c(e,t,G,K,20,200),8!==v){var X=o+l+(h+l)*(v-9),Y=n-(u+.667*i),Z=o+(l+h)*(v-8),$=n-(u+.333*i);s(e,X,Y,Z,Y),r(e,X,$,Z,$)}else{var _=o+.333*l,ee=o+.667*l,te=n-(u+i+d),ae=n-(u+i);s(e,_,te,_,ae),r(e,ee,te,ee,ae)}if(v===m-1){e.fillStyle="red";var ne=e.measureText("tail").width,le=o+(l-ne)/2+(l+h)*(v-8),ie=1.65*u+3*i+2*d;e.fillText("tail",le,ie)}}}))},s=function(e,t,a,n,l){e.beginPath();var i=n-t,s=l-a,r=Math.atan2(s,i);e.strokeStyle="#000",e.moveTo(t,a),e.lineTo(n,l),e.lineTo(n-9*Math.cos(r-Math.PI/6),l-9*Math.sin(r-Math.PI/6)),e.moveTo(n,l),e.lineTo(n-9*Math.cos(r+Math.PI/6),l-9*Math.sin(r+Math.PI/6)),e.stroke()},r=function(e,t,a,n,l){e.beginPath();var i=t-n,s=a-l,r=Math.atan2(s,i);e.moveTo(n,l),e.lineTo(t,a),e.lineTo(t-9*Math.cos(r-Math.PI/6),a-9*Math.sin(r-Math.PI/6)),e.moveTo(t,a),e.lineTo(t-9*Math.cos(r+Math.PI/6),a-9*Math.sin(r+Math.PI/6)),e.stroke()};function c(e,t,a,n,l){var i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0,s=arguments.length>6&&void 0!==arguments[6]?arguments[6]:0;if(i<=0)e.fillText(t,a,n);else{for(var r=1;r<=t.length;r++){var o=t.substr(0,r);if(e.measureText(o).width>i)return s<5?e.fillText(t.substr(0,r-1),a,n):e.fillText("",a,n),void c(e,t.substr(r-1),a,n+l,l,i,s+1)}s<5?e.fillText(t,a,n):e.fillText("",a,n)}}return l.a.createElement("canvas",{ref:a})},m=a(18),v=a(13),p=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;Object(v.a)(this,e),this.prev=a,this.next=n,this.data=t},b=new(function(){function e(){Object(v.a)(this,e),this.head=null,this.tail=null,this.length=0}return Object(m.a)(e,[{key:"append",value:function(e){var t=new p(e);0===this.length?this.head=this.tail=t:(t.prev=this.tail,this.tail.next=t,this.tail=t),this.length++}},{key:"pop",value:function(){0!==this.length?(1===this.length?this.head=this.tail=null:(this.tail.prev.next=null,this.tail=this.tail.prev),this.length--):console.log("The list is empty. Cannot pop().")}},{key:"unshift",value:function(e){var t=new p(e);0===this.length?this.head=this.tail=t:(t.next=this.head,this.head.prev=t,this.head=t),this.length++}},{key:"shift",value:function(){0!==this.length?(1===this.length?this.head=this.tail=null:(this.head.next.prev=null,this.head=this.head.next),this.length--):console.log("The list is empty. Cannot shift().")}},{key:"insertAt",value:function(e,t){if(e<0||e>this.length)return console.log("Insert index out of bounds."),-1;if(0===e)return this.unshift(t);if(e===this.length)return this.append(t);for(var a=new p(t),n=this.head,l=0;l<e-1;l++)n=n.next;a.prev=n,a.next=n.next,n.next.prev=a,n.next=a,this.length++}},{key:"removeAt",value:function(e){if(e<0||e>=this.length)return console.log("Remove index out of bounds."),-1;if(0!==this.length){if(0===e)return this.shift();if(e===this.length-1)return this.pop();for(var t=this.head,a=0;a<e-1;a++)t=t.next;t.next=t.next.next,t.next.next.prev=t,this.length--}else console.log("The list is empty. Cannot removeAt().")}},{key:"search",value:function(e){for(var t=this.head,a=0;t;){if(t.data===e)return a;t=t.next,a++}return null}},{key:"clear",value:function(){this.head=this.tail=null,this.length=0}},{key:"print",value:function(){for(var e=this.head;e;)console.log(e.data),e=e.next}},{key:"getLength",value:function(){return this.length}},{key:"getAllNodesForRender",value:function(){for(var e=[],t=this.head;t;)e.push(t.data),t=t.next;return e}}]),e}()),g=(a(31),function(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),a=t[0],i=t[1],s=Object(n.useState)(0),r=Object(d.a)(s,2),c=r[0],o=r[1],h=Object(n.useState)(!1),m=Object(d.a)(h,2),v=m[0],p=m[1],g=Object(n.useState)(""),E=Object(d.a)(g,2),x=E[0],y=E[1],k=Object(n.useState)(""),N=Object(d.a)(k,2),T=N[0],M=N[1];Object(n.useEffect)((function(){p(c>=12)}),[c]);var w=function(){i(b.getAllNodesForRender()),o(b.getLength()),y(""),M("")};return l.a.createElement(l.a.Fragment,null,l.a.createElement(u,null),l.a.createElement("div",{className:"doubly-linked-list"},l.a.createElement("h1",{className:"dll-header"},"Doubly Linked List"),l.a.createElement("div",{className:"dll-actions"},l.a.createElement("div",{className:"dll-length"},"Length: ",l.a.createElement("span",{style:function(){if(v)return{color:"red"}}()},c)," / 12"),l.a.createElement("div",{className:"dll-input"},l.a.createElement("label",{className:"dll-input-label"},"Index:",l.a.createElement("input",{className:"dll-input-field",type:"text",value:T,onChange:function(e){M(e.target.value)}})),l.a.createElement("label",{className:"dll-input-label"},"Data:",l.a.createElement("input",{className:"dll-input-field",type:"text",value:x,onChange:function(e){y(e.target.value)}}))),l.a.createElement("div",{className:"dll-buttons"},l.a.createElement("button",{className:"btn btn-dll-append",type:"button",onClick:function(){if(""===x.trim())return alert("Please input valid data.");b.append(x),w()},disabled:v},"APPEND"),l.a.createElement("button",{className:"btn btn-dll-pop",type:"button",onClick:function(){if(0===a.length)return alert("The list is empty.");b.pop(),w()}},"POP"),l.a.createElement("button",{className:"btn btn-dll-unshift",type:"button",onClick:function(){if(""===x.trim())return alert("Please input valid data");b.unshift(x),w()},disabled:v},"UNSHIFT"),l.a.createElement("button",{className:"btn btn-dll-shift",type:"button",onClick:function(){if(0===a.length)return alert("The list is empty.");b.shift(),w()}},"SHIFT"),l.a.createElement("button",{className:"btn btn-dll-insertAt",type:"button",onClick:function(){return""===T.trim()||isNaN(parseInt(T))?alert("Please input valid index"):""===x.trim()?alert("Please input valid data"):-1===b.insertAt(parseInt(T),x)?alert("Index out of bounds."):void w()},disabled:v},"INSERT AT"),l.a.createElement("button",{className:"btn btn-dll-removeAt",type:"button",onClick:function(){return""===T.trim()||isNaN(parseInt(T))?alert("Please input valid index"):-1===b.removeAt(parseInt(T))?alert("Index out of bounds."):void w()}},"REMOVE AT"),l.a.createElement("button",{className:"btn btn-dll-clear",type:"button",onClick:function(){if(0===a.length)return alert("The list is empty.");window.confirm("Would you clear the list?")&&(b.clear(),w())}},"CLEAR"))),l.a.createElement("div",{className:"node-items"},l.a.createElement(f,{nodes:a}))))});a(32);var E=function(){return l.a.createElement(r.a,{basename:"/dsvisualizer"},l.a.createElement(c.c,null,l.a.createElement(c.a,{path:"/",component:o,exact:!0}),l.a.createElement(c.a,{path:"/sll",component:h,exact:!0}),l.a.createElement(c.a,{path:"/dll",component:g,exact:!0})))};s.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(E,null)),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.bd957262.chunk.js.map