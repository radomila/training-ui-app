import React from "react";
import {useTranslation} from "react-i18next";

export function TableTitle({title, icon}) {
    const { t } = useTranslation();

    return (
        <div className="d-flex gap-2">
            <i className={icon}></i>
            {t(`TableTitle|${title}`)}
        </div>
    );
}
