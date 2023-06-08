import { useEffect, useState } from "react";

function useDebounce<T>(value: T, delay?: number): T {
    const [debouncedValue, setDebouncedValue] = useState<T>(value);

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedValue(value)
        }, delay || 500); // We made this so that when user is searching we will only start searching
                          // 500 milliseconds after user has stopped typing (by default)

        return () => {
            clearTimeout(timer);
        }
    }, [value, delay]);

    return debouncedValue;
};

export default useDebounce;