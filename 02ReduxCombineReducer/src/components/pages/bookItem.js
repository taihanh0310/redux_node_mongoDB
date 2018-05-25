import React from 'react'
import { Row, Col, Well, Button } from 'react-bootstrap'

//
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addToCart } from '../../actions/cartActions';

class BookItem extends React.Component {

	handleCart() {
		const book = [...this.props.cart,
		{
			_id: this.props._id,
			title: this.props.title,
			description: this.props.description,
			price: this.props.price, 
			quantity: 1
		}]

		// Check if cart is empty
		if(this.props.cart.lenght > 0){
			let _id = this.props._id;
			let cartIndex = this.props.cart.findIndex(function(cart){
				return cart._id == _id;
			});

			// if return -1 there are no item with same id

			if(cartIndex == -1){
				this.props.addToCart(book);
			}
			else{
				this.props.updateCart(_id, 1);
			}
		}
		// CART IS EMPTY
		else{
			this.props.addToCart(book);
		}
	}

	render() {
		return (
			<Well> 
				<Row> 
					<Col xs={12}> 
						<h6> {this.props.title} </h6> 
						<p>
							{this.props.description} 
						</p> 
						<h6>USD: {this.props.price} </h6> 
						<Button
							onClick={this.handleCart.bind(this)} 
							bsStyle='primary'> 
							Buy Now
						</Button>
					</Col>
				</Row> 
			</Well>
		)
	}
} function mapStateToProps(state) {
	return {
		cart:state.cart.cart
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		addToCart: addToCart
	}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(BookItem);
