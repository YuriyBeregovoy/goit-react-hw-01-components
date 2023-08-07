import { Item, List } from "./FriendList.styled"
import { FriendListItem } from "./FriendListItem"

export const FriendList = ({freinds}) => {
  return <List className="friend-list">
    {freinds.map(freind => (
      <Item className="item" key={freind.id}>
        <FriendListItem freind={freind} />
      </Item>))}
</List>
}