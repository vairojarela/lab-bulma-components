import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import FormField from './components/FormField';
import CoolButton from './components/CoolButton';
import Signup from './components/Signup';
import Message from './components/Message';

function App() {
  return (
    <div className="App">
      <header>
        <Navbar/>
      </header>
        <FormField label="Name" type="text" placeholder="e.g Alex Smith"/>
        <FormField label="Email" type="email" placeholder="e.g alexsmith@gmail.com"/>
        <CoolButton className="is-primary is-small is-rounded my-class">Button 1</CoolButton>
        <CoolButton isSmall isDanger isRounded >Button 2</CoolButton>
        <Signup></Signup>
        <Message isInfo title="Hello World">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>.
        </Message>
    </div>
  );
}

export default App;
