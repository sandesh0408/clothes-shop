import Home from "./component/routes/home.component";
import { Routes, Route } from "react-router-dom";
import Navigation from "./component/routes/navigation/navigation.compnent";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
};

export default App;
