import { FriendList } from "./FriendList/FriendList";
import freinds from "./FriendList/friends.json"
import { GlobalStyle } from "./GlobalStyle";
import { Layout } from "./Layout";
import { Profile } from "./Profile/Profile";
import user from "./Profile/user.json"
import { Statistics } from "./Statistics/Statistics";
import data from "./Statistics/data.json"
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";
import transactions from "./TransactionHistory/transactions.json"


export const App = () => {
 
  return (
    <Layout >
     <Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList freinds={freinds} />
      <TransactionHistory items={transactions} />
      <GlobalStyle/>
    </Layout>
  );
};

