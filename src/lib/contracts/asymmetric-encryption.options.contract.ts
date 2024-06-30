import * as crypto from "crypto";

export type RSAKeyPairOptions =
  | crypto.RSAKeyPairOptions<"pem", "pem">
  | crypto.RSAKeyPairOptions<"pem", "der">
  | crypto.RSAKeyPairOptions<"der", "pem">
  | crypto.RSAKeyPairOptions<"der", "der">;

export type RSAPSSKeyPairOptions =
  | crypto.RSAPSSKeyPairOptions<"pem", "pem">
  | crypto.RSAPSSKeyPairOptions<"pem", "der">
  | crypto.RSAPSSKeyPairOptions<"der", "pem">
  | crypto.RSAPSSKeyPairOptions<"der", "der">;

export type DSAKeyPairOptions =
  | crypto.DSAKeyPairOptions<"pem", "pem">
  | crypto.DSAKeyPairOptions<"pem", "der">
  | crypto.DSAKeyPairOptions<"der", "pem">
  | crypto.DSAKeyPairOptions<"der", "der">;

export type ECKeyPairOptions =
  | crypto.ECKeyPairOptions<"pem", "pem">
  | crypto.ECKeyPairOptions<"pem", "der">
  | crypto.ECKeyPairOptions<"der", "pem">
  | crypto.ECKeyPairOptions<"der", "der">;

export type ED25519KeyPairOptions =
  | crypto.ED25519KeyPairOptions<"pem", "pem">
  | crypto.ED25519KeyPairOptions<"pem", "der">
  | crypto.ED25519KeyPairOptions<"der", "pem">
  | crypto.ED25519KeyPairOptions<"der", "der">;

export type ED448KeyPairOptions =
  | crypto.ED448KeyPairOptions<"pem", "pem">
  | crypto.ED448KeyPairOptions<"pem", "der">
  | crypto.ED448KeyPairOptions<"der", "pem">
  | crypto.ED448KeyPairOptions<"der", "der">;

export type X25519KeyPairOptions =
  | crypto.X25519KeyPairOptions<"pem", "pem">
  | crypto.X25519KeyPairOptions<"pem", "der">
  | crypto.X25519KeyPairOptions<"der", "pem">
  | crypto.X25519KeyPairOptions<"der", "der">;

export type X448KeyPairOptions =
  | crypto.X448KeyPairOptions<"pem", "pem">
  | crypto.X448KeyPairOptions<"pem", "der">
  | crypto.X448KeyPairOptions<"der", "pem">
  | crypto.X448KeyPairOptions<"der", "der">;

export type KeyPairOptions =
  | RSAKeyPairOptions
  | RSAPSSKeyPairOptions
  | DSAKeyPairOptions
  | ECKeyPairOptions
  | ED25519KeyPairOptions
  | ED448KeyPairOptions
  | X25519KeyPairOptions
  | X448KeyPairOptions;
