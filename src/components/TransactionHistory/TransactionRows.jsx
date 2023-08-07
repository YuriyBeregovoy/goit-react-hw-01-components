import { ColumnTd } from "./TransactionRows.styled"

export const TransactionRows = ({item:{type, amount, currency}}) => {
  return <>
    <ColumnTd>{type}</ColumnTd>
    <ColumnTd>{amount}</ColumnTd>
    <ColumnTd>{currency}</ColumnTd>
  </>
}