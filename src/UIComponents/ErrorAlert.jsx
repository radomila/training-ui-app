import React from "react";
import {useError} from "../hooks/useError";
import {ContainerWrapper} from "./ContainerWrapper";

export function ErrorAlert() {
    const { error } = useError()
    return (
        <ContainerWrapper>
            {error}
        </ContainerWrapper>
    )
}