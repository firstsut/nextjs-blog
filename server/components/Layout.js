import React,{Component} from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Head from 'next/head';

class Layout extends Component{
    render(){
        const {children,page,title} = this.props;
        return(
            <div>             
                <Head>
                    <meta charSet="utf-8" />                  
                    <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, shrink-to-fit=no"
                    />
                    <title>{title}</title>
                    <meta name="theme-color" content="#000000" />                    
                    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" />
                    <link href="https://fonts.googleapis.com/css?family=Kanit" rel="stylesheet" />
                 </Head>
                 <Header page={page}/>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                {children}
                            </div>
                        </div>
                    </div>                
                 <Footer/>
            </div>
        )
    }
}

export default Layout;