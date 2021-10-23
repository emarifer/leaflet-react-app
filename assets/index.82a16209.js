import{L as y,l as b,j as w,s as d,M as O,r as u,u as S,a as E,b as k,C as R,F as N,c as F,d as j,e as _,v as $,R as z,f as B}from"./vendor.7d59904c.js";const P=function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function s(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerpolicy&&(n.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?n.credentials="include":t.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(t){if(t.ep)return;t.ep=!0;const n=s(t);fetch(t.href,n)}};P();const v={"Mapa raster IGN - Spain":y.tileLayer.wms("https://www.ign.es/wms-inspire/mapa-raster",{layers:"mtn_rasterizado",crossOrigin:!0,format:"image/png",transparent:!1,continuousWorld:!0,attribution:'\xA9 <a href="http://www.ign.es/ign/main/index.do" target="_blank">Instituto Geogr\xE1fico Nacional de Espa\xF1a</a> contributors'}),"Ortoimagen PNOA - Spain":y.tileLayer.wms("https://www.ign.es/wms-inspire/pnoa-ma",{layers:"OI.OrthoimageCoverage",crossOrigin:!0,format:"image/png",transparent:!1,continuousWorld:!0,attribution:'PNOA cedido por \xA9 <a href="http://www.ign.es/ign/main/index.do" target="_blank">Instituto Geogr\xE1fico Nacional de Espa\xF1a</a> contributors'}),OpenStreetMap:y.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{crossOrigin:!0,attribution:'&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors'}),OpenTopoMap:y.tileLayer("https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png",{crossOrigin:!0,attribution:'&copy; <a target="_blank" href="https://opentopomap.org">OpenTopoMap</a> contributors'})};let a,h,g,m;function T(){U(),a=L.map("map",{layers:[v["Mapa raster IGN - Spain"]]}).fitBounds([[24.9300000311,-19.6],[46.0700000311,5.6]]),L.control.layers(v).addTo(a),L.control.scale({options:{position:"bottomleft",metric:!0}}).addTo(a)}function U(){delete b.exports.Icon.Default.prototype._getIconUrl,b.exports.Icon.Default.mergeOptions({iconRetinaUrl:"markers/marker-icon-2x.png",iconUrl:"markers/marker-icon.png",shadowUrl:"markers/marker-shadow.png"})}function A(o){M();const i=o.target,s=new FileReader;s.onload=()=>{const r=s.result;C(r)},s.readAsText(i.files[0])}function C(o){h=new L.GPX(o,{async:!0,marker_options:{wptIconUrls:{"":"markers/pin-icon-wpt.png"},startIconUrl:"markers/pin-icon-start.png",endIconUrl:"markers/pin-icon-end.png",shadowUrl:"markers/pin-shadow.png"}}),h.on("loaded",i=>{const s=i.target,r={};r.name=`${s.get_name()}`,r.distance=`${Math.round(s.get_distance()/1e3*100)/100} km`,r.maxElevation=`${Math.round(s.get_elevation_max()*100)/100} m`;const t=Math.round(s.get_total_time()/36e5*100)/100,n=Math.ceil((t-Math.floor(t))*60);r.time=`${Math.floor(t)} horas y ${n} minutos`,window.localStorage.setItem("info",JSON.stringify(r)),a.fitBounds(s.getBounds())}),h.addTo(a),window.localStorage.setItem("gpx",o)}function M(){h&&a.hasLayer(h)&&(a.removeLayer(h),h=null),window.localStorage.removeItem("info"),window.localStorage.removeItem("gpx")}function G(){g&&m?(a.stopLocate(),a.hasLayer(m)&&a.hasLayer(g)&&(a.removeLayer(m),a.removeLayer(g),g=m=null)):D()}function W(o){let i=o.accuracy/2;a.hasLayer(m)&&a.hasLayer(g)&&(a.removeLayer(m),a.removeLayer(g)),g=new L.Marker(o.latlng,{draggable:!0}),m=new L.circle(o.latlng,i),m.bindPopup(`Est\xE1s a menos de ${i} metros de este punto`).openPopup(),a.addLayer(g),a.addLayer(m)}function D(){a&&(a.locate({watch:!0,timeout:5e3}),a.on("locationfound",W))}function J(){"caches"in window&&caches.delete("cache-map").then(o=>{console.log(o,"clear cache-map operation")}).catch(o=>{console.log(o)})}const e=w.exports.jsx,p=w.exports.jsxs,I=w.exports.Fragment,Y=d.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`,q=d.div`
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
`,K=d.div`
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
`,X=d(O)`
  color: white;
  cursor: pointer;
  position: absolute;
  top: 12px;
  right: 12px;
  width: 25px;
  height: 25px;
  padding: 0;
  z-index: 10;
`,H=d.div`
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
`,Q=({showModal:o,setShowModal:i,removeCache:s})=>{const r=JSON.parse(window.localStorage.getItem("info")),t=u.exports.useRef(),n=S({config:{duration:250},opacity:o?1:0,transform:o?"translateY(0%)":"translateY(-100%)"}),l=c=>{t.current===c.target&&i(!1)},f=u.exports.useCallback(c=>{c.key==="Escape"&&o&&(i(!1),console.log("I pressed"))},[i,o]);return u.exports.useEffect(()=>(document.addEventListener("keydown",f),()=>document.removeEventListener("keydown",f)),[f]),e(I,{children:o?e(Y,{onClick:l,ref:t,children:e(E.div,{style:n,children:p(q,{showModal:o,children:[p(K,{children:[e("header",{children:s?e("h4",{children:"Eliminar Cache de Mapas"}):e("h4",{children:"Info del Track"})}),s?p(I,{children:[e("p",{children:"Sin conexi\xF3n, no podr\xE1s ver mapas \u{1F914}"}),e(H,{children:e("button",{onClick:()=>{J(),i(c=>!c)},children:e(k,{})})})]}):r?p("ul",{children:[p("li",{children:[e("strong",{children:"Nombre"}),": ",r.name]}),p("li",{children:[e("strong",{children:"Distancia"}),": ",r.distance]}),p("li",{children:[e("strong",{children:"M\xE1xima Elevaci\xF3n"}),": ",r.maxElevation]}),p("li",{children:[e("strong",{children:"Tiempo"}),": ",r.time]})]}):e("p",{children:"No hay track cargado \u2639\uFE0F"})]}),e(X,{"aria-label":"Close modal",onClick:()=>i(c=>!c)})]})})}):null})},x=R`
    display: flex;
    border: 1px solid goldenrod;
    border-radius: 50%;
    margin-left: .7rem;
    cursor: pointer;
    font-size: 1.5rem;
    width: 3.2rem;
    height: 3.2rem;
    align-items: center;
    justify-content: center;

    &:hover {
        transition: transform 100ms;
        transform: scale(1.1);
    }
`,V=d.button`
    ${x};
    background-color: #141414;
    color: gold;
`,Z=d.button`
    ${x};
    /* background-color: rgb(145, 248, 86); */
    color: blue;
`,ee=d.button`
    ${x};
    background-color: rgb(197, 197, 197);
    color: rgb(94, 13, 13);
`,te=d.button`
    ${x};
    background-color: rgb(61, 100, 105);
    color: whitesmoke;
`,oe=d.label`
    ${x};    
    width: 3rem;
    height: 3rem;
    background-color: purple;
    color: white;
`;function re(){const[o,i]=u.exports.useState(!1),[s,r]=u.exports.useState(!1),[t,n]=u.exports.useState(!1),l=u.exports.useRef(),f=()=>l.current.value="";return u.exports.useEffect(()=>{G()},[o]),u.exports.useEffect(()=>{T();const c=window.localStorage.getItem("gpx");c&&C(c)},[]),e("div",{className:"App",children:p("header",{className:"App-header",children:[e("h4",{children:"Camina \u{1F97E} con mi App GPS"}),e("p",{children:"(React js/Leaflet)"}),p("div",{className:"controls",children:[e(oe,{htmlFor:"input-track",children:e(N,{})}),e(V,{title:"Get Info",onClick:()=>{r(!s),n(!1)},children:e(F,{})}),e(Z,{style:{backgroundColor:o?"magenta":"greenyellow"},title:"Start Geolocation",onClick:()=>i(!o),children:e(j,{})}),e(ee,{title:"Remove the track from the map",onClick:M,children:e(k,{})}),e(te,{title:"Remove Map Cache",onClick:()=>{r(!s),n(!0)},children:e(_,{})}),e("input",{ref:l,type:"file",accept:"application/gpx+xml",id:"input-track",onClick:f,onChange:A})]}),e("div",{id:"map"}),e(Q,{showModal:s,setShowModal:r,removeCache:t})]})})}function ne(o={}){const{immediate:i=!1,onNeedRefresh:s,onOfflineReady:r,onRegistered:t,onRegisterError:n}=o;let l;const f=async(c=!0)=>{};return"serviceWorker"in navigator&&(l=new $("/leaflet-react-app/sw.js",{scope:"/leaflet-react-app/"}),l.addEventListener("activated",c=>{c.isUpdate?window.location.reload():r==null||r()}),l.register({immediate:i}).then(c=>{t==null||t(c)}).catch(c=>{n==null||n(c)})),f}z.render(e(B.StrictMode,{children:e(re,{})}),document.getElementById("root"));ne();
