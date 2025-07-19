import { useEffect, useLayoutEffect, useRef, useState } from "react";

export function useSelectHook({ type, defaultText }) {
  const componentRef = useRef("null");
  let [isOpen, setIsOpen] = useState(false);
  const [selectedText, setSelectedText] = useState(defaultText);

  useLayoutEffect(() => {
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
    if(selectedText !== e.target.dataset.list){
      setSelectedText(e.target.dataset.list);
    }
    setIsOpen(!isOpen);
    if (type === "filter") {
      //여기서 useMemo로 저장된 type별로 데이터 정리해줘야하는거아님?
      return;
    } else {
      console.log(slect);
    }
  };

  return {
    toggle,
    isOpen,
    selectedText,
    listSelect,
    componentRef,
  };
}
