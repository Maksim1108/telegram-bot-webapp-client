import React, { useState } from 'react'
import './Form.css'

const Form = () => {

  const [country, setCountry] = useState()
  const [street, setStreet] = useState()
  const [subject, setSubject] = useState('physical')

  const onChangeCountry = (e) => {
    setCountry(e.target.value)
  }

  const onChangeStreet = (e) => {
    setStreet(e.target.value)
  }

  const onChangeSubject = (e) => {
    setSubject(e.target.value)
  }


  return (
    <form className='form'>
      <h3>Введите ваши данные</h3>
      <input
        className='input'
        type="text"
        placeholder='Страна'
        value={country}
      />
      <input
        className='input'
        type="text"
        placeholder='Улица'
        value={street}
      />
      <select className='select'>
        <option value="physical">Физ. лицо</option>
        <option value="legal">Юр лицо</option>
      </select>
    </form>
  )
}

export default Form