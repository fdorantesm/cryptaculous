import type { Algorithm } from "../enums/algorithm.enum";
export type KeyChain = {
    algorithm: Algorithm;
    key: string;
    iv: string;
    payload: string;
};
