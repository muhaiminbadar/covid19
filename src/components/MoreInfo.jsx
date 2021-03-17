import React from 'react';
import { Container, Card } from 'react-bootstrap';

function Tracker(props) 
{
    const covidLinks = [
        {title: "World Health Organization", text: "Coronavirus disease (COVID-19) pandemic", link: "https://www.who.int/emergencies/diseases/novel-coronavirus-2019"},
        {title: "Benefits.gov", text: "Coronavirus resources", link: "https://www.benefits.gov/help/faq/Coronavirus-resources"},
        {title: "HRSA", text: "Health Resources & Services Administration", link: "https://www.hrsa.gov/opa/COVID-19-resources"},
        {title: "Centers for Disease Control & Prevention", text: "Coronavirus resources", link: "https://www.cdc.gov/coronavirus/2019-ncov/index.html"},
        {title: "National Institutes of Health", text: "COVID-19 Research", link: "https://covid19.nih.gov/"},
    ]
    return (
        <Container>
            <Card bg={'dark'} text={'light'} className="mb-2">
                <Card.Header>Additional Information Regarding COVID-19</Card.Header>
                <Card.Body>
                    {covidLinks.map((e, key) => 
                        <div key={key}>
                        <Card.Title>{e.title}</Card.Title>
                        <Card.Text>
                            {e.text} - <a href={e.link}>{e.link}</a>
                        </Card.Text>
                        <hr style={{background: 'white'}} />
                        </div>
                    )}
                </Card.Body>
            </Card>
        </Container>
    );
}

export default Tracker;