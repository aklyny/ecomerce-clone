import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {useStateValue} from './StateProvider';
import {auth} from './firebase';
const Header  = ()=>{
    const [{basket,user}] = useStateValue();
    const login = ()=>{
        if(user){
            auth.signOut();
        }
    }
  
    
    return(
        <nav className="header">
        {/* {logo} */}
        <Link to="/">
        <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="logo"/>
        </Link>
            {/* {search bar} */}
        <div className="header__search">
        <input className="header__searchInput" type="text" placeholder="Search" />
        <SearchIcon className="header__searchicon" />
        </div>
            {/* {3Links} */}
            <div className="header__nav">
                <Link to={!user && "/login"} className="header__link">
                <div onClick={login} className="header__options">
                <span className="header__optionLine1">Hello {user?.email} </span>
                <span className="header__optionLine2">{user ? 'Sign Out':'Sign In'}</span>
                </div>
                </Link>
            </div>
            <div className="header__nav">
                <Link to="/login" className="header__link">
                <div className="header__options">
                <span className="header__optionLine1">Returns</span>
                <span className="header__optionLine2"> & Orders</span>
                </div>
                </Link>
            </div>
            <div className="header__nav">
                <Link to="/login" className="header__link">
                <div className="header__options">
                <span className="header__optionLine1">Your</span>
                <span className="header__optionLine2">Prime</span>
                </div>
                </Link>
            </div>
            {/* cart icon */}
            <Link to="/checkout" className="header__link">
                <div className="header__cart">
                    <ShoppingBasketIcon />
                    <span className="header__optionLine2 header__count">{basket?basket.length : 0 }</span>
                </div>
            </Link>
        </nav>
    )
}

export default Header;