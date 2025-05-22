import React from "react";
import {ContainerWrapper} from "./ContainerWrapper";

export function ErrorAlert({ error }) {
    return (
        <ContainerWrapper>
            {error}
        </ContainerWrapper>
    )
}