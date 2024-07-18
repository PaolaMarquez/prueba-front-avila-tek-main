import React from "react";

interface Props {
  mobileMenuOpen: boolean;
}

export default function Logo({ mobileMenuOpen }: Props) {
  return (
    <>
      {mobileMenuOpen ? (
        <img
          alt="Logo"
          src="https://asset.brandfetch.io/idj1Tev1H9/idWaFb06Ph.png"
          className="h-8 w-auto"
        />
      ) : (
        <img
          alt="Logo"
          src="https://asset.brandfetch.io/idj1Tev1H9/idbgphuG_C.png"
          className="h-8 w-auto"
        />
      )}
    </>
  );
}
