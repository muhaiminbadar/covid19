import { Container, Card, Col } from 'react-bootstrap';

function Tracker(props) 
{
    const tech = [
        {name: "React", desc: "A JavaScript library for building user interfaces.", link: "https://reactjs.org/" },
        {name: "React-Bootstrap", desc: "React-Bootstrap replaces the Bootstrap JavaScript. Each component has been built from scratch as a true React component, without unneeded dependencies like jQuery.", link: "https://react-bootstrap.github.io/" }
    ]
    const src = [
         {name: "Disease.sh", desc: "An open API for disease-related statistics.", link: "https://disease.sh" }
    ]
    return (
        <Container>
            <Card bg={'dark'} text={'light'} className="mb-2">
                <Card.Header>Technology Information</Card.Header>
                <Card.Body>

                    <h1> Technology </h1>
                    <hr style={{background: 'white'}} />
                    {tech.map((e, key) => 
                        <div key={key}>
                        <Card.Title> {e.name} </Card.Title>
                        <Card.Text>{e.desc}</Card.Text> <Col className="text-right"> <a href={e.link}>{e.link}</a></Col>
                        </div>
                    )}

                    <h1> Sources </h1>
                    <hr style={{background: 'white'}} />
                    {src.map((e, key) => 
                        <div key={key}>
                        <Card.Title> {e.name} </Card.Title>
                        <Card.Text>{e.desc}</Card.Text> <Col className="text-right"> <a href={e.link}>{e.link}</a></Col>
                        </div>
                    )}
                </Card.Body>
            </Card>
        </Container>
    );
}

export default Tracker;