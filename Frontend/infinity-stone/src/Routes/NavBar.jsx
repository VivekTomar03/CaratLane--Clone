import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
        <Link to={"/"}>Home</Link>
        <Link to={"/ring"}>Ring</Link>

    </div>
  )
}

export default NavBar