export class MissingPrivateKeyException extends Error {
  constructor() {
    super("Private key is missing");
  }
}
