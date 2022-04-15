(function(){"use strict";var n={919:function(n,t,e){var i=e(9242),r=e(3396);function a(n,t,e,i,a,o){const s=(0,r.up)("Validator");return(0,r.wg)(),(0,r.j4)(s)}const o=n=>((0,r.dD)("data-v-50ba5295"),n=n(),(0,r.Cn)(),n),s={class:"col-xs-12"},l={class:"d-flex justify-content-center"},u={class:"card p-4"},f=o((()=>(0,r._)("h1",{class:"py-2"},"Enter a Tax File Number below",-1))),c=o((()=>(0,r._)("h4",{class:"text-muted py-2"},"Don't worry, we don't store anything",-1))),d=o((()=>(0,r._)("p",{class:"py-2"},[(0,r.Uk)(" An Australian Tax File Number is not just a random sequence of numbers."),(0,r._)("br"),(0,r.Uk)(" It can be validated using a check digit. Read more "),(0,r._)("a",{href:"https://en.wikipedia.org/wiki/Tax_file_number#Check_digit",target:"_blank",rel:"noopener"},"here"),(0,r.Uk)(". ")],-1))),h={class:"mb-3"},g={key:0,class:"text-success"},p={key:1,class:"text-danger"},v={key:2,class:"text-warning"},w={key:3,class:"text-warning"};function b(n,t,e,a,o,b){return(0,r.wg)(),(0,r.iD)("div",s,[(0,r._)("div",l,[(0,r._)("div",u,[f,c,d,(0,r._)("div",h,[(0,r.wy)((0,r._)("input",{"onUpdate:modelValue":t[0]||(t[0]=n=>o.tfn=n),placeholder:"123456789"},null,512),[[i.nr,o.tfn]])]),(0,r._)("div",null,[8!=o.tfn.length&&9!=o.tfn.length||1!=o.isValid?8!=o.tfn.length&&9!=o.tfn.length||0!=o.isValid?o.tfn.length>0&&o.tfn.length<8?((0,r.wg)(),(0,r.iD)("p",v,"TFN is not long enough")):o.tfn.length>9?((0,r.wg)(),(0,r.iD)("p",w,"TFN is too long")):(0,r.kq)("",!0):((0,r.wg)(),(0,r.iD)("p",p,"That is not a valid Tax File Number.")):((0,r.wg)(),(0,r.iD)("p",g,"That is a valid Tax File Number!"))])])])])}var m={name:"TFNValidator",data(){return{isValid:!1,tfn:"",weightingEight:[10,7,8,4,6,3,5,1],weightingNine:[1,4,3,7,5,8,6,9,10]}},methods:{validateTfn:function(){let n=0,t=this.tfn.split("").map(Number);if(9==t.length)for(const[e,i]of t.entries())n+=i*this.weightingNine[e];else if(8==t.length)for(const[e,i]of t.entries())n+=i*this.weightingEight[e];else this.isValid=!1;this.isValid=n%11==0}},watch:{tfn:function(){let n=this.tfn.trim(),t=new RegExp("[^\\d]","i");this.tfn=n.replace(t,""),this.validateTfn()}}},_=e(89);const y=(0,_.Z)(m,[["render",b],["__scopeId","data-v-50ba5295"]]);var k=y,x={name:"App",components:{Validator:k}};const T=(0,_.Z)(x,[["render",a]]);var O=T;(0,i.ri)(O).mount("#app")}},t={};function e(i){var r=t[i];if(void 0!==r)return r.exports;var a=t[i]={exports:{}};return n[i](a,a.exports,e),a.exports}e.m=n,function(){var n=[];e.O=function(t,i,r,a){if(!i){var o=1/0;for(f=0;f<n.length;f++){i=n[f][0],r=n[f][1],a=n[f][2];for(var s=!0,l=0;l<i.length;l++)(!1&a||o>=a)&&Object.keys(e.O).every((function(n){return e.O[n](i[l])}))?i.splice(l--,1):(s=!1,a<o&&(o=a));if(s){n.splice(f--,1);var u=r();void 0!==u&&(t=u)}}return t}a=a||0;for(var f=n.length;f>0&&n[f-1][2]>a;f--)n[f]=n[f-1];n[f]=[i,r,a]}}(),function(){e.n=function(n){var t=n&&n.__esModule?function(){return n["default"]}:function(){return n};return e.d(t,{a:t}),t}}(),function(){e.d=function(n,t){for(var i in t)e.o(t,i)&&!e.o(n,i)&&Object.defineProperty(n,i,{enumerable:!0,get:t[i]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)}}(),function(){var n={143:0};e.O.j=function(t){return 0===n[t]};var t=function(t,i){var r,a,o=i[0],s=i[1],l=i[2],u=0;if(o.some((function(t){return 0!==n[t]}))){for(r in s)e.o(s,r)&&(e.m[r]=s[r]);if(l)var f=l(e)}for(t&&t(i);u<o.length;u++)a=o[u],e.o(n,a)&&n[a]&&n[a][0](),n[a]=0;return e.O(f)},i=self["webpackChunktfn_validator"]=self["webpackChunktfn_validator"]||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))}();var i=e.O(void 0,[998],(function(){return e(919)}));i=e.O(i)})();
//# sourceMappingURL=app.cb38ddf1.js.map