import React,{Component} from 'react';
import Axios from 'axios';
import Layout from '../components/Layout';

class Product extends Component{

    constructor(props){
      super(props);
      this.state = {
        products : []
      }
    }   

    componentDidMount(){
      Axios.get('http://localhost:3002/products').then(res=>{
           this.setState({
              products : res.data
           })
      })
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
                      <p className="card-text text-right">{price} THB</p>
                      <hr/>                       
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
                      {this.showProducts()}
                  </div>
            </Layout>
        )
    }
}

export default Product;