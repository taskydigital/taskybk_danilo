"use strict";(self.webpackChunktasky_supplier=self.webpackChunktasky_supplier||[]).push([[911],{911:(M,f,c)=>{c.r(f),c.d(f,{PollCrmModule:()=>U});var m=c(7087),g=c(3759),a=c(3241),t=c(2283),C=c(4758),x=c(3620),_=c(6806),y=c(3578),p=c(9347),v=c(8464);const Z=["editControlTrigger"];function T(n,u){if(1&n){const e=t.EpF();t.TgZ(0,"div",9)(1,"div",10),t._uU(2),t.qZA(),t.TgZ(3,"div",11),t._uU(4,"Contacto:"),t.qZA(),t._uU(5,"\xa0 "),t.TgZ(6,"div",12),t._uU(7),t.qZA(),t._UZ(8,"div",13),t.TgZ(9,"div",11),t._uU(10,"Tel\xe9fono:"),t.qZA(),t._uU(11,"\xa0 "),t.TgZ(12,"div",14),t._uU(13),t.qZA(),t.TgZ(14,"mat-icon",15),t.NdJ("click",function(){const l=t.CHM(e).index,s=t.oxw(2);return t.KtG(s.onDeleteCost(l))}),t._uU(15,"delete"),t.qZA()()}if(2&n){const e=u.$implicit,o=t.oxw(2);t.xp6(2),t.Oqu(o.getStrData(1,e)),t.xp6(5),t.Oqu(o.getStrData(3,e)),t.xp6(6),t.Oqu(o.getStrData(4,e))}}function P(n,u){if(1&n&&(t.TgZ(0,"div")(1,"div",7),t.YNc(2,T,16,3,"div",8),t.qZA()()),2&n){const e=t.oxw();t.xp6(2),t.Q6J("ngForOf",e.sharedvar.pollGrpExecuted.costumerList)}}function b(n,u){if(1&n){const e=t.EpF();t.TgZ(0,"div",17)(1,"div",18),t._uU(2),t.qZA(),t.TgZ(3,"div",10),t._uU(4),t.qZA(),t.TgZ(5,"mat-icon",15),t.NdJ("click",function(){const l=t.CHM(e).index,s=t.oxw(2);return t.KtG(s.onDeleteProd(l))}),t._uU(6,"delete"),t.qZA()()}if(2&n){const e=u.$implicit,o=t.oxw(2);t.xp6(2),t.Oqu(o.getStrData(0,e)),t.xp6(2),t.Oqu(o.getStrData(1,e))}}function A(n,u){if(1&n&&(t.TgZ(0,"div")(1,"div",7),t.YNc(2,b,7,2,"div",16),t.qZA()()),2&n){const e=t.oxw();t.xp6(2),t.Q6J("ngForOf",e.sharedvar.pollGrpExecuted.productList)}}const S=[{path:"",component:(()=>{class n{constructor(e,o,i){this.sharedvar=e,this.ds=o,this.dtb=i,this.tabSelected=0,this.tabSelectedName="Lista de Clientes"}getClicked(e){switch(e.index){case 2:0===this.tabSelected?this.onSelCost():this.onSelProd();break;case 3:let o=document.getElementById("spanTrigger");o&&(o.style.display="",o.style.position="absolute",o.style.left=e.pageX+5+"px",o.style.top=e.pageY+5+"px",this.editControlTrigger.openMenu())}}selCostumer(){this.tabSelected=0,this.tabSelectedName="Lista de Clientes"}selProd(){this.tabSelected=1,this.tabSelectedName="Lista de Productos"}onSelProd(){var e=this;return(0,a.Z)(function*(){const o=[],i=yield e.dtb.getAllCRMProdAsync();i&&(i.forEach(s=>{s&&o.push({selected:!1,myid:s.id,name:s.name,hide1:s._id})}),e.ds.aSelectDefault({title:"Seleccione Productos",dgheigth:450,viewfilter:!0,viewAdd:!1,valuelst:o}).subscribe(function(){var s=(0,a.Z)(function*(r){r&&(r.forEach(d=>{e.sharedvar.pollGrpExecuted.productList?.includes(d.myid)||e.sharedvar.pollGrpExecuted.productList?.push(`${d.myid}:${d.name}:${d.hide1}`)}),yield e.dtb.updatePollGroupAsync(e.sharedvar.pollGrpExecuted))});return function(r){return s.apply(this,arguments)}}()))})()}onDeleteProd(e){var o=this;return(0,a.Z)(function*(){o.sharedvar.pollGrpExecuted.productList?.splice(e,1),yield o.dtb.updatePollGroupAsync(o.sharedvar.pollGrpExecuted)})()}getStrData(e,o){return o.split(":")[e]||""}onSelCost(){var e=this;return(0,a.Z)(function*(){const o=[],i=yield e.dtb.getAllCRMCostAsync();i&&(i.forEach(s=>{s&&o.push({selected:!1,myid:s.id,name:s.name,hide1:s._id,hide2:s.linkup_1,hide3:s.phone_1})}),e.ds.aSelectDefault({title:"Seleccione Clientes",dgheigth:450,viewfilter:!0,viewAdd:!1,valuelst:o}).subscribe(function(){var s=(0,a.Z)(function*(r){r&&(r.forEach(d=>{e.sharedvar.pollGrpExecuted.costumerList?.includes(d.myid)||e.sharedvar.pollGrpExecuted.costumerList?.push(`${d.myid}:${d.name}:${d.hide1}:${d.hide2}:${d.hide3}`)}),yield e.dtb.updatePollGroupAsync(e.sharedvar.pollGrpExecuted))});return function(r){return s.apply(this,arguments)}}()))})()}onDeleteCost(e){var o=this;return(0,a.Z)(function*(){o.sharedvar.pollGrpExecuted.costumerList?.splice(e,1),yield o.dtb.updatePollGroupAsync(o.sharedvar.pollGrpExecuted)})()}static#t=this.\u0275fac=function(o){return new(o||n)(t.Y36(C.D),t.Y36(x.n),t.Y36(_.k))};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-poll-crm"]],viewQuery:function(o,i){if(1&o&&t.Gf(Z,5),2&o){let l;t.iGM(l=t.CRH())&&(i.editControlTrigger=l.first)}},decls:18,vars:6,consts:[[3,"buttons","nav_menu","onClicked"],["id","spanTrigger",3,"matMenuTriggerFor"],["editControlTrigger","matMenuTrigger"],[1,"h-12","bg-slate-100","text-xl","text-center"],[4,"ngIf"],["controlEdit","matMenu"],["mat-menu-item","",3,"click"],[1,"flex-col","flex-wrap","p-2","gap-1"],["class","h-7 flex gap-1 mt-1 border-b border-gray-100 font-thin text-sm",4,"ngFor","ngForOf"],[1,"h-7","flex","gap-1","mt-1","border-b","border-gray-100","font-thin","text-sm"],[1,"flex-1","font-medium"],[1,"font-thin"],[1,"w-60","font-thin","text-gray-400"],[1,"w-2"],[1,"w-28","font-thin","text-gray-400"],[1,"text-gray-300","hover:text-violet-500",3,"click"],["class","h-10 flex gap-1 border-b border-gray-100 font-thin text-sm",4,"ngFor","ngForOf"],[1,"h-10","flex","gap-1","border-b","border-gray-100","font-thin","text-sm"],[1,"w-16"]],template:function(o,i){if(1&o&&(t.TgZ(0,"app-header",0),t.NdJ("onClicked",function(s){return i.getClicked(s)}),t.qZA(),t._UZ(1,"span",1,2),t.TgZ(3,"div",3),t._uU(4),t.qZA(),t.TgZ(5,"div"),t.YNc(6,P,3,1,"div",4),t.YNc(7,A,3,1,"div",4),t.TgZ(8,"mat-menu",null,5)(10,"button",6),t.NdJ("click",function(){return i.selCostumer()}),t.TgZ(11,"mat-icon"),t._uU(12,"people"),t.qZA(),t._uU(13," Seleccionar Clientes "),t.qZA(),t.TgZ(14,"button",6),t.NdJ("click",function(){return i.selProd()}),t.TgZ(15,"mat-icon"),t._uU(16,"shopping_cart"),t.qZA(),t._uU(17," Seleccionar Productos "),t.qZA()()()),2&o){const l=t.MAs(9);t.Q6J("buttons","10110")("nav_menu",!0),t.xp6(1),t.Q6J("matMenuTriggerFor",l),t.xp6(3),t.Oqu(i.tabSelectedName),t.xp6(2),t.Q6J("ngIf",0===i.tabSelected),t.xp6(1),t.Q6J("ngIf",1===i.tabSelected)}},dependencies:[m.sg,m.O5,y.G,p.VK,p.OP,p.p6,v.Hw]})}return n})()}];let G=(()=>{class n{static#t=this.\u0275fac=function(o){return new(o||n)};static#e=this.\u0275mod=t.oAB({type:n});static#o=this.\u0275inj=t.cJS({imports:[g.Bz.forChild(S),g.Bz]})}return n})();var E=c(769);let U=(()=>{class n{static#t=this.\u0275fac=function(o){return new(o||n)};static#e=this.\u0275mod=t.oAB({type:n});static#o=this.\u0275inj=t.cJS({imports:[m.ez,G,E.O,p.Tx,v.Ps]})}return n})()}}]);