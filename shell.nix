{ pkgs ? import <nixpkgs> { } }:

pkgs.mkShell {
  buildInputs = [
    pkgs.nodejs-18_x
    pkgs.pnpm

    # keep this line if you use bash
    # pkgs.bashInteractive
  ];
}
