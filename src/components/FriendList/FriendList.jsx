import { Item, List } from "./FriendList.styled"
import { FriendListItem } from "./FriendListItem"

export const FriendList = ({freinds}) => {
  return <List class="friend-list">
    {freinds.map(freind => (
      <Item class="item" key={freind.id}>
        <FriendListItem freind={freind} />
      </Item>))}
</List>
}