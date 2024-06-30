"use strict";var __awaiter=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))((function(i,c){function a(e){try{y(n.next(e))}catch(e){c(e)}}function o(e){try{y(n.throw(e))}catch(e){c(e)}}function y(e){var t;e.done?i(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(a,o)}y((n=n.apply(e,t||[])).next())}))};Object.defineProperty(exports,"__esModule",{value:!0}),exports.RsaEncryption=void 0;const crypto=require("crypto"),asymmetric_encryption_1=require("./asymmetric-encryption");class RsaEncryption extends asymmetric_encryption_1.AsymmetricEncryption{static generateKeyPair(e,t){return __awaiter(this,void 0,void 0,(function*(){return new Promise(((r,n)=>{crypto.generateKeyPair(e,t,((e,t,i)=>{if(e)return n(e);r({publicKey:t,privateKey:i})}))}))}))}static generateKeyPairSync(e,t){return crypto.generateKeyPairSync(e,t)}}exports.RsaEncryption=RsaEncryption;