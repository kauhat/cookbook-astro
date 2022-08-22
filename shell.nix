{ pkgs ? import <nixpkgs> { } }:

pkgs.mkShell {
  buildInputs = [
    pkgs.nodejs-18_x
    pkgs.yarn

    # keep this line if you use bash
    # pkgs.bashInteractive
  ];
}
