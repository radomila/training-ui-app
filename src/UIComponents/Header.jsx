import React from 'react';
import {useTranslation} from "react-i18next";
import {useTableData} from "../hooks/useTableData";

export function Header(){
    const { t } = useTranslation();
    const { count } = useTableData();

    return (
        <div className="flex-fill">
            <h3>
                {t("TableScreen|Users table")}
            </h3>
            <p>{t("TableScreen|Number of users")} {count}</p>
        </div>
    );
}