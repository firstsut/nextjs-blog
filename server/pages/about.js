import React,{Component} from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Layout from '../components/Layout';

class About extends Component{
    render(){
        return(
            <Layout page="about" title="เกี่ยวกับเรา">                      
                <div>
                    <h3>Blog application for show all products</h3>
                </div>
            </Layout>
        )
    }
}

export default About;