import React, { useContext, useState } from 'react'
import Header from './Header';
import NavStyles from '../styles/navigation.module.css';
import NavLinks from './NavLinks';
import Link from 'next/link';
import { AppContext } from '../context/app.context';

const Navigation = () => {
  const [canShowNavDropdown, setCanShowNavDropdown] =useState(false)
  const { data, setAppState } = useContext(AppContext)

  const handleDropdwonClose = () => {
    setCanShowNavDropdown(false);
    setAppState({
      ...data,
      position: 'default',
    })
  }

  return (
    <div className={NavStyles.nav_wrapper}>
      <Header 
        handleAction={() => setCanShowNavDropdown(true)}
      />
      {canShowNavDropdown && (
        <div className={`${NavStyles.nav_wrapper__content}`}>
        <div className="flex flex-wrap">
          <div className={`flex-none sm:flex-1 md:flex-1 lg:flex-1 xl:flex-1 text-center ${NavStyles.nav_caption} animate__animated animate__slideInLeft`}>
            <h1 className="text-5xl">Owarepa</h1>
            {/* <img src="/logo.png" alt="" className="w-24" /> */}
          </div>
          <div className={`flex-none sm:flex-1 md:flex-1 lg:flex-1 xl:flex-1 ${NavStyles.nav_menu} animate__animated animate__slideInRight `}>
            <div className={`text-right ${NavStyles.nav_menu__heading}`}>
              <button onClick={handleDropdwonClose}>
                <img src="/close.png" alt=""/>
              </button>
            </div>
            <NavLinks />
          </div>
        </div>
      </div>
      )}
    </div>
  )
}

export default Navigation
