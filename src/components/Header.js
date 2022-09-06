import React, { useState, useContext } from 'react'
import { AppContext } from '../App'

import './Header.css'

function Header(props) {

    const { SetSearch } = useContext(AppContext)

    const [IsNight, SetIsNight] = useState(true)
    
    function ToggleDayNight()
    {
        SetIsNight(!IsNight)
    }


    if (IsNight === true) 
    {
        document.documentElement.style.setProperty('--dark', "#0a0e10")
        document.documentElement.style.setProperty('--dark2', "#101518")
        document.documentElement.style.setProperty('--text', "#fff")
        document.documentElement.style.setProperty('--main', "#1881cc")
        document.documentElement.style.setProperty('--heading', "#1881cc")
        
    }
    else if (IsNight === false) 
    {
        document.documentElement.style.setProperty('--dark', "#fff")
        document.documentElement.style.setProperty('--dark2', "#ebf4fc")
        document.documentElement.style.setProperty('--text', "#000")
        document.documentElement.style.setProperty('--main', "#c7e8ff")
        document.documentElement.style.setProperty('--heading', "#1881cc")
        
    }
    else 
    {
        document.documentElement.style.setProperty('--dark', "#0a0e10")
        document.documentElement.style.setProperty('--dark2', "#101518")
        document.documentElement.style.setProperty('--text', "#fff")
        document.documentElement.style.setProperty('--main', "#1881cc")
        document.documentElement.style.setProperty('--heading', "#1881cc")
        
    }

    // const [InputText, SetInputText] = useState('')
    

    function HandleInputChange(event)
    {
        SetSearch(event.target.value)
    }

    // function SearchButtonClick()
    // {
        
    // }


    return (
        <div>
            <div className='header'>
                <div className='header-title-div'>
                    <h1 className='header-title'>Crypto Tracker</h1>
                </div>

                <div className='daynight-button-div'>
                    <button className='daynight-button' onClick={ToggleDayNight}>Day/Night</button>
                </div>

                <div className='header-input-div'>
                    <input type='text' className='search-input' placeholder='Search' onChange={HandleInputChange}
                    />
                    {/* <button className='search-button' >
                        <i class="ri-search-2-line"></i>
                    </button> */}
                </div>
            </div>
        </div>
    )
}


export default Header