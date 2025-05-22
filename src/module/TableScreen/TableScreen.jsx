import React, {useState} from 'react';
import {Container} from 'reactstrap';
import {DataTable2} from "asab_webui_components/dist/components/DataTable2/DataTable2";
import {useTableData} from "../../hooks/useTableData";
import {columns} from "./columns";
import {Header} from "../../UIComponents/Header";
import {TablePagination} from "../../UIComponents/TablePagination";
import {LoadingSpinner} from "../../UIComponents/LoadingSpinner";
import {ErrorAlert} from "../../UIComponents/ErrorAlert";

export function TableScreen() {
	const { count, rows, isLoading, error } = useTableData();

	const firstPage = 1;
	const [currentPage, setCurrentPage] = useState(firstPage);

	const rowsPerPage = 10;
	const finalIndex = currentPage * rowsPerPage;
	const startingIndex = finalIndex - rowsPerPage;
	const totalNumOfRows = count;

	const numOfRowsPerPage = rows.slice(startingIndex, finalIndex);

	if (isLoading) {
		return <LoadingSpinner />
	}

	if (error !== "") {
		return <ErrorAlert error={error} />
	}

	return (
		<Container className='h-100'>
			<Header/>
			<DataTable2 rows={numOfRowsPerPage} columns={columns} />
			<TablePagination firstPage={firstPage} rowsPerPage={rowsPerPage} currentPage={currentPage} setCurrentPage={setCurrentPage} totalNumOfRows={totalNumOfRows} />
		</Container>
	);
}
