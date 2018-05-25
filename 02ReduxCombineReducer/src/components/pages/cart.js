"use strict"

import React from 'react';
import { connect } from 'react-redux';
import { Modal, Panel, Col, Row, Well, Button, ButtonGroup, Label} from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { deleteCartItem, updateCart } from '../../actions/cartActions';

class Cart extends React.Component {

  // Modal show checkout cart
  constructor(){
    super();
    this.state = {
      showModal: false
    }
  }

  // open Modal
  openModal(){
    this.setState({showModal: true});
  }
  // close Modal
  closeModal(){
    this.setState({showModal: false});
  }

  onDelete(_id){
    const currentCartToDelete = this.props.cart;
    const indexToDelete = currentCartToDelete.findIndex(function(cart){
      return cart._id == _id;
    });

    let cartAfterDelete = [...currentCartToDelete.slice(0, indexToDelete), ...currentCartToDelete.slice(indexToDelete + 1)]; 

    this.props.deleteCartItem(cartAfterDelete);
  }

  onIncrement(_id){
    this.props.updateCart(_id, 1);
  }
  
  onDecrement(_id, quantity){
    if(quantity > 1){
      this.props.updateCart(_id, -1);
    }
  }
  
  render() {
    if (this.props.cart[0]) {
      return this.renderCart();
    } else {
      return this.renderEmpty();
    }
  }

  renderEmpty() {
    return (<div></div>)
  }


  // function empty Cart
  renderEmptyCart() {
    return (
      <div></div>
    )
  }

  // function render Cart
  renderCart() {
    const cartItemsList =
      this.props.cart.map(function (cartArr) {
        return (
          <Panel key={cartArr._id}>
            <Row>
              <Col xs={12} sm={4}>
                <h6>{cartArr.title}</h6> <span> </span>
              </Col>
              <Col xs={12} sm={2}>
                <h6>${cartArr.price} </h6>
              </Col>

              <Col xs={12} sm={2}>
                <h6>
                  Qty.  
                  <Label bsStyle="success">
                    {cartArr.quantity}
                  </Label>
                </h6>
              </Col>
              
              <Col xs={6} sm={4}>
                <ButtonGroup style={{minWidth: '300px'}}>
                  <Button bsStyle="default" bsSize="small" onClick={this.onDecrement.bind(this, cartArr._id, cartArr.quantity)}>-</Button>
                  <Button bsStyle="default" bsSize="small" onClick={this.onIncrement.bind(this, cartArr._id)}>+</Button>
                  <span>     </span>
                  <Button onClick={this.onDelete.bind(this, cartArr._id)} bsStyle="danger" bsSize="small">DELETE</Button>
                </ButtonGroup> 
              </Col>
            </Row>
          </Panel>)
      }, this)

    return (
      <Panel header="Cart" bsStyle="primary">
        {cartItemsList}

        <Row>
          <Col xs={12}>
            <h5>Total amount: {this.props.totalAmount}</h5>
            <Button onClick={this.openModal.bind(this)} bsStyle="success" bsSize="small">
              PROCEED TO CHECKOUT
            </Button>
          </Col>
        </Row>

        <Modal show={this.state.showModal} onHide={this.closeModal.bind(this)}>
          <Modal.Header closeButton>
            <Modal.Title> Thank you </Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <h6>Your order has been saved</h6>
            <p>You will receive an email confirmation</p>
          </Modal.Body>

          <Modal.Footer>
            <Col xs={6}>
              <h6>Total: ${this.props.totalAmount} </h6>
            </Col>
            <Button onClick={this.closeModal.bind(this)}> Close </Button>
          </Modal.Footer>
        </Modal>
      </Panel>)
  }
}


function mapStateToProps(state) {
  return {
    cart: state.cart.cart,
    totalAmount: state.cart.totalAmount
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
      deleteCartItem: deleteCartItem,
      updateCart: updateCart
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
