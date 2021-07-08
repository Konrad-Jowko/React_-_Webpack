import React from 'react';
import {NavLink, Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import Container from '../Container/Container.js';
import Icon from '../Icon/Icon.js';
import styles from './Header.scss';
import {settings} from '../../data/dataStore';

class Header extends React.Component {
  static propTypes = {
    icon: PropTypes.node,
  }

  static defaultProps = {
    icon: settings.defaultHeaderIcon,
  }

  render () {
    const {icon} = this.props;

    return (

      <header className={styles.component}>
        <Container>
          <div className={styles.wrapper}>
            <Link className={styles.logo} to= '/'>
              <Icon name={icon} />
            </Link>
            <nav>
              <NavLink exact to='/'>Home</NavLink>
              <NavLink exact to='/info'>Info</NavLink>
              <NavLink exact to='/faq'>FAQ</NavLink>
            </nav>
          </div>
        </Container>
      </header>
    );
  }
}

export default Header;
