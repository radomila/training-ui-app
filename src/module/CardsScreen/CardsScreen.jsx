import React from 'react';
import {useParams} from "react-router";
import {useCardDetailData} from "../../hooks/useCardDetailData";
import {CardDetail} from "./CardDetail";
import {Container} from "reactstrap";
import {Button} from "../../UIComponents/Button";
import {useTranslation} from "react-i18next";
import {Link} from "react-router-dom";
import {LoadingSpinner} from "../../UIComponents/LoadingSpinner";
import {ErrorAlert} from "../../UIComponents/ErrorAlert";

export function CardsScreen() {
    const { id} = useParams();
    const { rowDetail, isLoading, error} = useCardDetailData(id);
    const { t } = useTranslation();

    if (isLoading) {
        return <LoadingSpinner />
    }

    if (error !== "") {
        return <ErrorAlert error={error} />
    }

    return (
        <Container className="d-flex flex-column justify-content-center align-items-start gap-5">
            <Link to={`/`}>
                <Button>
                    <span>
                        <i className="bi bi-arrow-left"></i> {t("Button|Back to table")}
                    </span>
                </Button>
            </Link>
            <CardDetail rowDetail={rowDetail} />
        </Container>
    );
}
