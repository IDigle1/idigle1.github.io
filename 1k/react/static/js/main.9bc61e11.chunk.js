(this.webpackJsonp1k=this.webpackJsonp1k||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(7),s=n(2),c=n(3),r=n(4),l=n(6),o=n(5),i=n(0),u=n(1),h=n.n(u),p=n(9),d=n.n(p),j=(n(15),function(e){Object(l.a)(n,e);var t=Object(o.a)(n);function n(e){return Object(c.a)(this,n),t.call(this,e)}return Object(r.a)(n,[{key:"render",value:function(){var e=this;return Object(i.jsx)("div",{class:"button-group",children:Object(i.jsx)("a",{type:"button",onClick:function(t){return e.props.handlerAddPlayer(t)},class:"add-player",children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0438\u0433\u0440\u043e\u043a\u0430"})})}}]),n}(h.a.Component)),b=function(e){Object(l.a)(n,e);var t=Object(o.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).state={accountInputValue:""},a.handlerChangeAccountInput=a.handlerChangeAccountInput.bind(Object(s.a)(a)),a}return Object(r.a)(n,[{key:"handlerChangeAccountInput",value:function(e){this.setState({accountInputValue:e.target.value})}},{key:"render",value:function(){var e=this;return Object(i.jsxs)("div",{className:"player",children:[Object(i.jsx)("button",{class:"close-button",onClick:function(){return e.props.handlerRemovePlayer(e.props.name)},children:Object(i.jsx)("i",{class:"close-icon"})}),Object(i.jsx)("h2",{class:"player-name",children:this.props.name}),Object(i.jsxs)("div",{class:"display-scores",children:[Object(i.jsx)("span",{class:"scores",children:this.props.scores}),Object(i.jsx)("span",{class:"last-action",children:this.props.lastAction}),Object(i.jsx)("span",{class:"misses",children:this.props.misses})]}),Object(i.jsxs)("div",{class:"input-group",children:[Object(i.jsx)("input",{type:"text",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043e\u0447\u043a\u0438",onChange:function(t){return e.handlerChangeAccountInput(t)}}),Object(i.jsx)("button",{class:"change-account",onClick:function(){return e.props.handlerChangeAccount(e.props.name,e.state.accountInputValue)},children:"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c"})]})]},this.props.name)}}]),n}(h.a.Component),O=function(e){Object(l.a)(n,e);var t=Object(o.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){var e=this,t=this.props.players.map((function(t){return Object(i.jsx)(b,{name:t.name,scores:t.scores,misses:t.misses,lastAction:t.lastAction,handlerRemovePlayer:e.props.handlerRemovePlayer,handlerChangeAccount:e.props.handlerChangeAccount})}));return Object(i.jsx)("div",{className:"player-list",children:t})}}]),n}(h.a.Component),m=function(e){Object(l.a)(n,e);var t=Object(o.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).state={players:[{name:"name",scores:"0",misses:"0",lastAction:"0"}]},a.handlerAddPlayer=a.handlerAddPlayer.bind(Object(s.a)(a)),a.handlerRemovePlayer=a.handlerRemovePlayer.bind(Object(s.a)(a)),a.handlerChangeAccount=a.handlerChangeAccount.bind(Object(s.a)(a)),a}return Object(r.a)(n,[{key:"handlerAddPlayer",value:function(e){e.preventDefalut();var t=prompt("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f");this.setState({players:this.state.players.concat({name:t,scores:0,misses:0,lastAction:"-"})})}},{key:"handlerRemovePlayer",value:function(e){this.setState({players:this.state.players.filter((function(t){return t.name!==e}))})}},{key:"handlerChangeAccount",value:function(e,t){this.setState({players:this.state.players.map((function(n,s){return n.name!==e?n:0!==+t?Object(a.a)(Object(a.a)({},n),{},{lastAction:t,scores:+n.scores+ +t}):n.misses<2?Object(a.a)(Object(a.a)({},n),{},{lastAction:"\u0411\u043e\u043b\u0442",misses:+n.misses+1}):Object(a.a)(Object(a.a)({},n),{},{lastAction:"\u0411\u043e\u043b\u0442 -120",scores:+n.scores-120,misses:0})}))})}},{key:"render",value:function(){return Object(i.jsxs)("div",{className:"container",children:[Object(i.jsx)(O,{players:this.state.players,handlerRemovePlayer:this.handlerRemovePlayer,handlerChangeAccount:this.handlerChangeAccount}),Object(i.jsx)(j,{handlerAddPlayer:this.handlerAddPlayer})]})}}]),n}(h.a.Component);d.a.render(Object(i.jsx)(m,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.9bc61e11.chunk.js.map