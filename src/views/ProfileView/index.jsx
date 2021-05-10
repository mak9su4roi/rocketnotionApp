import Panel from "../../modules/Dashboard/components/Panel";
import History from "../../modules/Dashboard/components/History";
import Profile from "../../modules/Dashboard/components/Profile";

const ProfileView = () => (
  <Panel>
    <Profile />
    <History />
  </Panel>
);

export default ProfileView;
