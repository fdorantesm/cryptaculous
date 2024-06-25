import type { KeyChain } from './types/key-ring.type';
import { Algorithm } from './enums/algorithm.enum';
export declare class RandomEncryption {
    static encrypt(algorithm: Algorithm, value: string): KeyChain;
    static decrypt(keyChain: KeyChain): string;
}
