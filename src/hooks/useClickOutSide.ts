import { useEffect, useRef } from "react";

export function useClickOutSide(handler: () => void, listenCapturing = true) {

    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutSide(e: Event) {
            if (ref.current && !ref.current?.contains(e.target as Node)) handler();
        }

        document.addEventListener("click", handleClickOutSide, true);
        return () => document.removeEventListener("click", handleClickOutSide, listenCapturing);

    }, [handler, listenCapturing])

    return ref;
}