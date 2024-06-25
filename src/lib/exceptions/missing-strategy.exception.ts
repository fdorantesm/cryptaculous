export class MissingStrategyException extends Error {
  constructor() {
    super("Missing encryption strategy");
  }
}
