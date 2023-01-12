!function(){"use strict";var n,r={340:function(n,r,e){var A=e(537),o=e.n(A),t=e(645),l=e.n(t)()(o());l.push([n.id,'body {\r\n  font-family: Helvetica, Arial, sans-serif;\r\n}\r\n\r\nh4 {\r\n  padding: 0px;\r\n  margin: 0px;\r\n}\r\n\r\nheader {\r\n  text-align: center;\r\n}\r\n\r\nlabel {\r\n  width: 75px;\r\n  display: inline-block;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n  color: black;\r\n}\r\n\r\n.element {\r\n  padding: 10px;\r\n  margin: auto;\r\n  width: 33%;\r\n}\r\n\r\n.inputBox {\r\n  margin: 2px;\r\n}\r\n\r\n.finalWord {\r\n  color: #6AAA64;  margin: 2px;\r\n  padding: 2px;\r\n  border: 1px black solid;\r\n  border-radius: 5px;\r\n  display: inline-block;\r\n  box-sizing: border-box;\r\n}\r\n\r\n.finalWord :hover {\r\n  text-shadow: 0 0 0.01px black;\r\n}\r\n\r\n\r\n#grey {\r\n  background-color: #787C7E;\r\n}\r\n\r\n#green {\r\n  background-color: #6AAA64;\r\n}\r\n\r\n#yellow {\r\n  background-color: #C9B458;\r\n}\r\n\r\n#buttons {\r\n  text-align: center;\r\n}\r\n\r\n#filteredWords {\r\n  padding: 2px;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: space-between;\r\n}\r\n\r\n#filteredWords::after {\r\n  content: "";\r\n  flex: auto;\r\n}\r\n\r\n',"",{version:3,sources:["webpack://./src/css/index.css"],names:[],mappings:"AAAA;EACE,yCAAyC;AAC3C;;AAEA;EACE,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,qBAAqB;AACvB;;AAEA;EACE,qBAAqB;EACrB,YAAY;AACd;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,UAAU;AACZ;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,cAAc,GAAG,WAAW;EAC5B,YAAY;EACZ,uBAAuB;EACvB,kBAAkB;EAClB,qBAAqB;EACrB,sBAAsB;AACxB;;AAEA;EACE,6BAA6B;AAC/B;;;AAGA;EACE,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,eAAe;EACf,8BAA8B;AAChC;;AAEA;EACE,WAAW;EACX,UAAU;AACZ",sourcesContent:['body {\r\n  font-family: Helvetica, Arial, sans-serif;\r\n}\r\n\r\nh4 {\r\n  padding: 0px;\r\n  margin: 0px;\r\n}\r\n\r\nheader {\r\n  text-align: center;\r\n}\r\n\r\nlabel {\r\n  width: 75px;\r\n  display: inline-block;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n  color: black;\r\n}\r\n\r\n.element {\r\n  padding: 10px;\r\n  margin: auto;\r\n  width: 33%;\r\n}\r\n\r\n.inputBox {\r\n  margin: 2px;\r\n}\r\n\r\n.finalWord {\r\n  color: #6AAA64;  margin: 2px;\r\n  padding: 2px;\r\n  border: 1px black solid;\r\n  border-radius: 5px;\r\n  display: inline-block;\r\n  box-sizing: border-box;\r\n}\r\n\r\n.finalWord :hover {\r\n  text-shadow: 0 0 0.01px black;\r\n}\r\n\r\n\r\n#grey {\r\n  background-color: #787C7E;\r\n}\r\n\r\n#green {\r\n  background-color: #6AAA64;\r\n}\r\n\r\n#yellow {\r\n  background-color: #C9B458;\r\n}\r\n\r\n#buttons {\r\n  text-align: center;\r\n}\r\n\r\n#filteredWords {\r\n  padding: 2px;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: space-between;\r\n}\r\n\r\n#filteredWords::after {\r\n  content: "";\r\n  flex: auto;\r\n}\r\n\r\n'],sourceRoot:""}]),r.Z=l},458:function(n,r,e){var A=e(379),o=e.n(A),t=e(795),l=e.n(t),i=e(569),a=e.n(i),d=e(565),c=e.n(d),s=e(216),f=e.n(s),u=e(589),p=e.n(u),E=e(340),C={};C.styleTagTransform=p(),C.setAttributes=c(),C.insert=a().bind(null,"head"),C.domAPI=l(),C.insertStyleElement=f();o()(E.Z,C),E.Z&&E.Z.locals&&E.Z.locals;var b=e(755),x=e.n(b),g=e(85);let B=g.filter((n=>5===n.length)),v=x()("#filteredWords");x()("#done").on("click",(()=>{let n=x()("#excluded").val(),r=[x()("#firstGreen").val(),x()("#secondGreen").val(),x()("#thirdGreen").val(),x()("#fourthGreen").val(),x()("#fifthGreen").val()],e=[x()("#firstYellow").val(),x()("#secondYellow").val(),x()("#thirdYellow").val(),x()("#fourthYellow").val(),x()("#fifthYellow").val()];function A(n){B=B.filter(n)}for(let r=0;r<n.length;r++)A((e=>!e.includes(n[r])));for(let n=0;n<5;n++){const o=r[n];""!==o&&A((r=>r[n].includes(o)));const t=e[n];if(""!==t)for(let r=0;r<t.length;r++)A((n=>n.includes(t[r]))),A((e=>!e[n].includes(t[r])))}v.empty(),B.forEach((n=>{x()(`<div class="finalWord"> <a href="https://en.wiktionary.org/wiki/${n}" target="_blank"> ${n}</a> </div> `).appendTo(v)}))})),x()("#clear").on("click",(()=>{B=g.filter((n=>5===n.length)),x()(".inputs").val(""),v.empty()}))}},e={};function A(n){var o=e[n];if(void 0!==o)return o.exports;var t=e[n]={id:n,exports:{}};return r[n].call(t.exports,t,t.exports,A),t.exports}A.m=r,n=[],A.O=function(r,e,o,t){if(!e){var l=1/0;for(c=0;c<n.length;c++){e=n[c][0],o=n[c][1],t=n[c][2];for(var i=!0,a=0;a<e.length;a++)(!1&t||l>=t)&&Object.keys(A.O).every((function(n){return A.O[n](e[a])}))?e.splice(a--,1):(i=!1,t<l&&(l=t));if(i){n.splice(c--,1);var d=o();void 0!==d&&(r=d)}}return r}t=t||0;for(var c=n.length;c>0&&n[c-1][2]>t;c--)n[c]=n[c-1];n[c]=[e,o,t]},A.n=function(n){var r=n&&n.__esModule?function(){return n.default}:function(){return n};return A.d(r,{a:r}),r},A.d=function(n,r){for(var e in r)A.o(r,e)&&!A.o(n,e)&&Object.defineProperty(n,e,{enumerable:!0,get:r[e]})},A.o=function(n,r){return Object.prototype.hasOwnProperty.call(n,r)},function(){var n={143:0};A.O.j=function(r){return 0===n[r]};var r=function(r,e){var o,t,l=e[0],i=e[1],a=e[2],d=0;if(l.some((function(r){return 0!==n[r]}))){for(o in i)A.o(i,o)&&(A.m[o]=i[o]);if(a)var c=a(A)}for(r&&r(e);d<l.length;d++)t=l[d],A.o(n,t)&&n[t]&&n[t][0](),n[l[d]]=0;return A.O(c)},e=self.webpackChunk_85=self.webpackChunk_85||[];e.forEach(r.bind(null,0)),e.push=r.bind(null,e.push.bind(e))}();var o=A.O(void 0,[768],(function(){return A(458)}));o=A.O(o)}();
//# sourceMappingURL=app.bundle.js.map