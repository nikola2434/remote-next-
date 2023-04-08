import { FC, PropsWithChildren, useRef, useState, useEffect } from "react";
import { createPortal } from "react-dom";

const Portal: FC<PropsWithChildren> = ({ children }) => {
  const ref = useRef<Element | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    ref.current = document.getElementById("portal") as HTMLElement;
    setMounted(true);
  }, []);

  return mounted && ref.current
    ? createPortal(<>{children}</>, ref.current)
    : null;
};

export default Portal;
