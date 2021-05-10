import Panel from "../../modules/Dashboard/components/Panel";
import History from "../../modules/Dashboard/components/History";
import Drive from "../../modules/Dashboard/components/Drive";

const DashboardView = () => (
  <Panel>
    <Drive />
    <History />
  </Panel>
);

export default DashboardView;
