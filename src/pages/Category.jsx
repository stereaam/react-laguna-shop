import React from 'react'
import Layout from '../components/Layout'
import products from '../utils/products.json'
import ProductList from '../components/ProductList'
import FilterBar from '../components/FilterBar'
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


    filterProducts = (filter, interval) => { 
      const filteredCategoryName = this.props.match.params.categoryName
      switch(interval){
        case('first-interval'):
                filter
                ? this.setState({
                    items: products[filteredCategoryName].items.filter( item => item.price <30 )
                })
                : this.setState({
                    items: products[filteredCategoryName].items
                })
                break
        case('second-interval'):
                filter
                ? this.setState({
                    items: products[filteredCategoryName].items.filter( item => item.price >= 30 && item.price <= 50 )
                })
                : this.setState({
                    items: products[filteredCategoryName].items
                })
                break
        case('third-interval'):
                filter
                ? this.setState({
                    items: products[filteredCategoryName].items.filter( item => item.price > 50 )
                })
                : this.setState({
                    items: products[filteredCategoryName].items
                })
                break
        case('no-filter'):
                this.setState({
                    items: products[filteredCategoryName].items
                })
                break
        default:
                this.setState({items: products[filteredCategoryName].items})
      }
    }

    render(){
        return(
           <Layout>
                <div className='category-page'>
                        <h2 className="text-center category-name my-2">{this.state.category.name}</h2>
                        <FilterBar filterProducts = {this.filterProducts} />
                        <ProductList products={this.state.items} /> 

                </div>       
           </Layout>
        )
    }
}

export default Category
