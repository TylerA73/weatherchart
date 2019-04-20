import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ResponsiveContainer, LineChart, Line, linearGradient, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Label} from 'recharts';
import { Container, Row, Col } from 'react-bootstrap';

const mapStateToProps = (state) => {
	return {
		city: state.city
	}
}

const mapDispatchToProps = (dispatch) => {return {dispatch}}

class Chart extends Component{
	constructor(props){
		super(props);
	}
	
	render(){
		return(
			<div className='forecast-chart text-center'>
				<Row>
					<Col>
						<h1>
							{ `${this.props.city.name}, ${this.props.city.country}` }
						</h1>
					</Col>
				</Row>
				<Row>
					<Col>
						<h3>
							7 Day Forecast
						</h3>
					</Col>
				</Row>
				<Row>
					<Col>
						<ResponsiveContainer width="100%" height={600}>
							<LineChart data={this.props.city.forecast || this.initData} margin={{ top: 50, right: 50, left: 50, bottom: 50 }}>
								<Line isAnimationActive={true} id="high" type="monotone" dataKey="high" stroke="#DB6A44" />
								<Line isAnimationActive={true} id="low" type="monotone"  dataKey="low" stroke="#6EA099" />
								<CartesianGrid stroke="#E4E2CE" strokeDasharray="3 3"/>
								<XAxis dataKey="day" stroke="#E4E2CE">
									<Label value="Day" position="insideBottom" offset={-10}/>
								</XAxis>
								<YAxis unit="&deg;C" stroke="#E4E2CE">
									<Label id="y-label" value="Temperature" offset={0} position="left" angle={270} />
								</YAxis>
								<Tooltip />
								<Legend verticalAlign="top" height={36} />
							</LineChart>
						</ResponsiveContainer>
					</Col>
				</Row>
			</div>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Chart);