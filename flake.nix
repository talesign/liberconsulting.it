{
  description = "Simple development environment with node";

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs?ref=nixos-unstable";
  };

  outputs = { self, nixpkgs }: 
    let 
      system = "x86_64-linux";
      pkgs = nixpkgs.legacyPackages.${system};
    in
    {
      devShells.${system}.default = pkgs.mkShell {
        packages = with pkgs; [
          nodejs_24
          pnpm
          zsh
          typescript-language-server
          nodePackages.prettier
        ];
        shellHook = ''
          echo "node_v24 + nix"
        '';
      };
    };
}



