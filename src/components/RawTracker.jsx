import React, { Component } from 'react';
import { Card, Row, Col, CardColumns } from 'react-bootstrap';

class Tracker extends Component 
{
    constructor()
    {
      super();
      this.state={
        data: [],
        time: 0,
      }
    }
  
    componentDidMount()
    {
      fetch('https://disease.sh/v3/covid-19/countries/USA')
      .then((response) => response.json())
      .then((findresponse)=>{
        delete findresponse.countryInfo;
        console.log(findresponse)
        this.setState({
          data: findresponse,
          time: new Date(),
        })
      })
    }
  
    render () { 
        return (<Col>
        <Row style={{ background: 'purple', color: 'white', padding: 20, borderRadius: 5 }}>
          <p> Fetched at {this.state.time.toLocaleString()} </p>
        </Row>
        
        <div className='mt-5'>
        <CardColumns>
            {Object.entries(this.state.data).map(([key, value], idx) => 
            <Card bg={'dark'} text={'light'} key={idx} className="mb-2">
                <Card.Header>{key}</Card.Header>
                <Card.Body>
                    <Card.Title> { value } </Card.Title>
                    <Card.Text>
                        
                    </Card.Text>
                </Card.Body>
            </Card>
            )}

        </CardColumns>
        </div>
        </Col>);
    }
}

export default Tracker;