import React,{Component} from 'react';
import Link from 'next/link';

class Header extends Component{
    render(){
        const {page} = this.props;
        return (
            <div  style={{marginBottom:"5em"}}>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <Link href="/">
                        <a className="navbar-brand">Blog</a>
                    </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">                 
                        <li className="nav-item">
                            <Link  href="/product">
                                <a className={page == "product" ? "nav-link active" : "nav-link"}>Product</a>
                            </Link>
                        </li>      
                        <li className="nav-item">
                            <Link  href="/about">
                                <a className={page == "about" ? "nav-link active" : "nav-link"}>About</a>
                            </Link>
                        </li>                    
                    </ul>
                </div>
                </nav>
           
            </div> 
        )
    }
}

export default Header;