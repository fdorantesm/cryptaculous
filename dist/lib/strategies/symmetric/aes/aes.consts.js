"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.AES_ALGORITHM_MAP=void 0;const algorithm_enum_1=require("../../../enums/algorithm.enum");exports.AES_ALGORITHM_MAP={[algorithm_enum_1.Algorithm.AES_128_CBC]:{keyLength:16,ivLength:16},[algorithm_enum_1.Algorithm.AES_192_CBC]:{keyLength:24,ivLength:16},[algorithm_enum_1.Algorithm.AES_256_CBC]:{keyLength:32,ivLength:16},[algorithm_enum_1.Algorithm.AES_128_ECB]:{keyLength:16,ivLength:0},[algorithm_enum_1.Algorithm.AES_192_ECB]:{keyLength:24,ivLength:0},[algorithm_enum_1.Algorithm.AES_256_ECB]:{keyLength:32,ivLength:0},[algorithm_enum_1.Algorithm.AES_128_CFB]:{keyLength:16,ivLength:16},[algorithm_enum_1.Algorithm.AES_192_CFB]:{keyLength:24,ivLength:16},[algorithm_enum_1.Algorithm.AES_256_CFB]:{keyLength:32,ivLength:16},[algorithm_enum_1.Algorithm.AES_128_OFB]:{keyLength:16,ivLength:16},[algorithm_enum_1.Algorithm.AES_192_OFB]:{keyLength:24,ivLength:16},[algorithm_enum_1.Algorithm.AES_256_OFB]:{keyLength:32,ivLength:16},[algorithm_enum_1.Algorithm.AES_128_CTR]:{keyLength:16,ivLength:16},[algorithm_enum_1.Algorithm.AES_192_CTR]:{keyLength:24,ivLength:16},[algorithm_enum_1.Algorithm.AES_256_CTR]:{keyLength:32,ivLength:16},[algorithm_enum_1.Algorithm.CHACHA20_POLY_1305]:{keyLength:32,ivLength:12}};