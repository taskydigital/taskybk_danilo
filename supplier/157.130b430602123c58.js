"use strict";(self.webpackChunktasky_supplier=self.webpackChunktasky_supplier||[]).push([[157],{6157:($,h,s)=>{s.r(h),s.d(h,{AppointListModule:()=>H});var _=s(7087),g=s(3759),p=s(3241),t=s(2283),A=s(4758),y=s(4537),Z=s(6806),x=s(3638),k=s(1682),L=s(8035),C=s(3578),f=s(9347),v=s(8464),F=s(9554),N=s(5802);const M=["editControlTrigger"],G=["chartTrigger"];function D(o,u){if(1&o){const e=t.EpF();t.TgZ(0,"div",18),t.NdJ("mousemove",function(i){t.CHM(e);const n=t.oxw();return t.KtG(n.mousepos(i))}),t.TgZ(1,"div",19)(2,"app-time-line",20),t.NdJ("onSelect",function(i){t.CHM(e);const n=t.oxw();return t.KtG(n.onSelect(i))}),t.qZA()(),t._UZ(3,"span",21,22),t.qZA()}if(2&o){const e=t.oxw(),a=t.MAs(43);t.xp6(2),t.Q6J("data",e.dataList)("pivot",e.pivot)("bartype",e.bartype),t.xp6(1),t.Q6J("matMenuTriggerFor",a)}}function S(o,u){if(1&o){const e=t.EpF();t.TgZ(0,"div",23)(1,"app-map",24),t.NdJ("markerclick",function(i){t.CHM(e);const n=t.oxw();return t.KtG(n.getMarkerClicked(i))}),t.qZA()()}if(2&o){const e=t.oxw();t.xp6(1),t.Q6J("reset",e.reset)("markerlist",e.dataList)}}function J(o,u){1&o&&(t.TgZ(0,"mat-icon"),t._uU(1,"done"),t.qZA())}function U(o,u){1&o&&(t.TgZ(0,"mat-icon"),t._uU(1,"done"),t.qZA())}function I(o,u){1&o&&(t.TgZ(0,"mat-icon"),t._uU(1,"done"),t.qZA())}function E(o,u){1&o&&(t.TgZ(0,"mat-icon"),t._uU(1,"done"),t.qZA())}const P=[{path:"",component:(()=>{class o{constructor(e,a,i,n,r,d){this.sharedvar=e,this.staffServ=a,this.dtb=i,this.dg=n,this.data2excel=r,this.notif=d,this.staffList=[],this.pivot=0,this.bartype=0,this.chunk="D",this.graphtypeName="Linea de tiempo apilado",this.mpos={x:-1,y:-1},this.bar_txt="",this.reset=0}ngOnInit(){var e=this;return(0,p.Z)(function*(){e.staffSub=e.notif.getStaffNotif_Obs().subscribe({next:r=>{e.executeFilter()}}),e.staffList=yield e.dtb.getStaffByFilterAsync({queryType:1,active:!0,stars:0,rol:"P"}),e.staffServ.startAppointData(e.staffList);const a=new Date,i=a.setHours(0,0,0,0),n=a.setHours(23,59,59,999);e.localFilter={crm:"T",staff__id:[],pollGrpData:[],costumers:[],products:[],products_name_sel:[],date_all:!1,date_ini:i,date_end:n},e.executeFilter()})()}ngOnDestroy(){this.staffSub&&this.staffSub.unsubscribe()}setGraphType(e){switch(this.bartype=e,e){case 0:this.graphtypeName="Linea de tiempo apilado";break;case 1:this.graphtypeName="Mapa"}}executeFilter(){this.localFilter&&(this.dataList=[],this.getTitleText(),this.staffList.forEach(e=>{if(e.appoint&&(0===this.localFilter.staff__id.length||-1!==this.localFilter.staff__id.findIndex(a=>e._id===a))){for(let a=0;a<e.appoint.length;a++){const i=e.appoint[a];let n=!i.ended;n=n&&"appoint"===i.type,n=!(!n||!(0===this.localFilter.pollGrpData.length||this.localFilter.pollGrpData.findIndex(r=>r===i.pollgrp_id)>-1)),n=!(!n||!(0===this.localFilter.costumers.length||this.localFilter.costumers.findIndex(r=>r===i.crm_costum_name)>-1)),!0!==this.localFilter.date_all&&(n=!!(n&&this.localFilter.date_ini<=i.datetime&&i.datetime<=this.localFilter.date_end)),n&&this.dataList.push(this.staffServ.staff2analitic(a,e,i))}this.dataList.sort((a,i)=>Number(i.date_ini)-Number(a.date_ini))}}))}getClicked(e){var a=this;return(0,p.Z)(function*(){switch(e.index){case 1:a.filterDialog();break;case 2:a.addAppoint();break;case 3:let i=document.getElementById("spanTrigger");i&&(i.style.display="",i.style.position="absolute",i.style.left=e.pageX+5+"px",i.style.top=e.pageY+5+"px",a.editControlTrigger.openMenu());break;case 4:yield a.executeFilter()}})()}addAppoint(){this.staffServ.onAddEditAppoint(null,-1)}getTitleText(){this.localFilter&&(this.bar_txt="",this.localFilter.pollGrpData&&this.localFilter.pollGrpData.length>0&&(this.bar_txt+="Formularios - "),this.localFilter.staff__id&&this.localFilter.staff__id.length>0&&(this.bar_txt+="Tasker - "),this.localFilter.costumers&&this.localFilter.costumers.length>0&&(this.bar_txt+="Clientes - "),this.localFilter.products&&this.localFilter.products.length>0&&(this.bar_txt+="Productos - "),this.bar_txt+=`Fecha desde ${this.sharedvar.formatNumber2Date(this.localFilter.date_ini||0,"/")}\n     hasta ${this.sharedvar.formatNumber2Date(this.localFilter.date_end||0,"/")}`)}getMarkerClicked(e){var a=this;return(0,p.Z)(function*(){const i=e.target.options.alt.split(":"),n=a.staffList.find(r=>r._id===i[0]);if(n){if("click"===e.type)a.staffServ.onAddEditAppoint(n,Number(i[1]),!1);else if("moveend"===e.type){const r=e.target._latlng.lat,d=e.target._latlng.lng;n.appoint[Number(i[1])].geoLoc={lat:r,lng:d},a.dtb.updateStaffAsync(n)}a.reset++}})()}filterDialog(){var e=this;return(0,p.Z)(function*(){e.sharedvar.wait=!0;let a=[],i=[],n=[],r=[];(yield e.dtb.getStaffByFilterAsync({queryType:3,active:!0,stars:0,rol:"K"})).forEach(c=>{a.push({key:c._id,value:`${c.names||c.email} ${c.lastnames||""}`})}),(yield e.dtb.getPollGrpActiveAsync()).forEach(c=>{"index"!==c.id&&i.push({key:c._id,value:c.name})}),(yield e.dtb.getActiveCRMCostumAsync()).forEach(c=>{n.push({key:c.id,value:c.name})}),(yield e.dtb.getAllCRMProdAsync()).forEach(c=>{r.push({key:c.id,value:c.name})}),e.dg.aDefault({schema:{controls:[{name:"staff__id",label:"Taskers:",type:"multiselect",placeholder:"Todos",style:"w-full",validators:{},selectOptions:a},{name:"pollGrpData",label:"Formularios:",type:"multiselect",placeholder:"Todos",style:"w-full",validators:{},selectOptions:i},{name:"costumers",label:"Clientes:",type:"multiselect",placeholder:"Todos",style:"w-full",validators:{},selectOptions:n},{name:"products",label:"Productos:",type:"multiselect",placeholder:"Todos",style:"w-full",validators:{},selectOptions:r},{name:"date_all",label:"Cualquier fecha",type:"checkbox",validators:{}},{name:"date_ini",label:"Fecha inicio:",type:"date",validators:{}},{name:"date_end",label:"Fecha final:",type:"date",validators:{}}]},title:"Filtros",dgheigth:615,dgwidth:550,value:e.localFilter}).subscribe(function(){var c=(0,p.Z)(function*(l){if(e.sharedvar.wait=!1,l){if(l.alldates)l.date_ini=0,l.date_end=0;else{let m=new Date(l.date_ini||0);l.date_ini=m.setHours(0,0,0,0),m=new Date(l.date_end||0),l.date_end=m.setHours(23,59,59,999)}const T=[];l.products&&l.products.length>0&&l.products.forEach(m=>{const b=r.find(R=>R.key===m);b&&T.push(b.value)}),e.localFilter={crm:"T",staff__id:l.staff__id,pollGrpData:l.pollGrpData,costumers:l.costumers,products:l.products,date_all:l.date_all,date_ini:l.date_ini,date_end:l.date_end,products_name_sel:[...T]},yield e.executeFilter()}});return function(l){return c.apply(this,arguments)}}())})()}mousepos(e){this.mpos.x=e.clientX,this.mpos.y=e.clientY}onSelect(e){var a=this;return(0,p.Z)(function*(){let i=document.getElementById("chartTrigger");i&&(a.graphevent=e,i.style.display="",i.style.position="absolute",i.style.left=a.mpos.x+5+"px",i.style.top=a.mpos.y+5+"px",a.chartTrigger.openMenu())})()}getGraphInfo(e){var a=this;return(0,p.Z)(function*(){const i=a.graphevent.meta.split(":"),n=a.staffList.find(d=>d._id===i[0]);if(n?.appoint&&n.appoint[Number(i[1])])switch(e){case 1:a.onGetTaskInfo(n);break;case 2:a.staffServ.onMessage2(n.names,n._id);break;case 4:a.staffServ.onAddEditAppoint(n,Number(i[1]));break;case 5:a.staffServ.onDelAppoint(n,Number(i[1]))}})()}onGetTaskInfo(e){this.dg.aObject2Table({title:`Datos de ${e.names||""} ${e.lastnames||""}`,dgheigth:615,dgwidth:550,value:e,tags:{metadata:this.staffServ.taskerData}}).subscribe(function(){var i=(0,p.Z)(function*(n){});return function(n){return i.apply(this,arguments)}}())}onExportexcel(){const e=`Reporte CRM fechas ${this.sharedvar.formatNumber2Date(this.localFilter.date_ini||0,"-")} - \n    ${this.sharedvar.formatNumber2Date(this.localFilter.date_end||0,"-")}`;this.data2excel.excelExport(this.dataList,e,"CRM",this.header,[])}onSelPivot(e){this.pivot=e}getPivotName(){switch(this.pivot){case 0:return"Tasker";case 1:return"Actividades";case 2:return"Clientes";case 3:return"Productos"}return""}static#t=this.\u0275fac=function(a){return new(a||o)(t.Y36(A.D),t.Y36(y.x),t.Y36(Z.k),t.Y36(x.x),t.Y36(k.Z),t.Y36(L.$))};static#e=this.\u0275cmp=t.Xpm({type:o,selectors:[["app-appoint-list"]],viewQuery:function(a,i){if(1&a&&(t.Gf(M,5),t.Gf(G,5)),2&a){let n;t.iGM(n=t.CRH())&&(i.editControlTrigger=n.first),t.iGM(n=t.CRH())&&(i.chartTrigger=n.first)}},decls:61,vars:12,consts:[[1,"flex","flex-col","max-h-screen"],[3,"buttons","nav_menu","bar_text","onClicked"],["id","spanTrigger",3,"matMenuTriggerFor"],["editControlTrigger","matMenuTrigger"],["class","flex-1 m-2 bg-gray-100 overflow-scroll",3,"mousemove",4,"ngIf"],["class","flex-1 m-2 h-screen overflow-scroll",4,"ngIf"],["controlEdit","matMenu"],["mat-menu-item","",3,"matMenuTriggerFor"],["color","primary"],[1,"ml-1","mt-1","text-violet-500","text-lg","font-medium"],[1,"ml-8"],["mat-menu-item","",3,"click"],[4,"ngIf"],[1,"ml-2","mt-1","text-violet-500","text-lg","font-medium"],[1,"ml-5"],["mat-menu-item",""],["graphtype","matMenu"],["graphMenu","matMenu"],[1,"flex-1","m-2","bg-gray-100","overflow-scroll",3,"mousemove"],[1,"border","border-gray-200","rounded-sm","shadow-lg"],[3,"data","pivot","bartype","onSelect"],["id","chartTrigger",3,"matMenuTriggerFor"],["chartTrigger","matMenuTrigger"],[1,"flex-1","m-2","h-screen","overflow-scroll"],[3,"reset","markerlist","markerclick"]],template:function(a,i){if(1&a&&(t.TgZ(0,"div",0)(1,"app-header",1),t.NdJ("onClicked",function(r){return i.getClicked(r)}),t.qZA(),t._UZ(2,"span",2,3),t.YNc(4,D,5,4,"div",4),t.qZA(),t.YNc(5,S,2,2,"div",5),t.TgZ(6,"mat-menu",null,6)(8,"button",7)(9,"mat-icon",8),t._uU(10,"trending_up"),t.qZA(),t.TgZ(11,"span",9),t._uU(12),t.qZA()(),t.TgZ(13,"div",10)(14,"button",11),t.NdJ("click",function(){return i.onSelPivot(0)}),t.YNc(15,J,2,0,"mat-icon",12),t._uU(16," Tasker "),t.qZA(),t.TgZ(17,"button",11),t.NdJ("click",function(){return i.onSelPivot(1)}),t.YNc(18,U,2,0,"mat-icon",12),t._uU(19," Actividad "),t.qZA(),t.TgZ(20,"button",11),t.NdJ("click",function(){return i.onSelPivot(2)}),t.YNc(21,I,2,0,"mat-icon",12),t._uU(22," Cliente "),t.qZA(),t.TgZ(23,"button",11),t.NdJ("click",function(){return i.onSelPivot(3)}),t.YNc(24,E,2,0,"mat-icon",12),t._uU(25," Producto "),t.qZA()(),t._UZ(26,"hr"),t.TgZ(27,"h2",13)(28,"mat-icon"),t._uU(29,"file_download"),t.qZA(),t._uU(30,"\xa0Exportar"),t.qZA(),t.TgZ(31,"div",14)(32,"button",11),t.NdJ("click",function(){return i.onExportexcel()}),t._uU(33," Exportar Informe a Excel. "),t.qZA(),t.TgZ(34,"button",15),t._uU(35," Enviar Informe a Google Spread Sheet "),t.qZA()()(),t.TgZ(36,"mat-menu",null,16)(38,"button",11),t.NdJ("click",function(){return i.setGraphType(0)}),t._uU(39," Gr\xe1fica "),t.qZA(),t.TgZ(40,"button",11),t.NdJ("click",function(){return i.setGraphType(1)}),t._uU(41," Mapa "),t.qZA()(),t.TgZ(42,"mat-menu",null,17)(44,"button",11),t.NdJ("click",function(){return i.getGraphInfo(1)}),t.TgZ(45,"mat-icon"),t._uU(46,"perm_identity"),t.qZA(),t._uU(47," Datos del tasker "),t.qZA(),t.TgZ(48,"button",11),t.NdJ("click",function(){return i.getGraphInfo(2)}),t.TgZ(49,"mat-icon"),t._uU(50,"forum"),t.qZA(),t._uU(51," Mensaje al tasker "),t.qZA(),t._UZ(52,"hr"),t.TgZ(53,"button",11),t.NdJ("click",function(){return i.getGraphInfo(4)}),t.TgZ(54,"mat-icon"),t._uU(55,"edit"),t.qZA(),t._uU(56," Editar Agenda "),t.qZA(),t.TgZ(57,"button",11),t.NdJ("click",function(){return i.getGraphInfo(5)}),t.TgZ(58,"mat-icon"),t._uU(59,"delete"),t.qZA(),t._uU(60," Borrar Agenda "),t.qZA()()),2&a){const n=t.MAs(7),r=t.MAs(37);t.xp6(1),t.Q6J("buttons","111111")("nav_menu",!1)("bar_text",i.bar_txt),t.xp6(1),t.Q6J("matMenuTriggerFor",n),t.xp6(2),t.Q6J("ngIf",0===i.bartype),t.xp6(1),t.Q6J("ngIf",1===i.bartype),t.xp6(3),t.Q6J("matMenuTriggerFor",r),t.xp6(4),t.Oqu(i.graphtypeName),t.xp6(3),t.Q6J("ngIf",0===i.pivot),t.xp6(3),t.Q6J("ngIf",1===i.pivot),t.xp6(3),t.Q6J("ngIf",2===i.pivot),t.xp6(3),t.Q6J("ngIf",3===i.pivot)}},dependencies:[_.O5,C.G,f.VK,f.OP,f.p6,v.Hw,F.g,N.G]})}return o})()}];let q=(()=>{class o{static#t=this.\u0275fac=function(a){return new(a||o)};static#e=this.\u0275mod=t.oAB({type:o});static#i=this.\u0275inj=t.cJS({imports:[g.Bz.forChild(P),g.Bz]})}return o})();var w=s(769),Q=s(3279),Y=s(6483),O=s(6965);let H=(()=>{class o{static#t=this.\u0275fac=function(a){return new(a||o)};static#e=this.\u0275mod=t.oAB({type:o});static#i=this.\u0275inj=t.cJS({imports:[_.ez,q,w.O,Q.X,f.Tx,v.Ps,Y.q,O.R]})}return o})()}}]);