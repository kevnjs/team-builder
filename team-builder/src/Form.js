import "./App";
import React from "react";

//=============================================

//=============================================
export default function Form (props) {
    const { value, submit, update, team } = props;
    //======================================>>>

    const onSubmit = evt => {
        evt.preventDefault();
        submit();
    }

    const onChange = evt => {
        const { name, value } = evt.target;
        update(name, value);
    }
    
    //======================================>>>
    return (
        <div className="form-box">
            <form onSubmit={onSubmit}>

                <label>Name: 
                    <input
                    name="name"
                    placeholder="Type your name here"
                    type="text"
                    onChange={onChange}
                    value={value.name}
                    />
                </label>

                <label>Email: 
                    <input
                    name="email"
                    placeholder="Type your email here"
                    type="email"
                    onChange={onChange}
                    value={value.email}
                    />
                </label>
                
                <label>Role:
                    <select value={value.role} name="role" onChange={onChange}>
                        <option value="">==Select a Role==</option>
                        <option value="Team Leader">Team Leader</option>
                        <option value="Support">Support</option>
                        <option value="All-Rounder">All Rounder</option>
                    </select>
                </label>

                <div>
                    <button>Submit{console.log(team)}</button>
                </div>
            </form>
        </div>
    )
}
