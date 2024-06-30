import type { RSAKeyPairOptions } from "../../contracts/asymmetric-encryption.options.contract";
import { DecryptionFailedException } from "../../exceptions/decryption-error.exception";
import { MissingPrivateKeyException } from "../../exceptions/missing-private-key.exception";
import { MissingPublicKeyException } from "../../exceptions/missing-public-key.exception";
import { RsaEncryption } from "./rsa";

describe("RSA Encryption", () => {
  const rsa = new RsaEncryption();
  const options: RSAKeyPairOptions = {
    modulusLength: 2048,
    publicKeyEncoding: {
      type: "spki",
      format: "pem",
    },
    privateKeyEncoding: {
      type: "pkcs8",
      format: "pem",
    },
  };

  const keyPair = RsaEncryption.generateKeyPairSync("rsa", options);
  const anotherKeyPair = RsaEncryption.generateKeyPairSync("rsa", options);
  const promisedKeyPair = RsaEncryption.generateKeyPair("rsa", options);

  it("should return a promise with the key pair", (done: () => void) => {
    expect(promisedKeyPair).toBeInstanceOf(Promise);

    promisedKeyPair
      .then((keys) => {
        expect(keys).toHaveProperty("publicKey");
        expect(keys).toHaveProperty("privateKey");
      })
      .finally(done);
  });

  it("should return a key pair synchronously", () => {
    expect(keyPair).toHaveProperty("publicKey");
    expect(keyPair).toHaveProperty("privateKey");
  });

  it("should return different keys", () => {
    expect(keyPair.publicKey).not.toEqual(anotherKeyPair.publicKey);
    expect(keyPair.privateKey).not.toEqual(anotherKeyPair.privateKey);
  });

  it("should set a private key", () => {
    const rsa = new RsaEncryption();
    const { privateKey, publicKey } = keyPair;
    rsa.setPrivateKey(privateKey);
    rsa.setPublicKey(publicKey);

    expect(rsa).toHaveProperty("privateKey");
    expect(rsa).toHaveProperty("publicKey");
  });

  it("should throw an error if no public key is set", () => {
    expect(() => rsa.encrypt("")).toThrow(new MissingPublicKeyException());
  });

  it("should throw an error if no private key is set", () => {
    expect(() => rsa.decrypt("")).toThrow(new MissingPrivateKeyException());
  });

  it("should encrypt and decrypt a message", () => {
    const rsa = new RsaEncryption();
    const { privateKey, publicKey } = keyPair;
    rsa.setPrivateKey(privateKey);
    rsa.setPublicKey(publicKey);

    const secret = "secret";
    const encrypted = rsa.encrypt(secret);
    const decrypted = rsa.decrypt(encrypted);

    expect(encrypted).not.toBe(secret);
    expect(decrypted).toBe(secret);
  });

  it("should throw an exception if using wrong keys", () => {
    const rsa1 = new RsaEncryption();

    // Set the wrong keys
    rsa1.setPrivateKey(keyPair.publicKey);
    rsa1.setPublicKey(keyPair.publicKey);

    const rsa2 = new RsaEncryption();
    rsa2.setPrivateKey(anotherKeyPair.privateKey);
    rsa2.setPublicKey(anotherKeyPair.publicKey);

    const secret = "secret";

    const encrypted1 = rsa1.encrypt(secret);
    const encrypted2 = rsa2.encrypt(secret);

    expect(() => rsa2.decrypt(encrypted1)).toThrow(DecryptionFailedException);
    expect(() => rsa1.decrypt(encrypted1)).toThrow(DecryptionFailedException);
    expect(rsa2.decrypt(encrypted2)).toBe(secret);
  });

  it("should return true if compare is correct", () => {
    const { privateKey, publicKey } = keyPair;
    rsa.setPrivateKey(privateKey);
    rsa.setPublicKey(publicKey);

    const crypted = rsa.encrypt("secret");

    expect(rsa.compare("secret", crypted)).toBeTruthy();
  });
});
