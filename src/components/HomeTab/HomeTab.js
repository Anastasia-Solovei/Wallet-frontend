import React, { useMemo } from 'react';
import { useTable, useSortBy } from 'react-table';
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
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable(
      {
        columns,
        data,
      },
      useSortBy,
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
          {rows.map((row, i) => {
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
    </div>
  );
};

export default HomeTab;
