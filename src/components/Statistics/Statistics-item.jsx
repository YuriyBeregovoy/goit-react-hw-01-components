import { Item } from "./Statistics-item.styled"

export const StatisticsItem = ({ item: {label, percentage} }) => {
  return <Item>
    <span class="label">{label}</span>
    <span class="percentage">{percentage}%</span>
  </Item>
}