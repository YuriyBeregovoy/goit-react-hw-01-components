import { FriendAvatar, Name, StatusFriend } from "./FriendListItem.styled"

export const FriendListItem = ({freind: {avatar, name, isOnline }}) => {
  return <>
    <StatusFriend class="status" isOnline ={isOnline} >{isOnline}</StatusFriend>
  <FriendAvatar class="avatar" src={avatar} alt="User avatar" width="48" />
    <Name class="name">{name}</Name>
  </>
}