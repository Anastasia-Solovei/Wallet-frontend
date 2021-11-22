import React, { useMemo } from 'react';
import { useTable, useSortBy, usePagination } from 'react-table';
import { COLUMNS } from './columns';
import styles from './HomeTable.module.css';
import MOCK_DATA from './MOCK_DATA.json'; // temporarily for test

// function resolve class for td 'amount'

const resolveClass = cell => {
  if (cell.row.values.type === 'incomes' && cell.column.id === 'amount') {
    return 'tdIncomes';
  } else if (
    cell.row.values.type === 'expenses' &&
    cell.column.id === 'amount'
  ) {
    return 'tdExpenses';
  } else return;
};

const HomeTab = () => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, []);
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageSize: 8 },
    },
    useSortBy,
    usePagination,
  );

  return (
    <div className={styles.wrapTable}>
      <table className={styles.table} {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr
              className={styles.tHeadRow}
              {...headerGroup.getHeaderGroupProps()}
            >
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render('Header')}
                  {/* element for sort data in columns */}
                  <span>
                    {column.isSorted ? (column.isSortedDesc ? ' ' : ' ') : ''}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row);

            return (
              <tr className={styles.tr} {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return (
                    <td
                      className={styles[resolveClass(cell)]}
                      {...cell.getCellProps()}
                    >
                      {cell.render('Cell')}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className={styles.paginationWrap}>
        <button
          className={styles.paginationBtn}
          onClick={() => gotoPage(0)}
          disabled={!canPreviousPage}
        >
          {'<<'}
        </button>
        <button
          className={styles.paginationBtn}
          onClick={() => previousPage()}
          disabled={!canPreviousPage}
        >
          {'<'}
        </button>
        <button className={styles.paginationCurrentPage}>
          {pageIndex + 1}
        </button>
        <button
          className={styles.paginationBtn}
          onClick={() => nextPage()}
          disabled={!canNextPage}
        >
          {'>'}
        </button>
        <button
          className={styles.paginationBtn}
          onClick={() => gotoPage(pageCount - 1)}
          disabled={!canNextPage}
        >
          {'>>'}
        </button>
      </div>
    </div>
  );
};

export default HomeTab;
