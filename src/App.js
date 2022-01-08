import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import NotFound from "./Components/NotFound/NotFound";
import "bootstrap/dist/css/bootstrap.min.css";
import AddCategory from "./Components/AddComponents/AddCategory/AddCategory";
import Electronics from "./Components/AllList/ElectronicsCategory/Electronics";
import Sports from "./Components/AllList/SportsCategory/Sports";
import Categories from "./Components/AllList/Categories/Categories";

import AddElectronic from "./Components/AddComponents/AddElectronic/AddElectronic";
import AddSport from "./Components/AddComponents/AddSport/AddSport";
import AddFurniture from "./Components/AddComponents/AddFurniture/AddFurniture";
import Furnitures from "./Components/AllList/Furnitures/Furnitures";
import AddFashion from "./Components/AddComponents/AddFashion/AddFashion";
import Fashions from "./Components/AllList/Fashions/Fashions";
import AddCosmetic from "./Components/AddComponents/AddCosmetic/AddCosmetic";
import Cosmetics from "./Components/AllList/Cosmetics/Cosmetics";
import ElectronicDetails from "./Components/AllDetails/ElectronicDetails/ElectronicDetails";
import SportDetails from "./Components/AllDetails/SportDetails/SportDetails";
import FurnitureDetails from "./Components/AllDetails/FurnitureDetails/FurnitureDetails";
import FashionDetails from "./Components/AllDetails/FashionDetails/FashionDetails";

import CosmeticDetails from "./Components/AllDetails/CosmeticDetails/CosmeticDetails";
import ElectricOrders from "./Components/AllOrders/ElectricOrders/ElectricOrders";
import MyOrders from "./Components/AllOrders/MyOrders/MyOrders";
import Home from "./Components/Home/Home";
import AuthProvider from "./Context/AuthProvider";
import CustomerCare from "./Components/CustomerCare/CustomerCare";
import Register from "./Components/Register/Register";
import Login from "./Components/Login/Login";
import DashBoard from "./Components/Dashboard/DashBoard";
import AllProducts from "./Components/AllList/AllProducts/AllProducts";
import SportsOrder from "./Components/AllOrders/SportsOrder/SportOrders";
import FashionOrders from "./Components/AllOrders/FashionOrders/FashionOrders";
import FurnitureOrders from "./Components/AllOrders/FurnitureOrders/FurnitureOrders";
import CosmeticOrders from "./Components/AllOrders/CosmeticsOrders/CosmeticOrders";
import ManageOrders from "./Components/AllOrders/ManageOrders/ManageOrders";
// import SearchResult from "./Components/SearchResult/SearchResult";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route path="/addcategory">
            <AddCategory></AddCategory>
          </Route>
          <Route path="/addCosmetic">
            <AddCosmetic></AddCosmetic>
          </Route>
          <Route path="/cosmetics">
            <Cosmetics></Cosmetics>
          </Route>
          <Route path="/shop">
            <Categories></Categories>
          </Route>
          <Route path="/electronics">
            <Electronics></Electronics>
          </Route>
          <Route path="/sports">
            <Sports></Sports>
          </Route>
          <Route path="/furnitures">
            <Furnitures></Furnitures>
          </Route>
          <Route path="/fashions">
            <Fashions></Fashions>
          </Route>
          <Route path="/addElectronic">
            <AddElectronic></AddElectronic>
          </Route>
          <Route path="/addSport">
            <AddSport></AddSport>
          </Route>
          <Route path="/dashboard">
            <DashBoard></DashBoard>
          </Route>
          <Route path="/addFashion">
            <AddFashion></AddFashion>
          </Route>
          <Route path="/addFurniture">
            <AddFurniture></AddFurniture>
          </Route>
          <Route path="/myOrders">
            <MyOrders></MyOrders>
          </Route>

          {/* <Route exact path="/shop">
            <Shop></Shop>
          </Route> */}
          <Route path="/allproducts">
            <AllProducts></AllProducts>
          </Route>
          <Route exact path="/customer">
            <CustomerCare></CustomerCare>
          </Route>
          <Route exact path="/register">
            <Register></Register>
          </Route>
          <Route exact path="/login">
            <Login></Login>
          </Route>
          <Route exact path="/manageorders">
            <ManageOrders></ManageOrders>
          </Route>

          <Route path="/electronicDetails/:electronicId">
            <ElectronicDetails></ElectronicDetails>
          </Route>
          <Route path="/sportDetails/:sportId">
            <SportDetails></SportDetails>
          </Route>
          <Route path="/furnituredetails/:furnitureId">
            <FurnitureDetails></FurnitureDetails>
          </Route>
          <Route path="/fashiondetails/:fashionId">
            <FashionDetails></FashionDetails>
          </Route>
          <Route path="/cosmeticdetails/:cosmeticId">
            <CosmeticDetails></CosmeticDetails>
          </Route>

          <Route path="/electronicsOrder/:_id">
            <ElectricOrders></ElectricOrders>
          </Route>
          <Route path="/sportsOrder/:_id">
            <SportsOrder></SportsOrder>
          </Route>
          <Route path="/cosmeticOrder/:_id">
            <CosmeticOrders></CosmeticOrders>
          </Route>
          <Route path="/fashionsOrder/:_id">
            <FashionOrders></FashionOrders>
          </Route>
          <Route path="/furnitureOrder/:_id">
            <FurnitureOrders></FurnitureOrders>
          </Route>
          {/* <Route path="/searchResult">
            <SearchResult></SearchResult>
          </Route> */}

          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
