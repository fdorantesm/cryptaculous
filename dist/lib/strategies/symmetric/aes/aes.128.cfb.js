"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Aes128Cfb=void 0;const algorithm_enum_1=require("../../../enums/algorithm.enum"),aes_1=require("./aes");class Aes128Cfb extends aes_1.AesEncryption{constructor(e){super({algorithm:algorithm_enum_1.Algorithm.AES_128_CFB,key:e.key,iv:e.iv})}}exports.Aes128Cfb=Aes128Cfb;