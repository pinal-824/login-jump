import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Dashboard } from './dashboard'
import { Signup } from './signup'
import { Login } from './login'


export function ReactRouter() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}