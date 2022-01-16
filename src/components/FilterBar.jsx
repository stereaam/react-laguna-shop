import React from 'react'
import './FilterBar.css'


function FilterBar(props) {

    const {filterProducts} = props
    
    return (
        <div className='d-flex align-items-center justify-content-center'>
            <div className='filter-container d-flex justify-content-center border border-secondary
             align-items-start m-1 mb-3 text-white text-nowrap rounded'>
                <p className='m-3 my-0'>Filter by price: </p>
                <div className='form-check m-3 my-0'>
                    <label htmlFor="first-interval">under 30$</label>
                    <input type="radio" name="filter" className='form-check-input' id="first-interval" 
                        onChange ={(event)=> filterProducts(event.target.checked,'first-interval')} 
                    />
                </div>
                <div className='form-check m-3 my-0'>
                    <label htmlFor="second-interval">30 to 50$</label>
                    <input type="radio" name="filter" className='form-check-input' id="second-interval" 
                        onChange ={(event)=> filterProducts(event.target.checked,'second-interval')} 
                    />
                </div>
                <div className='form-check m-3 my-0'>
                    <label htmlFor="third-interval">over 50$</label>
                    <input type="radio" className='form-check-input' name="filter" id="third-interval" onChange ={(event)=> filterProducts(event.target.checked,'third-interval')} />
                </div>
                <div className='form-check m-3 my-0'>
                    <label htmlFor="no-filter">No filter</label>
                    <input type="radio" name="filter" className='form-check-input' id="no-filter" onChange ={(event)=> filterProducts(event.target.checked,'no-filter')}/>
                </div>
            </div>
        </div>
    )
}

export default FilterBar
