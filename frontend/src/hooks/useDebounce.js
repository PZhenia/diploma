import { useEffect, useState } from "react";

export default function useDebounce(value, delay = 500) {
    const [debouncedValue, setDebauncedValue] = useState(value);

    useEffect(() => {
        const handlerId = setTimeout(() => {
            setDebauncedValue(value);
        }, delay);

        return () => {
            clearTimeout(handlerId);
        }
    }, [value, delay]);

    return debouncedValue;
}