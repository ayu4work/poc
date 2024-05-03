import React, { Suspense, Component } from "react";
import { Route, Routes } from "react-router-dom";

const UsersComponent = React.lazy(() =>
  import("./pages/PrivatePages/UsersComponent")
);

const AboutPublic = React.lazy(() =>
  import("./pages/PrivatePages/DetailsAboutItem.js")
);

class Routers extends Component {
  render() {
    return (
      <>
        <Suspense fallback={<div>Loading</div>}>
          <React.Fragment>
            <Routes>
              <Route path="/about" element={<AboutPublic />} />
              <Route path="/" element={<UsersComponent />} />
            </Routes>
          </React.Fragment>
        </Suspense>
      </>
    );
  }
}

export default Routers;
