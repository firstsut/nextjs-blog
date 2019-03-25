import React,{Component} from 'react';
import Axios from 'axios';
import Layout from '../components/Layout';
import ContentLoader from 'react-content-loader';
import NumberFormat from 'react-number-format';

class Product extends Component{

     loader = false;
    constructor(props){
      super(props);
      this.state = {
        products : []
      }
    }

    

    componentWillMount(){
        this.loader = true;      
    }
    
    contentPreload(length){
      let result = []
      for (let i = 0; i < length; i++) {
        result.push(i);
      }
      if(result && result.length > 0){
        return result.map(index=>{
          return (
            <div className="col-md-3  mt-2" key={index}>
            <ContentLoader 
              width={250}  
              height={250}    
              speed={1}
                
            >
              <rect x="26" y="172" rx="4" ry="4" width="100" height="13" /> 
                <rect x="151" y="191" rx="4" ry="4" width="81" height="12.96" /> 
                <rect x="56" y="7.49" rx="5" ry="5" width="148" height="148" /> 
                <rect x="27.69" y="211" rx="4" ry="4" width="201" height="24.7" />
            </ContentLoader>
            </div>
          )
        }) 
      }
        
  }

    getProducts(){
      setTimeout(
        function() {
          Axios.get('http://localhost:3002/products').then(res=>{
            this.setState({
                products : res.data
            })
             
          })  
        }
        .bind(this),
        600
       );    
    }

    componentDidMount(){
      this.getProducts();
       this.loader = false;    
    }

    showProducts(){
      if(this.state.products && Array.isArray(this.state.products)){
           return this.state.products.map(({name,price,img,id})=>(                        
            <div className="col-md-3 mt-2" key={id}>
              <div className="card"> 
                  <div className="text-center">
                  <img alt="..." className="card-img-top" style={{width:'200px',height:'200px'}} src={img} />
                  </div>
                  
                  <div className="card-body">
                      <h4 className="card-title"><strong>{name}</strong></h4>
                      <NumberFormat thousandSeparator={true} displayType={'text'} value={price} renderText={value => <p className="card-text text-right">{value} THB</p>}  />                                                                               
                  </div>     
              </div>
          </div>                               
           ))   
      }
    }

    render(){
        return(
            <Layout page="product" title="สินค้าของเรา">                           
                  <div className="row">
                  { this.loader &&
                     this.contentPreload(8)
                  }
                  {
                    !this.loader &&
                    this.showProducts()
                  }                    
                  </div>
            </Layout>
        )
    }
}

export default Product;