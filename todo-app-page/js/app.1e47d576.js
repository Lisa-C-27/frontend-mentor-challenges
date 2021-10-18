(function(e){function t(t){for(var n,a,s=t[0],l=t[1],i=t[2],u=0,m=[];u<s.length;u++)a=s[u],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&m.push(c[a][0]),c[a]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);d&&d(t);while(m.length)m.shift()();return r.push.apply(r,i||[]),o()}function o(){for(var e,t=0;t<r.length;t++){for(var o=r[t],n=!0,s=1;s<o.length;s++){var l=o[s];0!==c[l]&&(n=!1)}n&&(r.splice(t--,1),e=a(a.s=o[0]))}return e}var n={},c={app:0},r=[];function a(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.m=e,a.c=n,a.d=function(e,t,o){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(a.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(o,n,function(t){return e[t]}.bind(null,n));return o},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/frontend-mentor-challenges/todo-app-page/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var i=0;i<s.length;i++)t(s[i]);var d=l;r.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"027e":function(e,t,o){"use strict";o("c45f")},"0500":function(e,t,o){"use strict";o("77c9")},"1fec":function(e,t,o){},"2c02":function(e,t,o){"use strict";o("f3e1")},3166:function(e,t,o){"use strict";o("9af1")},"34f2":function(e,t,o){e.exports=o.p+"img/icon-cross.fe68d57f.svg"},"56d7":function(e,t,o){"use strict";o.r(t);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("7a23");function c(e,t,o,c,r,a){var s=Object(n["resolveComponent"])("the-header"),l=Object(n["resolveComponent"])("todo-create"),i=Object(n["resolveComponent"])("todo-list"),d=Object(n["resolveComponent"])("undo-popup");return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",{class:Object(n["normalizeClass"])([r.currentMode,"main-container"])},[Object(n["createVNode"])(s,{onModeToggled:t[0]||(t[0]=function(e){return a.updateMode(e)})}),Object(n["createElementVNode"])("main",null,[Object(n["createVNode"])(l),Object(n["createVNode"])(i),a.undoVisible?(Object(n["openBlock"])(),Object(n["createBlock"])(d,{key:0})):Object(n["createCommentVNode"])("",!0)])],2)}Object(n["pushScopeId"])("data-v-1fb5563e");var r={class:"header-container"},a=Object(n["createElementVNode"])("h1",null,"Todo",-1),s=Object(n["createElementVNode"])("label",{for:"toggle-mode","aria-label":"Toggle light and dark mode"},null,-1),l=["checked"];function i(e,t,o,c,i,d){return Object(n["openBlock"])(),Object(n["createElementBlock"])("header",null,[Object(n["createElementVNode"])("div",r,[a,Object(n["createElementVNode"])("div",null,[s,Object(n["createElementVNode"])("input",{type:"checkbox",id:"toggle-mode",onChange:t[0]||(t[0]=function(){return d.toggleMode&&d.toggleMode.apply(d,arguments)}),checked:i.currentMode.light_mode},null,40,l)])])])}Object(n["popScopeId"])();var d={emits:["mode-toggled"],data:function(){return{toggleState:!1,currentMode:[]}},methods:{toggleMode:function(){this.toggleState=!this.toggleState,localStorage.setItem("toggleState",this.toggleState),this.$emit("mode-toggled",this.modeClasses)}},computed:{modeClasses:function(){return{dark_mode:!this.toggleState,light_mode:this.toggleState}}},mounted:function(){if(localStorage.getItem("mode"))try{var e=JSON.parse(localStorage.getItem("mode"));this.currentMode=e}catch(t){localStorage.removeItem("mode")}if(localStorage.getItem("toggleState"))try{this.toggleState=localStorage.getItem("toggleState")}catch(t){localStorage.removeItem("toggleState")}}},u=(o("0500"),o("d959")),m=o.n(u);const p=m()(d,[["render",i],["__scopeId","data-v-1fb5563e"]]);var f=p;Object(n["pushScopeId"])("data-v-7ccb2b76");var b={class:"form-control"},g=Object(n["createElementVNode"])("label",{for:"newtodo",class:"circle","aria-label":"Add new to do"},[Object(n["createElementVNode"])("div",{class:"circle-inner"})],-1);function v(e,t,o,c,r,a){return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",b,[g,Object(n["withDirectives"])(Object(n["createElementVNode"])("input",{autocomplete:"off",type:"text",id:"newtodo",placeholder:"Create a new todo...","onUpdate:modelValue":t[0]||(t[0]=function(e){return r.todoval=e}),onKeyup:t[1]||(t[1]=Object(n["withKeys"])((function(){return a.addTodo&&a.addTodo.apply(a,arguments)}),["enter"]))},null,544),[[n["vModelText"],r.todoval]])])}Object(n["popScopeId"])();var O=o("5530"),k=o("5502"),j={emits:["added-todos"],data:function(){return{todoval:""}},computed:{taskNumber:function(){return this.$store.getters.taskNumber}},methods:Object(O["a"])({addTodo:function(){var e=this.todoval,t=this.taskNumber;this.$store.dispatch("addToDo",{taskID:t,value:e,complete:!1}),this.todoval=""}},Object(k["b"])(["replaceTaskNumber"])),mounted:function(){if(localStorage.getItem("taskCounter"))try{var e=parseInt(localStorage.getItem("taskCounter"));this.replaceTaskNumber(e)}catch(t){localStorage.removeItem("taskCounter")}}};o("027e");const h=m()(j,[["render",v],["__scopeId","data-v-7ccb2b76"]]);var T=h,N=o("c25b"),S=o.n(N),V=o("34f2"),C=o.n(V);Object(n["pushScopeId"])("data-v-39169424");var D={key:0},I={class:"todo-items"},y={class:"form-control"},E=["for","aria-label"],B=Object(n["createElementVNode"])("div",{class:"circle-inner"},[Object(n["createElementVNode"])("img",{src:S.a})],-1),x=[B],_=["id","onChange"],L=["onClick"],M=Object(n["createElementVNode"])("img",{src:C.a},null,-1),w=[M],$={key:0,class:"drag-text"},P=Object(n["createElementVNode"])("p",null,"Drag and drop to reorder list",-1),A=[P],F={key:1},J=Object(n["createElementVNode"])("p",{class:"list-empty"},"There are currently no todo's. Add some!",-1),U=[J];function z(e,t,o,c,r,a){var s=Object(n["resolveComponent"])("draggable"),l=Object(n["resolveComponent"])("todo-filter");return""!=a.todosList?(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",D,[Object(n["createElementVNode"])("div",I,[Object(n["createVNode"])(s,{tag:"ul",list:a.filteredTodosList,"item-key":"taskID","ghost-class":"ghost",onStart:t[0]||(t[0]=function(e){return r.dragging=!0}),onEnd:t[1]||(t[1]=function(e){return r.dragging=!1}),preventOnFilter:"false",filter:".ignore-drag"},{item:Object(n["withCtx"])((function(e){var t=e.element,o=e.index;return[Object(n["createElementVNode"])("li",{class:Object(n["normalizeClass"])({complete:!0===t.complete})},[Object(n["createElementVNode"])("div",y,[Object(n["createElementVNode"])("label",{class:"circle ignore-drag",for:"checkbox-"+o,"aria-label":"Mark task "+t.value+" as completed"},x,8,E),Object(n["createElementVNode"])("input",{class:"ignore-drag",type:"checkbox",id:"checkbox-"+o,onChange:function(e){return a.toggleCompleted(t.taskID)}},null,40,_),Object(n["createElementVNode"])("span",null,Object(n["toDisplayString"])(t.value),1),Object(n["createElementVNode"])("div",{class:"complete-task ignore-drag",onClick:function(e){return a.removeTask(t.taskID)}},w,8,L)])],2)]})),_:1},8,["list"]),Object(n["createVNode"])(l)]),a.todosList.length>1?(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",$,A)):Object(n["createCommentVNode"])("",!0)])):(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",F,U))}Object(n["popScopeId"])();o("4de4");var K=o("b76a"),H=o.n(K);Object(n["pushScopeId"])("data-v-092f0429");var q={key:0,class:"filter"},G={key:0},Q={key:1};function R(e,t,o,c,r,a){return Object(n["openBlock"])(),Object(n["createElementBlock"])("section",null,[""!=a.allItems?(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",q,[Object(n["createElementVNode"])("p",null,[Object(n["createTextVNode"])(Object(n["toDisplayString"])(a.activeItems.length)+" item",1),1!==a.activeItems.length?(Object(n["openBlock"])(),Object(n["createElementBlock"])("span",G,"s")):Object(n["createCommentVNode"])("",!0),0!==a.allItems.length?(Object(n["openBlock"])(),Object(n["createElementBlock"])("span",Q," left")):Object(n["createCommentVNode"])("",!0)]),Object(n["createVNode"])(n["Transition"],null,{default:Object(n["withCtx"])((function(){return[Object(n["createElementVNode"])("ul",null,[Object(n["createElementVNode"])("li",{onClick:t[0]||(t[0]=function(e){return a.filter("All")}),class:Object(n["normalizeClass"])({active:"All"==a.activeClass})}," All ",2),Object(n["createElementVNode"])("li",{onClick:t[1]||(t[1]=function(e){return a.filter("Active")}),class:Object(n["normalizeClass"])({active:"Active"==a.activeClass})}," Active ",2),Object(n["createElementVNode"])("li",{onClick:t[2]||(t[2]=function(e){return a.filter("Completed")}),class:Object(n["normalizeClass"])({active:"Completed"==a.activeClass,disabled:""==a.completedItems})}," Completed ",2)])]})),_:1}),Object(n["createElementVNode"])("p",null,[""!=a.completedItems?(Object(n["openBlock"])(),Object(n["createElementBlock"])("span",{key:0,onClick:t[3]||(t[3]=function(){return a.clearCompleted&&a.clearCompleted.apply(a,arguments)})},"Clear Completed")):Object(n["createCommentVNode"])("",!0)])])):Object(n["createCommentVNode"])("",!0)])}Object(n["popScopeId"])();var W={computed:{activeItems:function(){var e=this.$store.getters.toDosList;return e.filter((function(e){return!1===e.complete}))},allItems:function(){return this.$store.getters.toDosList},activeClass:function(){return this.$store.getters.tasksToFilter},completedItems:function(){var e=this.$store.getters.toDosList;return e.filter((function(e){return!0===e.complete}))}},methods:Object(O["a"])({filter:function(e){this.updateFilter(e)},clearCompleted:function(){var e=this.activeItems,t=this.allItems;this.savePreviousTasks(t),this.$store.dispatch("clearCompletedTodos",e),this.updateFilter("All"),this.updateUndoVisible(!0)}},Object(k["b"])(["updateUndoVisible","updateFilter","savePreviousTasks"]))};o("2c02");const X=m()(W,[["render",R],["__scopeId","data-v-092f0429"]]);var Y=X,Z={components:{draggable:H.a,TodoFilter:Y},data:function(){return{dragging:!1}},computed:{todosList:function(){return this.$store.getters.toDosList},filteredTodosList:function(){var e=this.$store.getters.toDosList,t=this.$store.getters.tasksToFilter;return"Active"===t?e.filter((function(e){return!1===e.complete})):"Completed"===t?e.filter((function(e){return!0===e.complete})):e}},mounted:function(){if(localStorage.getItem("tasks"))try{var e=JSON.parse(localStorage.getItem("tasks"));this.addSavedToDoList(e)}catch(t){localStorage.removeItem("tasks")}},methods:Object(O["a"])({toggleCompleted:function(e){this.$store.dispatch("updateToDo",e)},removeTask:function(e){var t=this.todosList;this.savePreviousTasks(t),this.$store.dispatch("removeToDo",e),this.updateUndoVisible(!0)}},Object(k["b"])(["updateUndoVisible","addSavedToDoList","savePreviousTasks"]))};o("3166");const ee=m()(Z,[["render",z],["__scopeId","data-v-39169424"]]);var te=ee;Object(n["pushScopeId"])("data-v-75e24338");var oe={key:0},ne=Object(n["createTextVNode"])(" removed. ");function ce(e,t,o,c,r,a){return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",null,[Object(n["createElementVNode"])("p",null,[Object(n["createTextVNode"])(Object(n["toDisplayString"])(a.numberOfTasks)+" task",1),a.numberOfTasks>1?(Object(n["openBlock"])(),Object(n["createElementBlock"])("span",oe,"s")):Object(n["createCommentVNode"])("",!0),ne,Object(n["createElementVNode"])("button",{onClick:t[0]||(t[0]=function(){return a.undoDelete&&a.undoDelete.apply(a,arguments)})},"Undo")])])}Object(n["popScopeId"])();var re={computed:{numberOfTasks:function(){return this.$store.getters.clearedTasks}},methods:{undoDelete:function(){this.$store.dispatch("undoTaskDeletion")}}};o("c872");const ae=m()(re,[["render",ce],["__scopeId","data-v-75e24338"]]);var se=ae,le={name:"App",components:{TheHeader:f,TodoCreate:T,TodoList:te,UndoPopup:se},data:function(){return{currentMode:{dark_mode:!0,light_mode:!1}}},computed:{undoVisible:function(){return this.$store.getters.undoVisible}},methods:{updateMode:function(e){this.currentMode=e;var t=JSON.stringify(e);localStorage.setItem("mode",t)}},mounted:function(){if(localStorage.getItem("mode"))try{var e=JSON.parse(localStorage.getItem("mode"));this.currentMode=e}catch(t){localStorage.removeItem("mode")}}};o("ff5e");const ie=m()(le,[["render",c]]);var de=ie,ue=(o("c740"),Object(k["a"])({state:function(){return{toDos:[],filter:"All",currentTaskNumber:0,previousTaskList:[],undoVisible:!1,clearedTasks:0}},getters:{toDosList:function(e){return e.toDos},tasksToFilter:function(e){return e.filter},taskNumber:function(e){return e.currentTaskNumber},previousTasks:function(e){return e.previousTaskList},undoVisible:function(e){return e.undoVisible},clearedTasks:function(e){return e.clearedTasks}},actions:{addToDo:function(e,t){e.commit("addToDo",t),e.commit("updateTaskNumber"),e.commit("updateSaved")},removeToDo:function(e,t){var o=e.getters.toDosList;e.commit("savePreviousTasks",o),e.commit("removeToDo",t),e.commit("updateSaved")},updateToDo:function(e,t){e.commit("updateToDo",t),e.commit("updateSaved")},clearCompletedTodos:function(e,t){e.commit("clearCompleted",t),e.commit("updateSaved")},undoTaskDeletion:function(e){var t=e.getters.previousTasks;console.log("context.getters"),console.log(t),e.commit("undoTaskDeletion",t)}},mutations:{addToDo:function(e,t){e.toDos.push(t)},removeToDo:function(e,t){var o=e.toDos.filter((function(e){return e.taskID!==t}));e.toDos=o,e.clearedTasks=1},updateToDo:function(e,t){var o=e.toDos.findIndex((function(e){return e.taskID===t}));e.toDos[o].complete=!e.toDos[o].complete},updateFilter:function(e,t){e.filter=t},clearCompleted:function(e,t){var o=e.toDos;e.toDos=t,e.clearedTasks=o.length-t.length},updateSaved:function(e){var t=e.toDos,o=JSON.stringify(t);localStorage.setItem("tasks",o),localStorage.setItem("taskCounter",e.currentTaskNumber)},addSavedToDoList:function(e,t){e.toDos=t},updateTaskNumber:function(e){e.currentTaskNumber++},replaceTaskNumber:function(e,t){e.currentTaskNumber=t},savePreviousTasks:function(e,t){e.previousTaskList=t,console.log("savePreviousTasks payload"),console.log(t)},undoTaskDeletion:function(e,t){e.toDos=t;var o=e.toDos,n=JSON.stringify(o);localStorage.setItem("tasks",n),e.previousTaskList=[],e.clearedTasks=0,e.undoVisible=!1},updateUndoVisible:function(e,t){e.undoVisible=t,setTimeout((function(){e.undoVisible=!1}),8e3)}}})),me=ue,pe=Object(n["createApp"])(de);pe.use(me),pe.mount("#app")},"603f":function(e,t,o){},"77c9":function(e,t,o){},"9af1":function(e,t,o){},c25b:function(e,t,o){e.exports=o.p+"img/icon-check.5742160c.svg"},c45f:function(e,t,o){},c872:function(e,t,o){"use strict";o("603f")},f3e1:function(e,t,o){},ff5e:function(e,t,o){"use strict";o("1fec")}});
//# sourceMappingURL=app.1e47d576.js.map