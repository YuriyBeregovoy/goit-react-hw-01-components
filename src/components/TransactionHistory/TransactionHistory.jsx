import { ColumnTh, ColumnThead, ColumnTr, Wrapper } from "./TransactionHistory.styled"
import { TransactionRows } from "./TransactionRows"

export const TransactionHistory = ({ items }) => {
  return   <Wrapper className="transaction-history">
  <ColumnThead>
    <ColumnTr>
      <ColumnTh>Type</ColumnTh>
      <ColumnTh>Amount</ColumnTh>
      <ColumnTh>Currency</ColumnTh>
    </ColumnTr>
  </ColumnThead>

  <tbody>
      {items.map(item => (
        <ColumnTr key={item.id}>
          <TransactionRows item={item} />
    </ColumnTr>))}
     </tbody>
</Wrapper>
}