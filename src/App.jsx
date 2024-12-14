import { Routes, Route } from "react-router-dom";
import { clientSideRoutes } from "./routes";

function App() {
  return (
    <>
      <div className="">
        <Routes>
          {clientSideRoutes.map((route) => (
            <Route
              key={route.id}
              path={route.path}
              element={<route.element />}
            />
          ))}
        </Routes>
      </div>
    </>
  );
}

export default App;
