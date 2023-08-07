import { StatisticsItem } from "./Statistics-item"
import { List, Stats, Title} from "./Statistics.styled"

export const Statistics = ({ title, stats }) => {
 
  return <Stats className="statistics">
  {title && <Title className="title">{title}</Title>}

    <List class="stat-list">
      
      {stats.map( item => (
        <List className="item" key={item.id}>
          <StatisticsItem item={item}  />
        </List>))}
    </List>
  </Stats>
}


