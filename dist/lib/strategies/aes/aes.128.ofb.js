"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Aes128Ofb=void 0;const algorithm_enum_1=require("../../enums/algorithm.enum"),aes_1=require("./aes");class Aes128Ofb extends aes_1.AesEncryption{constructor(e){super({algorithm:algorithm_enum_1.Algorithm.AES_128_OFB,key:e.key,iv:e.iv})}}exports.Aes128Ofb=Aes128Ofb;