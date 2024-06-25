import { MissingStrategyException } from "./exceptions/missing-strategy.exception";
import type { EncryptionStrategy } from "./interfaces/encryption.strategy";

export class Encryption {
  private strategy: EncryptionStrategy;

  constructor(strategy?: EncryptionStrategy) {
    this.strategy = strategy;
  }

  public setStrategy(strategy: EncryptionStrategy) {
    this.strategy = strategy;
  }

  public encrypt(data: string): string {
    if (!this.strategy) {
      throw new MissingStrategyException();
    }

    return this.strategy.encrypt(data);
  }

  public decrypt(data: string): string {
    if (!this.strategy) {
      throw new MissingStrategyException();
    }

    return this.strategy.decrypt(data);
  }
}
