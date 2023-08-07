import { Item, Label, Percent } from "./Statistics-item.styled"

export const StatisticsItem = ({ item: {label, percentage} }) => {
  return <Item lebel={label}>
    <Label class="label">{label}</Label>
    <Percent class="percentage">{percentage}%</Percent>
  </Item>
}