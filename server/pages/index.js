import React,{Component} from 'react';
import Layout from '../components/Layout';

class Index extends Component{
    render(){
        return(
            <Layout page="home" title="Blog">                      
                <div>
                    <h3>Blog application using Next.js</h3>
                </div>
            </Layout>
        )
    }
}

export default Index;