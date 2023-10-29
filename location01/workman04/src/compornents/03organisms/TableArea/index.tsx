import { Grid, TablePagination } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import { DataGrid } from "@mui/x-data-grid";
import { jaJP } from '@mui/x-data-grid';
import { FC, SetStateAction, useState } from "react";
import { ProductsList } from "../../../types/types";

type Props = {
  productsList: ProductsList[];
};

const TableArea: FC<Props> = ({ productsList }) => {
  const [page, setPage] = useState(1);
  const rowsPerPage = 10;

  const handleChange = (event: any, value: SetStateAction<number>) => {
    setPage(value);
  };

  const isPopularConvert = (val: boolean) => (val ? "人気あり" : "人気なし");

  const convertDate = (val: string) => {
    const jsonDate = new Date(val);
    return `${jsonDate.getFullYear()}年${
      jsonDate.getMonth() + 1
    }月${jsonDate.getDate()}日`;
  };

  const columns = [
    { field: "id", headerName: "id", width: 100 },
    {
      field: "name",
      headerName: "名前",
      width: 200,
      renderCell: (params: any) => (
        <span
          style={{ cursor: "pointer", textDecoration: "underline" }}
          onClick={() => alert(`製品IDは ${params.row.id} です`)}
        >
          {params.value}
        </span>
      ),
    },
    { field: "price", headerName: "値段", width: 200 },
    { field: "detail", headerName: "商品の特徴", width: 300 },
    {
      field: "isPopular",
      headerName: "人気の有無",
      width: 300,
      renderCell: (params: any) => isPopularConvert(params.value as boolean),
    },
    {
      field: "startDate",
      headerName: "発売開始日",
      width: 200,
      renderCell: (params: any) => convertDate(params.value as string),
    },
    {
      field: "endDate",
      headerName: "発売終了日",
      width: 200,
      renderCell: (params: any) => convertDate(params.value as string),
    },
    { field: "company", headerName: "販売会社", width: 200 },
  ];

  return (
    <>
      <DataGrid
        rows={productsList.slice((page - 1) * rowsPerPage, page * rowsPerPage)}
        columns={columns}
        hideFooter={true}
        localeText={jaJP.components.MuiDataGrid.defaultProps.localeText}
      />
      <Pagination
        count={Math.ceil(productsList.length / rowsPerPage)}
        page={page}
        onChange={handleChange}
      />
    </>
  );
};

export default TableArea;
