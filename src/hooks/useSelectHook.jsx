import { useState } from "react";

export function useSelectHook({ type, defaultText }) {
  let [isOpen, setIsOpen] = useState(false);
  const [selectedText, setSelectedText] = useState(defaultText);
  const toggle = () => {
    setIsOpen(!isOpen);
    console.log(defaultText);
  };

  const listSelect = (e) => {
    setSelectedText(e.target.dataset.list);
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
  };
}
