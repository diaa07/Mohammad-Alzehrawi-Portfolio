import { useEffect, useRef } from "react";

export default function PageTransition({ children }) {
  const ref = useRef();
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.classList.add("page-transition");
    const handle = (e) => {
      e.stopPropagation();
    };
    el.addEventListener("click", handle);
    return () => {
      el.removeEventListener("click", handle);
    };
  }, []);
  return <div ref={ref}>{children}</div>;
}
