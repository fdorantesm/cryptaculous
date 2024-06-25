export class UnsupportedAlgorithmException extends Error {
  constructor(algorithm) {
    super(`Unsupported algorithm: ${algorithm}`);
  }
}
