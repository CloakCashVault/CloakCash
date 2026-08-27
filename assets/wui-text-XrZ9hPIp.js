const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/add-CE-oCpCk.js","assets/lit-Bca9-NdL.js","assets/all-wallets-NDerrueP.js","assets/arrow-bottom-circle-CUOv720D.js","assets/app-store-BYS2VQxm.js","assets/apple-CJT3LnOf.js","assets/arrow-bottom-CHtRjDqL.js","assets/arrow-left-CEPuMF4_.js","assets/arrow-right-Bm2BTicT.js","assets/arrow-top-gSfgreXh.js","assets/bank-DqpOPpSC.js","assets/browser-B2W4u2-b.js","assets/card-BSqTGFJS.js","assets/checkmark-BPDbZ7OY.js","assets/checkmark-bold-B-xZL5jq.js","assets/chevron-bottom-By4t2X3i.js","assets/chevron-left-BLV3htt8.js","assets/chevron-right-CiGYgxFW.js","assets/chevron-top-COinbU5n.js","assets/chrome-store-D85k-GUe.js","assets/clock-CDB0GUq_.js","assets/close-lrTjT5_O.js","assets/compass-DgR-SCy0.js","assets/coinPlaceholder-VAl0swn3.js","assets/copy-OtyjVqXE.js","assets/cursor-Hrw7UPij.js","assets/cursor-transparent-BYK2aU3Y.js","assets/desktop-Dw1TmQ3n.js","assets/disconnect-DVnEZRdK.js","assets/discord-BCHSzXS5.js","assets/etherscan-CsexwvS0.js","assets/extension-DVAFUj9c.js","assets/external-link-BVwlSQxN.js","assets/facebook-DlAlEMAv.js","assets/farcaster-BNt4eRP-.js","assets/filters-lHEDV4jx.js","assets/github-DqZ8Q7_K.js","assets/google-CPykE36j.js","assets/help-circle-DvO-wDLA.js","assets/image-G3TRaufF.js","assets/id-CBw13j5B.js","assets/info-circle-99BWzel6.js","assets/lightbulb-C9ny4YZu.js","assets/mail-BSj1Ug9L.js","assets/mobile-B4vIPkrJ.js","assets/more-Bur4uLwE.js","assets/network-placeholder-BN7j2IUR.js","assets/nftPlaceholder-3DlKzAwf.js","assets/off-DKgoY4wg.js","assets/play-store-Cj4xe4sT.js","assets/plus-DRKO977H.js","assets/qr-code-Cauav0yp.js","assets/recycle-horizontal-CTY-FNT_.js","assets/refresh-B-xtjolw.js","assets/search-eRZC2aF8.js","assets/send-BSE9tUNC.js","assets/swapHorizontal-BYmmYgxj.js","assets/swapHorizontalMedium-DAcE08TG.js","assets/swapHorizontalBold-CzO07p2T.js","assets/swapHorizontalRoundedBold-d5-WKINO.js","assets/swapVertical-CB42XPLz.js","assets/telegram-DpdEOm9S.js","assets/three-dots-Bpv6ZrvQ.js","assets/twitch-Dp9JLT4e.js","assets/x-bjt41ela.js","assets/twitterIcon-CUStyUVQ.js","assets/verify-BwDctYRb.js","assets/verify-filled-BrcNcd_f.js","assets/wallet-Ct3FLpcV.js","assets/walletconnect-JUrX11Vj.js","assets/wallet-placeholder-BLdZKP3V.js","assets/warning-circle-Cgz1MYQw.js","assets/info-_FAdU0fn.js","assets/exclamation-triangle-DqF242BL.js","assets/reown-logo-ruQAsMqm.js"])))=>i.map(i=>d[i]);
import{t as e}from"./preload-helper-BEFjQwLd.js";import{a as t,c as n,i as r,l as i,n as a,r as o,s,t as c}from"./lit-Bca9-NdL.js";import{a as l,i as u,n as d,r as f,s as p}from"./ConstantsUtil-CdpZkCqH.js";var m={attribute:!0,type:String,converter:n,reflect:!1,hasChanged:s},h=(e=m,t,n)=>{let{kind:r,metadata:i}=n,a=globalThis.litPropertyMetadata.get(i);if(a===void 0&&globalThis.litPropertyMetadata.set(i,a=new Map),r===`setter`&&((e=Object.create(e)).wrapped=!0),a.set(n.name,e),r===`accessor`){let{name:r}=n;return{set(n){let i=t.get.call(this);t.set.call(this,n),this.requestUpdate(r,i,e,!0,n)},init(t){return t!==void 0&&this.C(r,void 0,e,t),t}}}if(r===`setter`){let{name:r}=n;return function(n){let i=this[r];t.call(this,n),this.requestUpdate(r,i,e,!0,n)}}throw Error(`Unsupported decorator location: `+r)};function g(e){return(t,n)=>typeof n==`object`?h(e,t,n):((e,t,n)=>{let r=t.hasOwnProperty(n);return t.constructor.createProperty(n,e),r?Object.getOwnPropertyDescriptor(t,n):void 0})(e,t,n)}function _(e){return g({...e,state:!0,attribute:!1})}var ee=i`
  :host {
    display: flex;
    width: inherit;
    height: inherit;
  }
`,v=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},y=class extends c{render(){return this.style.cssText=`
      flex-direction: ${this.flexDirection};
      flex-wrap: ${this.flexWrap};
      flex-basis: ${this.flexBasis};
      flex-grow: ${this.flexGrow};
      flex-shrink: ${this.flexShrink};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};
      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};
      padding-top: ${this.padding&&f.getSpacingStyles(this.padding,0)};
      padding-right: ${this.padding&&f.getSpacingStyles(this.padding,1)};
      padding-bottom: ${this.padding&&f.getSpacingStyles(this.padding,2)};
      padding-left: ${this.padding&&f.getSpacingStyles(this.padding,3)};
      margin-top: ${this.margin&&f.getSpacingStyles(this.margin,0)};
      margin-right: ${this.margin&&f.getSpacingStyles(this.margin,1)};
      margin-bottom: ${this.margin&&f.getSpacingStyles(this.margin,2)};
      margin-left: ${this.margin&&f.getSpacingStyles(this.margin,3)};
    `,r`<slot></slot>`}};y.styles=[p,ee],v([g()],y.prototype,`flexDirection`,void 0),v([g()],y.prototype,`flexWrap`,void 0),v([g()],y.prototype,`flexBasis`,void 0),v([g()],y.prototype,`flexGrow`,void 0),v([g()],y.prototype,`flexShrink`,void 0),v([g()],y.prototype,`alignItems`,void 0),v([g()],y.prototype,`justifyContent`,void 0),v([g()],y.prototype,`columnGap`,void 0),v([g()],y.prototype,`rowGap`,void 0),v([g()],y.prototype,`gap`,void 0),v([g()],y.prototype,`padding`,void 0),v([g()],y.prototype,`margin`,void 0),y=v([d(`wui-flex`)],y);var b=e=>e??a,{I:te}=t,ne=e=>e===null||typeof e!=`object`&&typeof e!=`function`,re=e=>e.strings===void 0,x={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},S=e=>(...t)=>({_$litDirective$:e,values:t}),C=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}},w=(e,t)=>{let n=e._$AN;if(n===void 0)return!1;for(let e of n)e._$AO?.(t,!1),w(e,t);return!0},T=e=>{let t,n;do{if((t=e._$AM)===void 0)break;n=t._$AN,n.delete(e),e=t}while(n?.size===0)},E=e=>{for(let t;t=e._$AM;e=t){let n=t._$AN;if(n===void 0)t._$AN=n=new Set;else if(n.has(e))break;n.add(e),k(t)}};function D(e){this._$AN===void 0?this._$AM=e:(T(this),this._$AM=e,E(this))}function O(e,t=!1,n=0){let r=this._$AH,i=this._$AN;if(i!==void 0&&i.size!==0)if(t)if(Array.isArray(r))for(let e=n;e<r.length;e++)w(r[e],!1),T(r[e]);else r!=null&&(w(r,!1),T(r));else w(this,e)}var k=e=>{e.type==x.CHILD&&(e._$AP??=O,e._$AQ??=D)},A=class extends C{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,n){super._$AT(e,t,n),E(this),this.isConnected=e._$AU}_$AO(e,t=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),t&&(w(this,e),T(this))}setValue(e){if(re(this._$Ct))this._$Ct._$AI(e,this);else{let t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}},j=class{constructor(e){this.G=e}disconnect(){this.G=void 0}reconnect(e){this.G=e}deref(){return this.G}},M=class{constructor(){this.Y=void 0,this.Z=void 0}get(){return this.Y}pause(){this.Y??=new Promise(e=>this.Z=e)}resume(){this.Z?.(),this.Y=this.Z=void 0}},N=e=>!ne(e)&&typeof e.then==`function`,P=1073741823,ie=S(class extends A{constructor(){super(...arguments),this._$Cwt=P,this._$Cbt=[],this._$CK=new j(this),this._$CX=new M}render(...e){return e.find(e=>!N(e))??o}update(e,t){let n=this._$Cbt,r=n.length;this._$Cbt=t;let i=this._$CK,a=this._$CX;this.isConnected||this.disconnected();for(let e=0;e<t.length&&!(e>this._$Cwt);e++){let o=t[e];if(!N(o))return this._$Cwt=e,o;e<r&&o===n[e]||(this._$Cwt=P,r=0,Promise.resolve(o).then(async e=>{for(;a.get();)await a.get();let t=i.deref();if(t!==void 0){let n=t._$Cbt.indexOf(o);n>-1&&n<t._$Cwt&&(t._$Cwt=n,t.setValue(e))}}))}return o}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}}),F=new class{constructor(){this.cache=new Map}set(e,t){this.cache.set(e,t)}get(e){return this.cache.get(e)}has(e){return this.cache.has(e)}delete(e){this.cache.delete(e)}clear(){this.cache.clear()}},ae=i`
  :host {
    display: flex;
    aspect-ratio: var(--local-aspect-ratio);
    color: var(--local-color);
    width: var(--local-width);
  }

  svg {
    width: inherit;
    height: inherit;
    object-fit: contain;
    object-position: center;
  }

  .fallback {
    width: var(--local-width);
    height: var(--local-height);
  }
`,I=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},L={add:async()=>(await e(async()=>{let{addSvg:e}=await import(`./add-CE-oCpCk.js`);return{addSvg:e}},__vite__mapDeps([0,1]))).addSvg,allWallets:async()=>(await e(async()=>{let{allWalletsSvg:e}=await import(`./all-wallets-NDerrueP.js`);return{allWalletsSvg:e}},__vite__mapDeps([2,1]))).allWalletsSvg,arrowBottomCircle:async()=>(await e(async()=>{let{arrowBottomCircleSvg:e}=await import(`./arrow-bottom-circle-CUOv720D.js`);return{arrowBottomCircleSvg:e}},__vite__mapDeps([3,1]))).arrowBottomCircleSvg,appStore:async()=>(await e(async()=>{let{appStoreSvg:e}=await import(`./app-store-BYS2VQxm.js`);return{appStoreSvg:e}},__vite__mapDeps([4,1]))).appStoreSvg,apple:async()=>(await e(async()=>{let{appleSvg:e}=await import(`./apple-CJT3LnOf.js`);return{appleSvg:e}},__vite__mapDeps([5,1]))).appleSvg,arrowBottom:async()=>(await e(async()=>{let{arrowBottomSvg:e}=await import(`./arrow-bottom-CHtRjDqL.js`);return{arrowBottomSvg:e}},__vite__mapDeps([6,1]))).arrowBottomSvg,arrowLeft:async()=>(await e(async()=>{let{arrowLeftSvg:e}=await import(`./arrow-left-CEPuMF4_.js`);return{arrowLeftSvg:e}},__vite__mapDeps([7,1]))).arrowLeftSvg,arrowRight:async()=>(await e(async()=>{let{arrowRightSvg:e}=await import(`./arrow-right-Bm2BTicT.js`);return{arrowRightSvg:e}},__vite__mapDeps([8,1]))).arrowRightSvg,arrowTop:async()=>(await e(async()=>{let{arrowTopSvg:e}=await import(`./arrow-top-gSfgreXh.js`);return{arrowTopSvg:e}},__vite__mapDeps([9,1]))).arrowTopSvg,bank:async()=>(await e(async()=>{let{bankSvg:e}=await import(`./bank-DqpOPpSC.js`);return{bankSvg:e}},__vite__mapDeps([10,1]))).bankSvg,browser:async()=>(await e(async()=>{let{browserSvg:e}=await import(`./browser-B2W4u2-b.js`);return{browserSvg:e}},__vite__mapDeps([11,1]))).browserSvg,card:async()=>(await e(async()=>{let{cardSvg:e}=await import(`./card-BSqTGFJS.js`);return{cardSvg:e}},__vite__mapDeps([12,1]))).cardSvg,checkmark:async()=>(await e(async()=>{let{checkmarkSvg:e}=await import(`./checkmark-BPDbZ7OY.js`);return{checkmarkSvg:e}},__vite__mapDeps([13,1]))).checkmarkSvg,checkmarkBold:async()=>(await e(async()=>{let{checkmarkBoldSvg:e}=await import(`./checkmark-bold-B-xZL5jq.js`);return{checkmarkBoldSvg:e}},__vite__mapDeps([14,1]))).checkmarkBoldSvg,chevronBottom:async()=>(await e(async()=>{let{chevronBottomSvg:e}=await import(`./chevron-bottom-By4t2X3i.js`);return{chevronBottomSvg:e}},__vite__mapDeps([15,1]))).chevronBottomSvg,chevronLeft:async()=>(await e(async()=>{let{chevronLeftSvg:e}=await import(`./chevron-left-BLV3htt8.js`);return{chevronLeftSvg:e}},__vite__mapDeps([16,1]))).chevronLeftSvg,chevronRight:async()=>(await e(async()=>{let{chevronRightSvg:e}=await import(`./chevron-right-CiGYgxFW.js`);return{chevronRightSvg:e}},__vite__mapDeps([17,1]))).chevronRightSvg,chevronTop:async()=>(await e(async()=>{let{chevronTopSvg:e}=await import(`./chevron-top-COinbU5n.js`);return{chevronTopSvg:e}},__vite__mapDeps([18,1]))).chevronTopSvg,chromeStore:async()=>(await e(async()=>{let{chromeStoreSvg:e}=await import(`./chrome-store-D85k-GUe.js`);return{chromeStoreSvg:e}},__vite__mapDeps([19,1]))).chromeStoreSvg,clock:async()=>(await e(async()=>{let{clockSvg:e}=await import(`./clock-CDB0GUq_.js`);return{clockSvg:e}},__vite__mapDeps([20,1]))).clockSvg,close:async()=>(await e(async()=>{let{closeSvg:e}=await import(`./close-lrTjT5_O.js`);return{closeSvg:e}},__vite__mapDeps([21,1]))).closeSvg,compass:async()=>(await e(async()=>{let{compassSvg:e}=await import(`./compass-DgR-SCy0.js`);return{compassSvg:e}},__vite__mapDeps([22,1]))).compassSvg,coinPlaceholder:async()=>(await e(async()=>{let{coinPlaceholderSvg:e}=await import(`./coinPlaceholder-VAl0swn3.js`);return{coinPlaceholderSvg:e}},__vite__mapDeps([23,1]))).coinPlaceholderSvg,copy:async()=>(await e(async()=>{let{copySvg:e}=await import(`./copy-OtyjVqXE.js`);return{copySvg:e}},__vite__mapDeps([24,1]))).copySvg,cursor:async()=>(await e(async()=>{let{cursorSvg:e}=await import(`./cursor-Hrw7UPij.js`);return{cursorSvg:e}},__vite__mapDeps([25,1]))).cursorSvg,cursorTransparent:async()=>(await e(async()=>{let{cursorTransparentSvg:e}=await import(`./cursor-transparent-BYK2aU3Y.js`);return{cursorTransparentSvg:e}},__vite__mapDeps([26,1]))).cursorTransparentSvg,desktop:async()=>(await e(async()=>{let{desktopSvg:e}=await import(`./desktop-Dw1TmQ3n.js`);return{desktopSvg:e}},__vite__mapDeps([27,1]))).desktopSvg,disconnect:async()=>(await e(async()=>{let{disconnectSvg:e}=await import(`./disconnect-DVnEZRdK.js`);return{disconnectSvg:e}},__vite__mapDeps([28,1]))).disconnectSvg,discord:async()=>(await e(async()=>{let{discordSvg:e}=await import(`./discord-BCHSzXS5.js`);return{discordSvg:e}},__vite__mapDeps([29,1]))).discordSvg,etherscan:async()=>(await e(async()=>{let{etherscanSvg:e}=await import(`./etherscan-CsexwvS0.js`);return{etherscanSvg:e}},__vite__mapDeps([30,1]))).etherscanSvg,extension:async()=>(await e(async()=>{let{extensionSvg:e}=await import(`./extension-DVAFUj9c.js`);return{extensionSvg:e}},__vite__mapDeps([31,1]))).extensionSvg,externalLink:async()=>(await e(async()=>{let{externalLinkSvg:e}=await import(`./external-link-BVwlSQxN.js`);return{externalLinkSvg:e}},__vite__mapDeps([32,1]))).externalLinkSvg,facebook:async()=>(await e(async()=>{let{facebookSvg:e}=await import(`./facebook-DlAlEMAv.js`);return{facebookSvg:e}},__vite__mapDeps([33,1]))).facebookSvg,farcaster:async()=>(await e(async()=>{let{farcasterSvg:e}=await import(`./farcaster-BNt4eRP-.js`);return{farcasterSvg:e}},__vite__mapDeps([34,1]))).farcasterSvg,filters:async()=>(await e(async()=>{let{filtersSvg:e}=await import(`./filters-lHEDV4jx.js`);return{filtersSvg:e}},__vite__mapDeps([35,1]))).filtersSvg,github:async()=>(await e(async()=>{let{githubSvg:e}=await import(`./github-DqZ8Q7_K.js`);return{githubSvg:e}},__vite__mapDeps([36,1]))).githubSvg,google:async()=>(await e(async()=>{let{googleSvg:e}=await import(`./google-CPykE36j.js`);return{googleSvg:e}},__vite__mapDeps([37,1]))).googleSvg,helpCircle:async()=>(await e(async()=>{let{helpCircleSvg:e}=await import(`./help-circle-DvO-wDLA.js`);return{helpCircleSvg:e}},__vite__mapDeps([38,1]))).helpCircleSvg,image:async()=>(await e(async()=>{let{imageSvg:e}=await import(`./image-G3TRaufF.js`);return{imageSvg:e}},__vite__mapDeps([39,1]))).imageSvg,id:async()=>(await e(async()=>{let{idSvg:e}=await import(`./id-CBw13j5B.js`);return{idSvg:e}},__vite__mapDeps([40,1]))).idSvg,infoCircle:async()=>(await e(async()=>{let{infoCircleSvg:e}=await import(`./info-circle-99BWzel6.js`);return{infoCircleSvg:e}},__vite__mapDeps([41,1]))).infoCircleSvg,lightbulb:async()=>(await e(async()=>{let{lightbulbSvg:e}=await import(`./lightbulb-C9ny4YZu.js`);return{lightbulbSvg:e}},__vite__mapDeps([42,1]))).lightbulbSvg,mail:async()=>(await e(async()=>{let{mailSvg:e}=await import(`./mail-BSj1Ug9L.js`);return{mailSvg:e}},__vite__mapDeps([43,1]))).mailSvg,mobile:async()=>(await e(async()=>{let{mobileSvg:e}=await import(`./mobile-B4vIPkrJ.js`);return{mobileSvg:e}},__vite__mapDeps([44,1]))).mobileSvg,more:async()=>(await e(async()=>{let{moreSvg:e}=await import(`./more-Bur4uLwE.js`);return{moreSvg:e}},__vite__mapDeps([45,1]))).moreSvg,networkPlaceholder:async()=>(await e(async()=>{let{networkPlaceholderSvg:e}=await import(`./network-placeholder-BN7j2IUR.js`);return{networkPlaceholderSvg:e}},__vite__mapDeps([46,1]))).networkPlaceholderSvg,nftPlaceholder:async()=>(await e(async()=>{let{nftPlaceholderSvg:e}=await import(`./nftPlaceholder-3DlKzAwf.js`);return{nftPlaceholderSvg:e}},__vite__mapDeps([47,1]))).nftPlaceholderSvg,off:async()=>(await e(async()=>{let{offSvg:e}=await import(`./off-DKgoY4wg.js`);return{offSvg:e}},__vite__mapDeps([48,1]))).offSvg,playStore:async()=>(await e(async()=>{let{playStoreSvg:e}=await import(`./play-store-Cj4xe4sT.js`);return{playStoreSvg:e}},__vite__mapDeps([49,1]))).playStoreSvg,plus:async()=>(await e(async()=>{let{plusSvg:e}=await import(`./plus-DRKO977H.js`);return{plusSvg:e}},__vite__mapDeps([50,1]))).plusSvg,qrCode:async()=>(await e(async()=>{let{qrCodeIcon:e}=await import(`./qr-code-Cauav0yp.js`);return{qrCodeIcon:e}},__vite__mapDeps([51,1]))).qrCodeIcon,recycleHorizontal:async()=>(await e(async()=>{let{recycleHorizontalSvg:e}=await import(`./recycle-horizontal-CTY-FNT_.js`);return{recycleHorizontalSvg:e}},__vite__mapDeps([52,1]))).recycleHorizontalSvg,refresh:async()=>(await e(async()=>{let{refreshSvg:e}=await import(`./refresh-B-xtjolw.js`);return{refreshSvg:e}},__vite__mapDeps([53,1]))).refreshSvg,search:async()=>(await e(async()=>{let{searchSvg:e}=await import(`./search-eRZC2aF8.js`);return{searchSvg:e}},__vite__mapDeps([54,1]))).searchSvg,send:async()=>(await e(async()=>{let{sendSvg:e}=await import(`./send-BSE9tUNC.js`);return{sendSvg:e}},__vite__mapDeps([55,1]))).sendSvg,swapHorizontal:async()=>(await e(async()=>{let{swapHorizontalSvg:e}=await import(`./swapHorizontal-BYmmYgxj.js`);return{swapHorizontalSvg:e}},__vite__mapDeps([56,1]))).swapHorizontalSvg,swapHorizontalMedium:async()=>(await e(async()=>{let{swapHorizontalMediumSvg:e}=await import(`./swapHorizontalMedium-DAcE08TG.js`);return{swapHorizontalMediumSvg:e}},__vite__mapDeps([57,1]))).swapHorizontalMediumSvg,swapHorizontalBold:async()=>(await e(async()=>{let{swapHorizontalBoldSvg:e}=await import(`./swapHorizontalBold-CzO07p2T.js`);return{swapHorizontalBoldSvg:e}},__vite__mapDeps([58,1]))).swapHorizontalBoldSvg,swapHorizontalRoundedBold:async()=>(await e(async()=>{let{swapHorizontalRoundedBoldSvg:e}=await import(`./swapHorizontalRoundedBold-d5-WKINO.js`);return{swapHorizontalRoundedBoldSvg:e}},__vite__mapDeps([59,1]))).swapHorizontalRoundedBoldSvg,swapVertical:async()=>(await e(async()=>{let{swapVerticalSvg:e}=await import(`./swapVertical-CB42XPLz.js`);return{swapVerticalSvg:e}},__vite__mapDeps([60,1]))).swapVerticalSvg,telegram:async()=>(await e(async()=>{let{telegramSvg:e}=await import(`./telegram-DpdEOm9S.js`);return{telegramSvg:e}},__vite__mapDeps([61,1]))).telegramSvg,threeDots:async()=>(await e(async()=>{let{threeDotsSvg:e}=await import(`./three-dots-Bpv6ZrvQ.js`);return{threeDotsSvg:e}},__vite__mapDeps([62,1]))).threeDotsSvg,twitch:async()=>(await e(async()=>{let{twitchSvg:e}=await import(`./twitch-Dp9JLT4e.js`);return{twitchSvg:e}},__vite__mapDeps([63,1]))).twitchSvg,twitter:async()=>(await e(async()=>{let{xSvg:e}=await import(`./x-bjt41ela.js`);return{xSvg:e}},__vite__mapDeps([64,1]))).xSvg,twitterIcon:async()=>(await e(async()=>{let{twitterIconSvg:e}=await import(`./twitterIcon-CUStyUVQ.js`);return{twitterIconSvg:e}},__vite__mapDeps([65,1]))).twitterIconSvg,verify:async()=>(await e(async()=>{let{verifySvg:e}=await import(`./verify-BwDctYRb.js`);return{verifySvg:e}},__vite__mapDeps([66,1]))).verifySvg,verifyFilled:async()=>(await e(async()=>{let{verifyFilledSvg:e}=await import(`./verify-filled-BrcNcd_f.js`);return{verifyFilledSvg:e}},__vite__mapDeps([67,1]))).verifyFilledSvg,wallet:async()=>(await e(async()=>{let{walletSvg:e}=await import(`./wallet-Ct3FLpcV.js`);return{walletSvg:e}},__vite__mapDeps([68,1]))).walletSvg,walletConnect:async()=>(await e(async()=>{let{walletConnectSvg:e}=await import(`./walletconnect-JUrX11Vj.js`);return{walletConnectSvg:e}},__vite__mapDeps([69,1]))).walletConnectSvg,walletConnectLightBrown:async()=>(await e(async()=>{let{walletConnectLightBrownSvg:e}=await import(`./walletconnect-JUrX11Vj.js`);return{walletConnectLightBrownSvg:e}},__vite__mapDeps([69,1]))).walletConnectLightBrownSvg,walletConnectBrown:async()=>(await e(async()=>{let{walletConnectBrownSvg:e}=await import(`./walletconnect-JUrX11Vj.js`);return{walletConnectBrownSvg:e}},__vite__mapDeps([69,1]))).walletConnectBrownSvg,walletPlaceholder:async()=>(await e(async()=>{let{walletPlaceholderSvg:e}=await import(`./wallet-placeholder-BLdZKP3V.js`);return{walletPlaceholderSvg:e}},__vite__mapDeps([70,1]))).walletPlaceholderSvg,warningCircle:async()=>(await e(async()=>{let{warningCircleSvg:e}=await import(`./warning-circle-Cgz1MYQw.js`);return{warningCircleSvg:e}},__vite__mapDeps([71,1]))).warningCircleSvg,x:async()=>(await e(async()=>{let{xSvg:e}=await import(`./x-bjt41ela.js`);return{xSvg:e}},__vite__mapDeps([64,1]))).xSvg,info:async()=>(await e(async()=>{let{infoSvg:e}=await import(`./info-_FAdU0fn.js`);return{infoSvg:e}},__vite__mapDeps([72,1]))).infoSvg,exclamationTriangle:async()=>(await e(async()=>{let{exclamationTriangleSvg:e}=await import(`./exclamation-triangle-DqF242BL.js`);return{exclamationTriangleSvg:e}},__vite__mapDeps([73,1]))).exclamationTriangleSvg,reown:async()=>(await e(async()=>{let{reownSvg:e}=await import(`./reown-logo-ruQAsMqm.js`);return{reownSvg:e}},__vite__mapDeps([74,1]))).reownSvg};async function R(e){if(F.has(e))return F.get(e);let t=(L[e]??L.copy)();return F.set(e,t),t}var z=class extends c{constructor(){super(...arguments),this.size=`md`,this.name=`copy`,this.color=`fg-300`,this.aspectRatio=`1 / 1`}render(){return this.style.cssText=`
      --local-color: ${`var(--wui-color-${this.color});`}
      --local-width: ${`var(--wui-icon-size-${this.size});`}
      --local-aspect-ratio: ${this.aspectRatio}
    `,r`${ie(R(this.name),r`<div class="fallback"></div>`)}`}};z.styles=[p,u,ae],I([g()],z.prototype,`size`,void 0),I([g()],z.prototype,`name`,void 0),I([g()],z.prototype,`color`,void 0),I([g()],z.prototype,`aspectRatio`,void 0),z=I([d(`wui-icon`)],z);var B=S(class extends C{constructor(e){if(super(e),e.type!==x.ATTRIBUTE||e.name!==`class`||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return` `+Object.keys(e).filter(t=>e[t]).join(` `)+` `}update(e,[t]){if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(` `).split(/\s/).filter(e=>e!==``)));for(let e in t)t[e]&&!this.nt?.has(e)&&this.st.add(e);return this.render(t)}let n=e.element.classList;for(let e of this.st)e in t||(n.remove(e),this.st.delete(e));for(let e in t){let r=!!t[e];r===this.st.has(e)||this.nt?.has(e)||(r?(n.add(e),this.st.add(e)):(n.remove(e),this.st.delete(e)))}return o}}),V=i`
  :host {
    display: inline-flex !important;
  }

  slot {
    width: 100%;
    display: inline-block;
    font-style: normal;
    font-family: var(--wui-font-family);
    font-feature-settings:
      'tnum' on,
      'lnum' on,
      'case' on;
    line-height: 130%;
    font-weight: var(--wui-font-weight-regular);
    overflow: inherit;
    text-overflow: inherit;
    text-align: var(--local-align);
    color: var(--local-color);
  }

  .wui-line-clamp-1 {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }

  .wui-line-clamp-2 {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }

  .wui-font-medium-400 {
    font-size: var(--wui-font-size-medium);
    font-weight: var(--wui-font-weight-light);
    letter-spacing: var(--wui-letter-spacing-medium);
  }

  .wui-font-medium-600 {
    font-size: var(--wui-font-size-medium);
    letter-spacing: var(--wui-letter-spacing-medium);
  }

  .wui-font-title-600 {
    font-size: var(--wui-font-size-title);
    letter-spacing: var(--wui-letter-spacing-title);
  }

  .wui-font-title-6-600 {
    font-size: var(--wui-font-size-title-6);
    letter-spacing: var(--wui-letter-spacing-title-6);
  }

  .wui-font-mini-700 {
    font-size: var(--wui-font-size-mini);
    letter-spacing: var(--wui-letter-spacing-mini);
    text-transform: uppercase;
  }

  .wui-font-large-500,
  .wui-font-large-600,
  .wui-font-large-700 {
    font-size: var(--wui-font-size-large);
    letter-spacing: var(--wui-letter-spacing-large);
  }

  .wui-font-2xl-500,
  .wui-font-2xl-600,
  .wui-font-2xl-700 {
    font-size: var(--wui-font-size-2xl);
    letter-spacing: var(--wui-letter-spacing-2xl);
  }

  .wui-font-paragraph-400,
  .wui-font-paragraph-500,
  .wui-font-paragraph-600,
  .wui-font-paragraph-700 {
    font-size: var(--wui-font-size-paragraph);
    letter-spacing: var(--wui-letter-spacing-paragraph);
  }

  .wui-font-small-400,
  .wui-font-small-500,
  .wui-font-small-600 {
    font-size: var(--wui-font-size-small);
    letter-spacing: var(--wui-letter-spacing-small);
  }

  .wui-font-tiny-400,
  .wui-font-tiny-500,
  .wui-font-tiny-600 {
    font-size: var(--wui-font-size-tiny);
    letter-spacing: var(--wui-letter-spacing-tiny);
  }

  .wui-font-micro-700,
  .wui-font-micro-600 {
    font-size: var(--wui-font-size-micro);
    letter-spacing: var(--wui-letter-spacing-micro);
    text-transform: uppercase;
  }

  .wui-font-tiny-400,
  .wui-font-small-400,
  .wui-font-medium-400,
  .wui-font-paragraph-400 {
    font-weight: var(--wui-font-weight-light);
  }

  .wui-font-large-700,
  .wui-font-paragraph-700,
  .wui-font-micro-700,
  .wui-font-mini-700 {
    font-weight: var(--wui-font-weight-bold);
  }

  .wui-font-medium-600,
  .wui-font-medium-title-600,
  .wui-font-title-6-600,
  .wui-font-large-600,
  .wui-font-paragraph-600,
  .wui-font-small-600,
  .wui-font-tiny-600,
  .wui-font-micro-600 {
    font-weight: var(--wui-font-weight-medium);
  }

  :host([disabled]) {
    opacity: 0.4;
  }
`,H=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},U=class extends c{constructor(){super(...arguments),this.variant=`paragraph-500`,this.color=`fg-300`,this.align=`left`,this.lineClamp=void 0}render(){let e={[`wui-font-${this.variant}`]:!0,[`wui-color-${this.color}`]:!0,[`wui-line-clamp-${this.lineClamp}`]:!!this.lineClamp};return this.style.cssText=`
      --local-align: ${this.align};
      --local-color: var(--wui-color-${this.color});
    `,r`<slot class=${B(e)}></slot>`}};U.styles=[p,V],H([g()],U.prototype,`variant`,void 0),H([g()],U.prototype,`color`,void 0),H([g()],U.prototype,`align`,void 0),H([g()],U.prototype,`lineClamp`,void 0),U=H([d(`wui-text`)],U);var W=i`
  :host {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    background-color: var(--wui-color-gray-glass-020);
    border-radius: var(--local-border-radius);
    border: var(--local-border);
    box-sizing: content-box;
    width: var(--local-size);
    height: var(--local-size);
    min-height: var(--local-size);
    min-width: var(--local-size);
  }

  @supports (background: color-mix(in srgb, white 50%, black)) {
    :host {
      background-color: color-mix(in srgb, var(--local-bg-value) var(--local-bg-mix), transparent);
    }
  }
`,G=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},K=class extends c{constructor(){super(...arguments),this.size=`md`,this.backgroundColor=`accent-100`,this.iconColor=`accent-100`,this.background=`transparent`,this.border=!1,this.borderColor=`wui-color-bg-125`,this.icon=`copy`}render(){let e=this.iconSize||this.size,t=this.size===`lg`,n=this.size===`xl`,i=t?`12%`:`16%`,a=t?`xxs`:n?`s`:`3xl`,o=this.background===`gray`,s=this.background===`opaque`,c=this.backgroundColor===`accent-100`&&s||this.backgroundColor===`success-100`&&s||this.backgroundColor===`error-100`&&s||this.backgroundColor===`inverse-100`&&s,l=`var(--wui-color-${this.backgroundColor})`;return c?l=`var(--wui-icon-box-bg-${this.backgroundColor})`:o&&(l=`var(--wui-color-gray-${this.backgroundColor})`),this.style.cssText=`
       --local-bg-value: ${l};
       --local-bg-mix: ${c||o?`100%`:i};
       --local-border-radius: var(--wui-border-radius-${a});
       --local-size: var(--wui-icon-box-size-${this.size});
       --local-border: ${this.borderColor===`wui-color-bg-125`?`2px`:`1px`} solid ${this.border?`var(--${this.borderColor})`:`transparent`}
   `,r` <wui-icon color=${this.iconColor} size=${e} name=${this.icon}></wui-icon> `}};K.styles=[p,l,W],G([g()],K.prototype,`size`,void 0),G([g()],K.prototype,`backgroundColor`,void 0),G([g()],K.prototype,`iconColor`,void 0),G([g()],K.prototype,`iconSize`,void 0),G([g()],K.prototype,`background`,void 0),G([g({type:Boolean})],K.prototype,`border`,void 0),G([g()],K.prototype,`borderColor`,void 0),G([g()],K.prototype,`icon`,void 0),K=G([d(`wui-icon-box`)],K);var q=i`
  :host {
    display: block;
    width: var(--local-width);
    height: var(--local-height);
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
    border-radius: inherit;
  }
`,J=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Y=class extends c{constructor(){super(...arguments),this.src=`./path/to/image.jpg`,this.alt=`Image`,this.size=void 0}render(){return this.style.cssText=`
      --local-width: ${this.size?`var(--wui-icon-size-${this.size});`:`100%`};
      --local-height: ${this.size?`var(--wui-icon-size-${this.size});`:`100%`};
      `,r`<img src=${this.src} alt=${this.alt} @error=${this.handleImageError} />`}handleImageError(){this.dispatchEvent(new CustomEvent(`onLoadError`,{bubbles:!0,composed:!0}))}};Y.styles=[p,u,q],J([g()],Y.prototype,`src`,void 0),J([g()],Y.prototype,`alt`,void 0),J([g()],Y.prototype,`size`,void 0),Y=J([d(`wui-image`)],Y);var oe=i`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    height: var(--wui-spacing-m);
    padding: 0 var(--wui-spacing-3xs) !important;
    border-radius: var(--wui-border-radius-5xs);
    transition:
      border-radius var(--wui-duration-lg) var(--wui-ease-out-power-1),
      background-color var(--wui-duration-lg) var(--wui-ease-out-power-1);
    will-change: border-radius, background-color;
  }

  :host > wui-text {
    transform: translateY(5%);
  }

  :host([data-variant='main']) {
    background-color: var(--wui-color-accent-glass-015);
    color: var(--wui-color-accent-100);
  }

  :host([data-variant='shade']) {
    background-color: var(--wui-color-gray-glass-010);
    color: var(--wui-color-fg-200);
  }

  :host([data-variant='success']) {
    background-color: var(--wui-icon-box-bg-success-100);
    color: var(--wui-color-success-100);
  }

  :host([data-variant='error']) {
    background-color: var(--wui-icon-box-bg-error-100);
    color: var(--wui-color-error-100);
  }

  :host([data-size='lg']) {
    padding: 11px 5px !important;
  }

  :host([data-size='lg']) > wui-text {
    transform: translateY(2%);
  }
`,X=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Z=class extends c{constructor(){super(...arguments),this.variant=`main`,this.size=`lg`}render(){this.dataset.variant=this.variant,this.dataset.size=this.size;let e=this.size===`md`?`mini-700`:`micro-700`;return r`
      <wui-text data-variant=${this.variant} variant=${e} color="inherit">
        <slot></slot>
      </wui-text>
    `}};Z.styles=[p,oe],X([g()],Z.prototype,`variant`,void 0),X([g()],Z.prototype,`size`,void 0),Z=X([d(`wui-tag`)],Z);var se=i`
  :host {
    display: flex;
  }

  :host([data-size='sm']) > svg {
    width: 12px;
    height: 12px;
  }

  :host([data-size='md']) > svg {
    width: 16px;
    height: 16px;
  }

  :host([data-size='lg']) > svg {
    width: 24px;
    height: 24px;
  }

  :host([data-size='xl']) > svg {
    width: 32px;
    height: 32px;
  }

  svg {
    animation: rotate 2s linear infinite;
  }

  circle {
    fill: none;
    stroke: var(--local-color);
    stroke-width: 4px;
    stroke-dasharray: 1, 124;
    stroke-dashoffset: 0;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  :host([data-size='md']) > svg > circle {
    stroke-width: 6px;
  }

  :host([data-size='sm']) > svg > circle {
    stroke-width: 8px;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 124;
      stroke-dashoffset: 0;
    }

    50% {
      stroke-dasharray: 90, 124;
      stroke-dashoffset: -35;
    }

    100% {
      stroke-dashoffset: -125;
    }
  }
`,Q=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},$=class extends c{constructor(){super(...arguments),this.color=`accent-100`,this.size=`lg`}render(){return this.style.cssText=`--local-color: ${this.color===`inherit`?`inherit`:`var(--wui-color-${this.color})`}`,this.dataset.size=this.size,r`<svg viewBox="25 25 50 50">
      <circle r="20" cy="50" cx="50"></circle>
    </svg>`}};$.styles=[p,se],Q([g()],$.prototype,`color`,void 0),Q([g()],$.prototype,`size`,void 0),$=Q([d(`wui-loading-spinner`)],$);export{_ as a,b as i,A as n,g as o,S as r,B as t};
//# sourceMappingURL=wui-text-XrZ9hPIp.js.map