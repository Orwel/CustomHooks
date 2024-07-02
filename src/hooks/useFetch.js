import { useState, useEffect } from 'react';

export const useFetch = (url) => {
    const [state, setState] = useState({
        data: null,
        isLoading: true,
        errors: null
    });

    const fetchData = async () => {
        if (!url) return;
        try {
            const response = await fetch(url);
            const data = await response.json();
            setState({
                data,
                isLoading: false,
                errors: null
            });
        } catch (error) {
            setState({
                data: null,
                isLoading: false,
                errors: error
            });
        }
    };

    useEffect(() => {
        fetchData(); // Corregido para llamar a fetchData en lugar de getFetch
    }, [url]);

    return state;
};