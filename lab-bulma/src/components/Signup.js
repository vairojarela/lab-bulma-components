import React from 'react'
import Navbar from './Navbar';
import FormField from './FormField';
import CoolButton from './CoolButton';

export default function Signup() {
  return (
    <div className="Signup">
      <FormField label="Name" type="text" placeholder="Your name"/>
      <FormField label="Email" type="email" placeholder="someone@gmail.com"/>
      <CoolButton text="Submit">Signup</CoolButton>
    </div>
  )
}
