export function getFromLS(key: string) {
    try {
        const serializedState = localStorage.getItem(key);
        // Return null if there's no data or if it's an empty object string
        if (serializedState === null || serializedState === '{}') {
            return null;
        }
        const parsedState = JSON.parse(serializedState);
        // Check if the parsed object is empty across all breakpoints
        const isEmpty = Object.values(parsedState).every((arr): arr is unknown[] => Array.isArray(arr) && arr.length === 0);
        return isEmpty ? null : parsedState;
    } catch (err) {
        console.error("Failed to load state from localStorage:", err);
        return null;
    }
}

export function saveToLS(key: string, value: unknown) {
    try {
        const serializedState = JSON.stringify(value);
        localStorage.setItem(key, serializedState);
    } catch (err) {
        console.error("Failed to save state to localStorage:", err);
    }
}