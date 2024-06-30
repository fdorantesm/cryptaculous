"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.BaseSymmetricEncryption=void 0;const crypto=require("crypto");class BaseSymmetricEncryption{constructor(t){this.config=t,this.validateConfig(t)}encrypt(t){const e=crypto.createCipheriv(this.config.algorithm,Buffer.from(this.config.key,"utf8"),Buffer.from(this.config.iv,"utf8"));let r=e.update(t,"utf8","base64");return r+=e.final("base64"),r}decrypt(t){const e=crypto.createDecipheriv(this.config.algorithm,Buffer.from(this.config.key,"utf8"),Buffer.from(this.config.iv,"utf8"));return e.update(t,"base64","utf8")+e.final("utf8")}}exports.BaseSymmetricEncryption=BaseSymmetricEncryption;