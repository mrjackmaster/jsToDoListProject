(()=>{"use strict";const e=document.getElementById("Inbox"),t=document.getElementById("Today"),l=document.getElementById("Week"),o=document.getElementById("containerToDos"),n=document.getElementById("containerFolders"),r=document.getElementById("dropdownFolders"),i=document.getElementById("newItem"),d=document.getElementById("newToDoBtn"),a=document.getElementById("newFolderBtn"),s=document.getElementById("modalNew"),c=document.getElementById("modalNewToDo"),g=document.getElementById("modalNewFolder"),m=document.getElementById("modalEditToDo"),u=document.getElementById("modalEditFolder"),p=document.querySelectorAll(".confirmNew"),y=document.querySelectorAll(".confirmEdit"),T=document.querySelectorAll(".cancel"),E=document.querySelectorAll(".button-X"),v=document.getElementById("editToDo"),I=document.getElementById("editFolder"),f=document.querySelectorAll(".selectList"),D=document.getElementById("newToDoTitle"),h=document.getElementById("newToDoDescription"),_=document.getElementById("newDueDate"),w=document.getElementById("newPriority"),B=document.getElementById("newTargetFolder"),F=document.getElementById("newFolderTitle"),S=document.getElementById("editToDoTitle"),b=document.getElementById("editToDoDescription"),x=document.getElementById("editDueDate"),L=document.getElementById("editPriority"),N=document.getElementById("editTargetFolder"),k=document.getElementById("editFolderTitle");let P;const O=(e="Inbox")=>{o.className=e,P=e};i.onclick=()=>{q(s),c.style.display="flex"},d.onclick=()=>{q(s),c.style.display="flex"},a.onclick=()=>{q(s),g.style.display="flex"},window.onclick=e=>{e.target!=s&&e.target!=m&&e.target!=u||q()},E.forEach((e=>{e.onclick=()=>{q()}})),T.forEach((e=>{e.onclick=()=>{q(),j()}}));const q=e=>{s.style.display="none",c.style.display="none",g.style.display="none",m.style.display="none",u.style.display="none",void 0!==e&&(e.style.display="flex")};e.addEventListener("click",(e=>{O(e.target.id),J()})),t.addEventListener("click",(e=>{O(e.target.id),J()})),l.addEventListener("click",(e=>{O(e.target.id),J()})),r.onclick=()=>{n.classList.toggle("show")},p.forEach((e=>{e.onclick=e=>{e.target.closest("form")==c&&(""==D.value?alert("No title provided!"):""==_.value?alert("No date provided!"):le.find((e=>e.getTitle===D.value))?alert("ToDo already exists! Provide unique title."):A()),e.target.closest("form")==g&&(""==F.value?alert("No title provided!"):oe.find((e=>e.getTitle===F.value))?alert("Folder already exists! Provide unique title."):C())}}));const A=()=>{let e=D.value,t=h.value,l=_.value,o=w.value,n=B.value;new Y(e,t,l,o,n),te(),J(),z()},C=()=>{new Z(F.value),te(),R(),H(),z()},J=()=>{o.innerHTML="";let e=document.createElement("h3");e.textContent=P,o.append(e),M().forEach((e=>{o.append(X(e))}))},H=()=>{n.innerHTML="",oe.forEach((e=>{n.append(Q(e))}))},M=()=>{let e=new Date,t=new Date(e.getTime()-6e4*e.getTimezoneOffset()).toISOString().split("T")[0],l=[];return"Inbox"===P?le:"Today"===P?(l=le.filter((e=>e.getDueDate==t)),l):(l=le.filter((e=>e.getTargetFolder===P)),l)};y.forEach((e=>{e.onclick=e=>{e.target.closest("form")==v&&(""==S.value?alert("No title provided!"):""==x.value?alert("No date provided!"):G()),e.target.closest("form")==I&&(""==k.value?alert("No title provided!"):K())}}));const G=()=>{let e=v.className.split("__"),t=le.findIndex((t=>t.getTitle===e[0]&&t.getTargetFolder===e[1]));le[t].setTitle=S.value,le[t].setDescription=b.value,le[t].setDueDate=x.value,le[t].setPriority=L.value,le[t].setTargetFolder=N.value,te(),J(),z()},K=()=>{let e=oe.findIndex((e=>e.getTitle===I.className));oe[e].setTitle=k.value,le.forEach((e=>{e.getTargetFolder===I.className&&(e.setTargetFolder=k.value)})),O(k.value),te(),R(),J(),H(),z()},R=()=>{f.forEach((e=>{e.innerHTML="";let t=document.createElement("option");t.value="Inbox",t.textContent="Inbox",e.append(t),oe.forEach((t=>{let l=document.createElement("option");l.value=t.getTitle,l.textContent=t.getTitle,e.append(l)}))}))},j=()=>{document.querySelectorAll("form").forEach((e=>{e.reset()}))},z=()=>{te(),q(),j()},W=e=>{let t=document.createElement("p");return t.textContent=e,t},X=e=>{let t=document.createElement("div");t.id="todo__"+e.getTitle+"__"+e.getTargetFolder,t.classList.add("todo","priority"+e.getPriority),t.addEventListener("click",(e=>{e.currentTarget.querySelectorAll(".moreDetails")[0].classList.toggle("show")}));let l=document.createElement("div");l.classList.add("fewDetails");let o=document.createElement("div");o.append(W(e.getDueDate)),o.append(W(e.getTitle));let n=document.createElement("div");n.classList.add("controls"),n.append(V()),n.append(U()),l.append(o),l.append(n);let r=document.createElement("div");return r.classList.add("moreDetails"),r.append(W(e.getDescription)),r.append(W("Folder: "+e.getTargetFolder)),t.append(l),t.append(r),t},Q=e=>{let t=document.createElement("div");t.id="folder__"+e.getTitle,t.textContent=e.getTitle,t.classList.add("folder"),t.addEventListener("click",(()=>{O(e.getTitle),J()}));let l=document.createElement("div");return l.classList.add("controls"),l.append(V()),l.append(U()),t.append(l),t},U=()=>{const e=document.createElement("input");return e.setAttribute("type","image"),e.classList.add("deleteBtn"),e.src="imgs/delete-64.png",e.alt="Delete",e.addEventListener("click",(e=>{(e=>{let t=e.id.split("__");if("todo"==t[0]){let e=le.findIndex((e=>e.getTitle===t[1]&&e.getTargetFolder===t[2]));le.splice(e,1)}else if("folder"==t[0]){let e=oe.findIndex((e=>e.getTitle===t[1]));oe.splice(e,1),le.forEach((e=>{e.getTargetFolder===t[1]&&(e.setTargetFolder="Inbox")}))}O(),te(),R(),J(),H()})(e.target.closest(".folder, .todo")),e.stopPropagation()})),e},V=()=>{const e=document.createElement("input");return e.setAttribute("type","image"),e.classList.add("editBtn"),e.src="imgs/edit-64.png",e.alt="Edit",e.addEventListener("click",(e=>{(e=>{let t=e.id.split("__");if("todo"==t[0]){let e=le.find((e=>e.getTitle===t[1]&&e.getTargetFolder===t[2]));l=e,S.value=l.getTitle,b.value=l.getDescription,x.value=l.getDueDate,L.value=l.getPriority,N.value=l.getTargetFolder,m.style.display="flex",v.className=t[1]+"__"+t[2]}else if("folder"==t[0]){(e=>{k.value=e.getTitle})(oe.find((e=>e.getTitle===t[1]))),u.style.display="flex",I.className=t[1]}var l})(e.target.closest(".folder, .todo")),e.stopPropagation()})),e};class Y{constructor(e,t,l,o,n){this._title=e,this._description=t,this._priority=o,this._dueDate=l,this._targetFolder=n,le.push(this),$()}set setTitle(e){this._title=e}set setDescription(e){this._description=e}set setPriority(e){this._priority=e}set setDueDate(e){this._dueDate=e}set setTargetFolder(e){this._targetFolder=e}get getTitle(){return this._title}get getDescription(){return this._description}get getPriority(){return this._priority}get getDueDate(){return this._dueDate}get getTargetFolder(){return this._targetFolder}}class Z{constructor(e){this._title=e,oe.push(this),ee()}set setTitle(e){this._title=e}get getTitle(){return this._title}}const $=()=>{localStorage.setItem("libraryToDos",JSON.stringify(le))},ee=()=>{localStorage.setItem("libraryFolders",JSON.stringify(oe))},te=()=>{$(),ee()},le=JSON.parse(localStorage.getItem("libraryToDos"))?JSON.parse(localStorage.getItem("libraryToDos")).map((e=>(e.__proto__=Y.prototype,e))):[],oe=JSON.parse(localStorage.getItem("libraryFolders"))?JSON.parse(localStorage.getItem("libraryFolders")).map((e=>(e.__proto__=Z.prototype,e))):[],ne=()=>{new Z("Kitchen"),new Z("House"),new Z("Gym"),new Y("Jake Mail","Send Email to Jake about upcoming project","2025-01-01","High","Inbox"),new Y("Basement","Clean trash from basement","2027-02-02","Medium","House"),new Y("Lightbulb","Replace kitchen lightbulb","2021-06-08","Low","Kitchen"),new Y("Carpet","Clean the carpet",(new Date).toISOString().split("T")[0],"Low","House"),new Y("Gym","Renew gym membership",(new Date).toISOString().split("T")[0],"Medium","Gym")};localStorage.getItem("libraryToDos")||localStorage.getItem("libraryFolders")||ne(),0===le.length&&0===oe.length&&ne(),O(),H(),J(),j(),R(),te()})();