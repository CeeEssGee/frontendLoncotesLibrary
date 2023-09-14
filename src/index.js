import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MaterialList from "./components/materials/MaterialList";
import MaterialDetails from "./components/materials/MaterialDetails";
import CreateMaterial from "./components/materials/CreateMaterial";
import PatronList from "./components/patrons/PatronList";
import PatronDetails from "./components/patrons/PatronDetails";
import PatronEdit from "./components/patrons/PatronEdit";
import CheckoutList from "./components/checkouts/CheckoutList";
import BrowseMaterialList from "./components/materials/BrowseMaterialList";
import NewCheckout from "./components/checkouts/NewCheckout";
import OverdueCheckouts from "./components/checkouts/OverdueCheckouts";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="materials">
          <Route index element={<MaterialList />} />
          <Route path=":id" element={<MaterialDetails />} />
          <Route path="create" element={<CreateMaterial />} />
          <Route path="browse" element={<BrowseMaterialList />} />
        </Route>
        <Route path="patrons">
          <Route index element={<PatronList />} />
          <Route path=":id" element={<PatronDetails />} />
          <Route path="update/:id" element={<PatronEdit />} />
        </Route>
        <Route path="checkouts">
          <Route index element={<CheckoutList />} />
          <Route path="create" element={<NewCheckout />} />
          <Route path="overdue" element={<OverdueCheckouts />} />
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
