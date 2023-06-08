import React from "react";
import { useNavigate } from "react-router-dom";
import './App.css'
export function Dashboard() {
    const navigate = useNavigate();
    return (
        <>
            <div className="container" style={{ marginTop: "5%" }}>
                <button class="button-89" onClick={() => navigate('/signup')} style={{ marginLeft: "10%" }}> signup</button>
                <button class="button-89" onClick={() => navigate('/login')} style={{ marginLeft: "10%" }}>login</button>
            </div>
        </>
    )
}
