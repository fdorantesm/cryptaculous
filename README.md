# Cryptaculous

## Description

A utility with zero dependencies to encrypt and decrypt values ​​by abstracting the native crypto package.

### Supported Algorithms

| Algorithm | Key Example | IV Example | Secure |
|-------------|----------------------------------|------------------|--------|
| AES_128_CBC | 1234567890123456                 | 1234567890123456 | 🟢 Yes |
| AES_128_CFB | 1234567890123456                 | 1234567890123456 | 🟢 Yes |
| AES_128_CTR | 1234567890123456                 | 1234567890123456 | 🟢 Yes |
| AES_128_ECB | 1234567890123456                 |                  | 🔴 No  |
| AES_128_OFB | 1234567890123456                 | 1234567890123456 | 🟢 Yes |
| AES_192_CBC | 123456789012345678901234         | 1234567890123456 | 🟢 Yes |
| AES_192_CFB | 123456789012345678901234         | 1234567890123456 | 🟢 Yes |
| AES_192_CTR | 123456789012345678901234         | 1234567890123456 | 🟢 Yes |
| AES_192_ECB | 123456789012345678901234         |                  | 🔴 No  |
| AES_192_OFB | 123456789012345678901234         | 1234567890123456 | 🟢 Yes |
| AES_256_CBC | 1c5b2bc5789a0f9b0c576950aaf049b6 | 704a59f3d523c765 | 🟢 Yes |
| AES_256_CFB | 12345678901234567890123456789012 | 1234567890123456 | 🟢 Yes |
| AES_256_CTR | 12345678901234567890123456789012 | 1234567890123456 | 🟢 Yes |
| AES_256_ECB | 12345678901234567890123456789012 |                  | 🔴 No  |
| AES_256_OFB | 12345678901234567890123456789012 | 1234567890123456 | 🟢 Yes |

### Examples

Consider use your own keys and use differents keys to prevent all data decrypted in a snap.

#### Usage

Using the factory method

```ts
import { EncryptionFactory, Algorithm } from 'cryptaculous';

const crypt = EncryptionFactory.createEncryption(Algorithm.AES_256_CBC, {
    key: "1c5b2bc5789a0f9b0c576950aaf049b6",
    iv: "704a59f3d523c765",
});

const cryptedSecret = crypt.encrypt("secret");        // -> EV2YEWJZcpLdBrkqdDij3Q==
const decryptedSecret = crypt.decrypt(cryptedSecret); // -> secret
```

Using a strategies to change the strategy in execution time

```ts
import { Encryption, Aes256Cbc } from 'cryptaculous';

const crypt = new Encryption();

if (config.encryptionAlgorith === Algorithm.AES_256_CBC) {
    crypt.setStrategy(new Aes256Cbc({
      key: "1c5b2bc5789a0f9b0c576950aaf049b6",
      iv: "704a59f3d523c765",
    }))
}

const secret = "secret";
const crypted = crypt.encrypt(secret);    // -> EV2YEWJZcpLdBrkqdDij3Q==
const decrypted = crypt.decrypt(crypted); // -> secret
```

Note: If no strategy set throws `MissingStrategyException`

Random encryption is a secure way to use different key pairs without defining them each time.

It allows you to generate encryption by passing only the value to be encrypted, and it will generate the key and the vector, returning them as a keychain for future use.

The decrypt method receives that keychain and returns the original value.

```ts
import { RandomEncryption, Algorithm } from 'cryptaculous';

const cryptedValue = RandomEncryption.encrypt(Algorithm.AES_256_CBC, "secret");

/*
  cryptedValue {
    payload: 'sSnpCXqFnB+Q1VIf4bL0Fw==',
    algorithm: 'aes-256-cbc',
    key: '3668f7a00c5b762c14f2792b0fa866e3',
    iv: '5f5806eca2eceae3'
  }
*/

const decryptedValue = RandomEncryption.decrypt(cryptedValue) // -> secret
```

#### Exceptions

| name |
|:-|
| UnsupportedAlgorithmException |
| MissingStrategyException |
| InvalidKeyLengthException |
| InvalidIVLengthException |

<br>
<br>
<br>

<div align="center">
    <a href="https://github.com/fdorantesm" target="_blank">
        <img src=https://img.shields.io/badge/github-%2324292e.svg?&style=for-the-badge&logo=github&logoColor=white alt=github style="margin-bottom: 5px;" />
    </a>
    <a href="https://twitter.com/fdorantesm" target="_blank">
        <img src=https://img.shields.io/badge/twitter-%2300acee.svg?&style=for-the-badge&logo=twitter&logoColor=white alt=twitter style="margin-bottom: 5px;" />
    </a>
    <a href="https://linkedin.com/in/fdorantesm" target="_blank">
        <img src=https://img.shields.io/badge/linkedin-%231E77B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white alt=linkedin style="margin-bottom: 5px;" />
    </a>
    <a href="https://www.youtube.com/user/FernandoDorantes" target="_blank">
        <img src=https://img.shields.io/badge/youtube-%23EE4831.svg?&style=for-the-badge&logo=youtube&logoColor=white alt=youtube style="margin-bottom: 5px;" />
    </a>
</div>

<br/>

<div align="center">
    <a href="https://paypal.me/fdorantesm" target="_blank" style="display: inline-block;">
        <img src="https://img.shields.io/badge/Donate-PayPal-blue.svg?style=flat-square&logo=paypal" align="center" />
    </a>
</div>  