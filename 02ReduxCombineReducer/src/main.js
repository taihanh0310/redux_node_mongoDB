"use strict"

import React from 'react';
import Menu from './components/pages/menu';
import Footer from './components/pages/footer';
import {connect} from 'react-redux';

class Main extends React.Component{
    render(){
        return(
            <div>
                <Menu cartItemsNumber={this.props.totalQuantity} />
                    {this.props.children}
                <Footer/>
            </div>
        )
    }
}

function mapStateToProps(state){
    debugger;
    return {
        totalQuantity: state.cart.totalQuantity
    }
}
export default connect(mapStateToProps)(Main)