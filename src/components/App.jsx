import { Profile } from "./Profile/Profile";
import userData from "../components/Profile/"


export const App = () => {
  return (
    <div>
      <Profile items={userData}/>
    </div>
  );
};
