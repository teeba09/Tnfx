import { useState } from "react";

export const useMenu = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const toggle = () => setMenuOpen((e) => !e);

  return { menuOpen, setMenuOpen, toggle };
};
