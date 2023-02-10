import React, { Component } from 'react';
import { getUser } from './services/userAPI';
import { Link } from 'react-router-dom';

class Header extends Component {
    constructor() {
      super();
      this.state = {
        getUserr: '',
        loading: false,
        
      };
      this.handleRequest = this.handleRequest.bind(this);
    }
  
    async handleRequest() {
      this.setState(
        {
          loading: true,
        },
        async () => {
          const gotUser = await getUser();
          this.setState({
            getUserr: gotUser,
            loading: false,
          });
        },
      );
    }

    componentDidMount() {
        this.handleRequest();
      }
  
    render() {
      const { loading, getUserr } = this.state;
      return (
        <header
          data-testid="header-component"
        >
        <section>
          <h2
            data-testid="header-user-name"
          >
            { loading ? 'Carregando...' : getUserr.name }
          </h2>
        </section>
        <section className="nav-links">
          <Link
            to="/profile"
            data-testid="link-to-profile"
          >
            Profile
          </Link>
          <Link
            to="/search"
            data-testid="link-to-search"
          >
            Search
          </Link>
          <Link
            to="/favorites"
            data-testid="link-to-favorites"
          >
            Favoriotes
          </Link>
        
        </section>
        </header>
      );
    }
  }
  
  export default Header;
  