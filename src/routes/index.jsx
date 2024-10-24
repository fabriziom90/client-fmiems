import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import Protected from "./protected";

import MainLayout from "../layouts/MainLayout";

import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import Homepage from "../pages/Homepage";
import Incomes from "../pages/incomes/Incomes";
import AddIncome from "../pages/incomes/AddIncome";
import DetailIncome from "../pages/incomes/DetailIncome";
import Exits from "../pages/exits/Exits";
import AddExit from "../pages/exits/AddExit";
import DetailExit from "../pages/exits/DetailExit";
import AddYear from "../pages/years/AddYear";
import DetailYear from "../pages/years/DetailYear";
import Taxes from "../pages/taxes/Taxes";
import DetailTaxes from "../pages/taxes/DetailTaxes";
import NotFound from "../pages/NotFound";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route element={<Protected />}>
        <Route path="/">
          <Route path="/admin" element={<MainLayout />}>
            <Route index element={<Homepage />} />
            <Route path="/admin/incomes" element={<Incomes />} />
            <Route path="/admin/exits" element={<Exits />} />
            <Route path="/admin/incomes/add-income" element={<AddIncome />} />
            <Route
              path="/admin/incomes/:yearId/detail-income"
              element={<DetailIncome />}
            />
            <Route path="/admin/exits/add-exits" element={<AddExit />} />
            <Route
              path="/admin/exits/:yearId/detail-exit"
              element={<DetailExit />}
            />
            <Route path="/admin/add-year" element={<AddYear />}></Route>
            <Route
              path="/admin/years/:yearId/detail-year"
              element={<DetailYear />}
            ></Route>
            <Route path="/admin/taxes" element={<Taxes />}></Route>
            <Route
              path="/admin/taxes/:yearId/detail-tax"
              element={<DetailTaxes />}
            ></Route>
            <Route path="*" element={<NotFound />} />
          </Route>
        </Route>
      </Route>
    </>
  )
);

const Index = () => {
  return <RouterProvider router={router} />;
};

export default Index;
