"use strict";(self.webpackChunktasky_tasker=self.webpackChunktasky_tasker||[]).push([[592],{5715:(v,n,t)=>{t.d(n,{Q:()=>h});var d=t(3241),e=t(6637),i=t(1238),u=t(9104),c=t(3832);let h=(()=>{class a{constructor(l,s,_){this.sharedvar=l,this.dtb=s,this.dg=_}buildHtml2Pdf(l="",s){var _=this;return(0,d.Z)(function*(){const r=yield _.dtb.getPollResultAsync(l);_.dg.aPollResult({schema:{},value:{pollresult:r,emails:s},title:"Formulario: "+r.pollGrpName}).subscribe(o=>{o.emaildata.length>0&&_.dtb.notifMail(r,o.emaildata,o.html,"end")})})()}static#t=this.\u0275fac=function(s){return new(s||a)(e.LFG(i.D),e.LFG(u.k),e.LFG(c.x))};static#a=this.\u0275prov=e.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})()}}]);