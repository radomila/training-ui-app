import {useEffect, useState} from 'react';
import axios from "axios";
import {useError} from "./useError";
import {useLoading} from "./useLoading";
import {URL} from "../config";

export function useCardDetailData(id) {
    const [rowDetail, setRowDetail] = useState();
    const { loading, setLoading } = useLoading();
    const { error, setError } = useError();

    useEffect(() => {
        getCardDetailData();
    }, []);

    async function getCardDetailData (){
        setLoading(true);
        try {
            const response = await axios.get(`${URL}/detail/${id}`);
            setRowDetail(response.data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false)
        }
    }

    return {
        rowDetail,
        isLoading: loading,
        error,
    };
}