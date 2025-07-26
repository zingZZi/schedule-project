import { useEffect, useRef, useState } from "react";

export function useSelectHook({ type, defaultText, onChange }) {
  const componentRef = useRef("null");
  let [isOpen, setIsOpen] = useState(false);
  const [selectedText, setSelectedText] = useState(defaultText);

  useEffect(() => {
    function outStideClick(e) {
      if (componentRef.current && !componentRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", outStideClick);
    return () => {
      document.removeEventListener("mousedown", outStideClick);
    };
  }, []);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const listSelect = (e) => {
    if (selectedText !== e.target.dataset.list) {
      setSelectedText(e.target.dataset.list);
      onChange?.(e.target.dataset.list);
    }
    setIsOpen(!isOpen);
  };

  useEffect(() => {});

  return {
    toggle,
    isOpen,
    selectedText,
    listSelect,
    componentRef,
  };
}
