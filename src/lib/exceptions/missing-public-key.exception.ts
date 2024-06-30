export class MissingPublicKeyException extends Error {
  constructor() {
    super("Public key is missing");
  }
}
