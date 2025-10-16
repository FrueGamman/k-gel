import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Home from '../home/home';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../footer/footer';
import NewArrival from '../shop/newArrival/newArrival';
import OfferPromotion from '../promotion/OfferPromotion';
import Clothing from '../shop/clothing';
import Pants from '../shop/pants/pants';
import Suit from '../shop/suit/suit';
import Shorts from '../shop/short/shorts';
import Counsel from '../shop/counsel/counsel';
import Contact from '../components/contact/contact';
import Detail from '../components/detail/detail';
import AddCart from '../addCart/addCart';
import HomeUser from "../components/userDashboard/homepage";
import Checkout from '../checkout/checkout';
import Filter from '../components/Filter/Filter';
import Myaccount from '../components/userLogin/myaccount';
import Login from '../components/userLogin/login';
import { DialogWithForm } from '../components/userLogin/userLogin';
import Blog from '../components/blog/Blog';
import LoginUser from '../components/userLogin/login';
import LoginUserCustomer from '../components/userLogin/signinuser';

export default function RouterComponent() {

  const navigate = useNavigate();
  const isUserDashboard = window.location.pathname === '/user_dashboard';
  const renderNavbar = !isUserDashboard && (
    <>
      <Navbar />
    </>
  );

  const renderFooter = !isUserDashboard && (
    <>
      <Footer />
    </>
  );

  return (
    <>
      {renderNavbar}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Shop/newarrival' element={<NewArrival />} />
        <Route path='/promotion-offer' element={<OfferPromotion />} />
        <Route path='/Shop/clothing' element={<Clothing />} />
        <Route path='/Shop/pants' element={<Pants />} />
        <Route path='/Shop/suits' element={<Suit />} />
        <Route path='/Shop/shorts' element={<Shorts />} />
        <Route path='/Shop/counsel' element={<Counsel />} />
        <Route path='/contactus' element={<Contact />} />
        <Route path='/detail/:id' element={<Detail />} />
        <Route path='/detail' element={<Detail />} />
        <Route path='/add_cart' element={<AddCart />} />
        <Route path='/checkout' element={<Checkout/> } />
        <Route path='/user_dashboard' element={<HomeUser />} />
        <Route path='/filter-clothes' element={<Filter />} />
        <Route path='/account-dashboard' element={<Myaccount />} />
        <Route path='/login' element={<LoginUser />} />
        <Route path='/create-account' element={<DialogWithForm />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/customer-signin' element={<LoginUserCustomer />} />

      </Routes>
      {renderFooter}
    </>
  );
}
