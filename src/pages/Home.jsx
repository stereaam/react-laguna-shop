import React from 'react'
import Layout from '../components/Layout'
import HomeCategory from '../components/HomeCategory'
import products from '../utils/products.json'


class Home extends React.Component{

    constructor(){
        super()
        this.state = {
            categories : [],
            categoryNames : []
        }
    }
    componentDidMount(){
        const categories = Object.values(products)
        const categoryNames = Object.keys(products)
        this.setState({
            categories: categories, 
            categoryNames: categoryNames 
        })
        
    }
    render(){
        return (
            <div>
                <Layout>
                    <div className='container-fluid container-min-max-width'>
                        <div className='row'>
                            {this.state.categories.map( (category,index) => {  
                                    return(
                                        <HomeCategory
                                        route = {this.state.categoryNames[index]}
                                        image = {category.image}
                                        description = {category.description}
                                        title = {category.name}
                                        key = {index}
                                        />
                                    )        
                                    }
                                )
                            }
                        </div>
                    </div>    
                </Layout>
            </div>
        )
    }
}

export default Home
