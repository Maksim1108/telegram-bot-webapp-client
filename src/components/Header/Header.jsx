import React from 'react'
import Button from '../Button/Button'
import { useTelegram } from '../../hooks/useTelegram'
import { Link } from 'react-router-dom'

const Header = () => {

  const {user, onClose} = useTelegram()

  return (
    <header className='header'>
    </header>
  )
}

export default Header