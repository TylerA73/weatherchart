import React, { Component } from 'react';
import Chart from './components/Chart.jsx';
import Search from './components/Search.jsx';
import { Container, Row, Col } from 'react-bootstrap';
import logo from './logo.svg';
import './styles/styles.css';

class App extends Component {

  render() {
    return (
      <div className="App">
      	<Container>
   		<Row>
   			<Col>
	        	<Chart />
	        </Col>
        </Row>
        <Row>
        	<Col>
		        <Search />
		    </Col>
		</Row>
        </Container>
      </div>
    );
  }
}

export default App;
