import { useState, useEffect, createRef } from "react";

function useClickOutside() {
  const ref = createRef(null);
  const excludeRef = createRef(null);
  const [isClickOutside, setClickOutside] = useState(false);

  useEffect(() => {
    function handleClick(evt) {
      if (
        ref.current &&
        !ref.current.contains(evt.target) &&
        !excludeRef.current?.contains(evt.target)
      ) {
        setClickOutside(true);
      } else {
        setClickOutside(false);
      }
    }

    document.addEventListener("click", handleClick, true);
    return () => {
      document.removeEventListener("click", handleClick, true);
    };
  }, [ref, excludeRef]);
  return { isClickOutside, ref, excludeRef };
}

export default useClickOutside;
