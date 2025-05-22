import React from "react";
import { Container } from "reactstrap";

export function ContainerWrapper({ children }) {
    return(
        <Container className="h-100 d-flex justify-content-center align-items-center">
            {children}
        </Container>
    )
}