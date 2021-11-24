import React, { useMemo, useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { useDispatch, useSelector } from 'react-redux';
import { useTable, useSortBy, usePagination } from 'react-table';
import { COLUMNS } from './columns';
import ButtonAddTransactions from '../../components/ButtonAddTransactions';
import ModalAddTransaction from '../../components/ModalAddTransaction';
import styles from './HomeTable.module.css';
import { getTransactions } from '../../redux/transactions/transactionsSelectors';
import { fetchTransactions } from '../../redux/transactions/transactionsOperations';

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
  const [Loaded, setLoaded] = useState();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTransactions());
  }, [dispatch]);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const transactions = useSelector(getTransactions);

  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => transactions, [transactions]);
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
    <CSSTransition
      in={Loaded}
      timeout={500}
      classNames={{
        enterActive: `${styles.tableShow}`,
      }}
      mountOnEnter
    >
    <div className={styles.helpWrap}>
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
        {pageCount > 1 && (
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
        )}
        <ButtonAddTransactions />
        <ModalAddTransaction />
      </div>
    </div>
    </CSSTransition>
  );
};

export default HomeTab;
