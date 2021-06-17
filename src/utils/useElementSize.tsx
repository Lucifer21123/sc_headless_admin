import { RefObject, useCallback, useEffect, useState } from "react";

import useEventListener from "./useEventListener";

interface Size {
  currentWidth: number;
  currentHeight: number;
}

function useElementSize<T extends HTMLElement = HTMLDivElement>(
  elementRef: RefObject<T>
): Size {
  const [size, setSize] = useState<Size>({
    currentWidth: 0,
    currentHeight: 0,
  });

  // Prevent too many rendering using useCallback
  const updateSize = useCallback(() => {
    const node = elementRef?.current;
    if (node) {
      setSize({
        currentWidth: node.offsetWidth || 0,
        currentHeight: node.offsetHeight || 0,
      });
    }
  }, [elementRef]);

  // Initial size on mount
  useEffect(() => {
    updateSize();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEventListener("resize", updateSize);

  return size;
}

export default useElementSize;
