import { FormEvent } from "react";

export function stopPropagate(callback: () => void) {
  return (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();
    callback();
  };
}
