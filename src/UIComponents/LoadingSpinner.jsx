import React from "react";
import { Spinner } from "reactstrap";
import {ContainerWrapper} from "./ContainerWrapper";

export function LoadingSpinner() {
    return(
        <ContainerWrapper>
            <Spinner
                color="primary"
                style={{
                    height: '5rem',
                    width: '5rem'
                }}
            />
        </ContainerWrapper>
    )
}