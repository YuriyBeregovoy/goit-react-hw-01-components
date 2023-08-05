import { StatisticsItem } from "./Statistics-item"

export const Statistics = ({ title, stats }) => {
 
  return <section class="statistics">
  {title && <h2 class="title">{title}</h2>}

    <ul class="stat-list">
      
      {stats.map( item => (
        <li class="item" key={item.id}>
          <StatisticsItem item={item} />
        </li>))}
  </ul>
</section>
}


