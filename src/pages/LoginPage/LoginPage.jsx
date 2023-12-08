import { useState } from "react"

export default function LoginPage({ onLogin }) {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    })

    function handleSubmit(evt) {
        evt.preventDefault()
        onLogin(formData)
    }

    function handleInputChange(evt){
        setFormData({
            ...formData,
            [evt.target.name]: evt.target.value, 
        })
    }

    return (
        <>
            <h1>LoginPage</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username:</label>
                <input
                    id="username"
                    name="username"
                    type="text"
                    value={formData.username}
                    onChange={handleInputChange}
                />
                <label htmlFor="password">Password:</label>
                <input
                    id="password"
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleInputChange} />
                <button type="submit">Log In</button>
            </form>
        </>
    )
}