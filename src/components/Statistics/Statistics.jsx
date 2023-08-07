import { StatisticsItem } from "./Statistics-item"
import { List, Stats, Title} from "./Statistics.styled"

export const Statistics = ({ title, stats }) => {
 
  return <Stats class="statistics">
  {title && <Title class="title">{title}</Title>}

    <List class="stat-list">
      
      {stats.map( item => (
        <List class="item" key={item.id}>
          <StatisticsItem item={item}  />
        </List>))}
    </List>
  </Stats>
}


