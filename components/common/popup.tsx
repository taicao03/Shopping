"use client";

import { useEffect } from "react";

export default function Popup({
  isOpen,
  onClose,
  witdh,
  height,
  top,
  position,
  children,
}: {
  top: string;
  height?: string;
  witdh?: string;
  isOpen?: boolean;
  onClose?: (e: React.MouseEvent<HTMLElement>) => void;
  position: string;
  children?: any;
}) {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-y-hidden");
    } else {
      document.body.classList.remove("overflow-y-hidden");
    }
  }, [isOpen]);
  return (
    <>
      {isOpen ? (
        <div
          className={`off-canvas-menu z-[99] bg-white border-l border-outline fixed ${position} ${
            top || "top-0"
          } ${witdh} ${height} ${isOpen ? position : ""}`}
        >
          <button onClick={onClose} className="close-button">
            Close
          </button>
          {children}
        </div>
      ) : (
        <> </>
      )}
    </>
  );
}
