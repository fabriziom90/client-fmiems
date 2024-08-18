import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Homepage from "./pages/Homepage";
import Incomes from "./pages/incomes/Incomes";
import AddIncome from "./pages/incomes/AddIncome";
import DetailIncome from "./pages/incomes/DetailIncome";
import Exits from "./pages/exits/Exits";
import AddExits from "./pages/exits/AddExits";
import DetailExits from "./pages/exits/DetailExits";
import AddYear from "./pages/years/AddYear";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Homepage />} />
      <Route path="/incomes" element={<Incomes />} />
      <Route path="/exits" element={<Exits />} />
      <Route path="/incomes/add-income" element={<AddIncome />} />
      <Route path="/incomes/detail-income" element={<DetailIncome />} />
      <Route path="/exits/add-exits" element={<AddExits />} />
      <Route path="/exits/detail-exits" element={<DetailExits />} />
      <Route path="/add-year" element={<AddYear />}></Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
