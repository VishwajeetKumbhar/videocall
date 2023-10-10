import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const [value, setVlaue] = useState()
    const navigate = useNavigate()
    const handleClick = () => {
        navigate(`room/${value}`)
    }
    return (
        <div>
            <input type="text" placeholder='Enter Room ID' onChange={(e) => setVlaue(e.target.value)} />
            <button onClick={handleClick} > Join </button>
        </div>
    )
}

export default Home