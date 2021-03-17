import React, { Component } from 'react';
import { Container, Card, Row, CardColumns } from 'react-bootstrap';
import numberFormat from '../helper/readifyNumber';

class Tracker extends Component 
{
    constructor()
    {
      super();
      this.state={
        population: 0,
        data: [],
        time: 0,
      }
    }
  
    componentDidMount()
    {
      fetch('https://disease.sh/v3/covid-19/all')
      .then((response) => response.json())
      .then((findresponse)=>{
        delete findresponse.countryInfo;
        console.log(findresponse)
        this.setState({
          population: findresponse.population,
          data: {
              "Total Cases": findresponse.cases,
              "Recovered Cases": findresponse.recovered,
              "Active Cases": findresponse.active,
              "Total Tests:": findresponse.tests,
              "Test Per Million": findresponse.testsPerOneMillion,
              "New Cases Today": findresponse.todayCases,
              "Deaths Today": findresponse.todayDeaths,
              "Total Deaths": findresponse.deaths,
              "Critical Cases": findresponse.critical
          },
          time: new Date(findresponse.updated),
        })
      })
    }
  
    render () { 
        return (<Container>
        <Row style={{ background: 'purple', color: 'white', padding: 20, borderRadius: 5 }}>
           Fetched at {this.state.time.toLocaleString()} | Global Population: {numberFormat(this.state.population)}
        </Row>
        
        <div className='mt-5'>
        <CardColumns>
            {Object.entries(this.state.data).map(([key, value], idx) =>
                <div key={idx}>
                    <Card bg={'dark'} text={'light'} className="mb-2">
                        <Card.Header>{key}</Card.Header>
                        <Card.Body>
                            <Card.Title>{numberFormat(value)}</Card.Title>
                            <Card.Text>
                                
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            )}
        </CardColumns>
        </div>
        </Container>);
    }
}

export default Tracker;