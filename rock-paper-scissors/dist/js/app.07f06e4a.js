(function(e){function t(t){for(var n,o,a=t[0],i=t[1],u=t[2],b=0,d=[];b<a.length;b++)o=a[b],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&d.push(s[o][0]),s[o]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);l&&l(t);while(d.length)d.shift()();return r.push.apply(r,u||[]),c()}function c(){for(var e,t=0;t<r.length;t++){for(var c=r[t],n=!0,a=1;a<c.length;a++){var i=c[a];0!==s[i]&&(n=!1)}n&&(r.splice(t--,1),e=o(o.s=c[0]))}return e}var n={},s={app:0},r=[];function o(t){if(n[t])return n[t].exports;var c=n[t]={i:t,l:!1,exports:{}};return e[t].call(c.exports,c,c.exports,o),c.l=!0,c.exports}o.m=e,o.c=n,o.d=function(e,t,c){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:c})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var c=Object.create(null);if(o.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(c,n,function(t){return e[t]}.bind(null,n));return c},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],i=a.push.bind(a);a.push=t,a=a.slice();for(var u=0;u<a.length;u++)t(a[u]);var l=i;r.push([0,"chunk-vendors"]),c()})({0:function(e,t,c){e.exports=c("56d7")},"2cd1":function(e,t,c){},"46b2":function(e,t,c){},"56d7":function(e,t,c){"use strict";c.r(t);c("e260"),c("e6cf"),c("cca6"),c("a79d");var n=c("7a23"),s=function(e){return Object(n["l"])("data-v-1cc7d0ec"),e=e(),Object(n["k"])(),e},r={class:"main-game"},o={key:1},a=Object(n["f"])("← "),i=s((function(){return Object(n["e"])("span",null,"Back to game select",-1)})),u=[a,i];function l(e,t,c,s,a,i){var l=Object(n["o"])("choose-game"),b=Object(n["o"])("score-bar"),d=Object(n["o"])("play-option"),p=Object(n["o"])("game-results");return Object(n["j"])(),Object(n["d"])("div",r,[e.isGameSelectVisible?(Object(n["j"])(),Object(n["c"])(l,{key:0})):(Object(n["j"])(),Object(n["d"])("div",o,[Object(n["e"])("button",{onClick:t[0]||(t[0]=function(){return i.back&&i.back.apply(i,arguments)})},u),Object(n["g"])(b),e.isGameResultsVisible?(Object(n["j"])(),Object(n["c"])(p,{key:1})):(Object(n["j"])(),Object(n["c"])(d,{key:0}))]))])}var b=c("5530"),d=function(e){return Object(n["l"])("data-v-40a92254"),e=e(),Object(n["k"])(),e},p=d((function(){return Object(n["e"])("h1",null,"Choose your game",-1)}));function O(e,t,c,s,r,o){return Object(n["j"])(),Object(n["d"])("section",null,[p,Object(n["e"])("div",null,[Object(n["e"])("button",{onClick:t[0]||(t[0]=function(e){return o.gameChosen("basic")})},"Rock, Paper, Scissors"),Object(n["e"])("button",{onClick:t[1]||(t[1]=function(e){return o.gameChosen("extra")})},"Rock, Paper, Scissors, Lizard, Spock")])])}var j=c("5502"),f={methods:Object(b["a"])({gameChosen:function(e){this.updateChosenGame(e),this.updateGameSelectScreen(!1)}},Object(j["c"])(["updateChosenGame","updateGameSelectScreen","updateCurrentOptions"]))},m=(c("bf74"),c("6b0d")),h=c.n(m);const y=h()(f,[["render",O],["__scopeId","data-v-40a92254"]]);var g=y,v=c("9b19"),k=c.n(v),G=c("5dc2"),C=c.n(G),S=function(e){return Object(n["l"])("data-v-55263c02"),e=e(),Object(n["k"])(),e},P={class:"main-container"},R={key:0},_=S((function(){return Object(n["e"])("span",{class:"sr-only"},"Rock Paper Scissors",-1)})),W=S((function(){return Object(n["e"])("img",{src:k.a,alt:"Rock Paper Scissors"},null,-1)})),w=[_,W],V={key:1},x=S((function(){return Object(n["e"])("span",{class:"sr-only"},"Rock Paper Scissors Lizard Spock",-1)})),z=S((function(){return Object(n["e"])("img",{src:C.a,alt:"Rock Paper Scissors Lizard Spock"},null,-1)})),I=[x,z],M=S((function(){return Object(n["e"])("span",null,"Score ",-1)})),$={class:"score"},L=S((function(){return Object(n["e"])("dt",null,"Games Played: ",-1)})),Y={key:0},N={key:1},T=S((function(){return Object(n["e"])("dt",null,"Win rate: ",-1)})),B={key:0},J={key:1},A=Object(n["f"])("0"),q=S((function(){return Object(n["e"])("span",null,"%",-1)})),D=[A,q];function E(e,t,c,s,r,o){return Object(n["j"])(),Object(n["d"])("section",null,[Object(n["e"])("div",P,["basic"===o.chosenGame?(Object(n["j"])(),Object(n["d"])("h2",R,w)):(Object(n["j"])(),Object(n["d"])("h2",V,I)),Object(n["e"])("div",null,[Object(n["e"])("p",null,[M,Object(n["e"])("span",$,Object(n["p"])(o.currentScore),1)])])]),Object(n["e"])("dl",null,[Object(n["e"])("div",null,[L,o.gamesPlayed>=0?(Object(n["j"])(),Object(n["d"])("dd",Y,Object(n["p"])(o.gamesPlayed),1)):(Object(n["j"])(),Object(n["d"])("dd",N,"0"))]),Object(n["e"])("div",null,[T,o.winRate>=0?(Object(n["j"])(),Object(n["d"])("dd",B,Object(n["p"])(o.winRate)+"%",1)):(Object(n["j"])(),Object(n["d"])("dd",J,D))])])])}var F={computed:{chosenGame:function(){return this.$store.getters.chosenGame},currentScore:function(){return this.$store.getters.gamesWon[this.chosenGame]},gamesPlayed:function(){return this.$store.getters.gamesPlayed[this.chosenGame]},winRate:function(){var e=this.gamesPlayed,t=this.currentScore,c=Math.round(t/e*100);return console.log(t+" "+e),c}}};c("d1ed");const H=h()(F,[["render",E],["__scopeId","data-v-55263c02"]]);var K=H,Q=["onClick"],U={class:"sr-only"};function X(e,t,c,s,r,o){return Object(n["j"])(),Object(n["d"])("div",{class:Object(n["i"])(e.chosenGame)},[Object(n["e"])("ul",null,[(Object(n["j"])(!0),Object(n["d"])(n["a"],null,Object(n["n"])(o.currentOptions,(function(e){return Object(n["j"])(),Object(n["d"])("li",{key:e,class:Object(n["i"])([e,"outer-icon"])},[Object(n["e"])("button",{onClick:function(t){return o.chosenOption(e)},class:"icon-image"},[Object(n["e"])("span",U,Object(n["p"])(e),1)],8,Q)],2)})),128))])],2)}var Z={data:function(){return{options:{basic:["paper","scissors","rock"],extra:["scissors","spock","paper","lizard","rock"]}}},computed:Object(b["a"])(Object(b["a"])({},Object(j["b"])(["chosenGame"])),{},{currentOptions:function(){var e=this.chosenGame;return this.options[e]}}),methods:Object(b["a"])(Object(b["a"])({},Object(j["c"])(["updatePlayerChose","updateGameResultsVisible","updateCurrentOptions"])),{},{chosenOption:function(e){this.updatePlayerChose(e),this.updateGameResultsVisible(!0)}}),mounted:function(){this.updateCurrentOptions(this.currentOptions)}};c("c36e");const ee=h()(Z,[["render",X],["__scopeId","data-v-8bf31444"]]);var te=ee,ce=function(e){return Object(n["l"])("data-v-22373ff4"),e=e(),Object(n["k"])(),e},ne={class:"choice choice_player"},se=ce((function(){return Object(n["e"])("h2",null,"You picked",-1)})),re={class:"icon-image"},oe={class:"sr-only"},ae={class:"choice choice_computer"},ie=ce((function(){return Object(n["e"])("h2",null,"The house picked",-1)})),ue={class:"icon-image"},le={class:"sr-only"},be={class:"game-status"},de={class:"play-again"};function pe(e,t,c,s,r,o){return Object(n["j"])(),Object(n["d"])(n["a"],null,[Object(n["e"])("div",{class:Object(n["i"])(["game-results",e.chosenGame])},[Object(n["e"])("div",ne,[se,Object(n["e"])("div",{class:Object(n["i"])([e.playerChose,"outer-icon"])},[Object(n["e"])("div",re,[Object(n["e"])("span",oe,Object(n["p"])(e.playerChose),1)])],2)]),Object(n["e"])("div",ae,[ie,Object(n["e"])("div",{class:Object(n["i"])([r.computerChose,"outer-icon"])},[Object(n["e"])("div",ue,[Object(n["e"])("span",le,Object(n["p"])(r.computerChose),1)])],2)])],2),Object(n["e"])("div",be,[Object(n["e"])("h3",null,Object(n["p"])(r.didPlayerWin),1),Object(n["e"])("div",de,[Object(n["e"])("button",{onClick:t[0]||(t[0]=function(){return o.startNewGame&&o.startNewGame.apply(o,arguments)})},"Play again")])])],64)}c("caad"),c("2532");var Oe={data:function(){return{computerChose:"",didPlayerWin:""}},computed:Object(b["a"])({currentOptions:function(){return this.$store.getters.currentOptions}},Object(j["b"])(["playerChose","chosenGame"])),methods:Object(b["a"])(Object(b["a"])({},Object(j["c"])(["updateGameResultsVisible","updateGamesWon","updateGamesPlayed"])),{},{runComputerChoice:function(){var e=Math.floor(Math.random()*this.currentOptions.length);this.computerChose=this.currentOptions[e],this.checkIfWon()},startNewGame:function(){this.updateGameResultsVisible(!1)},checkIfWon:function(){var e=this.$store.getters.playerChose,t=this.computerChose,c={rock:["lizard","scissors"],paper:["rock","spock"],scissors:["paper","lizard"],lizard:["spock","paper"],spock:["scissors","rock"]};if(e===t)this.didPlayerWin="You tied";else{var n=c[e].includes(t);1==n?(this.didPlayerWin="You Won",this.updateGamesWon()):this.didPlayerWin="You Lose"}this.updateGamesPlayed()}}),mounted:function(){this.runComputerChoice()}};c("7c80");const je=h()(Oe,[["render",pe],["__scopeId","data-v-22373ff4"]]);var fe=je,me={name:"App",components:{ChooseGame:g,ScoreBar:K,PlayOption:te,GameResults:fe},computed:Object(b["a"])({},Object(j["b"])(["isGameSelectVisible","isGameResultsVisible"])),methods:Object(b["a"])(Object(b["a"])({},Object(j["c"])(["updateGameSelectScreen","updateGameResultsVisible"])),{},{back:function(){this.updateGameSelectScreen(!0),this.updateGameResultsVisible(!1)}})};c("73f6"),c("7fa3");const he=h()(me,[["render",l],["__scopeId","data-v-1cc7d0ec"]]);var ye=he,ge=Object(j["a"])({state:function(){return{gameSelectScreen:!0,chosenGame:"",playerChose:"",gameResultsVisible:!1,currentOptions:[],gamesWon:{basic:0,extra:0},gamesPlayed:{basic:0,extra:0}}},getters:{isGameSelectVisible:function(e){return e.gameSelectScreen},chosenGame:function(e){return e.chosenGame},playerChose:function(e){return e.playerChose},isGameResultsVisible:function(e){return e.gameResultsVisible},currentOptions:function(e){return e.currentOptions},gamesWon:function(e){return e.gamesWon},gamesPlayed:function(e){return e.gamesPlayed}},actions:{},mutations:{updateGameSelectScreen:function(e,t){e.gameSelectScreen=t},updateChosenGame:function(e,t){e.chosenGame=t},updatePlayerChose:function(e,t){e.playerChose=t},updateGameResultsVisible:function(e,t){e.gameResultsVisible=t},updateCurrentOptions:function(e,t){e.currentOptions=t},updateGamesWon:function(e){var t=e.chosenGame;e.gamesWon[t]++},updateGamesPlayed:function(e){var t=e.chosenGame;e.gamesPlayed[t]++}}}),ve=ge,ke=Object(n["b"])(ye);ke.use(ve),ke.mount("#app")},"5dc2":function(e,t,c){e.exports=c.p+"frontend-mentor-challenges/rock-paper-scissors/dist/assets/img/logo-bonus.f4c973f7.svg"},"73f6":function(e,t,c){"use strict";c("46b2")},"7c80":function(e,t,c){"use strict";c("931c")},"7fa3":function(e,t,c){"use strict";c("a2fb")},"931c":function(e,t,c){},"9b19":function(e,t,c){e.exports=c.p+"frontend-mentor-challenges/rock-paper-scissors/dist/assets/img/logo.759a2075.svg"},a2fb:function(e,t,c){},bf74:function(e,t,c){"use strict";c("2cd1")},c36e:function(e,t,c){"use strict";c("c718")},c718:function(e,t,c){},c931:function(e,t,c){},d1ed:function(e,t,c){"use strict";c("c931")}});
//# sourceMappingURL=app.07f06e4a.js.map
