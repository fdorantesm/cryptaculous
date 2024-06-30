<h1 align="center">Cryptaculous</h1>

<div align="center">
<br>

<i>A crypt utility with zero dependencies to encrypt and decrypt data ​​by abstracting the native crypto module.</i>

<a href="https://github.com/fdorantesm/cryptaculous/stargazers"><img src="https://img.shields.io/github/stars/fdorantesm/cryptaculous" alt="Stars Badge"/></a>
<a href="https://github.com/fdorantesm/cryptaculous/network/members"><img src="https://img.shields.io/github/forks/fdorantesm/cryptaculous" alt="Forks Badge"/></a>
<a href="https://github.com/fdorantesm/cryptaculous/pulls"><img src="https://img.shields.io/github/issues-pr/fdorantesm/cryptaculous?color=cyan" alt="Pull Requests Badge"/></a>
<a href="https://github.com/fdorantesm/cryptaculous/issues"><img src="https://img.shields.io/github/issues/fdorantesm/cryptaculous?color=red" alt="Issues Badge"/></a>
<a href="https://github.com/fdorantesm/cryptaculous/graphs/contributors"><img alt="GitHub contributors" src="https://img.shields.io/github/contributors/fdorantesm/cryptaculous"></a>
<a href="https://github.com/fdorantesm/cryptaculous/blob/master/LICENSE"><img src="https://img.shields.io/github/license/fdorantesm/cryptaculous?color=2b9348" alt="License Badge"/></a>
</div>

### Supported Algorithms

| Algorithm | Secure |
|--------------------|--------|
| AES_128_CBC        | 🟢 Yes |
| AES_192_CBC        | 🟢 Yes |
| AES_256_CBC        | 🟢 Yes |
| AES_128_CFB        | 🟢 Yes |
| AES_192_CFB        | 🟢 Yes |
| AES_256_CFB        | 🟢 Yes |
| AES_128_CTR        | 🟢 Yes |
| AES_192_CTR        | 🟢 Yes |
| AES_256_CTR        | 🟢 Yes |
| AES_128_ECB        | 🔴 No  |
| AES_192_ECB        | 🔴 No  |
| AES_256_ECB        | 🔴 No  |
| AES_128_OFB        | 🟢 Yes |
| AES_192_OFB        | 🟢 Yes |
| AES_256_OFB        | 🟢 Yes |
| CHACHA20_POLY_1305 | 🟢 Yes |
| RSA                | 🟢 Yes |

### Examples

Try to use secure algorythms but the most important is how you protect the keys.

#### Usage

### Factory method

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

### Strategy pattern

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

Random encryption is a secure way to use different key and initial vector without defining them each time.

It allows you to generate encryption by passing only the value to be encrypted, and it will generate the key and the vector, returning them as a keychain for future use.

The decrypt method receives that keychain and returns the original value.

### RandomEncryption

Note: Only compatible with Symmetric algorythms

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

### RSA

```ts
import { Encryption, RsaEncryption } from 'cryptaculous';

const encryption = new Encryption();
const rsaStrategy = new RsaEncryption();

const { privateKey, publicKey } = RsaEncryption.generateKeyPairSync('rsa', {
    modulusLength: 2048,
    publicKeyEncoding: { type: 'spki', format: 'pem' },
    privateKeyEncoding: { type: 'pkcs8', format: 'pem' },
});

encryption.setStrategy(rsaStrategy);
rsaStrategy.setKeys({ privateKey, publicKey });

const secret = 'secret';
const crypted = encryption.encrypt(secret); 

/*
cryped:
G8r816lSY0MVBcxq4EY14SeaoU4oIAK9I2PP8bksLt3KpVzkr7Ncnt4g9517noffn9P1dHbdwxvw9EIMjD4JtuR2okL4TK0BjgMlAoN07SikHmucmcoVF9IdFAK7FcT6LiEveVktSN+Wfu/nOQLH3t032Tk2aaS9vOVGo8j6LFSf5zZcJpgs4/mLh7Z25SUden47CFc2X18I+BUx6ufKfGulq3CLO4oyXGQ+Pw0BNLH5ZRr564kaJcrKx4Dr/ZxxdMVEj8N6K39MonVGebTlNCHbkJdFh0z/bklJXRaGeMke6homSD3yKvb7O45LOlz+fKme2MvCWl+8LLt4SB/cUQ==
*/

const decrypted = encryption.decrypt(crypted);

const decryptedValue = RandomEncryption.decrypt(cryptedValue) // -> secret

// You could use compare method
rsa.compare("secret", crypted) // -> true
```

### Exceptions

| name                          |
|:------------------------------|
| UnsupportedAlgorithmException |
| MissingStrategyException      |
| InvalidKeyLengthException     |
| InvalidIVLengthException      |
| DecryptionFailedException     |
| EncryptionFailedException     |
| MissingPrivateKeyException    |
| MissingPublicKeyException     |

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
        <img src="https://img.shields.io/badge/Donate-PayPal-blue.svg?style=flat-square&logo=paypal" />
    </a>
</div>  