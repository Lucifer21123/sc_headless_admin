import React from "react";
import PageLayout from "../../components/PageLayout";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import AdminDashboard from "../AdminDashboard";
import AdminDashboardEmpty from "../AdminDashboardEmpty";
import AlertPage from "../AdminAlerts";
import AlertNoPage from "../AdminNoAlerts";

interface DashboardProps {
  
}

const Dashboard:React.FC<DashboardProps> = ({}) => {
  let { path, url } = useRouteMatch();
  return (
    <div className="admin-default dashboard">
      <PageLayout>
        <Switch>
          <Route exact path={path} component={AdminDashboardEmpty} />
          <Route path={`${path}/main`} component={AdminDashboard} />
          <Route path={`${path}/alerts`} component={AlertPage} />
          <Route path={`${path}/alerts-no`} component={AlertNoPage} />
        </Switch>
      </PageLayout>
    </div>
  );
};

export default Dashboard;
