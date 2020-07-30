import React, { useState, useEffect } from 'react';
const Checkbox = ({ options, handleState, state, input, reset }) => {
    const [isOpen, setOpen] = useState(false);
    const [filteredOptions, setFilteredOption] = useState([]);
    const [isFilterActive, setFilterActive] = useState(false);
    const [searchInput, setSearchInput] = useState('')

    const dropdownStyle = {
        'height': 32,
        'width': '100%',
        'cursor': 'pointer',
    }
    
    useEffect(() => {
        if (reset) {
            setFilteredOption(null)
            setFilterActive(false)
            setSearchInput('')
        }
    }, [state])


    const crossAnimationToggle = isOpen ? 'rotate(180deg)' : ''
    const counter = state.length
    const optionsSet = isFilterActive ? filteredOptions : options

    const openDropdown = () => {
        setOpen(!isOpen)
    }

    const handleSearch = (e) => {
        const word = e.target.value.toLowerCase()
        setSearchInput(word)
        if (!word) {
            setFilterActive(false)
        } else {
            setFilterActive(true)
            const remainsOpt = options.filter(({ name }) => name.toLowerCase().includes(word) && name.toLowerCase().indexOf(word) === 0)
            setFilteredOption(remainsOpt)
        }
    }


    return <div id='selectInput-container'>
        {counter > 0 && <div id="bubble" className='counter'>{counter}</div>}
        <div id="dropdown" style={dropdownStyle} onClick={openDropdown}>
            <span>Select</span>
            <div className='cross-down' style={{ 'transform': crossAnimationToggle }}></div>
        </div>
        <div id='options-container' className={`options-wrapper ${isOpen ? 'open' : 'close'}`}>
            {input && <div id='search-container'><input type="text" name="input" id="input-text-search" className='selector' placeholder="type to search..." onChange={handleSearch} value={searchInput} />  </div>}
            {optionsSet && optionsSet.map((option, index) => {
                return <div key={option.name + index}>
                    < button className={`selector ${state.includes(option.value) ? 'selected' : ''}`} name={option.value} onClick={handleState} > {option.name || option.value}</button>
                </div>
            })}
        </div>
    </div >
}

export default Checkbox;