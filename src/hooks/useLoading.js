import { useState } from 'react';

export function useLoading () {
    const [loading, setLoading] = useState(null);

    return {
        loading,
        setLoading
    };
}
