parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"6KIz":[function(require,module,exports) {
"use strict";var t=document.getElementById("gallery__img-block"),e=document.getElementById("button1"),n=document.getElementById("button2"),l=document.getElementById("button3"),o=document.getElementById("button4"),s=0;function r(){e.style.backgroundColor=1===s?"hsl(167, 55%, 23%)":"hsl(0, 1%, 74%)",n.style.backgroundColor=2===s?"hsl(167, 55%, 23%)":"hsl(0, 1%, 74%)",l.style.backgroundColor=3===s?"hsl(167, 55%, 23%)":"hsl(0, 1%, 74%)",o.style.backgroundColor=4===s?"hsl(167, 55%, 23%)":"hsl(0, 1%, 74%)"}function c(){s=1,t.style.transform="translate(0)",r()}function a(){s=2,t.style.transform="translate(-107%)",r()}function d(){s=3,t.style.transform="translate(-214%)",r()}function u(){t.style.transform="translate(-320%)",s=4,r()}e.addEventListener("click",c),n.addEventListener("click",a),l.addEventListener("click",d),o.addEventListener("click",u);
},{}]},{},["6KIz"], null)
//# sourceMappingURL=main.f2cc14ad.js.map