import { Profile } from "./Profile/Profile";
import userData from "./Profile/"


export const App = () => {
  return (
    <div>
      <Profile items={userData}/>
    </div>
  );
};
