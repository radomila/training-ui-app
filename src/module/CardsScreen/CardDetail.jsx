import React from 'react';
import {Card, CardBody, CardSubtitle, CardTitle, Container} from "reactstrap";
import {useTranslation} from "react-i18next";
import {getFormattedKeyName} from "../../utils/getFormattedKeyName";
import {icons} from "../../../public/media/icons";
import {DateTime} from "asab_webui_components";

export function CardDetail({ rowDetail }) {
    const { t } = useTranslation();

    const dateKeys = ["created", "last_sign_in"];

    return (
        <Container>
            {Object.entries(rowDetail).map(([key, value]) => (
                <Card key={key}>
                    <CardBody>
                        <CardTitle tag="h5" className="d-flex gap-2">
                            {icons[key] && <i className={icons[key]}></i>}
                            {t(`CardDetail|${getFormattedKeyName(key)}`)}
                        </CardTitle>
                        <CardSubtitle className="mt-2 text-muted" tag="h6">
                            {dateKeys.includes(key) ? <DateTime value={value} /> : value}
                        </CardSubtitle>
                    </CardBody>
                </Card>
            ))}
        </Container>
    );
}
