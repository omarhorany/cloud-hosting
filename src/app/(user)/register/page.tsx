import React from 'react'
import RegisterFormPage from './RegisterForm'

const RegisterPage = () => {
    return (
        <section className="flex justify-center items-center h-screen bg-gray-100">
            <div className="bg-white shadow-lg rounded-lg p-8 w-1/2">
                <h1 className="text-2xl font-semibold text-center mb-6">Create New Account</h1>
                <RegisterFormPage />
            </div>
        </section>
    );

}

export default RegisterPage
