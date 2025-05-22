import React from 'react';
import {Link} from "react-router-dom";
import {TableTitle} from "../../UIComponents/TableTitle";
import {icons} from "../../../public/media/icons";
import {DateTime} from "asab_webui_components";

export const columns = [
    {
        title: <TableTitle title="Username" icon={icons.username}/>,
        thStyle: {minWidth: "2rem"},
        render: ({ row }) => {
            return(
                <button className="border-0 bg-transparent" title={row.id}>
                    <Link to={`/detail/${row.id}`}>
                        {row.username}
                    </Link>
                </button>
            )
        }
    },
    {
        title: <TableTitle title="Email" icon={icons.email} />,
        thStyle: {minWidth: "2rem"},
        render: ({ row }) => <>{row.email}</>
    },
    {
        title: <TableTitle title="Created" icon={icons.created} />,
        thStyle: {minWidth: "4rem"},
        render: ({ row }) => <DateTime value={row.created}/>
    },
    {
        title: <TableTitle title="Last sign in" icon={icons.last_sign_in} />,
        thStyle: {minWidth: "4rem"},
        render: ({ row }) => <DateTime value={row.last_sign_in}/>
    },
    {
        title: <TableTitle title="Address" icon={icons.address} />,
        thStyle: {minWidth: "4rem"},
        render: ({ row }) => <>{row.address}</>
    },
];