"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Aes256Ecb=void 0;const algorithm_enum_1=require("../../../enums/algorithm.enum"),aes_1=require("./aes");class Aes256Ecb extends aes_1.AesEncryption{constructor(e){super({algorithm:algorithm_enum_1.Algorithm.AES_256_ECB,key:e.key,iv:e.iv})}}exports.Aes256Ecb=Aes256Ecb;