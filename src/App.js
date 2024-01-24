import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, CardHeader, CardBody, CardText, Navbar, NavbarBrand, Row, Col } from 'reactstrap';

function App() {
  return (
    <>
      <div>
        <Navbar
          className="my-2"
          color="dark"
          dark
        >
          <NavbarBrand>
            <h3>COP - Monitoramento de Telefonia</h3>
          </NavbarBrand>
        </Navbar>
      </div>
      <div style={{padding:'10px', height:150}}>
        <Row xs='9' >
          <Col>
            <Card
              inverse
              style={{
                marginLeft:'10px',
                backgroundColor: '#614cc0',
                textAlign: 'center'
              }}
            >
              <CardHeader tag="h5">
                Entrante
              </CardHeader>
              <CardBody>
                <CardText tag="h5">
                  0
                </CardText>
              </CardBody>
            </Card>
          </Col>
          <Col>
            <Card
              inverse
              style={{
                backgroundColor: '#1ea32a',
                textAlign: 'center'
              }}
            >
              <CardHeader tag="h5">
                Atendidas
              </CardHeader>
              <CardBody>
                <CardText tag="h5">
                  0
                </CardText>
              </CardBody>
            </Card>
          </Col>
          <Col>
            <Card
              inverse
              style={{
                backgroundColor: '#d11c30',
                textAlign: 'center'
              }}
            >
              <CardHeader tag="h5">
                Perdidas
              </CardHeader>
              <CardBody>
                <CardText tag="h5">
                  0
                </CardText>
              </CardBody>
            </Card>
          </Col>
          <Col>
            <Card
              inverse
              style={{
                backgroundColor: '#1ea32a',
                textAlign: 'center'
              }}
            >
              <CardHeader tag="h5">
                % Atendidas
              </CardHeader>
              <CardBody>
                <CardText tag="h5">
                  0%
                </CardText>
              </CardBody>
            </Card>
          </Col>
          <Col>
            <Card
              inverse
              style={{
                backgroundColor: '#1446af',
                textAlign: 'center'
              }}
            >
              <CardHeader tag="h5">
                Retornos
              </CardHeader>
              <CardBody>
                <CardText tag="h5">
                  0%
                </CardText>
              </CardBody>
            </Card>
          </Col>
          <Col>
            <Card
              inverse
              style={{
                backgroundColor: '#d11c30',
                textAlign: 'center'
              }}
            >
              <CardHeader tag="h5">
                % Perdidas
              </CardHeader>
              <CardBody>
                <CardText tag="h5">
                  0%
                </CardText>
              </CardBody>
            </Card>
          </Col>
          <Col>
            <Card
              inverse
              style={{
                backgroundColor: '#d11c30',
                textAlign: 'center'
              }}
            >
              <CardHeader tag="h5">
                Perd. Total
              </CardHeader>
              <CardBody>
                <CardText tag="h5">
                  0%
                </CardText>
              </CardBody>
            </Card>
          </Col>
          <Col>
            <Card
              inverse
              style={{
                backgroundColor: '#1446af',
                textAlign: 'center',
                marginRight: '10px'
              }}
            >
              <CardHeader tag="h5">
                Atend. Total
              </CardHeader>
              <CardBody>
                <CardText tag="h5">
                  0%
                </CardText>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
      <div className="bg-light border"
          style={{
          width: '20rem',
          height: '',
          padding:'20px',
          textAlign: 'center'
          }}
          >
      <Col>
      <h3 style={{fontWeight: 'bold'}}>Indicadores de Performance</h3>
        <Card
          inverse
          style={{
            height: '9rem',
            backgroundColor: '#614cc0',
            textAlign: 'center'
          }}
        >
          <CardHeader tag="h5">
            TME - Dia
          </CardHeader>
          <CardBody>
            <CardText tag="h5">
              00:00:00
            </CardText>
          </CardBody>
        </Card>
        <p></p>
        <Card
          inverse
          style={{
            height: '9rem',
            backgroundColor: '#614cc0',
            textAlign: 'center'
          }}
        >
          <CardHeader tag="h5">
            TMA - Dia
          </CardHeader>
          <CardBody>
            <CardText tag="h5">
              00:00:00
            </CardText>
          </CardBody>
        </Card>
        <p></p>
        <Card
          inverse
          style={{
            height: '9rem',
            backgroundColor: '#1446af',
            textAlign: 'center'
          }}
        >
          <CardHeader tag="h5">
            TME - Mês
          </CardHeader>
          <CardBody>
            <CardText tag="h5">
              00:00:00
            </CardText>
          </CardBody>
        </Card>
        <p></p>
        <Card
          inverse
          style={{
            height: '9rem',
            backgroundColor: '#1446af',
            textAlign: 'center'
          }}
        >
          <CardHeader tag="h5">
            TMA - Mês
          </CardHeader>
          <CardBody>
            <CardText tag="h5">
              00:00:00
            </CardText>
          </CardBody>
        </Card>
        </Col>
      </div>
    </>
  );
}

export default App;
