let nixpkgs = import <nixpkgs>{};
in
with nixpkgs;
with lib;
mkShell {
  name = "looker-components";
  buildInputs =[nodejs-14_x yarn];
}
