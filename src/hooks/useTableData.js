import {useEffect, useState} from 'react';
import axios from "axios";
import {useError} from "./useError";
import {useLoading} from "./useLoading";
import {URL} from "../config";

export function useTableData() {
    const [rows, setRows] = useState([]);
    const [count, setCount] = useState(null);
    const { error, setError } = useError();
    const { loading, setLoading } = useLoading();

    useEffect(() => {
        getTableData()
    }, []);

    async function getTableData () {
        setLoading(true);
        try {
            const response = await axios.get(`${URL}/data`);
            setRows(response.data.data);
            setCount(response.data.count);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }

    return {
        count,
        rows,
        isLoading: loading,
        error,
    };
}