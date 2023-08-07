import { Item, Label, Percent } from "./Statistics-item.styled"

export const StatisticsItem = ({ item: {label, percentage} }) => {
  return <Item lebel={label}>
    <Label className="label">{label}</Label>
    <Percent className="percentage">{percentage}%</Percent>
  </Item>
}