"use client";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";

const ScrollToTop: React.FC = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const lastPath = useRef<string>("");

  useEffect(() => {
    const hash = window.location.hash;

    const scrollTo = (targetHash?: string) => {
      if (targetHash) {
        try {
          const el = document.querySelector(targetHash);
          if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
            return;
          }
        } catch {
          /* ignore invalid hash */
        }
      }
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const currentPath = pathname + searchParams.toString() + hash;
    if (currentPath !== lastPath.current) {
      scrollTo(hash);
      lastPath.current = currentPath;
    }

    const handleClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href || href.startsWith("http")) return;

      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

      const current = window.location.pathname + window.location.hash;
      const clicked = href.startsWith("/") ? href : "/" + href;

      if (clicked === current || clicked === window.location.pathname) {
        e.preventDefault();
        scrollTo();
      }
    };

    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, [pathname, searchParams]);

  return null;
};

export default ScrollToTop;
