import { Description, Name, Quantity, Stats, StatsItem, UserAvatar, Wrapper } from "./Profile.styled"



export const Profile = ({ avatar, location, stats, tag, username }) => {

  return <Wrapper class="profile">
  <Description class="description">
    <UserAvatar
      src={avatar}
      alt="User avatar"
        class="avatar"
        width="200"
    />
    <Name class="name">{username}</Name>
    <p class="tag">@{tag}</p>
    <p class="location">{location}</p>
  </Description>

  <Stats class="stats">
    <StatsItem>
      <span class="label">Followers</span>
        <Quantity class="quantity">{stats.followers}</Quantity>
    </StatsItem>
    <StatsItem>
      <span class="label">Views</span>
      <Quantity class="quantity">{stats.views}</Quantity>
    </StatsItem>
    <StatsItem>
      <span class="label">Likes</span>
      <Quantity class="quantity">{stats.likes}</Quantity>
    </StatsItem>
  </Stats>
</Wrapper>
}