!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},r.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=8)}([function(e,t,r){"use strict";(function(e,n){var o,i=r(2);o="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==e?e:n;var u=Object(i.a)(o);t.a=u}).call(this,r(7),r(6)(e))},function(e,t,r){"use strict";r.r(t),r.d(t,"createStore",function(){return a}),r.d(t,"combineReducers",function(){return d}),r.d(t,"bindActionCreators",function(){return l}),r.d(t,"applyMiddleware",function(){return h}),r.d(t,"compose",function(){return p}),r.d(t,"__DO_NOT_USE__ActionTypes",function(){return o});var n=r(0),o={INIT:"@@redux/INIT"+Math.random().toString(36).substring(7).split("").join("."),REPLACE:"@@redux/REPLACE"+Math.random().toString(36).substring(7).split("").join(".")},i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e};function c(e){if("object"!==(void 0===e?"undefined":i(e))||null===e)return!1;for(var t=e;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function a(e,t,r){var u;if("function"==typeof t&&void 0===r&&(r=t,t=void 0),void 0!==r){if("function"!=typeof r)throw new Error("Expected the enhancer to be a function.");return r(a)(e,t)}if("function"!=typeof e)throw new Error("Expected the reducer to be a function.");var s=e,d=t,f=[],l=f,p=!1;function h(){l===f&&(l=f.slice())}function y(){if(p)throw new Error("You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");return d}function b(e){if("function"!=typeof e)throw new Error("Expected the listener to be a function.");if(p)throw new Error("You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api-reference/store#subscribe(listener) for more details.");var t=!0;return h(),l.push(e),function(){if(t){if(p)throw new Error("You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api-reference/store#subscribe(listener) for more details.");t=!1,h();var r=l.indexOf(e);l.splice(r,1)}}}function v(e){if(!c(e))throw new Error("Actions must be plain objects. Use custom middleware for async actions.");if(void 0===e.type)throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');if(p)throw new Error("Reducers may not dispatch actions.");try{p=!0,d=s(d,e)}finally{p=!1}for(var t=f=l,r=0;r<t.length;r++){(0,t[r])()}return e}return v({type:o.INIT}),(u={dispatch:v,subscribe:b,getState:y,replaceReducer:function(e){if("function"!=typeof e)throw new Error("Expected the nextReducer to be a function.");s=e,v({type:o.REPLACE})}})[n.a]=function(){var e,t=b;return(e={subscribe:function(e){if("object"!==(void 0===e?"undefined":i(e))||null===e)throw new TypeError("Expected the observer to be an object.");function r(){e.next&&e.next(y())}return r(),{unsubscribe:t(r)}}})[n.a]=function(){return this},e},u}function s(e,t){var r=t&&t.type;return"Given "+(r&&'action "'+String(r)+'"'||"an action")+', reducer "'+e+'" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.'}function d(e){for(var t=Object.keys(e),r={},n=0;n<t.length;n++){var i=t[n];0,"function"==typeof e[i]&&(r[i]=e[i])}var u=Object.keys(r);var c=void 0;try{!function(e){Object.keys(e).forEach(function(t){var r=e[t];if(void 0===r(void 0,{type:o.INIT}))throw new Error('Reducer "'+t+"\" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.");if(void 0===r(void 0,{type:"@@redux/PROBE_UNKNOWN_ACTION_"+Math.random().toString(36).substring(7).split("").join(".")}))throw new Error('Reducer "'+t+"\" returned undefined when probed with a random type. Don't try to handle "+o.INIT+' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.')})}(r)}catch(e){c=e}return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments[1];if(c)throw c;for(var n=!1,o={},i=0;i<u.length;i++){var a=u[i],d=r[a],f=e[a],l=d(f,t);if(void 0===l){var p=s(a,t);throw new Error(p)}o[a]=l,n=n||l!==f}return n?o:e}}function f(e,t){return function(){return t(e.apply(this,arguments))}}function l(e,t){if("function"==typeof e)return f(e,t);if("object"!==(void 0===e?"undefined":i(e))||null===e)throw new Error("bindActionCreators expected an object or a function, instead received "+(null===e?"null":void 0===e?"undefined":i(e))+'. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');for(var r=Object.keys(e),n={},o=0;o<r.length;o++){var u=r[o],c=e[u];"function"==typeof c&&(n[u]=f(c,t))}return n}function p(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return 0===t.length?function(e){return e}:1===t.length?t[0]:t.reduce(function(e,t){return function(){return e(t.apply(void 0,arguments))}})}function h(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(e){return function(){for(var r=arguments.length,n=Array(r),o=0;o<r;o++)n[o]=arguments[o];var i=e.apply(void 0,n),c=function(){throw new Error("Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.")},a={getState:i.getState,dispatch:function(){return c.apply(void 0,arguments)}},s=t.map(function(e){return e(a)});return c=p.apply(void 0,s)(i.dispatch),u({},i,{dispatch:c})}}}},function(e,t,r){"use strict";function n(e){var t,r=e.Symbol;return"function"==typeof r?r.observable?t=r.observable:(t=r("observable"),r.observable=t):t="@@observable",t}r.d(t,"a",function(){return n})},function(e,t,r){"use strict";function n(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.cartReducers=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{cart:[]},t=arguments[1];switch(t.type){case"ADD_TO_CART":return{cart:[].concat(n(e.cart),n(t.payload))}}return e}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e};function o(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}t.booksReducers=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{books:[]},t=arguments[1];switch(t.type){case"POST_BOOK":return{books:[].concat(o(e.books),o(t.payload))};case"DELETE_BOOK":var r=[].concat(o(e.books)),i=r.findIndex(function(e){return e.id==t.payload.id});return{books:[].concat(o(r.slice(0,i)),o(r.slice(i+1)))};case"UPDATE_BOOK":var u=[].concat(o(e.books)),c=u.findIndex(function(e){return e.id===t.payload.id}),a=n({},u[c],{title:t.payload.title});return console.log("what is it newBookTpUpdate",a),{books:[].concat(o(u.slice(0,c)),[a],o(u.slice(c+1)))}}return e}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(1),o=r(4),i=r(3);t.default=(0,n.combineReducers)({books:o.booksReducers,cart:i.cartReducers})},function(e,t){e.exports=function(e){if(!e.webpackPolyfill){var t=Object.create(e);t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),Object.defineProperty(t,"exports",{enumerable:!0}),t.webpackPolyfill=1}return t}},function(e,t){var r;r=function(){return this}();try{r=r||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(r=window)}e.exports=r},function(e,t,r){"use strict";var n,o=r(1),i=r(5),u=(n=i)&&n.__esModule?n:{default:n};var c=(0,o.createStore)(u.default);c.subscribe(function(){console.log("current state is: ",c.getState())}),c.dispatch({type:"POST_BOOK",payload:[{id:1,title:"This is the book title",description:"This is the book description",price:33.44},{id:2,title:"This is the second book title",description:"This is the  second book description",price:10.44}]}),c.dispatch({type:"POST_BOOK",payload:[{id:3,title:"This is the third book title",description:"This is the third book description",price:30.44}]}),c.dispatch({type:"DELETE_BOOK",payload:{id:3}}),c.dispatch({type:"UPDATE_BOOK",payload:{id:2,title:"title new update 2"}}),c.dispatch({type:"ADD_TO_CART",payload:{id:2}})}]);