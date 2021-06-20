(this.webpackJsonpcalendar=this.webpackJsonpcalendar||[]).push([[0],{130:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(3),r=n.n(i),s=(n(73),n(74),n(21)),l=n(22),c=n(24),u=n(23),d=n(65),h=n.n(d),f=(n(123),n(67)),m=(n(129),function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(e){var a;Object(s.a)(this,n),a=t.call(this,e);var o=localStorage.getItem(e.dateKey),i=a.getBgKey(e.dateKey),r=localStorage.getItem(i);return a.state={shiftName:o||"",isShaded:!!r},a}return Object(l.a)(n,[{key:"componentDidUpdate",value:function(){var e=localStorage.getItem(this.props.dateKey);this.state.shiftName!==e&&this.setState({shiftName:e});var t=this.getBgKey(this.props.dateKey),n=localStorage.getItem(t);this.state.isShaded!==n&&this.setState({isShaded:n})}},{key:"getBgKey",value:function(e){return"".concat(this.props.dateKey,"-bg")}},{key:"render",value:function(){var e=this.props,t=e.date,n=e.dateKey,a=e.onClick,i=this.state,r=i.shiftName,s=i.isShaded;return o.a.createElement("div",{className:"day-cell ".concat(s?"shaded":""),onClick:function(){return a(n)}},o.a.createElement("div",{className:"date"},o.a.createElement("div",{className:"date-number"}," ",t," "),o.a.createElement("div",{className:"shift-name"}," ",r," ")))}}]),n}(o.a.Component)),v=function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={displayedList:a.fullList},a}return Object(l.a)(n,[{key:"handleKeyDown",value:function(e){var t=this,n=e.target.value;if(13===e.which&&n.length>0){var a=this.fullList;a.push(n),localStorage.setItem("shifts-list",JSON.stringify(a)),e.target.value="",this.setState({displayedList:a})}else this.setState((function(e){return{displayedList:t.fullList.filter((function(e){return e.toLowerCase().startsWith(n.toLowerCase())}))}}))}},{key:"handleClickOutside",value:function(e){this.node.contains(e.target)||this.props.onClose(e)}},{key:"removeShift",value:function(e,t){e.stopPropagation();var n=this.fullList.filter((function(e){return e!==t}));localStorage.setItem("shifts-list",JSON.stringify(n)),this.setState({displayedList:n})}},{key:"render",value:function(){var e=this,t=this.state.displayedList,n=this.props,a=n.onClickName,i=n.onClose,r=n.onClear,s=n.toggleShaded;return o.a.createElement("div",{className:"day-details-wrapper",onClick:function(t){return e.handleClickOutside(t)}},o.a.createElement("div",{ref:function(t){return e.node=t},className:"day-details"},o.a.createElement("div",{className:"options-row"},o.a.createElement("div",{onClick:function(e){return i(e)}},"\u274c"),o.a.createElement("button",{onClick:function(e){return s(e)}},"Yoga Day"),o.a.createElement("button",{onClick:function(e){return r(e)}},"Clear")),o.a.createElement("input",{autoFocus:!0,type:"text",onKeyUp:this.handleKeyDown.bind(this)}),o.a.createElement("ul",{className:"shift-list"},t.map((function(t){return o.a.createElement("li",{key:t,onClick:function(e){return a(e,t)}},o.a.createElement("span",null,t),o.a.createElement("span",{className:"remove",onClick:function(n){return e.removeShift(n,t)}},"\u274c"))})))))}},{key:"fullList",get:function(){var e=localStorage.getItem("shifts-list");return e?JSON.parse(e):[]}}]),n}(o.a.Component),g=function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={showDetails:!1,selectedDateKey:null},a}return Object(l.a)(n,[{key:"getDateKey",value:function(e){return e.month()+"-"+e.date()+"-"+e.year()}},{key:"setShiftName",value:function(e,t,n){e.stopPropagation(),localStorage.setItem(n,t),this.setState({showDetails:!1})}},{key:"showDayDetails",value:function(e){this.setState({showDetails:!0,selectedDateKey:e})}},{key:"onClose",value:function(e){e.stopPropagation(),this.setState({showDetails:!1,selectedDateKey:null})}},{key:"onClear",value:function(e){e.stopPropagation(),this.setState((function(e){var t=e.selectedDateKey;return localStorage.removeItem(t),{selectedDateKey:null,showDetails:!1}}))}},{key:"toggleShaded",value:function(e,t){e.stopPropagation();var n="".concat(t,"-bg");localStorage.getItem(n)?localStorage.removeItem(n):localStorage.setItem(n,!0)}},{key:"render",value:function(){var e=this,t=this.state,n=t.showDetails,a=t.selectedDateKey;return o.a.createElement("div",{className:"custom-calendar"},o.a.createElement(h.a,{Select:f.a,dateCellContentRender:function(t){return o.a.createElement(m,{date:t.date(),dateKey:e.getDateKey(t),onClick:function(t){return e.showDayDetails(t)}})}}),n&&o.a.createElement(v,{onClickName:function(t,n){return e.setShiftName(t,n,a)},onClose:function(t){return e.onClose(t)},onClear:function(t){return e.onClear(t)},toggleShaded:function(t){return e.toggleShaded(t,a)}}))}}]),n}(o.a.Component);var p=function(){return o.a.createElement(g,null)},y=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function k(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(p,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/werkcal",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/werkcal","/service-worker.js");y?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):k(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):k(t,e)}))}}()},68:function(e,t,n){e.exports=n(130)},73:function(e,t,n){},74:function(e,t,n){}},[[68,1,2]]]);
//# sourceMappingURL=main.09048a6d.chunk.js.map