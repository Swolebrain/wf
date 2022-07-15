import React from 'react';
import {BrowserRouter, Link, Outlet, Route, Routes} from "react-router-dom";
import FirstRunExperience from "./pages/fre";
import CreatePolicy from "./pages/createOrEditPolicy/createPolicy";
import EditPolicy from "./pages/createOrEditPolicy/editPolicy";
import PolicyEvaluatorSandbox from "./pages/policyEvaluatorSandbox";
import PolicyList from "./pages/policyList";
import AppRoot from "./pages/AppRoot";

function WFRouter() {
    const pathsToElements = {
        fre: FirstRunExperience,
        "create-policy": CreatePolicy,
        "edit-policy": EditPolicy,
        "policy-evaluator-sandbox": PolicyEvaluatorSandbox,
        "policy-list": PolicyList
    }
    const redirect = "fre";
    const RedirectComponent = pathsToElements["fre"];
    return (
        <div>
            <BrowserRouter>
                <div style={{display: 'flex', flex: 1}}>
                  {
                      ["", ...Object.keys(pathsToElements)].map(path => <Link to={`/${path}`} key={path} style={{padding: 10}}>{`/${path}`}</Link>)
                  }
              </div>
              <Routes>
                  <Route path="/" element={<AppRoot />}>
                      {
                          (Object.keys(pathsToElements) as Array<keyof typeof pathsToElements>).map(path => {
                              const ComponentFn = pathsToElements[path];
                              return <Route path={path} element={<ComponentFn />} />
                          })
                      }
                      <Route index element={<RedirectComponent />} />
                  </Route>
              </Routes>
          </BrowserRouter>
        </div>
    );
}

export default WFRouter;
