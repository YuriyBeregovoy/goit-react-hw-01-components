import { FriendList } from "./FriendList/FriendList";
import freindsData from "./FriendList/friends.json"
import { Profile } from "./Profile/Profile";
import user from "./Profile/user.json"
import { Statistics } from "./Statistics/Statistics";
import data from "./Statistics/data.json"

export const App = () => {
 
  return (
    <div>
     <Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList freinds={freindsData} />
    </div>
  );
};

