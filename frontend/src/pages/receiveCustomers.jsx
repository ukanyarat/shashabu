import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function ReceiveCustomers() {
    const navigate = useNavigate();
    const indexLogin = () => {
        // Add any login logic here (if needed)
        navigate('/');  // This will navigate to the menu page
    };
    return (
        <div>
            <h1>receiveCustomers</h1>
        </div>
    )
}


