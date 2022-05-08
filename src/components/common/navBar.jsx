import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='navigation'>
        <nav className="navbar">
            <Link to="/">Home</Link>
            <Link to="/leaderboard">Leaderboard</Link>
            <Link to="/newGame">New game</Link>
        </nav>
        <nav className='user-nav'>
            <ul>
                <li>
                    <Link to="/abc">
                        User XY
                    </Link>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default NavBar