import './App.css';
import React, { useState } from 'react';
import Form from './Form';
import Member from './components/Member';

const initialForm = {
  name: "",
  email: "",
  role: ""
}
//=====================================================
//State
function App() {
  const [ teamMembers, setTeamMembers ] = useState([]); //State to hold all team Members
  const [ formValue, setFormValue ] = useState(initialForm); //State to hold form Values
  //========================
  //Form interaction
  const updateForm = (inputName, inputValue) => {
    setFormValue({ ...formValue, [inputName]: inputValue })
  }

  const submitForm =  () => {
    const newTeamMember = {
      name: formValue.name.trim(),
      email: formValue.email.trim(),
      role: formValue.role.trim()
    }
    if (!newTeamMember.name || !newTeamMember.email || !newTeamMember.role) {
      alert("All fields are required")
    } else {
      setTeamMembers([ ...teamMembers, newTeamMember])
      setFormValue(initialForm);
    }
  }
 
  //=========================

  return (
    <div className="App">
      <h1>Teams-builder</h1>
      <Form submit={submitForm} value={formValue} update={updateForm} team={teamMembers}/>
      {
        teamMembers.map((members, index) => (
          <Member name={members.name} email={members.email} role={members.role} key={index} />
        ))
      }

    </div>
  );
}

export default App;
