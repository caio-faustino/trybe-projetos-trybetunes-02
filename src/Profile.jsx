import React, { Component } from 'react';
import Header from './Header';

class Profile extends Component {
  render() {
    return (
      <section data-testid="page-profile">
        {console.log('Profile')}
        <Header />
      </section>
    );
  }
}

export default Profile;
