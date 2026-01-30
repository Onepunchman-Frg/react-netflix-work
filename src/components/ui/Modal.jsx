import { createPortal } from "react-dom";
import { useEffect } from "react";

export function Modal({ children, isOpen, onClose }) {
  if (!isOpen) return null;

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [onClose]);

    return createPortal(
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg relative w-3/4 max-w-2xl animate-fade-in">
                <button onClick={onClose} className="absolute top-4 right-4 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white text-2xl font-bold">&times;</button>
                <div className="overflow-auto max-h-[70vh] flex justify-center items-center">{children}</div>
            </div>  
        </div>,
        document.body
    );
}