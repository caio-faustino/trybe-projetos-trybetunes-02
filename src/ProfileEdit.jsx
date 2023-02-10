import React, { Component } from 'react';
import Header from './Header';

class ProfileEdit extends Component {
  render() {
    return (
      <section data-testid="page-profile-edit">
        {console.log('Profile Edit')}
        <Header />
      </section>
    );
  }
}

export default ProfileEdit;
