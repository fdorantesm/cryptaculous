"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Aes192Cbc=void 0;const algorithm_enum_1=require("../../../enums/algorithm.enum"),aes_1=require("./aes");class Aes192Cbc extends aes_1.AesEncryption{constructor(e){super({algorithm:algorithm_enum_1.Algorithm.AES_192_CBC,key:e.key,iv:e.iv})}}exports.Aes192Cbc=Aes192Cbc;