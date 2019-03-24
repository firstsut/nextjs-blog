import React,{Component} from 'react';

class Footer extends Component{
    render(){
        return (
            <div style={{marginTop:"5em"}}>
            <nav className="navbar navbar-secondary bg-secondary fixed-bottom ">
                <div className="container justify-content-center ">
                    <p className="mt-1 text-white" ><strong>Copyright 2019</strong></p>
                </div>
            </nav>
            </div>
        )
    }
}

export default Footer;