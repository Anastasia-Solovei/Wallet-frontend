import { format } from 'date-fns';

export const COLUMNS = [
  {
    Header: 'Date',
    accessor: 'date',
    Cell: ({ value }) => {
      // return format(new Date().getTime(value), 'dd.MM.yy');
      return value;
    },
  },
  {
    Header: 'Type',
    accessor: 'type',
    Cell: ({ value }) => {
      return value === 'incomes' ? '+' : '-';
    },
  },
  {
    Header: 'Category',
    accessor: 'category',
  },
  {
    Header: 'Comment',
    accessor: 'comment',
  },
  {
    Header: 'Amount',
    accessor: 'amount',
  },
  {
    Header: 'Balance',
    accessor: 'balance',
  },
];
