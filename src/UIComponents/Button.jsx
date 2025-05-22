import React from "react";
import {Button as ReactStrapButton} from "reactstrap";

export function Button({ children }) {
    return(
        <ReactStrapButton color="primary">
            {children}
        </ReactStrapButton>
    )
}