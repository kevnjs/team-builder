import React from "react";

export default function Member (props) {
    const { name, email, role } = props;
    return (
        <div>
            <h2>Name: {name}</h2>
            <p>Email: {email}</p>
            <p>Role: {role}</p>
        </div>
    )
}