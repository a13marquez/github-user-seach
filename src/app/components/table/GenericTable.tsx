import React, { useState } from 'react';
import {  Table } from 'antd';
import { ColumnsType } from 'antd/lib/table';

 
interface IProps<T> {
  data: Record<string, unknown>[];
  columns: ColumnsType<Record<string, unknown>>;
  loading?: boolean;
  pageSize?: number;
}

export const GenericTable = <T extends unknown>(
  { data = [], columns = [], loading = false, pageSize = 9, }: IProps<T>
) => {
  const [page, setPage] = useState(1)
  const [pgSize, setPgSize] = useState(pageSize);

  const handlePageChange = (page: number) => {
    setPage(page)
  }
  
  function showTotal(total: number) {
    return `Total ${total} items`;
  }

  const initialPageSize = pageSize
  const pageSizeOptions = [
    initialPageSize.toString(),
    (initialPageSize * 2).toString(),
    (initialPageSize * 3).toString(),
  ];

  const onShowSizeChange = (current: number, pageSize: number) => {
    setPgSize(pageSize)
  }
  return (
    <Table
      style={{ height: "100vh", width: "100vw", marginTop: "64px" }}
      locale={{ emptyText: "No Data" }}
      size="large"
      bordered
      columns={columns}
      loading={loading}
      dataSource={data}
      pagination={{
        onChange: handlePageChange,
        defaultCurrent: 1,
        current: page,
        pageSize: pgSize,
        defaultPageSize: pageSize,
        pageSizeOptions: pageSizeOptions,
        total: data.length,
        size: "default",
        showTotal,
        showSizeChanger: true,
        showQuickJumper: true,
        onShowSizeChange: onShowSizeChange,
      }}
    />
  );
}
