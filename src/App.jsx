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
import AddExit from "./pages/exits/AddExit";
import DetailExit from "./pages/exits/DetailExit";
import AddYear from "./pages/years/AddYear";
import DetailYear from "./pages/years/DetailYear";
import Taxes from "./pages/taxes/Taxes";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Homepage />} />
      <Route path="/incomes" element={<Incomes />} />
      <Route path="/exits" element={<Exits />} />
      <Route path="/incomes/add-income" element={<AddIncome />} />
      <Route path="/incomes/:yearId/detail-income" element={<DetailIncome />} />
      <Route path="/exits/add-exits" element={<AddExit />} />
      <Route path="/exits/:yearId/detail-exit" element={<DetailExit />} />
      <Route path="/add-year" element={<AddYear />}></Route>
      <Route path="/years/:yearId/detail-year" element={<DetailYear />}></Route>
      <Route path="/taxes" element={<Taxes />}></Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
