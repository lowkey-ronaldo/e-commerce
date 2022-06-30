import { useCallback } from "react";

const useFirebase = () => {

    const readFirebase = useCallback(async (url, config = {}) => {
        try {
            const response = await fetch(url, config);
            const data = await response.json();
            return (data);
        } catch (e) {
            console.error("Errore nel accedere al database");
        }
    }, []);

    return {
        readFirebase
    }
};

export default useFirebase;
