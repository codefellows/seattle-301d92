import catData from './data.json'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Cat from './components/cat.js';


function App() {
  return (
    <Container className="p-3">
      <Row xs={2} sm={3} md={4} lg={5}>
        {catData.map(cat => (
          <Col key={cat.id}>
            <Cat name={cat.name} url={cat.url} />
          </Col>))}
      </Row>
    </Container>
  );
}

export default App;
