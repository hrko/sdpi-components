/*! For license information please see sdpi.js.LICENSE.txt */
(()=>{"use strict";const t=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,e=Symbol(),i=new Map;class s{constructor(t,i){if(this._$cssResult$=!0,i!==e)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){let e=i.get(this.cssText);return t&&void 0===e&&(i.set(this.cssText,e=new CSSStyleSheet),e.replaceSync(this.cssText)),e}toString(){return this.cssText}}const n=(t,...i)=>{const n=1===t.length?t[0]:i.reduce(((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1]),t[0]);return new s(n,e)},o=t?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let i="";for(const e of t.cssRules)i+=e.cssText;return(t=>new s("string"==typeof t?t:t+"",e))(i)})(t):t;var r;const l=window.trustedTypes,a=l?l.emptyScript:"",c=window.reactiveElementPolyfillSupport,d={toAttribute(t,e){switch(e){case Boolean:t=t?a:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},h=(t,e)=>e!==t&&(e==e||t==t),u={attribute:!0,type:String,converter:d,reflect:!1,hasChanged:h};class p extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(t){var e;null!==(e=this.l)&&void 0!==e||(this.l=[]),this.l.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,i)=>{const s=this._$Eh(i,e);void 0!==s&&(this._$Eu.set(s,i),t.push(s))})),t}static createProperty(t,e=u){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);void 0!==s&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const n=this[t];this[e]=s,this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||u}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(o(t))}else void 0!==t&&e.push(o(t));return e}static _$Eh(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}o(){var t;this._$Ep=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Em(),this.requestUpdate(),null===(t=this.constructor.l)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,i;(null!==(e=this._$Eg)&&void 0!==e?e:this._$Eg=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$Eg)||void 0===e||e.splice(this._$Eg.indexOf(t)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Et.set(e,this[e]),delete this[e])}))}createRenderRoot(){var e;const i=null!==(e=this.shadowRoot)&&void 0!==e?e:this.attachShadow(this.constructor.shadowRootOptions);return((e,i)=>{t?e.adoptedStyleSheets=i.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):i.forEach((t=>{const i=document.createElement("style"),s=window.litNonce;void 0!==s&&i.setAttribute("nonce",s),i.textContent=t.cssText,e.appendChild(i)}))})(i,this.constructor.elementStyles),i}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ES(t,e,i=u){var s,n;const o=this.constructor._$Eh(t,i);if(void 0!==o&&!0===i.reflect){const r=(null!==(n=null===(s=i.converter)||void 0===s?void 0:s.toAttribute)&&void 0!==n?n:d.toAttribute)(e,i.type);this._$Ei=t,null==r?this.removeAttribute(o):this.setAttribute(o,r),this._$Ei=null}}_$AK(t,e){var i,s,n;const o=this.constructor,r=o._$Eu.get(t);if(void 0!==r&&this._$Ei!==r){const t=o.getPropertyOptions(r),l=t.converter,a=null!==(n=null!==(s=null===(i=l)||void 0===i?void 0:i.fromAttribute)&&void 0!==s?s:"function"==typeof l?l:null)&&void 0!==n?n:d.fromAttribute;this._$Ei=r,this[r]=a(e,t.type),this._$Ei=null}}requestUpdate(t,e,i){let s=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||h)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$Ei!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this._$Ep=this._$E_())}async _$E_(){this.isUpdatePending=!0;try{await this._$Ep}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach(((t,e)=>this[e]=t)),this._$Et=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(i)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$Eg)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$ES(e,this[e],t))),this._$EC=void 0),this._$EU()}updated(t){}firstUpdated(t){}}var f;p.finalized=!0,p.elementProperties=new Map,p.elementStyles=[],p.shadowRootOptions={mode:"open"},null==c||c({ReactiveElement:p}),(null!==(r=globalThis.reactiveElementVersions)&&void 0!==r?r:globalThis.reactiveElementVersions=[]).push("1.3.1");const g=globalThis.trustedTypes,v=g?g.createPolicy("lit-html",{createHTML:t=>t}):void 0,b=`lit$${(Math.random()+"").slice(9)}$`,y="?"+b,$=`<${y}>`,m=document,_=(t="")=>m.createComment(t),w=t=>null===t||"object"!=typeof t&&"function"!=typeof t,A=Array.isArray,x=t=>{var e;return A(t)||"function"==typeof(null===(e=t)||void 0===e?void 0:e[Symbol.iterator])},S=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,E=/-->/g,k=/>/g,C=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,R=/'/g,N=/"/g,O=/^(?:script|style|textarea|title)$/i,j=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),M=j(1),I=(j(2),Symbol.for("lit-noChange")),P=Symbol.for("lit-nothing"),U=new WeakMap,D=m.createTreeWalker(m,129,null,!1),T=(t,e)=>{const i=t.length-1,s=[];let n,o=2===e?"<svg>":"",r=S;for(let e=0;e<i;e++){const i=t[e];let l,a,c=-1,d=0;for(;d<i.length&&(r.lastIndex=d,a=r.exec(i),null!==a);)d=r.lastIndex,r===S?"!--"===a[1]?r=E:void 0!==a[1]?r=k:void 0!==a[2]?(O.test(a[2])&&(n=RegExp("</"+a[2],"g")),r=C):void 0!==a[3]&&(r=C):r===C?">"===a[0]?(r=null!=n?n:S,c=-1):void 0===a[1]?c=-2:(c=r.lastIndex-a[2].length,l=a[1],r=void 0===a[3]?C:'"'===a[3]?N:R):r===N||r===R?r=C:r===E||r===k?r=S:(r=C,n=void 0);const h=r===C&&t[e+1].startsWith("/>")?" ":"";o+=r===S?i+$:c>=0?(s.push(l),i.slice(0,c)+"$lit$"+i.slice(c)+b+h):i+b+(-2===c?(s.push(void 0),e):h)}const l=o+(t[i]||"<?>")+(2===e?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==v?v.createHTML(l):l,s]};class L{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let n=0,o=0;const r=t.length-1,l=this.parts,[a,c]=T(t,e);if(this.el=L.createElement(a,i),D.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(s=D.nextNode())&&l.length<r;){if(1===s.nodeType){if(s.hasAttributes()){const t=[];for(const e of s.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(b)){const i=c[o++];if(t.push(e),void 0!==i){const t=s.getAttribute(i.toLowerCase()+"$lit$").split(b),e=/([.?@])?(.*)/.exec(i);l.push({type:1,index:n,name:e[2],strings:t,ctor:"."===e[1]?Q:"?"===e[1]?q:"@"===e[1]?Y:G})}else l.push({type:6,index:n})}for(const e of t)s.removeAttribute(e)}if(O.test(s.tagName)){const t=s.textContent.split(b),e=t.length-1;if(e>0){s.textContent=g?g.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],_()),D.nextNode(),l.push({type:2,index:++n});s.append(t[e],_())}}}else if(8===s.nodeType)if(s.data===y)l.push({type:2,index:n});else{let t=-1;for(;-1!==(t=s.data.indexOf(b,t+1));)l.push({type:7,index:n}),t+=b.length-1}n++}}static createElement(t,e){const i=m.createElement("template");return i.innerHTML=t,i}}function z(t,e,i=t,s){var n,o,r,l;if(e===I)return e;let a=void 0!==s?null===(n=i._$Cl)||void 0===n?void 0:n[s]:i._$Cu;const c=w(e)?void 0:e._$litDirective$;return(null==a?void 0:a.constructor)!==c&&(null===(o=null==a?void 0:a._$AO)||void 0===o||o.call(a,!1),void 0===c?a=void 0:(a=new c(t),a._$AT(t,i,s)),void 0!==s?(null!==(r=(l=i)._$Cl)&&void 0!==r?r:l._$Cl=[])[s]=a:i._$Cu=a),void 0!==a&&(e=z(t,a._$AS(t,e.values),a,s)),e}class H{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:i},parts:s}=this._$AD,n=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:m).importNode(i,!0);D.currentNode=n;let o=D.nextNode(),r=0,l=0,a=s[0];for(;void 0!==a;){if(r===a.index){let e;2===a.type?e=new B(o,o.nextSibling,this,t):1===a.type?e=new a.ctor(o,a.name,a.strings,this,t):6===a.type&&(e=new W(o,this,t)),this.v.push(e),a=s[++l]}r!==(null==a?void 0:a.index)&&(o=D.nextNode(),r++)}return n}m(t){let e=0;for(const i of this.v)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class B{constructor(t,e,i,s){var n;this.type=2,this._$AH=P,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cg=null===(n=null==s?void 0:s.isConnected)||void 0===n||n}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=z(this,t,e),w(t)?t===P||null==t||""===t?(this._$AH!==P&&this._$AR(),this._$AH=P):t!==this._$AH&&t!==I&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.k(t):x(t)?this.S(t):this.$(t)}A(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}k(t){this._$AH!==t&&(this._$AR(),this._$AH=this.A(t))}$(t){this._$AH!==P&&w(this._$AH)?this._$AA.nextSibling.data=t:this.k(m.createTextNode(t)),this._$AH=t}T(t){var e;const{values:i,_$litType$:s}=t,n="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=L.createElement(s.h,this.options)),s);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===n)this._$AH.m(i);else{const t=new H(n,this),e=t.p(this.options);t.m(i),this.k(e),this._$AH=t}}_$AC(t){let e=U.get(t.strings);return void 0===e&&U.set(t.strings,e=new L(t)),e}S(t){A(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const n of t)s===e.length?e.push(i=new B(this.A(_()),this.A(_()),this,this.options)):i=e[s],i._$AI(n),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cg=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class G{constructor(t,e,i,s,n){this.type=1,this._$AH=P,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=P}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){const n=this.strings;let o=!1;if(void 0===n)t=z(this,t,e,0),o=!w(t)||t!==this._$AH&&t!==I,o&&(this._$AH=t);else{const s=t;let r,l;for(t=n[0],r=0;r<n.length-1;r++)l=z(this,s[i+r],e,r),l===I&&(l=this._$AH[r]),o||(o=!w(l)||l!==this._$AH[r]),l===P?t=P:t!==P&&(t+=(null!=l?l:"")+n[r+1]),this._$AH[r]=l}o&&!s&&this.C(t)}C(t){t===P?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class Q extends G{constructor(){super(...arguments),this.type=3}C(t){this.element[this.name]=t===P?void 0:t}}const Z=g?g.emptyScript:"";class q extends G{constructor(){super(...arguments),this.type=4}C(t){t&&t!==P?this.element.setAttribute(this.name,Z):this.element.removeAttribute(this.name)}}class Y extends G{constructor(t,e,i,s,n){super(t,e,i,s,n),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=z(this,t,e,0))&&void 0!==i?i:P)===I)return;const s=this._$AH,n=t===P&&s!==P||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,o=t!==P&&(s===P||n);n&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class W{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){z(this,t)}}const F={P:"$lit$",L:b,V:y,I:1,N:T,R:H,D:x,j:z,H:B,O:G,F:q,B:Y,W:Q,Z:W},V=window.litHtmlPolyfillSupport;var K,J;null==V||V(L,B),(null!==(f=globalThis.litHtmlVersions)&&void 0!==f?f:globalThis.litHtmlVersions=[]).push("2.2.1");class X extends p{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=((t,e,i)=>{var s,n;const o=null!==(s=null==i?void 0:i.renderBefore)&&void 0!==s?s:e;let r=o._$litPart$;if(void 0===r){const t=null!==(n=null==i?void 0:i.renderBefore)&&void 0!==n?n:null;o._$litPart$=r=new B(e.insertBefore(_(),t),t,void 0,null!=i?i:{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!1)}render(){return I}}X.finalized=!0,X._$litElement$=!0,null===(K=globalThis.litElementHydrateSupport)||void 0===K||K.call(globalThis,{LitElement:X});const tt=globalThis.litElementPolyfillSupport;null==tt||tt({LitElement:X}),(null!==(J=globalThis.litElementVersions)&&void 0!==J?J:globalThis.litElementVersions=[]).push("3.2.0");const et=t=>e=>"function"==typeof e?((t,e)=>(window.customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:i,elements:s}=e;return{kind:i,elements:s,finisher(e){window.customElements.define(t,e)}}})(t,e),it=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(i){i.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}};function st(t){return(e,i)=>void 0!==i?((t,e,i)=>{e.constructor.createProperty(i,t)})(t,e,i):it(t,e)}var nt;function ot(t){return void 0===t?[]:Array.isArray(t)?[...t]:[t]}function rt(t,e,i){const s=t.split(".");s.reduce(((t,e,n)=>n===s.length-1?t[e]=i:t[e]||(t[e]={})),e)}null===(nt=window.HTMLSlotElement)||void 0===nt||nt.prototype.assignedElements;const lt=t=>class extends t{static get styles(){return[ot(super.styles),n`
                    :host {
                        --checkbox-size: 16px;
                    }

                    .checkable-container {
                        align-items: center;
                        display: inline-flex;
                        padding: var(--spacer) 0 0 0;
                        user-select: none;
                        width: auto;
                    }

                    .checkable-container > input {
                        display: none;
                    }

                    .checkable-container > input:not(:disabled) ~ span {
                        cursor: pointer;
                    }

                    .checkable-container > input:disabled ~ span {
                        opacity: 0.5;
                    }

                    .checkable-container > .checkable-symbol {
                        align-self: flex-start;
                        background: var(--input-bg-color);
                        border: 1px solid rgba(0, 0, 0, 0.2);
                        border-radius: 3px;
                        flex: 0 0 var(--checkbox-size);
                        height: var(--checkbox-size);
                        width: var(--checkbox-size);
                    }

                    .checkable-container > input[type='radio'] ~ .checkable-symbol {
                        border-radius: 50%;
                    }

                    .checkable-container > .checkable-text {
                        flex: 0 1 auto;
                        margin: 0 0 0 var(--spacer);
                    }

                    .checkable-container > input:checked ~ .checkable-symbol {
                        background: #77f no-repeat center center;
                        border: 1px solid rgba(0, 0, 0, 0.4);
                    }

                    .checkable-container > input[type='checkbox']:checked ~ .checkable-symbol {
                        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10' viewBox='0 0 12 10'%3E%3Cpolygon fill='%23FFF' points='7.2 7.5 7.2 -1.3 8.7 -1.3 8.6 9.1 2.7 8.7 2.7 7.2' transform='rotate(37 5.718 3.896)'/%3E%3C/svg%3E%0A");
                    }

                    .checkable-container > input[type='radio']:checked ~ .checkable-symbol {
                        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='6' height='6' viewBox='0 0 6 6'%3E%3Ccircle cx='3' cy='3' r='3' fill='%23FFF'/%3E%3C/svg%3E%0A");
                    }
                `]}renderCheckable(t,e,i){return M`
                <label class="checkable-container">
                    ${e}
                    <span class="checkable-symbol" role=${t}></span>
                    ${i?M`<span class="checkable-text">${i}</span>`:void 0}
                </label>
            `}},{H:at}=F,ct=t=>(...e)=>({_$litDirective$:t,values:e}),dt=(t,e)=>{var i,s;const n=t._$AN;if(void 0===n)return!1;for(const t of n)null===(s=(i=t)._$AO)||void 0===s||s.call(i,e,!1),dt(t,e);return!0},ht=t=>{let e,i;do{if(void 0===(e=t._$AM))break;i=e._$AN,i.delete(t),t=e}while(0===(null==i?void 0:i.size))},ut=t=>{for(let e;e=t._$AM;t=e){let i=e._$AN;if(void 0===i)e._$AN=i=new Set;else if(i.has(t))break;i.add(t),gt(e)}};function pt(t){void 0!==this._$AN?(ht(this),this._$AM=t,ut(this)):this._$AM=t}function ft(t,e=!1,i=0){const s=this._$AH,n=this._$AN;if(void 0!==n&&0!==n.size)if(e)if(Array.isArray(s))for(let t=i;t<s.length;t++)dt(s[t],!1),ht(s[t]);else null!=s&&(dt(s,!1),ht(s));else dt(this,t)}const gt=t=>{var e,i,s,n;2==t.type&&(null!==(e=(s=t)._$AP)&&void 0!==e||(s._$AP=ft),null!==(i=(n=t)._$AQ)&&void 0!==i||(n._$AQ=pt))};class vt extends class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,i){super._$AT(t,e,i),ut(this),this.isConnected=t._$AU}_$AO(t,e=!0){var i,s;t!==this.isConnected&&(this.isConnected=t,t?null===(i=this.reconnected)||void 0===i||i.call(this):null===(s=this.disconnected)||void 0===s||s.call(this)),e&&(dt(this,t),ht(this))}setValue(t){if((t=>void 0===this._$Ct.strings)())this._$Ct._$AI(t,this);else{const e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}class bt{}const yt=new WeakMap,$t=ct(class extends vt{render(t){return P}update(t,[e]){var i;const s=e!==this.U;return s&&void 0!==this.U&&this.ot(void 0),(s||this.rt!==this.lt)&&(this.U=e,this.ht=null===(i=t.options)||void 0===i?void 0:i.host,this.ot(this.lt=t.element)),P}ot(t){"function"==typeof this.U?(void 0!==yt.get(this.U)&&this.U.call(this.ht,void 0),yt.set(this.U,t),void 0!==t&&this.U.call(this.ht,t)):this.U.value=t}get rt(){var t;return"function"==typeof this.U?yt.get(this.U):null===(t=this.U)||void 0===t?void 0:t.value}disconnected(){this.rt===this.lt&&this.ot(void 0)}reconnected(){this.ot(this.lt)}}),mt=t=>class extends t{constructor(){super(...arguments),this.focusElement=new bt}get canFocus(){return void 0!==this.focusElement.value}focus(){var t;if(console.log(null===(t=this.focusElement.value)||void 0===t?void 0:t.type),this.focusElement.value)switch(this.focusElement.value.type){case"checkbox":{const t=this.focusElement.value;t.checked=!t.checked;break}case"file":this.focusElement.value.click();break;default:this.focusElement.value.focus()}}};var _t=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};const wt=t=>{class e extends t{constructor(){super(...arguments),this.columns=1}static get styles(){return[ot(super.styles),n`
                    .gridded-container {
                        display: flex;
                        flex-wrap: wrap;
                    }

                    .gridded-container > .gridded-item {
                        box-sizing: border-box;
                        margin: 0 var(--spacer) 0 0;
                        flex: 0 1;
                    }

                    .gridded-container > .gridded-col-1 {
                        flex-basis: 100%;
                    }

                    .gridded-container > .gridded-col-2 {
                        flex-basis: calc((100% / 2) - (var(--spacer) * 1 / 2));
                    }

                    .gridded-container > .gridded-col-3 {
                        flex-basis: calc((100% / 3 - (var(--spacer) * 2 / 3)));
                    }

                    .gridded-container > .gridded-col-4 {
                        flex-basis: calc((100% / 4 - (var(--spacer) * 3 / 4)));
                    }

                    .gridded-container > .gridded-col-5 {
                        flex-basis: calc((100% / 5 - (var(--spacer) * 4 / 5)));
                    }

                    .gridded-container > .gridded-col-6 {
                        flex-basis: calc((100% / 6 - (var(--spacer) * 5 / 6)));
                    }

                    .gridded-container > .gridded-col-1,
                    .gridded-container > .gridded-col-2:nth-child(2n),
                    .gridded-container > .gridded-col-3:nth-child(3n),
                    .gridded-container > .gridded-col-4:nth-child(4n),
                    .gridded-container > .gridded-col-5:nth-child(5n),
                    .gridded-container > .gridded-col-6:nth-child(6n) {
                        margin-right: 0;
                    }
                `]}renderGrid(t){if(0!==t.length)return M`<div class="gridded-container">${t.map((t=>M`<div class="gridded-item gridded-col-${this.columns}">${t}</div>`))}</div>`}}return function(t,e,i,s){var n,o=arguments.length,r=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,s);else for(var l=t.length-1;l>=0;l--)(n=t[l])&&(r=(o<3?n(r):o>3?n(e,i,r):n(e,i))||r);o>3&&r&&Object.defineProperty(e,i,r)}([st({type:Number}),_t("design:type",Object)],e.prototype,"columns",void 0),e},At=n`
    :host {
        /* Box model */
        --spacer: 4px;

        /* Colors */
        --window-bg-color: #2d2d2d;
        --font-color: #9a9a9a;
        --input-bg-color: #3d3d3d;
        --input-font-color: #d8d8d8;

        --scrollbar-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);

        /* Typography */
        --font-family: Arial, 'Segoe UI', Roboto, Helvetica sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
        --font-size: 8pt;
    }
`;var xt=function(t,e,i,s){var n,o=arguments.length,r=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,s);else for(var l=t.length-1;l>=0;l--)(n=t[l])&&(r=(o<3?n(r):o>3?n(e,i,r):n(e,i))||r);return o>3&&r&&Object.defineProperty(e,i,r),r},St=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};const Et=t=>{class e extends t{constructor(){super(...arguments),this.disabled=!1,this.inputId=function(){const t=()=>Math.random().toString(16).slice(-4);return t()+t()+"-"+t()+"-"+t()+"-"+t()+"-"+t()+t()+t()}()}static get styles(){return[ot(super.styles),At,n`
                    button,
                    input,
                    select,
                    textarea {
                        /* Box model */
                        box-sizing: border-box;
                        outline: none;
                        border: none;
                        border-radius: 0;
                        min-width: 100%;
                        max-width: 100%;

                        /* Background and typography */
                        color: var(--input-font-color);
                        font-size: var(--font-size);
                        font-family: var(--font-family);
                    }
                `]}}return xt([st({type:Boolean}),St("design:type",Object)],e.prototype,"disabled",void 0),xt([st({attribute:!1}),St("design:type",Object)],e.prototype,"value",void 0),e};var kt=function(t,e,i,s){var n,o=arguments.length,r=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,s);else for(var l=t.length-1;l>=0;l--)(n=t[l])&&(r=(o<3?n(r):o>3?n(e,i,r):n(e,i))||r);return o>3&&r&&Object.defineProperty(e,i,r),r},Ct=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};const Rt=t=>{class e extends t{constructor(){super(...arguments),this.isGlobal=!1}}return kt([st({attribute:"global",type:Boolean}),Ct("design:type",Object)],e.prototype,"isGlobal",void 0),kt([st(),Ct("design:type",String)],e.prototype,"setting",void 0),e};let Nt=class extends(Et(X)){static get styles(){return[...super.styles,At,n`
                button {
                    background-color: var(--window-bg-color);
                    border: 1px solid #969696;
                    border-radius: 3px;
                    padding: calc(var(--spacer) * 1.5);
                }

                button:not(:disabled):hover {
                    background-color: #464646;
                    cursor: pointer;
                }

                button:not(:disabled):active {
                    background-color: var(--window-bg-color);
                    border-color: #646464;
                    color: #969696;
                }

                button:disabled {
                    opacity: 0.5;
                }
            `]}render(){return M`
            <button .disabled=${this.disabled} .value=${this.value||""}>
                <slot></slot>
            </button>
        `}};Nt=function(t,e,i,s){var n,o=arguments.length,r=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,s);else for(var l=t.length-1;l>=0;l--)(n=t[l])&&(r=(o<3?n(r):o>3?n(e,i,r):n(e,i))||r);return o>3&&r&&Object.defineProperty(e,i,r),r}([et("sdpi-button")],Nt);class Ot{constructor(){this.handlers=[]}dispatch(t){for(const e of this.handlers)e(t)}subscribe(t){this.handlers.push(t)}unsubscribe(t){this.handlers=this.handlers.filter((e=>e!==t))}}class jt{constructor(){this._promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}get promise(){return this._promise}setResult(t){this.resolve&&this.resolve(t)}setException(t){this.reject&&this.reject(t)}}const Mt=new class{constructor(){this._connection=new jt,this._connectionInfo=new jt,this.didReceiveGlobalSettings=new Ot,this.didReceiveSettings=new Ot,this.message=new Ot}async connect(t,e,i,s,n){if(!this._webSocket){const o={actionInfo:n?JSON.parse(n):null,info:JSON.parse(s),propertyInspectorUUID:e,registerEvent:i};o.actionInfo&&this.didReceiveSettings.dispatch(o.actionInfo),this._connectionInfo.setResult(o),this._webSocket=new WebSocket(`ws://localhost:${t}`),this._webSocket.onopen=this.handleOpen.bind(this),this._webSocket.onmessage=this.handleMessage.bind(this)}}getGlobalSettings(){return this.get("getGlobalSettings",(t=>"didReceiveGlobalSettings"===t.event))}setGlobalSettings(t){this.send("setGlobalSettings",t)}getSettings(){return this.get("getSettings",(t=>"didReceiveSettings"===t.event))}setSettings(t){this.send("setSettings",t)}async getConnectionInfo(){return this._connectionInfo.promise}async get(t,e,i){const s=new jt,n=t=>{e(t)&&(this.message.unsubscribe(n),s.setResult(t))};return this.message.subscribe(n),await this.send(t,i),s.promise}async send(t,e){try{const i=await this._connectionInfo.promise;(await this._connection.promise).send(JSON.stringify({event:t,context:i.propertyInspectorUUID,payload:e,action:i.actionInfo.action}))}catch(e){console.error(`Unable to send request '${t}' as there is no connection.`)}}async handleOpen(){try{const t=await this._connectionInfo.promise;this._webSocket&&(this._webSocket.send(JSON.stringify({event:t.registerEvent,uuid:t.propertyInspectorUUID})),this._connection.setResult(this._webSocket))}catch(t){this._connection.setException(t)}}handleMessage(t){const e=JSON.parse(t.data);switch(e.event){case"didReceiveGlobalSettings":this.didReceiveGlobalSettings.dispatch(e);break;case"didReceiveSettings":this.didReceiveSettings.dispatch(e)}}},It=new class{constructor(){Mt.didReceiveGlobalSettings.subscribe((t=>this._globalSettings=t.payload.settings)),Mt.didReceiveSettings.subscribe((t=>this._settings=t.payload.settings)),Mt.getGlobalSettings()}register(t,e,i,s=250){const n=e=>{var s,n;e&&e.payload&&e.payload.settings&&i((s=t,n=e.payload.settings,(Array.isArray(s)?s:s.split(".")).reduce(((t,e)=>t&&t[e]),n)||""))};return e?Mt.didReceiveGlobalSettings.subscribe(n):Mt.didReceiveSettings.subscribe(n),s?function(i,s){let n;return(i,...o)=>{clearTimeout(n),n=setTimeout((()=>{return s=i,It.set(t,e,s);var s}),s,o)}}(0,s):i=>It.set(t,e,i)}set(t,e,i){e?(this._globalSettings&&rt(t,this._globalSettings,i),Mt.setGlobalSettings(this._globalSettings)):(this._settings&&rt(t,this._settings,i),Mt.setSettings(this._settings))}},Pt=It.register;class Ut{constructor(t){(this._host=t).addController(this)}hostConnected(){this._host.setting&&(this._save=Pt(this._host.setting,this._host.isGlobal,(t=>this._host.value=t)))}save(t){this._host.value=t,this._save&&this._save(t)}}var Dt=function(t,e,i,s){var n,o=arguments.length,r=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,s);else for(var l=t.length-1;l>=0;l--)(n=t[l])&&(r=(o<3?n(r):o>3?n(e,i,r):n(e,i))||r);return o>3&&r&&Object.defineProperty(e,i,r),r};let Tt=class extends(Rt(mt(lt(Et(X))))){constructor(){super(...arguments),this._store=new Ut(this)}render(){return this.renderCheckable("checkbox",M`<input
                ${$t(this.focusElement)}
                type="checkbox"
                .checked=${this.value||!1}
                .disabled=${this.disabled}
                @change=${t=>this._store.save(t.target.checked)}
            />`,this.label)}};Dt([st(),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:type",String)],Tt.prototype,"label",void 0),Tt=Dt([et("sdpi-checkbox")],Tt);class Lt{constructor(t,e){this.items=[],(this._host=t).addController(this),this._nodeNames=e,this._observer=new MutationObserver(this.handleMutation.bind(this))}hostConnected(){this._observer.observe(this._host,{childList:!0})}hostDisconnected(){this._observer.disconnect()}handleMutation(t){t.forEach((t=>{for(const e of t.addedNodes)this._nodeNames.indexOf(e.nodeName.toLowerCase())>-1&&this.items.push(e);t.removedNodes.forEach((t=>{const e=this.items.indexOf(t);-1!==e&&this.items.splice(e,1)}))})),this._host.requestUpdate()}}let zt=class extends(wt(Rt(lt(Et(X))))){constructor(){super(...arguments),this._childNodes=new Lt(this,["option"]),this._store=new Ut(this)}render(){return this.renderGrid(this._childNodes.items.map((t=>this.renderCheckable("checkbox",M`<input
                        type="checkbox"
                        .checked=${this.value&&this.value.indexOf(t.value)>-1||!1}
                        .disabled=${this.disabled||t.disabled}
                        .value=${t.value}
                        @change=${this.handleChange}
                    />`,t.text))))}handleChange(t){const e=new Set(this.value);t.target.checked?e.add(t.target.value):e.delete(t.target.value),this._store.save(Array.from(e))}};zt=function(t,e,i,s){var n,o=arguments.length,r=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,s);else for(var l=t.length-1;l>=0;l--)(n=t[l])&&(r=(o<3?n(r):o>3?n(e,i,r):n(e,i))||r);return o>3&&r&&Object.defineProperty(e,i,r),r}([et("sdpi-checkbox-list")],zt);let Ht=class extends(Rt(mt(Et(X)))){constructor(){super(...arguments),this._store=new Ut(this)}static get styles(){return[...super.styles,n`
                input {
                    background-color: var(--input-bg-color);
                }
            `]}render(){return M`
            <input
                type="color"
                ${$t(this.focusElement)}
                .disabled=${this.disabled}
                .defaultValue=${this.value||""}
                @change=${t=>this._store.save(t.target.value)}
            />
        `}};Ht=function(t,e,i,s){var n,o=arguments.length,r=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,s);else for(var l=t.length-1;l>=0;l--)(n=t[l])&&(r=(o<3?n(r):o>3?n(e,i,r):n(e,i))||r);return o>3&&r&&Object.defineProperty(e,i,r),r}([et("sdpi-color")],Ht);class Bt{constructor(t){this.U=t}disconnect(){this.U=void 0}reconnect(t){this.U=t}deref(){return this.U}}class Gt{constructor(){this.Y=void 0,this.q=void 0}get(){return this.Y}pause(){var t;null!==(t=this.Y)&&void 0!==t||(this.Y=new Promise((t=>this.q=t)))}resume(){var t;null===(t=this.q)||void 0===t||t.call(this),this.Y=this.q=void 0}}const Qt=t=>{return!(e=t,null===e||"object"!=typeof e&&"function"!=typeof e||"function"!=typeof t.then);var e},Zt=ct(class extends vt{constructor(){super(...arguments),this._$Cwt=1073741823,this._$Cyt=[],this._$CG=new Bt(this),this._$CK=new Gt}render(...t){var e;return null!==(e=t.find((t=>!Qt(t))))&&void 0!==e?e:I}update(t,e){const i=this._$Cyt;let s=i.length;this._$Cyt=e;const n=this._$CG,o=this._$CK;this.isConnected||this.disconnected();for(let t=0;t<e.length&&!(t>this._$Cwt);t++){const r=e[t];if(!Qt(r))return this._$Cwt=t,r;t<s&&r===i[t]||(this._$Cwt=1073741823,s=0,Promise.resolve(r).then((async t=>{for(;o.get();)await o.get();const e=n.deref();if(void 0!==e){const i=e._$Cyt.indexOf(r);i>-1&&i<e._$Cwt&&(e._$Cwt=i,e.setValue(t))}})))}return I}disconnected(){this._$CG.disconnect(),this._$CK.pause()}reconnected(){this._$CG.reconnect(this),this._$CK.resume()}});async function qt(){return"windows"==(await Mt.getConnectionInfo()).info.application.platform}var Yt=function(t,e,i,s){var n,o=arguments.length,r=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,s);else for(var l=t.length-1;l>=0;l--)(n=t[l])&&(r=(o<3?n(r):o>3?n(e,i,r):n(e,i))||r);return o>3&&r&&Object.defineProperty(e,i,r),r},Wt=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Ft=class extends(Rt(mt(Et(X)))){constructor(){super(...arguments),this._store=new Ut(this),this.label="..."}static get styles(){return[...super.styles,n`
                .container {
                    align-items: stretch;
                    display: flex;
                }

                input {
                    display: none;
                }

                label.value {
                    background-color: var(--input-bg-color);
                    color: var(--input-font-color);
                    display: flex;
                    flex: 1 1 auto;
                    font-family: var(--font-family);
                    font-size: var(--font-size);
                    line-height: 1.5em;
                    padding: var(--spacer);
                }

                label.value > span {
                    align-self: center;
                }

                label.button {
                    margin-left: var(--spacer);
                    flex: 0 0 auto;
                }
            `]}render(){return M`
            <div class="container">
                <label class="value" for="file_input">
                    <span .title=${this.value||""}>${Zt(async function(t){const e=await qt()?"\\":"/",i=t.split(e);return 1==i.length?t:i[i.length-1]}(this.value||""))}</span>
                </label>
                <label class="button">
                    <sdpi-button @click=${()=>{var t;return null===(t=this.focusElement.value)||void 0===t?void 0:t.click()}}>
                        ${this.label}
                        <input
                            ${$t(this.focusElement)}
                            type="file"
                            id="file_input"
                            .accept=${this.accept||""}
                            .disabled=${this.disabled}
                            @change="${async t=>this._store.save(await async function(t){const e=decodeURIComponent(t.replace(/^C:\\fakepath\\/,""));return await qt()?e.replace(new RegExp("/","g"),"\\"):e}(t.target.value))}"
                        />
                    </sdpi-button>
                </label>
            </div>
        `}};Yt([st(),Wt("design:type",String)],Ft.prototype,"accept",void 0),Yt([st(),Wt("design:type",Object)],Ft.prototype,"label",void 0),Ft=Yt([et("sdpi-file")],Ft);const Vt=t=>null!=t?t:P;var Kt=function(t,e,i,s){var n,o=arguments.length,r=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,s);else for(var l=t.length-1;l>=0;l--)(n=t[l])&&(r=(o<3?n(r):o>3?n(e,i,r):n(e,i))||r);return o>3&&r&&Object.defineProperty(e,i,r),r};let Jt=class extends(Rt(mt(Et(X)))){constructor(){super(...arguments),this._store=new Ut(this)}static get styles(){return[...super.styles,At,n`
                input {
                    background-color: var(--input-bg-color);
                    padding: calc(var(--spacer) + 3px) var(--spacer);
                }

                input:disabled {
                    opacity: 0.5;
                }
            `]}render(){return M`
            <input
                ${$t(this.focusElement)}
                type="password"
                maxlength=${Vt(this.maxLength)}
                .disabled=${this.disabled}
                .value=${this.value||""}
                @input=${t=>this._store.save(t.target.value)}
            />
        `}};Kt([st({attribute:"maxlength",type:Number}),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:type",Number)],Jt.prototype,"maxLength",void 0),Jt=Kt([et("sdpi-password")],Jt);let Xt=class extends(wt(Rt(lt(Et(X))))){constructor(){super(...arguments),this._childNodes=new Lt(this,["option"]),this._store=new Ut(this)}render(){return this.renderGrid(this._childNodes.items.map((t=>this.renderCheckable("radio",M`<input
                        type="radio"
                        name="_"
                        .checked=${this.value===t.value}
                        .disabled=${this.disabled||t.disabled}
                        .value=${t.value}
                        @change=${t=>this._store.save(t.target.value)}
                    />`,t.text))))}};Xt=function(t,e,i,s){var n,o=arguments.length,r=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,s);else for(var l=t.length-1;l>=0;l--)(n=t[l])&&(r=(o<3?n(r):o>3?n(e,i,r):n(e,i))||r);return o>3&&r&&Object.defineProperty(e,i,r),r}([et("sdpi-radio")],Xt);var te=function(t,e,i,s){var n,o=arguments.length,r=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,s);else for(var l=t.length-1;l>=0;l--)(n=t[l])&&(r=(o<3?n(r):o>3?n(e,i,r):n(e,i))||r);return o>3&&r&&Object.defineProperty(e,i,r),r};let ee=class extends X{render(){const t=this.label?M`<label>${this.label}:</label>`:void 0;return M`
            <div class="container grid">
                <div class="label"><label @click=${this.handleLabelClick}>${t}</label></div>
                <div class="content"><slot></slot></div>
            </div>
        `}handleLabelClick(){for(const t of this.querySelectorAll("*")){const e=t;if(e.canFocus)return void e.focus()}}};ee.styles=[At,n`
            ::-webkit-scrollbar {
                width: 5px;
            }
            ::-webkit-scrollbar-track {
                -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
                box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
            }
            ::-webkit-scrollbar-thumb {
                background-color: #666666;
                border-radius: 5px;
                outline: 1px solid slategrey;
            }

            .container {
                color: var(--font-color);
                font-family: var(--font-family);
                font-size: var(--font-size);
                margin: 0 0 10px 0;
                max-width: 322px;
                -webkit-user-drag: none;
            }

            .grid {
                align-items: start;
                display: grid;
                grid-template-columns: 95px 1fr;
            }

            .label {
                margin-top: 6px;
                justify-self: end;
                padding-right: 11px;
            }
        `],te([st(),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:type",String)],ee.prototype,"label",void 0),ee=te([et("sdpi-item")],ee);var ie=function(t,e,i,s){var n,o=arguments.length,r=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,s);else for(var l=t.length-1;l>=0;l--)(n=t[l])&&(r=(o<3?n(r):o>3?n(e,i,r):n(e,i))||r);return o>3&&r&&Object.defineProperty(e,i,r),r};let se=class extends(Rt(mt(Et(X)))){constructor(){super(...arguments),this._childNodes=new Lt(this,["optgroup","option"]),this._store=new Ut(this)}static get styles(){return[...super.styles,At,n`
                select {
                    background-color: var(--input-bg-color);
                    padding: calc(var(--spacer) + 1px) 0;
                    text-overflow: ellipsis;
                }

                select:focus {
                    box-shadow: inset 0 0 1px var(--font-color);
                }

                select:disabled {
                    opacity: 0.5;
                }
            `]}render(){return M`
            <select ${$t(this.focusElement)} .disabled=${this.disabled} .value=${this.value||""} @change=${t=>this._store.save(t.target.value)}>
                <option value="" disabled .hidden=${!this.placeholder||void 0!==this.value}>${this.placeholder}</option>
                ${this.renderChildNodes()}
            </select>
        `}renderChildNodes(){if(0===this.childNodes.length)return;const t=e=>e instanceof HTMLOptGroupElement?M`<optgroup .label=${e.label}>${Array.from(e.childNodes).map(t)}</optgroup>`:e instanceof HTMLOptionElement?M`<option .disabled=${e.disabled} .value=${e.text}>${e.label}</option>`:void 0;return M`${this._childNodes.items.map(t)}`}};ie([st(),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:type",String)],se.prototype,"placeholder",void 0),se=ie([et("sdpi-select")],se);var ne=function(t,e,i,s){var n,o=arguments.length,r=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,s);else for(var l=t.length-1;l>=0;l--)(n=t[l])&&(r=(o<3?n(r):o>3?n(e,i,r):n(e,i))||r);return o>3&&r&&Object.defineProperty(e,i,r),r},oe=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let re=class extends(Rt(mt(Et(X)))){constructor(){super(...arguments),this._store=new Ut(this),this.rows=3,this.showLength=!1}static get styles(){return[...super.styles,At,n`
                textarea {
                    background-color: var(--input-bg-color);
                    padding: calc(var(--spacer) + 3px) var(--spacer);
                    resize: none;
                }

                textarea:disabled {
                    opacity: 0.5;
                }

                .length {
                    color: var(--font-color);
                    display: block;
                    text-align: right;
                    font-family: var(--font-family);
                    font-size: var(--font-size);
                }
            `]}render(){return M`
            <textarea
                ${$t(this.focusElement)}
                type="textarea"
                maxlength=${Vt(this.maxLength)}
                .disabled=${this.disabled}
                .id=${this.inputId}
                .rows=${this.rows}
                .value=${this.value||""}
                @input=${t=>this._store.save(t.target.value)}
            ></textarea>
            ${this.getLengthLabel()}
        `}getLengthLabel(){var t;if(this.showLength||this.maxLength){const e=this.maxLength?M`/${this.maxLength}`:void 0;return M`<label class="length" for=${this.inputId}>${(null===(t=this.value)||void 0===t?void 0:t.length)||0}${e}</label>`}}};ne([st({attribute:"maxlength",type:Number}),oe("design:type",Number)],re.prototype,"maxLength",void 0),ne([st({type:Number}),oe("design:type",Object)],re.prototype,"rows",void 0),ne([st({attribute:"showlength",type:Boolean}),oe("design:type",Object)],re.prototype,"showLength",void 0),re=ne([et("sdpi-textarea")],re);var le=function(t,e,i,s){var n,o=arguments.length,r=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,s);else for(var l=t.length-1;l>=0;l--)(n=t[l])&&(r=(o<3?n(r):o>3?n(e,i,r):n(e,i))||r);return o>3&&r&&Object.defineProperty(e,i,r),r},ae=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let ce=class extends(Rt(mt(Et(X)))){constructor(){super(...arguments),this._store=new Ut(this),this.pattern="",this.placeholder="",this.required=!1}static get styles(){return[...super.styles,At,n`
                input {
                    background-color: var(--input-bg-color);
                    padding: calc(var(--spacer) + 3px) var(--spacer);
                }

                input:disabled {
                    opacity: 0.5;
                }

                input:required {
                    background-position: 98% center;
                    background-repeat: no-repeat;
                }

                input:required:valid {
                    background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI5IiBoZWlnaHQ9IjkiIHZpZXdCb3g9IjAgMCA5IDkiPjxwb2x5Z29uIGZpbGw9IiNEOEQ4RDgiIHBvaW50cz0iNS4yIDEgNi4yIDEgNi4yIDcgMy4yIDcgMy4yIDYgNS4yIDYiIHRyYW5zZm9ybT0icm90YXRlKDQwIDQuNjc3IDQpIi8+PC9zdmc+);
                }

                input:required:invalid {
                    background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI5IiBoZWlnaHQ9IjkiIHZpZXdCb3g9IjAgMCA5IDkiPgogICAgPHBhdGggZmlsbD0iI0Q4RDhEOCIgZD0iTTQuNSwwIEM2Ljk4NTI4MTM3LC00LjU2NTM4NzgyZS0xNiA5LDIuMDE0NzE4NjMgOSw0LjUgQzksNi45ODUyODEzNyA2Ljk4NTI4MTM3LDkgNC41LDkgQzIuMDE0NzE4NjMsOSAzLjA0MzU5MTg4ZS0xNiw2Ljk4NTI4MTM3IDAsNC41IEMtMy4wNDM1OTE4OGUtMTYsMi4wMTQ3MTg2MyAyLjAxNDcxODYzLDQuNTY1Mzg3ODJlLTE2IDQuNSwwIFogTTQsMSBMNCw2IEw1LDYgTDUsMSBMNCwxIFogTTQuNSw4IEM0Ljc3NjE0MjM3LDggNSw3Ljc3NjE0MjM3IDUsNy41IEM1LDcuMjIzODU3NjMgNC43NzYxNDIzNyw3IDQuNSw3IEM0LjIyMzg1NzYzLDcgNCw3LjIyMzg1NzYzIDQsNy41IEM0LDcuNzc2MTQyMzcgNC4yMjM4NTc2Myw4IDQuNSw4IFoiLz4KICA8L3N2Zz4);
                }
            `]}render(){return M`
            <input
                ${$t(this.focusElement)}
                type="text"
                maxlength=${Vt(this.maxLength)}
                .disabled=${this.disabled}
                .pattern=${this.pattern}
                .placeholder=${this.placeholder}
                .required=${this.required}
                .value=${this.value||""}
                @input=${t=>this._store.save(t.target.value)}
            />
        `}};le([st({attribute:"maxlength",type:Number}),ae("design:type",Number)],ce.prototype,"maxLength",void 0),le([st(),ae("design:type",Object)],ce.prototype,"pattern",void 0),le([st(),ae("design:type",Object)],ce.prototype,"placeholder",void 0),le([st({type:Boolean}),ae("design:type",Object)],ce.prototype,"required",void 0),ce=le([et("sdpi-textfield")],ce),window.streamDeckClient=Mt;const de=window.connectElgatoStreamDeckSocket;window.connectElgatoStreamDeckSocket=function(t,e,i,s,n){de&&de(t,e,i,s,n),Mt.connect(t,e,i,s,n)};const he=document.createElement("style");he.innerHTML=n`
    /* Styles added by sdpi library. */
    ::-webkit-scrollbar {
        width: 5px;
    }
    ::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
        box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    }
    ::-webkit-scrollbar-thumb {
        background-color: #666666;
        border-radius: 5px;
        outline: 1px solid slategrey;
    }
`.cssText,document.head.appendChild(he)})();