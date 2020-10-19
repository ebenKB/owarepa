import React, { useEffect } from 'react';
import NavStyles from '../styles/navigation.module.css';
import Link from 'next/link'
import { useRouter } from 'next/router'

const NavLinks = () => {
  const {pathname} = useRouter()
  useEffect(() => {
    console.log(pathname)
  })
  return (
    <ul className={`text-3xl ${NavStyles.nav_links__wrapper} animate__animated animate__slideInLeft`}>
      <li className="w-full">
      <Link href="/" passHref>
        <a className={`${pathname === '/' ? 'active' : ''}`}>Home</a>
      </Link>
      </li>
      <li className="w-full">
        <Link href="/history">
          <a className={`${pathname === '/history' ? 'active' : ''}`}>History</a>
        </Link>
      </li>
      <li className="w-full">
        <Link href="/rules">
          <a className={`${pathname === '/rules' ? 'active' : ''}`}>Rules</a>
        </Link>
      </li>
      <li className="w-full">
        <Link href="/about">
          <a className={`${pathname === '/about' ? 'active' : ''}`}>About</a>
        </Link>
      </li>
      <li className="w-full">
        <Link href="/privacy">
          <a className={`${pathname === '/privacy' ? 'active' : ''}`}>Privacy</a>
        </Link>
      </li>
      <li>
        <Link href="/contact" >
          <a className={`${pathname === '/contact' ? 'active' : ''}`}>Contact</a>
        </Link>
      </li>
    </ul>
  )
}

export default NavLinks
