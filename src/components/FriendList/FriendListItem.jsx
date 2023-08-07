import { FriendAvatar, Name, StatusFriend } from "./FriendListItem.styled"

export const FriendListItem = ({freind: {avatar, name, isOnline }}) => {
  return <>
    <StatusFriend className="status" isOnline ={isOnline} >{isOnline}</StatusFriend>
  <FriendAvatar className="avatar" src={avatar} alt="User avatar" width="48" />
    <Name className="name">{name}</Name>
  </>
}