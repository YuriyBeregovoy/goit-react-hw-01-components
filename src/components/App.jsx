import { Profile } from "./Profile/Profile";
import userData from "./Profile/user.json"


export const App = () => {
 
  return (
    <div>
      <Profile items={userData}/>
    </div>
  );
};

