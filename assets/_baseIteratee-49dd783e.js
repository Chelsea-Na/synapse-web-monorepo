import{g,a as y,i as I,b as P}from"./_getMatchData-2bcfacce.js";import{a as u}from"./isArray-5e3f9107.js";import{i as m}from"./isSymbol-7c514724.js";import{M as p,i as E}from"./_Uint8Array-df44b265.js";import{t as C}from"./toString-cc90cb98.js";import{j as M,b as A}from"./_Map-92f6da1c.js";import{i as O}from"./identity-46f208ab.js";var R=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,_=/^\w*$/;function o(n,r){if(u(n))return!1;var t=typeof n;return t=="number"||t=="symbol"||t=="boolean"||n==null||m(n)?!0:_.test(n)||!R.test(n)||r!=null&&n in Object(r)}var T="Expected a function";function c(n,r){if(typeof n!="function"||r!=null&&typeof r!="function")throw new TypeError(T);var t=function(){var e=arguments,i=r?r.apply(this,e):e[0],a=t.cache;if(a.has(i))return a.get(i);var s=n.apply(this,e);return t.cache=a.set(i,s)||a,s};return t.cache=new(c.Cache||p),t}c.Cache=p;var w=500;function D(n){var r=c(n,function(e){return t.size===w&&t.clear(),e}),t=r.cache;return r}var x=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,N=/\\(\\)?/g,S=D(function(n){var r=[];return n.charCodeAt(0)===46&&r.push(""),n.replace(x,function(t,e,i,a){r.push(i?a.replace(N,"$1"):e||t)}),r});const z=S;function h(n,r){return u(n)?n:o(n,r)?[n]:z(C(n))}var F=1/0;function f(n){if(typeof n=="string"||m(n))return n;var r=n+"";return r=="0"&&1/n==-F?"-0":r}function l(n,r){r=h(r,n);for(var t=0,e=r.length;n!=null&&t<e;)n=n[f(r[t++])];return t&&t==e?n:void 0}function L(n,r,t){var e=n==null?void 0:l(n,r);return e===void 0?t:e}function d(n,r){return function(t){return t==null?!1:t[n]===r&&(r!==void 0||n in Object(t))}}function $(n){var r=g(n);return r.length==1&&r[0][2]?d(r[0][0],r[0][1]):function(t){return t===n||y(t,n,r)}}function b(n,r){return n!=null&&r in Object(n)}function G(n,r,t){r=h(r,n);for(var e=-1,i=r.length,a=!1;++e<i;){var s=f(r[e]);if(!(a=n!=null&&t(n,s)))break;n=n[s]}return a||++e!=i?a:(i=n==null?0:n.length,!!i&&M(i)&&E(s,i)&&(u(n)||A(n)))}function K(n,r){return n!=null&&G(n,r,b)}var U=1,X=2;function Z(n,r){return o(n)&&I(r)?d(f(n),r):function(t){var e=L(t,n);return e===void 0&&e===r?K(t,n):P(r,e,U|X)}}function q(n){return function(r){return r==null?void 0:r[n]}}function H(n){return function(r){return l(r,n)}}function Y(n){return o(n)?q(f(n)):H(n)}function j(n){return typeof n=="function"?n:n==null?O:typeof n=="object"?u(n)?Z(n[0],n[1]):$(n):Y(n)}export{l as a,j as b,h as c,G as d,$ as e,Z as f,L as g,K as h,q as i,c as m,Y as p,z as s,f as t};
