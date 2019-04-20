import React, { Component } from 'react';
import { connect } from 'react-redux';
import { InputGroup, FormControl, Button, Container, Row, Col } from 'react-bootstrap';

const mapDispatchToProps = (dispatch) => {return {dispatch}}

class Search extends Component {
	constructor(props){
		super(props);

		this.handleClick = this.handleClick.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleClick(event){
		event.preventDefault();
		this.props.dispatch({
			type: "FETCH_FORECAST",
			payload: {
				value: this.value
			}
		});
	}

	handleChange(event){
		this.value = event.target.value;
	}

	render(){
		return (
			<div>
				<Container>
					<Row>
						<Col>
							<InputGroup className="mb-3">
								<FormControl
								placeholder="City"
								aria-label="City"
								aria-describedby="basic-addon2"
								onChange={this.handleChange}
								/>
								<InputGroup.Append>
									<Button 
									variant="outline-primary" 
									onClick={this.handleClick}>
									Search
									</Button>
								</InputGroup.Append>
							</InputGroup>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}

export default connect(null, mapDispatchToProps)(Search);