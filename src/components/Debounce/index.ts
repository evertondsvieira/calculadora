import { useCallback, useRef } from "react";

const useDebounce = (delay = 300) => {
    const deboucing = useRef<NodeJS.Timeout>();

    const debounce = useCallback((func: () => void) => {
        if(deboucing.current){
            clearTimeout(deboucing.current);
        }
        deboucing.current = setTimeout(() => func(), delay)
    }, [delay])
    return { debounce }
}

export default useDebounce;