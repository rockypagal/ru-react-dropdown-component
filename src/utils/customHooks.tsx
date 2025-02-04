import { Dispatch, SetStateAction, useEffect, useState } from "react";

export const useAnimationClass = (
  time: number = 230
): [string, Dispatch<SetStateAction<string>>] => {
  const [className, setClassName] = useState<string>("");

  useEffect(() => {
    if (className) {
      const id = setTimeout(() => {
        setClassName("");
      }, time);
      return () => clearTimeout(id);
    }
  }, [className]);

  return [className, setClassName];
};
