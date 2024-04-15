"use strict";(self.webpackChunktasky_supplier=self.webpackChunktasky_supplier||[]).push([[638],{9554:(A,E,r)=>{r.d(E,{g:()=>x});var _=r(3241),c=r(2283),f=r(7087),v=r(3279);const O=["chart"];function b(g,h){if(1&g&&(c.TgZ(0,"div",1),c._UZ(1,"apx-chart",2),c.qZA()),2&g){const e=c.oxw();c.xp6(1),c.Q6J("series",e.chartOptions.series)("chart",e.chartOptions.chart)("fill",e.chartOptions.fill)("legend",e.chartOptions.legend)("plotOptions",e.chartOptions.plotOptions)("xaxis",e.chartOptions.xaxis)("tooltip",e.chartOptions.tooltip)}}let x=(()=>{class g{constructor(){this.data=[],this.prod_list=[],this.pivot=0,this.bartype=0,this.onSelect=new c.vpe}ngOnChanges(e){this.buildChart()}buildChart(){var e=this;return(0,_.Z)(function*(){if(e.data&&0!==e.data.length){switch(e.serieList=[],e.pivot){case 0:case 1:e.timeLineTaskerPivot();break;case 2:e.timeLineTCostumerPivot();break;case 3:e.timeLineProductPivot()}e.chartOptions={series:e.serieList,chart:{height:450,type:"rangeBar",events:{dataPointSelection:(s=(0,_.Z)(function*(n,t,i){yield e.onSelectEvent(e.serieList[i.seriesIndex].data[i.dataPointIndex])}),function(t,i,a){return s.apply(this,arguments)})},toolbar:{show:!0,tools:{zoomin:!0,zoomout:!0}}},plotOptions:{bar:{horizontal:!0,barHeight:"80%",rangeBarGroupRows:1===e.bartype}},xaxis:{type:"datetime",labels:{datetimeFormatter:{year:"yyyy",month:"MMM 'yy",day:"dd MMM",hour:"hh:mm T"},datetimeUTC:!1}},fill:{type:"solid"},legend:{position:"top",horizontalAlign:"left"},tooltip:{custom:({seriesIndex:s,dataPointIndex:n})=>{const t=e.data.find(i=>i._id===e.serieList[s].data[n].meta);if(t){const i=t.ended?" FINALIZADO":" EN PROCESO ";let a=`: ${new Date(t.date_ini).toLocaleString("es-CO",{dateStyle:"short",timeStyle:"short",hour12:!0})} >> ${new Date(t.date_end).toLocaleString("es-CO",{dateStyle:"short",timeStyle:"short",hour12:!0})}`;switch(e.pivot){case 0:return t.tasker_name+i+a;case 1:return t.activity_name+i+a;case 2:return t.costumer_name+i+a;case 3:return t.crm_products+i+a}return t.activity_name+a}return""}}}}var s})()}timeLineTaskerPivot(){this.data.forEach(e=>{const s=this.serieList.findIndex(n=>n.name===e.activity_name);s>=0?this.serieList[s].data.push({x:e.tasker_name,y:[e.date_ini,e.date_end],meta:e._id}):this.serieList.push({name:e.activity_name,data:[{x:e.tasker_name,y:[e.date_ini,e.date_end],meta:e._id}]})}),this.cleanSeries()}timeLineTCostumerPivot(){this.data.forEach(e=>{const s=this.serieList.findIndex(n=>n.name===e.costumer_name);s>=0?this.serieList[s].data.push({x:e.tasker_name,y:[e.date_ini,e.date_end],meta:e._id}):this.serieList.push({name:e.costumer_name,data:[{x:e.tasker_name,y:[e.date_ini,e.date_end],meta:e._id}]})}),this.cleanSeries()}timeLineProductPivot(){(!this.prod_list||0===this.prod_list.length)&&(this.prod_list=[],this.data.forEach(e=>{e.crm_products&&e.crm_products.length>0&&this.prod_list.push(...e.crm_products)}),this.prod_list=[...new Set(this.prod_list)]),this.prod_list.forEach(e=>{this.serieList.push({name:e,data:[]})}),this.data.forEach(e=>{const s=this.serieList.findIndex(n=>e.crm_products.find(t=>n.name===t));s>=0?this.serieList[s].data.push({x:e.tasker_name,y:[e.date_ini,e.date_end],meta:e._id}):this.serieList.push({name:e.costumer_name,data:[{x:e.tasker_name,y:[e.date_ini,e.date_end],meta:e._id}]})}),this.cleanSeries()}onSelectEvent(e){var s=this;return(0,_.Z)(function*(){s.onSelect.emit(e)})()}cleanSeries(){this.serieList.forEach(e=>{let s=0;for(;s<e.data.length;)0===e.data[s].y.length?e.data.splice(s,1):s++})}static#e=this.\u0275fac=function(s){return new(s||g)};static#t=this.\u0275cmp=c.Xpm({type:g,selectors:[["app-time-line"]],viewQuery:function(s,n){if(1&s&&c.Gf(O,5),2&s){let t;c.iGM(t=c.CRH())&&(n.chart=t.first)}},inputs:{data:"data",prod_list:"prod_list",pivot:"pivot",bartype:"bartype"},outputs:{onSelect:"onSelect"},features:[c.TTD],decls:1,vars:1,consts:[["id","chart",4,"ngIf"],["id","chart"],[3,"series","chart","fill","legend","plotOptions","xaxis","tooltip"]],template:function(s,n){1&s&&c.YNc(0,b,2,7,"div",0),2&s&&c.Q6J("ngIf",n.data&&n.data.length>0)},dependencies:[f.O5,v.x]})}return g})()},6483:(A,E,r)=>{r.d(E,{q:()=>g});var _=r(7087),c=r(3759),f=r(9554),v=r(2283);const O=[{path:"",component:f.g}];let b=(()=>{class h{static#e=this.\u0275fac=function(n){return new(n||h)};static#t=this.\u0275mod=v.oAB({type:h});static#i=this.\u0275inj=v.cJS({imports:[c.Bz.forChild(O),c.Bz]})}return h})();var x=r(3279);let g=(()=>{class h{static#e=this.\u0275fac=function(n){return new(n||h)};static#t=this.\u0275mod=v.oAB({type:h});static#i=this.\u0275inj=v.cJS({imports:[_.ez,b,x.X]})}return h})()},4537:(A,E,r)=>{r.d(E,{x:()=>e});var _=r(3241),c=r(4344),f=r(2283),v=r(4758),O=r(6806),b=r(1359),x=r(8376),g=r(3620),h=r(8035);let e=(()=>{class s{constructor(t,i,a,o,p,l){this.sharedvar=t,this.dtb=i,this.snkBar=a,this.dg=o,this.ds=p,this.notif=l,this.schemaAppoint={controls:[{name:"staff",label:"Responsable:",type:"select",selectOptions:[],validators:{required:!0}},{name:"datetime",label:"Fecha y hora:",type:"datetime-local",validators:{required:!0}},{name:"dateend",label:"Fecha y hora final sugerida:",type:"datetime-local",sideBtn:"more_time",validators:{required:!0}},{name:"notes",label:"Notas:",type:"textarea",totalRows:4,style:"w-full",validators:{required:!0}},{name:"costumer",label:"Cliente",type:"text",sideBtn:"people",style:"w-full",validators:{}},{name:"contact",label:"Contacto",type:"text",style:"w-full",validators:{}},{name:"address",label:"Direcci\xf3n",type:"text",style:"w-full",validators:{}},{name:"geoLoc",label:"Geolocalizaci\xf3n",type:"text",style:"w-full",sideBtn:"room",disabled:!0,validators:{}},{name:"pollgrp_id",label:"Tarea a ejecutar:",type:"select",style:"w-full",selectOptions:[],validators:{}}]},this.messageSchema={controls:[{name:"message",label:"Mensaje:",type:"textarea",totalRows:4,style:"w-full",validators:{required:!0}}]},this.groupRefTrue=[],this.taskerData={picture:{title:"Foto",type:"blob-picture"},active:{title:"Activo",type:"boolean"},id:{title:"Identificaci\xf3n",type:"string"},names:{title:"Nombres",type:"string"},lastnames:{title:"Apellidos",type:"string"},age:{title:"Edad",type:"number"},address:{title:"Direcci\xf3n",type:"string"},city:{title:"Ciudad",type:"string"},email:{title:"Correo",type:"string"},phone:{title:"Tel\xe9fono",type:"string"},platform:{title:"Plataform pago",type:"string"},platform_phone:{title:"Tel\xe9fono plataforma",type:"string"},legal_age:{title:"Edad legal",type:"boolean"},stars:{title:"Estrellas",type:"number"},studyLevel:{title:"Nivel de estudio",type:"number"}}}startAppointData(t){if(this.staffList=t,this.getGroupRef(),this.schemaAppoint.controls){const i=this.schemaAppoint.controls.find(o=>"pollgrp_id"===o.name);i&&(i.selectOptions=this.groupRefTrue);const a=this.schemaAppoint.controls.find(o=>"staff"===o.name);a&&(a.selectOptions=[],t.forEach(o=>{o._id&&a.selectOptions?.push({key:o._id,value:`${o.names} ${o.lastnames||""}`})}))}}getPollGrpName(t){if(t){const i=this.groupRefTrue.find(a=>a.key===t);if(i)return i.value}return""}getGroupRef(){this.groupRefTrue=[],this.getRefNodeTrue(this.sharedvar.pollGroupIndex)}getRefNodeTrue(t){if(t.children)for(let i=0;i<t.children.length;i++){const a=t.children[i];if(a.ref)this.groupRefTrue.push({key:a.id,value:a.model_name||a.name});else if(a.children&&a.children.length>0)return this.getRefNodeTrue(a)}}onDelAppoint(t,i){!t.appoint||0===t.appoint.length||this.snkBar.open("Eliminar item de la agenda?.","Ok",{duration:5e3}).onAction().subscribe(a=>{t.appoint?.splice(i,1),this.dtb.updateStaffAsync(t)})}onAddEditAppoint(t,i,a=!0){var o=this;let p,l,L="Agenda ";const u=null===t||-1===i;if(null==t&&(t=this.staffList[0]),t.appoint||(t.appoint=[]),l=-1===i?this.appointBasic(t,"appoint"):t.appoint[i],L+=u?"Nueva":`${t.names} ${t.lastnames||""}`,this.schemaAppoint.controls){let y=-1;y=this.schemaAppoint.controls.findIndex(d=>"contact"===d.name),y>=0&&(this.schemaAppoint.controls[y].type="text"),y=this.schemaAppoint.controls.findIndex(d=>"staff"===d.name),this.schemaAppoint.controls[y].disabled=!u,y=this.schemaAppoint.controls.findIndex(d=>"geoLoc"===d.name),y>=0&&(this.schemaAppoint.controls[y].sideBtn=a?"room":"")}t.appoint&&l&&(p={staff:t._id,...l}),this.dg.aDefault({schema:this.schemaAppoint,title:L,value:p,dgwidth:400,function:[{name:"costumer",self:this,function:this.getCostumer1},{name:"dateend",self:this,function:this.addTime},{name:"geoLoc",self:this,function:this.geolocation}]}).subscribe(function(){var y=(0,_.Z)(function*(d){if(d){const C=o.staffList.find(T=>T._id==d.staff);if(!C)return;C.appoint||(C.appoint=[]),d.dateend<=d.datetime&&(d.dateend=d.datetime+o.sharedvar.addMinutes(15)),d.staff_name=`${C.names} ${C.lastnames}`,delete d._btnEvent_,delete d._btnclick_,delete d._propName_,delete d._valid_,delete d.staff,o.dg.updatePropResult(l,d),o.selectedCostumer&&(l.contact===o.selectedCostumer.linkup_1?(l.email=o.selectedCostumer.email_1,l.phone=o.selectedCostumer.phone_1):(l.email=o.selectedCostumer.email_2,l.phone=o.selectedCostumer.phone_2)),l.pollgrp_model_name=o.getPollGrpName(d.pollgrp_id),u?C.appoint.push(l):C.appoint[i]=l,o.dtb.updateStaffAsync(C)}});return function(d){return y.apply(this,arguments)}}())}onMessage2(t,i){var a=this;this.dg.aDefault({schema:this.messageSchema,title:"Mensaje a "+t||0,dgwidth:400,dgheigth:300}).subscribe(function(){var L=(0,_.Z)(function*(u){u&&a.notif.sendCommand({cmd:"message",user_id:a.sharedvar.staff._id,usert_id:i,data:{msg:{msg:u.message,who:a.sharedvar.staff.names||""},pollGrpName:a.sharedvar.staff.names||""}})});return function(u){return L.apply(this,arguments)}}())}getCostumer1(t,i,a){return(0,_.Z)(function*(){if(!i)return;const o=[],p=yield t.dtb.getActiveCRMCostumAsync();if(!p)return;p.forEach(u=>{u&&o.push({selected:!1,myid:u.id,name:u.name})});const l={title:"Seleccione Cliente",dgheigth:450,viewfilter:!0,viewAdd:!1,multiSelect:!0,valuelst:o},L=yield(0,c.z)(t.ds.aSelectDefault(l));if(L){t.selectedCostumer=p.find(m=>m.name===L[0].name),i.costumer=L[0].name,i.address=t.selectedCostumer.address;const u=a.controls?.findIndex(m=>"contact"===m.name);if(u&&u>=0&&a.controls){const m=[];t.selectedCostumer?.linkup_1&&m.push({key:t.selectedCostumer.linkup_1,value:t.selectedCostumer.linkup_1}),t.selectedCostumer?.linkup_2&&m.push({key:t.selectedCostumer?.linkup_2,value:t.selectedCostumer?.linkup_2}),a.controls[u].type="select",a.controls[u].selectOptions=m}}return{schema:a,value:i}})()}addTime(t,i,a){return(0,_.Z)(function*(){if(i)return i.dateend=Number(i.dateend)+t.sharedvar.addMinutes(15),{schema:null,value:i}})()}geolocation(t,i,a){return(0,_.Z)(function*(){if(!i)return;(!i.geoLoc||0===i.geoLoc.length)&&(i.geoLoc=yield t.sharedvar.getLocalization());const p={title:"Geo localizaci\xf3n",dgheigth:600,value:[t.staff2analitic(0,i,i)]},l=yield(0,c.z)(t.dg.aMap(p));return l&&(i.geoLoc=l.geoLocStart),{schema:null,value:i}})()}onFilter(t){}staff2analitic(t,i,a){return{_id:`${i._id}:${t}`,date_ini:a.datetime,date_end:a.dateend,geoLocStart:a.geoLoc,tasker_id:i._id||"",tasker_name:i.names+" "+(i.lastnames||""),activity_id:a.pollgrp_id||"",activity_name:a.pollgrp_model_name||"No asignada",costumer_name:a.costumer||"",crm_products:[],ended:!1}}appointBasic(t,i){return{type:i,datetime:this.sharedvar.dateNow(),dateend:this.sharedvar.dateNow(),ended:!1,owner:this.sharedvar.staff._id||"",staff_name:`${t.names} ${t.lastnames}`}}static#e=this.\u0275fac=function(i){return new(i||s)(f.LFG(v.D),f.LFG(O.k),f.LFG(b.ux),f.LFG(x.x),f.LFG(g.n),f.LFG(h.$))};static#t=this.\u0275prov=f.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"})}return s})()}}]);