import React, { useContext, useEffect, useState } from 'react';
import HeaderStyles from '../styles/Header.module.css';
import { AppContext } from '../context/app.context';

const Header = ({ handleAction }) => {
  const [yPos, setYPos] = useState(0);
  const {data, setAppState } = useContext(AppContext);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll);
  }, [])

  const handleScroll = () => {
    const y = window.scrollY
    setYPos(y)
  };

  const handleHamBurgerClick = () => {
    handleAction();
    setAppState(({
      ...data,
      position: 'fixed'
    }))
  }

  const canShowHeader = () => {
    if (yPos >= 50) {
      return true;
    }

    if (data.navType === 'opaque') {
      return true;
    }
    return false;
  }

  return (
    <div className={`flex ${HeaderStyles.app_header} ${canShowHeader() ? HeaderStyles.app_header__opaque : HeaderStyles.app_header__transparent}`}>
      <div className="flex-1 text-2xl">
        <span className="inline-flex items-center m-auto">
          <img src="/logo.png" alt="" className={`${HeaderStyles.app_logo } w-12`} />
          <span className="ml-2 text-3xl">owarepa</span>
        </span>
      </div>
      <div className="flex-1 text-right">
          <button onClick={handleHamBurgerClick} className="w-8" >
            <img src="/menu.svg" alt=""/>
          </button>
      </div>
    </div>
  )
}

export default Header
