import type { Algorithm } from "../enums/algorithm.enum";
import type { AlgorithmDetails } from "./algorithm-details.type";

export type AlgorithmMap = {
  [key in Algorithm]: AlgorithmDetails;
};
