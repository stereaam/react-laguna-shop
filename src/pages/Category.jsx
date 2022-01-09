import React from 'react'
import Layout from '../components/Layout'
import products from '../utils/products.json'
import ProductList from '../components/ProductList'
import './Category.css'

class Category extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            category: {},
            items: []
        }
    }
    componentDidMount(){
        const { match } = this.props;
        const categoryName = match.params.categoryName;

        this.setState({
            category: products[categoryName],
            items: products[categoryName].items
        });
    }

    render(){
        return(
           <Layout>
                <div className='category-page'>
                    <h2 className="text-center category-name my-4">{ this.state.category.name }</h2>
                    <ProductList products={this.state.items} />
                </div>
           </Layout>
        )
    }
}

export default Category
