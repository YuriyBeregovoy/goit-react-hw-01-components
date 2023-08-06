import { Description, Stats, StatsItem, UserAvatar, Wrapper } from "./Profile.styled"



export const Profile = ({ avatar, location, stats, tag, username }) => {

  return <Wrapper class="profile">
  <Description class="description">
    <UserAvatar
      src={avatar}
      alt="User avatar"
        class="avatar"
        width="200"
    />
    <p class="name">{username}</p>
    <p class="tag">@{tag}</p>
    <p class="location">{location}</p>
  </Description>

  <Stats class="stats">
    <StatsItem>
      <span class="label">Followers</span>
        <span class="quantity">{stats.followers}</span>
    </StatsItem>
    <StatsItem>
      <span class="label">Views</span>
      <span class="quantity">{stats.views}</span>
    </StatsItem>
    <StatsItem>
      <span class="label">Likes</span>
      <span class="quantity">{stats.likes}</span>
    </StatsItem>
  </Stats>
</Wrapper>
}