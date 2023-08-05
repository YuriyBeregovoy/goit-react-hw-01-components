import { TransactionRows } from "./TransactionRows"

export const TransactionHistory = ({ items }) => {
  return   <table class="transaction-history">
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
      {items.map(item => (
        <tr key={item.id}>
          <TransactionRows item={item} />
    </tr>))}
     </tbody>
</table>
}