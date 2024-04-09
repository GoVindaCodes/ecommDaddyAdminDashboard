import React, { lazy } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { ToastContainer } from './utils/toast';
import AccessibleNavigationAnnouncer from './components/AccessibleNavigationAnnouncer';
import PrivateRoute from './components/login/PrivateRoute';
import EditProfile from 'pages/EditProfile';
import ComingSoon from 'pages/ComingSoon';
import Setting from 'pages/Setting';
import Coupons from 'pages/Coupons';
import OrderInvoice from 'pages/OrderInvoice';
import Orders from 'pages/Orders';
import Staff from 'pages/Staff';
import CustomerOrder from 'pages/CustomerOrder';
import Customers from 'pages/Customers';
import ChildCategory from 'pages/ChildCategory';
import Currencies from 'pages/Currencies';
import Languages from 'pages/Languages';
import Category from 'pages/Category';
import ProductDetails from 'pages/ProductDetails';
import ChildAttributes from 'pages/ChildAttributes';
import Attributes from 'pages/Attributes';
import Products from 'pages/Products';
import Dashboard from 'pages/Dashboard';
const Layout = lazy(() => import('./layout/Layout'));
const Login = lazy(() => import('./pages/Login'));
const SignUp = lazy(() => import('./pages/SignUp'));
const ForgetPassword = lazy(() => import('./pages/ForgotPassword'));
const ResetPassword = lazy(() => import('./pages/ResetPassword'));
const App = () => {


  return (
    <>
      <ToastContainer />
      <Router>
        <AccessibleNavigationAnnouncer />
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
          <Route path="/forgot-password" component={ForgetPassword} />
          <Route path="/reset-password/:token" component={ResetPassword} />

          <PrivateRoute>
            {' '}
            <Route path="/" component={Layout} />
          </PrivateRoute>
          {/* <PrivateRoute>
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/products" component={Products} />
            <Route exact path="/attributes" component={Attributes} />
            <Route exact path="/attributes/:id" component={ChildAttributes} />
            <Route exact path="/product/:id" component={ProductDetails} />
            <Route exact path="/categories" component={Category} />
            <Route exact path="/languages" component={Languages} />
            <Route exact path="/currencies" component={Currencies} />
            <Route exact path="/categories/:id" component={ChildCategory} />
            <Route exact path="/customers" component={Customers} />
            <Route exact path="/customer-order/:id" component={CustomerOrder} />
            <Route exact path="/our-staff" component={Staff} />
            <Route exact path="/orders" component={Orders} />
            <Route exact path="/order/:id" component={OrderInvoice} />
            <Route exact path="/coupons" component={Coupons} />
            <Route exact path="/settings" component={Setting} />
            {/* <Route exact path="/404" component={Page404} /> */}
          <Route exact path="/coming-soon" component={ComingSoon} />
          <Route exact path="/edit-profile" component={EditProfile} />
          {/* </PrivateRoute> */}

          {/* for pasting and going on specific routes  */}
          {/* <PrivateRoute path="/" component={Layout} /> */}
          <Redirect exact from="/" to='/login' />
        </Switch>
      </Router>
    </>
  );
};

export default App;
