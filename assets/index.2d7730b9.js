import{L as x,l as w,j as y,s as h,M as O,r as p,u as C,a as N,b as v,F as S,c as E,d as R,e as F,v as _,R as j,f as P}from"./vendor.3a7359f4.js";const z=function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function c(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerpolicy&&(o.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?o.credentials="include":t.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(t){if(t.ep)return;t.ep=!0;const o=c(t);fetch(t.href,o)}};z();const b={"Mapa raster IGN - Spain":x.tileLayer.wms("https://www.ign.es/wms-inspire/mapa-raster",{layers:"mtn_rasterizado",crossOrigin:!0,format:"image/png",transparent:!1,continuousWorld:!0,attribution:'\xA9 <a href="http://www.ign.es/ign/main/index.do" target="_blank">Instituto Geogr\xE1fico Nacional de Espa\xF1a</a> contributors'}),"Ortoimagen PNOA - Spain":x.tileLayer.wms("https://www.ign.es/wms-inspire/pnoa-ma",{layers:"OI.OrthoimageCoverage",crossOrigin:!0,format:"image/png",transparent:!1,continuousWorld:!0,attribution:'PNOA cedido por \xA9 <a href="http://www.ign.es/ign/main/index.do" target="_blank">Instituto Geogr\xE1fico Nacional de Espa\xF1a</a> contributors'}),OpenStreetMap:x.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{crossOrigin:!0,attribution:'&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors'}),OpenTopoMap:x.tileLayer("https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png",{crossOrigin:!0,attribution:'&copy; <a target="_blank" href="https://opentopomap.org">OpenTopoMap</a> contributors'})};let a,g,m,u;function T(){U(),a=L.map("map",{layers:[b["Mapa raster IGN - Spain"]]}).fitBounds([[24.9300000311,-19.6],[46.0700000311,5.6]]),L.control.layers(b).addTo(a),L.control.scale({options:{position:"bottomleft",metric:!0}}).addTo(a)}function U(){delete w.exports.Icon.Default.prototype._getIconUrl,w.exports.Icon.Default.mergeOptions({iconRetinaUrl:"markers/marker-icon-2x.png",iconUrl:"markers/marker-icon.png",shadowUrl:"markers/marker-shadow.png"})}function A(n){M();const i=n.target,c=new FileReader;c.onload=()=>{const r=c.result;k(r)},c.readAsText(i.files[0])}function k(n){let i;g=new L.GPX(n,{async:!0,marker_options:{wptIconUrls:{"":"markers/pin-icon-wpt.png"},startIconUrl:"markers/pin-icon-start.png",endIconUrl:"markers/pin-icon-end.png",shadowUrl:"markers/pin-shadow.png"}}).on("loaded",c=>{const r=c.target,t={};t.name=`${r.get_name()}`,t.distance=`${Math.round(r.get_distance()/1e3*100)/100} km`,t.maxElevation=`${Math.round(r.get_elevation_max()*100)/100} m`;const o=Math.round(r.get_total_time()/36e5*100)/100,l=Math.ceil((o-Math.floor(o))*60);t.time=`${Math.floor(o)} horas y ${l} minutos`,window.localStorage.setItem("info",JSON.stringify(t)),a.fitBounds(c.target.getBounds())}).addTo(a),g.name=i,window.localStorage.setItem("gpx",n)}function M(){g&&a.hasLayer(g)&&(a.removeLayer(g),g=null),window.localStorage.removeItem("info"),window.localStorage.removeItem("gpx")}function G(){m&&u?(a.stopLocate(),a.hasLayer(u)&&a.hasLayer(m)&&(a.removeLayer(u),a.removeLayer(m),m=u=null)):B()}function $(n){let i=n.accuracy/2;a.hasLayer(u)&&a.hasLayer(m)&&(a.removeLayer(u),a.removeLayer(m)),m=new L.Marker(n.latlng,{draggable:!0}),u=new L.circle(n.latlng,i),u.bindPopup(`Est\xE1s a menos de ${i} metros de este punto`).openPopup(),a.addLayer(m),a.addLayer(u)}function B(){a&&(a.locate({watch:!0,timeout:5e3}),a.on("locationfound",$))}function W(){"caches"in window&&caches.delete("cache-map").then(n=>{console.log(n,"clear cache-map operation")}).catch(n=>{console.log(n)})}const e=y.exports.jsx,d=y.exports.jsxs,I=y.exports.Fragment,D=h.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`,J=h.div`
  max-width: 90vw;
  min-height: 150px;
  padding-bottom: .8rem;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #aaa;
  color: #000;
  position: relative;
  z-index: 100;
  border-radius: 10px;
  overflow: hidden;
`,Y=h.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #141414;

  header {
    background-color: purple;
    width: 100%;
  }
  
  h4 {
    font-size: calc(.8rem + 1.9vmin);
    margin: 2rem 0 0 0;
    color: white;
  }

  ul {
    font-size: 1rem;
    text-align: left;
    padding-right: 1rem;
  }

  p {
    margin: 1rem;
    font-size: 1.3rem;
    font-weight: bold;
  }
`,q=h(O)`
  color: white;
  cursor: pointer;
  position: absolute;
  top: 12px;
  right: 12px;
  width: 25px;
  height: 25px;
  padding: 0;
  z-index: 10;
`,K=h.div`
  display: flex;
  width: 100%;  
  justify-content: flex-end;

  button {
    margin-right: .8rem;
    padding: 5px 20px;
    background: #141414;
    border-radius: 6px;
    color: yellow;
    border: none;
    cursor: pointer;
    font-size: 1.5rem;
  }
`,X=({showModal:n,setShowModal:i,removeCache:c})=>{const r=JSON.parse(window.localStorage.getItem("info")),t=p.exports.useRef(),o=C({config:{duration:250},opacity:n?1:0,transform:n?"translateY(0%)":"translateY(-100%)"}),l=s=>{t.current===s.target&&i(!1)},f=p.exports.useCallback(s=>{s.key==="Escape"&&n&&(i(!1),console.log("I pressed"))},[i,n]);return p.exports.useEffect(()=>(document.addEventListener("keydown",f),()=>document.removeEventListener("keydown",f)),[f]),e(I,{children:n?e(D,{onClick:l,ref:t,children:e(N.div,{style:o,children:d(J,{showModal:n,children:[d(Y,{children:[e("header",{children:c?e("h4",{children:"Eliminar Cache de Mapas"}):e("h4",{children:"Info del Track"})}),c?d(I,{children:[e("p",{children:"Sin conexi\xF3n, no podr\xE1s ver mapas \u{1F914}"}),e(K,{children:e("button",{onClick:()=>{W(),i(s=>!s)},children:e(v,{})})})]}):r?d("ul",{children:[d("li",{children:[e("strong",{children:"Nombre"}),": ",r.name]}),d("li",{children:[e("strong",{children:"Distancia"}),": ",r.distance]}),d("li",{children:[e("strong",{children:"M\xE1xima Elevaci\xF3n"}),": ",r.maxElevation]}),d("li",{children:[e("strong",{children:"Tiempo"}),": ",r.time]})]}):e("p",{children:"No hay track cargado \u2639\uFE0F"})]}),e(q,{"aria-label":"Close modal",onClick:()=>i(s=>!s)})]})})}):null})};function H(){const[n,i]=p.exports.useState(!1),[c,r]=p.exports.useState(!1),[t,o]=p.exports.useState(!1),l=p.exports.useRef(),f=()=>l.current.value="";return p.exports.useEffect(()=>{G()},[n]),p.exports.useEffect(()=>{T();const s=window.localStorage.getItem("gpx");s&&k(s)},[]),e("div",{className:"App",children:d("header",{className:"App-header",children:[e("h3",{children:"App GPS con Leaflet y React js"}),d("div",{className:"controls",children:[e("label",{className:"input-label",htmlFor:"input-track",children:e(S,{})}),e("button",{title:"Get Info",onClick:()=>{r(!c),o(!1)},className:"btn info",children:e(E,{})}),e("button",{title:"Start Geolocation",onClick:()=>i(!n),className:"btn location",children:e(R,{})}),e("button",{title:"Remove the track from the map",onClick:M,className:"btn remove",children:e(v,{})}),e("button",{title:"Remove Map Cache",onClick:()=>{r(!c),o(!0)},className:"btn cache",children:e(F,{})}),e("input",{ref:l,type:"file",accept:"application/gpx+xml",id:"input-track",onClick:f,onChange:A})]}),e("div",{id:"map"}),e(X,{showModal:c,setShowModal:r,removeCache:t})]})})}function Q(n={}){const{immediate:i=!1,onNeedRefresh:c,onOfflineReady:r,onRegistered:t,onRegisterError:o}=n;let l;const f=async(s=!0)=>{};return"serviceWorker"in navigator&&(l=new _("/leaflet-react-app/sw.js",{scope:"/leaflet-react-app/"}),l.addEventListener("activated",s=>{s.isUpdate?window.location.reload():r==null||r()}),l.register({immediate:i}).then(s=>{t==null||t(s)}).catch(s=>{o==null||o(s)})),f}j.render(e(P.StrictMode,{children:e(H,{})}),document.getElementById("root"));Q();
