"use strict";(self.webpackChunktasky_tasker=self.webpackChunktasky_tasker||[]).push([[793],{793:(F,r,o)=>{o.r(r),o.d(r,{PollAvailableModule:()=>P});var d=o(214),c=o(6870),v=o(3241),l=o(6637),p=o(9104),u=o(9818),m=o(106),h=o(1238),f=o(2767),y=o(1575);function g(t,A){if(1&t){const a=l.EpF();l.TgZ(0,"app-poll-card",4),l.NdJ("detail",function(){const s=l.CHM(a).$implicit,n=l.oxw();return l.KtG(n.onPollPartial2FullSelected(s))}),l.qZA()}2&t&&l.Q6J("pollEx",A.$implicit)("state",2)}const b=[{path:"",component:(()=>{class t{constructor(a,e,i,s){this.dtb=a,this.dg=e,this.nvg=i,this.sharedvar=s,this.lchat=!1,this.schemafilter={controls:[{name:"age_from",label:"edad m\xednima:",type:"number",default:18,validators:{}},{name:"age_to",label:"edad l\xedmite:",type:"number",default:100,validators:{}},{name:"geolocation",label:"Ubicaci\xf3n GPS",type:"textarea",style:"w-full",totalRows:5,validators:{}},{name:"skills",label:"Habilidades:",type:"multiselect",style:"w-full",validators:{required:!0},selectOptions:[{key:"skill1",value:"Habilidad 1"},{key:"skill2",value:"Habilidad 2"},{key:"skill3",value:"Habilidad 3"},{key:"skill4",value:"Habilidad 4"},{key:"skill5",value:"Habilidad 5"}]},{name:"elements",label:"Posesiones:",type:"multiselect",style:"w-full",validators:{},selectOptions:[{key:"bike",value:"Bicicleta"},{key:"moto",value:"Motociclete"},{key:"auto",value:"auto"},{key:"truck",value:"Camioneta"}]},{name:"studyLevel",label:"Nivel del estudio:",type:"select",validators:{required:!0},selectOptions:[{key:"0",value:"Ninguno"},{key:"1",value:"Primaria"},{key:"2",value:"Secundario"},{key:"3",value:"Universitario"}]},{name:"stars",label:"Califiaci\xf3n (1..5):",type:"number",default:1,validators:{min:1,max:5}}]}}ngOnInit(){this.dtb.getExportedPollGroupAsync()}ngOnDestroy(){this.sharedvar.pollExecList=[]}getClicked(a){2===a.index&&this.showFilterDialog()}showFilterDialog(){this.dg.aDefault({title:"Filtrar Modelos",schema:this.schemafilter,value:this.sharedvar.availableFilter,dgwidth:400}).subscribe(e=>{e&&(e.geolocation.length>0&&(e.geolocation=e.geolocation.split(/\r\n|\r|\n/,-1)),this.sharedvar.availableFilter=e)})}onPollPartial2FullSelected(a){var e=this;return(0,v.Z)(function*(){yield e.dtb.onPollPartial2FullSelected(a.id),e.nvg.onRouteDetail(`${e.sharedvar.pollExecSelected.name}/${e.sharedvar.pollExecSelected.model_name}`,"","poll",!0)})()}static#l=this.\u0275fac=function(e){return new(e||t)(l.Y36(p.k),l.Y36(u.x),l.Y36(m.$),l.Y36(h.D))};static#e=this.\u0275cmp=l.Xpm({type:t,selectors:[["app-poll-available"]],decls:4,vars:3,consts:[[1,"flex-1","flex","flex-col","h-full"],[3,"buttons","lchat","onClicked"],[1,"overflow-auto","flex","flex-row","flex-wrap","p-2","gap-y-2"],[3,"pollEx","state","detail",4,"ngFor","ngForOf"],[3,"pollEx","state","detail"]],template:function(e,i){1&e&&(l.TgZ(0,"div",0)(1,"app-header",1),l.NdJ("onClicked",function(n){return i.getClicked(n)}),l.qZA(),l.TgZ(2,"div",2),l.YNc(3,g,1,2,"app-poll-card",3),l.qZA()()),2&e&&(l.xp6(1),l.Q6J("buttons","10100000")("lchat",i.lchat),l.xp6(2),l.Q6J("ngForOf",i.sharedvar.pollExecList))},dependencies:[d.sg,f.G,y.f]})}return t})()}];let k=(()=>{class t{static#l=this.\u0275fac=function(e){return new(e||t)};static#e=this.\u0275mod=l.oAB({type:t});static#t=this.\u0275inj=l.cJS({imports:[c.Bz.forChild(b),c.Bz]})}return t})();var x=o(1569),C=o(1160);let P=(()=>{class t{static#l=this.\u0275fac=function(e){return new(e||t)};static#e=this.\u0275mod=l.oAB({type:t});static#t=this.\u0275inj=l.cJS({imports:[d.ez,k,x.O,C.B]})}return t})()}}]);