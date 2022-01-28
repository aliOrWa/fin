import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { ViewtestList } from "./viewtest/ViewtestList";
import { ViewtestShow } from "./viewtest/ViewtestShow";
import { ViewTest2List } from "./viewTest2/ViewTest2List";
import { ViewTest2Show } from "./viewTest2/ViewTest2Show";
import { BbbazdList } from "./bbbazd/BbbazdList";
import { BbbazdShow } from "./bbbazd/BbbazdShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"My app"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Viewtest"
          list={ViewtestList}
          edit={ViewtestEdit}
          create={ViewtestCreate}
          show={ViewtestShow}
        />
        <Resource
          name="ViewTest2"
          list={ViewTest2List}
          edit={ViewTest2Edit}
          create={ViewTest2Create}
          show={ViewTest2Show}
        />
        <Resource
          name="Bbbazd"
          list={BbbazdList}
          edit={BbbazdEdit}
          create={BbbazdCreate}
          show={BbbazdShow}
        />
      </Admin>
    </div>
  );
};

export default App;
