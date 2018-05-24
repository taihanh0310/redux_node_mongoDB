"use strict"

import React from 'react';
import {Well, Panel, FormControl, FormGroup, ControlLabel, Button} from 'react-bootstrap';

class BooksForm extends React.Component {

    render(){
        return(
            <Well>
                <Panel>
                    <FormGroup controlId="title">
                        <ControlLabel>
                            Title
                        </ControlLabel>
                        <FormControl
                            type="text"
                            placeholder="Enter title"
                            ref="title"
                        />
                    </FormGroup>

                    <FormGroup controlId="description">
                        <ControlLabel>
                            Description
                        </ControlLabel>
                        <FormControl
                            type="text"
                            placeholder="Enter description"
                            ref="description"
                        />
                    </FormGroup>

                    <FormGroup controlId="price">
                        <ControlLabel>
                            Price
                        </ControlLabel>
                        <FormControl
                            type="number"
                            placeholder="Enter price"
                            ref="price"
                        />
                    </FormGroup>

                    <FormGroup controlId="quantity">
                        <ControlLabel>
                            Quantity
                        </ControlLabel>
                        <FormControl
                            type="number"
                            placeholder="Enter quantity"
                            ref="quantity"
                        />
                    </FormGroup>

                    <Button 
                        onClick={this.handleSubmit.bind(this)} 
                        bsStyle="primary">
                        Save book
                    </Button>
                </Panel>
            </Well>
        )
    }
}
export default BooksForm;