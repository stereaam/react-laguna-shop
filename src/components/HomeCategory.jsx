import React from 'react'
import {Link} from 'react-router-dom'

function HomeCategory(props) {
    const {route,image,description,title} = props
    return (
        <div className="col-12 col-md-6 my-5 category">
            <Link to={`/category/${route}`}>
                <img src={image} alt="home-category" className="w-100 img-thumbnail"/>
                <h2 className='my-1'><strong>{title}</strong></h2>
                <p className="m-0"><em>{description}</em></p>
            </Link>
        </div>
    )
}

export default HomeCategory
