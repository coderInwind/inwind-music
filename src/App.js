import React, { memo } from "react";
import { HashRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import { Provider } from "react-redux";

import Footer from "@/components/app-footer";
import Header from "@/components/app-header";
import routes from "@/router/index";
import store from "@/store/index";

export default memo(function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <Header />
        {renderRoutes(routes)}
        <Footer />
      </HashRouter>
    </Provider>
  );
});
