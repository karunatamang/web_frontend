import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import SignUpForm from './components/form/SignUpForm';
import Header from './components/Header';
import DonationForm from './components/form/DonationForm';
import ViewDonation from './components/ViewDonation';
import EditDonationForm from './components/form/EditDonationForm';
import SingleDonation from './components/SingleDonation';
import ViewContactUs from './components/ViewContactUs';
import ContactUsForm from './components/form/ContactUsForm';
import EditContactUsForm from './components/form/EditContactUsForm';

function App() {
  return (
    <BrowserRouter>
      <div>
        <header>
          <Header />
          <Switch>
          
            <Route path="/signup" component={SignUpForm} />
            <Route path="/adddonation" component={DonationForm} />
            <Route path="/viewdonation" component={ViewDonation} />
            <Route path="/adddonation" component={DonationForm} />
            <Route path="/editdonation/:id" exact component={EditDonationForm} />
            <Route path="/singledonation/:id" exact component={SingleDonation} />
            <Route path="/viewcontactus" component={ViewContactUs} />
            <Route path="/addcontactus" component={ContactUsForm} />
            <Route path="/editcontactus/:id" exact component={EditContactUsForm} />

          </Switch>

        </header>
      </div>
    </BrowserRouter>

  );
}

export default App;
