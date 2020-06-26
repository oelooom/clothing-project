import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './header.styles.scss';
import { auth } from '../../firebase/firebase.util';
import { ReactComponent as Logo } from '../../assets/logo.svg'

const Header = ({ currentUser }) => (
    <div className='header'>
        <Link to='/' className='logo-container'>
            <Logo className='logo' />
        </Link>
        <div className='options'>
            <Link to='/shop' className='option'>SHOP</Link>
            <Link to='/shop' className='option'>CONTACT </Link>
            {
                currentUser
                    ? <div className='option' onClick={() => auth.signOut()}>SIGN OUT </div>
                    : <Link to='/signin' className='option'>SIGN IN</Link>
            }
        </div>
    </div>
)

const mapStatetoProps = state => ({
    currentUser: state.user.currentUser
})

export default connect(mapStatetoProps)(Header);