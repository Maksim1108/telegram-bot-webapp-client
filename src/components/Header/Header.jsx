import React from 'react'
import Button from '../Button/Button'
import { useTelegram } from '../../hooks/useTelegram'
import { Link } from 'react-router-dom'

const Header = () => {

  const {user, onClose} = useTelegram()

  return (
    <header className='header'>
      <Button onClick={onClose}></Button>
      <span className='username'>
        {user?.username}
      </span>
      <Link to='products'>GO TO PL</Link>
      <Link to='form'>GO TO FORM</Link>
    </header>
  )
}

export default Header