import { FriendListItem } from "./FriendListItem"

export const FriendList = ({freinds}) => {
  return <ul class="friend-list">
    {freinds.map(freind => (
      <li class="item" key={freind.id}>
        <FriendListItem freind={freind} />
      </li>))}
</ul>
}