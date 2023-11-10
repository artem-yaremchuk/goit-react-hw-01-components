import css from './TransactionHistory.module.css';
import Transaction from './Transaction';

const TransactionHistory = ({ items }) => {
  return (
    <table className={css.transactionHistory}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map((transaction, index) => (
          <Transaction key={index} item={transaction} />
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;