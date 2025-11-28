import { Link, useLocation } from "react-router-dom"

export default function Registration () {
    const location=useLocation()
    return(
        <>
            <h1>Registration</h1>
            <h2>{location.pathname}</h2>
            <Link to="/">Home</Link>
        </>
        
    )
}