import{d as b,e as r,w as _}from"./base-1c9c4335.js";import{m as u}from"./index-5d13da39.js";import{u as w,i as g,_ as $}from"./index-dccea06b.js";import{d as p,I as O,G as l,g as S,o as h,a0 as v,w as j,Z as N,a2 as C,u as c,$ as x,a1 as E,F as k}from"./_plugin-vue_export-helper-fbc28b02.js";const R=Symbol("rowContextKey"),K=b({tag:{type:String,default:"div"},span:{type:Number,default:24},offset:{type:Number,default:0},pull:{type:Number,default:0},push:{type:Number,default:0},xs:{type:r([Number,Object]),default:()=>u({})},sm:{type:r([Number,Object]),default:()=>u({})},md:{type:r([Number,Object]),default:()=>u({})},lg:{type:r([Number,Object]),default:()=>u({})},xl:{type:r([Number,Object]),default:()=>u({})}}),P=p({name:"ElCol"}),B=p({...P,props:K,setup(f){const t=f,{gutter:o}=O(R,{gutter:l(()=>0)}),a=w("col"),i=l(()=>{const e={};return o.value&&(e.paddingLeft=e.paddingRight=`${o.value/2}px`),e}),m=l(()=>{const e=[];return["span","offset","pull","push"].forEach(s=>{const n=t[s];g(n)&&(s==="span"?e.push(a.b(`${t[s]}`)):n>0&&e.push(a.b(`${s}-${t[s]}`)))}),["xs","sm","md","lg","xl"].forEach(s=>{g(t[s])?e.push(a.b(`${s}-${t[s]}`)):S(t[s])&&Object.entries(t[s]).forEach(([n,y])=>{e.push(n!=="span"?a.b(`${s}-${n}-${y}`):a.b(`${s}-${y}`))})}),o.value&&e.push(a.is("guttered")),[a.b(),e]});return(e,d)=>(h(),v(E(e.tag),{class:C(c(m)),style:x(c(i))},{default:j(()=>[N(e.$slots,"default")]),_:3},8,["class","style"]))}});var I=$(B,[["__file","/home/runner/work/element-plus/element-plus/packages/components/col/src/col.vue"]]);const Q=_(I),L=["start","center","end","space-around","space-between","space-evenly"],A=["top","middle","bottom"],D=b({tag:{type:String,default:"div"},gutter:{type:Number,default:0},justify:{type:String,values:L,default:"start"},align:{type:String,values:A,default:"top"}}),F=p({name:"ElRow"}),G=p({...F,props:D,setup(f){const t=f,o=w("row"),a=l(()=>t.gutter);k(R,{gutter:a});const i=l(()=>{const e={};return t.gutter&&(e.marginRight=e.marginLeft=`-${t.gutter/2}px`),e}),m=l(()=>[o.b(),o.is(`justify-${t.justify}`,t.justify!=="start"),o.is(`align-${t.align}`,t.align!=="top")]);return(e,d)=>(h(),v(E(e.tag),{class:C(c(m)),style:x(c(i))},{default:j(()=>[N(e.$slots,"default")]),_:3},8,["class","style"]))}});var J=$(G,[["__file","/home/runner/work/element-plus/element-plus/packages/components/row/src/row.vue"]]);const U=_(J);export{Q as E,U as a};
