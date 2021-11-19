import styles from './HomeTabMobile.module.css';

const transactions = [
  {
    id: '5464635512',
    date: '04.01.21',
    type: 'incomes',
    category: 'Food',
    comment: 'arcu adipiscing',
    amount: 5500,
    balance: 1500,
  },
  {
    id: '546465778',
    date: '05.01.21',
    type: 'incomes',
    category: 'Car',
    comment: 'arcu adipiscing',
    amount: 4500,
    balance: 2000,
  },
  {
    id: '5477851752',
    date: '05.01.21',
    type: 'incomes',
    category: 'Me',
    comment: 'arcu adipiscing',
    amount: 5500,
    balance: 2000,
  },
  {
    id: '782465512',
    date: '05.01.21',
    type: 'expenses',
    category: 'Children',
    comment: 'arcu adipiscin gfghgffdffdhgfhgj',
    amount: 2500,
    balance: 2000,
  },
  {
    id: '798546512',
    date: '05.01.21',
    type: 'expenses',
    category: 'House',
    comment: 'arcu adipiscing',
    amount: 1500,
    balance: 2000,
  },
  {
    id: '547746512',
    date: '05.01.21',
    type: 'expenses',
    category: 'Education',
    comment: 'arcu adipiscing',
    amount: 5500,
    balance: 2000,
  },
];

const HomeTabMobile = () => {
  return (
    <div className={styles.container}>
      {transactions.map(item => {
        return (
          <div
            className={
              styles[
                item.type === 'incomes'
                  ? 'wrapperTabIncomes'
                  : 'wrapperTabExpenses'
              ]
            }
          >
            <table
              key={item.id}
              className={
                styles.mobileTab
                // styles[
                //   item.type === 'incomes'
                //     ? 'mobileTabIncomes'
                //     : 'mobileTabExpenses'
                // ]
              }
            >
              <tbody>
                <tr>
                  <th scope="row">Date</th>
                  <td>{item.date}</td>
                </tr>
                <tr>
                  <th scope="row">Type</th>
                  <td>{item.type === 'incomes' ? '+' : '-'}</td>
                </tr>
                <tr>
                  <th scope="row">Category</th>
                  <td>{item.category}</td>
                </tr>
                <tr>
                  <th scope="row">Comment</th>
                  <td>{item.comment}</td>
                </tr>
                <tr>
                  <th scope="row">Amount</th>
                  <td
                    className={
                      styles[
                        item.type === 'incomes'
                          ? 'tdAmountIncomes'
                          : 'tdAmountExpenses'
                      ]
                    }
                  >
                    {item.amount}
                  </td>
                </tr>
                <tr>
                  <th scope="row">Balance</th>
                  <td>{item.balance}</td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      })}
    </div>
  );
};
export default HomeTabMobile;

// ) : null}

/* {transactions.length > 0 ? ( */
