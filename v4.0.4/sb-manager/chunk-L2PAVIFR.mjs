var h=Object.create;var e=Object.defineProperty;var i=Object.getOwnPropertyDescriptor;var j=Object.getOwnPropertyNames;var k=Object.getPrototypeOf,l=Object.prototype.hasOwnProperty;var p=(a=>typeof require!="undefined"?require:typeof Proxy!="undefined"?new Proxy(a,{get:(b,c)=>(typeof require!="undefined"?require:b)[c]}):a)(function(a){if(typeof require!="undefined")return require.apply(this,arguments);throw new Error('Dynamic require of "'+a+'" is not supported')});var m=(a,b)=>()=>(a&&(b=a(a=0)),b);var q=(a,b)=>()=>(b||a((b={exports:{}}).exports,b),b.exports),r=(a,b)=>{for(var c in b)e(a,c,{get:b[c],enumerable:!0})},g=(a,b,c,f)=>{if(b&&typeof b=="object"||typeof b=="function")for(let d of j(b))!l.call(a,d)&&d!==c&&e(a,d,{get:()=>b[d],enumerable:!(f=i(b,d))||f.enumerable});return a};var s=(a,b,c)=>(c=a!=null?h(k(a)):{},g(b||!a||!a.__esModule?e(c,"default",{value:a,enumerable:!0}):c,a)),t=a=>g(e({},"__esModule",{value:!0}),a);var w,o=m(()=>{w={}});export{p as a,m as b,q as c,r as d,s as e,t as f,o as g,w as h};