(function(e){function n(n){for(var o,a,i=n[0],u=n[1],s=n[2],m=0,d=[];m<i.length;m++)a=i[m],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&d.push(r[a][0]),r[a]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(e[o]=u[o]);p&&p(n);while(d.length)d.shift()();return c.push.apply(c,s||[]),t()}function t(){for(var e,n=0;n<c.length;n++){for(var t=c[n],o=!0,i=1;i<t.length;i++){var u=t[i];0!==r[u]&&(o=!1)}o&&(c.splice(n--,1),e=a(a.s=t[0]))}return e}var o={},r={app:0},c=[];function a(n){if(o[n])return o[n].exports;var t=o[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,a),t.l=!0,t.exports}a.m=e,a.c=o,a.d=function(e,n,t){a.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,n){if(1&n&&(e=a(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(a.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)a.d(t,o,function(n){return e[n]}.bind(null,o));return t},a.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(n,"a",n),n},a.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},a.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=n,i=i.slice();for(var s=0;s<i.length;s++)n(i[s]);var p=u;c.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"034b":function(e,n,t){},"456d":function(e,n,t){"use strict";t("ad91")},"459f":function(e,n,t){"use strict";t("fc62")},4907:function(e,n,t){"use strict";t("b011")},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var o=t("7a23");function r(e,n,t,r,c,a){var i=Object(o["j"])("pokemon-page");return Object(o["f"])(),Object(o["c"])(i)}var c={key:0},a={key:1},i=Object(o["e"])("h1",null,"¿Who's that Pokemon?",-1),u={key:0,class:"fade-in"};function s(e,n,t,r,s,p){var m=Object(o["j"])("pokemon-picture"),d=Object(o["j"])("pokemon-options");return s.pokemon?(Object(o["f"])(),Object(o["c"])("div",a,[i,Object(o["e"])(m,{"pokemon-id":s.pokemon.id,"show-pokemon":s.showPokemon},null,8,["pokemon-id","show-pokemon"]),Object(o["e"])(d,{pokemons:s.pokemonArr,onSelection:p.checkSelection},null,8,["pokemons","onSelection"]),s.showAnswer?(Object(o["f"])(),Object(o["c"])("div",u,[Object(o["e"])("h2",null,Object(o["k"])(s.message),1),Object(o["e"])("button",{onClick:n[1]||(n[1]=function(){return p.newGame&&p.newGame.apply(p,arguments)})},"Nuevo Juego")])):Object(o["d"])("",!0)])):(Object(o["f"])(),Object(o["c"])("h1",c,"Loading..."))}var p=t("1da1"),m=(t("b0c0"),t("96cf"),Object(o["l"])("data-v-98afa38e"));Object(o["h"])("data-v-98afa38e");var d={class:"pokemon-container"};Object(o["g"])();var l=m((function(e,n,t,r,c,a){return Object(o["f"])(),Object(o["c"])("div",d,[Object(o["e"])("img",{src:a.imgSrc,class:"hidden-pokemon",alt:"pokemon"},null,8,["src"]),t.showPokemon?(Object(o["f"])(),Object(o["c"])("img",{key:0,src:a.imgSrc,class:"fade-in",alt:"pokemon"},null,8,["src"])):Object(o["d"])("",!0)])})),f=(t("a9e3"),{props:{pokemonId:{type:Number,required:!0},showPokemon:{type:Boolean,required:!0,default:!1}},computed:{imgSrc:function(){return"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/".concat(this.pokemonId,".svg")}}});t("456d");f.render=l,f.__scopeId="data-v-98afa38e";var b=f,h=Object(o["l"])("data-v-2050bcd7");Object(o["h"])("data-v-2050bcd7");var k={class:"options-container"};Object(o["g"])();var O=h((function(e,n,t,r,c,a){return Object(o["f"])(),Object(o["c"])("div",k,[Object(o["e"])("ul",null,[(Object(o["f"])(!0),Object(o["c"])(o["a"],null,Object(o["i"])(t.pokemons,(function(n){return Object(o["f"])(),Object(o["c"])("li",{key:n.id,onClick:function(t){return e.$emit("selection",n.id)}},Object(o["k"])(n.name),9,["onClick"])})),128))])])})),j={props:{pokemons:{type:Array,required:!0}}};t("459f");j.render=O,j.__scopeId="data-v-2050bcd7";var v=j,w=t("3835"),g=(t("caad"),t("d3b7"),t("3ca3"),t("ddb0"),t("bc3a")),y=t.n(g),P=y.a.create({baseURL:"https://pokeapi.co/api/v2/pokemon"}),x=P;function A(e,n){return e=Math.ceil(e),n=Math.floor(n),Math.floor(Math.random()*(n-e+1))+e}var S=function(){for(var e=[],n=0;n<4;n++){var t=0;do{t=A(1,650)}while(e.includes(t));e.push(t)}return e},M=function(){var e=Object(p["a"])(regeneratorRuntime.mark((function e(){var n,t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=S(),e.next=3,_(n);case 3:return t=e.sent,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),_=function(){var e=Object(p["a"])(regeneratorRuntime.mark((function e(){var n,t,o,r,c,a,i,u,s,p,m,d,l,f=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=f.length>0&&void 0!==f[0]?f[0]:[],t=Object(w["a"])(n,4),o=t[0],r=t[1],c=t[2],a=t[3],i=[x.get("/".concat(o)),x.get("/".concat(r)),x.get("/".concat(c)),x.get("/".concat(a))],e.next=4,Promise.all(i);case 4:return u=e.sent,s=Object(w["a"])(u,4),p=s[0],m=s[1],d=s[2],l=s[3],e.abrupt("return",[{id:p.data.id,name:p.data.name},{id:m.data.id,name:m.data.name},{id:d.data.id,name:d.data.name},{id:l.data.id,name:l.data.name}]);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),R=M,I={components:{PokemonPicture:b,PokemonOptions:v},data:function(){return{pokemonArr:[],pokemon:null,showPokemon:!1,showAnswer:!1,message:""}},mounted:function(){this.mixPokemonArray()},methods:{mixPokemonArray:function(){var e=this;return Object(p["a"])(regeneratorRuntime.mark((function n(){var t;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,R();case 2:e.pokemonArr=n.sent,t=Math.floor(4*Math.random()),e.pokemon=e.pokemonArr[t];case 5:case"end":return n.stop()}}),n)})))()},checkSelection:function(e){this.showPokemon=!0,this.message=e===this.pokemon.id?"Correct":"Oops",this.message+=", the pokemon is ".concat(this.pokemon.name),this.showAnswer=!0},newGame:function(){this.pokemonArr=[],this.pokemon=null,this.showPokemon=!1,this.showAnswer=!1,this.message="",this.mixPokemonArray()}}};I.render=s;var C=I,q={name:"App",components:{PokemonPage:C}};t("4907");q.render=r;var G=q;t("034b"),t("c0b5");Object(o["b"])(G).mount("#app")},ad91:function(e,n,t){},b011:function(e,n,t){},c0b5:function(e,n,t){},fc62:function(e,n,t){}});
//# sourceMappingURL=app.21554363.js.map