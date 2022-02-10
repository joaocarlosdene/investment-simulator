import React from "react";
import 'bootstrap/dist/css/bootstrap.css'
import './resultado.css'
import { Col, Container, Row } from "react-bootstrap";
import Button from 'react-bootstrap/Button'

export default props =>
    <div>
         <h1>Simulador de Investimentos</h1>
        <Container>
            <Row>
                <Col className="col-12 text-center">
                    <h3>Resultado da Simulação</h3>
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col className="col-12 col-md-3 text-center resultado">
                    <h4>Valor Final Bruto</h4>
                    <p>Variavel</p>
                </Col>
                <Col className="col-12 col-md-3 text-center resultado">
                    <h4>Alíquota do IR</h4>
                    <p>Variavel</p>
                </Col>
                <Col className="col-12 col-md-3 text-center resultado">
                    <h4>Valor Pago em IR</h4>
                    <p>Variavel</p>
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col className="col-12 col-md-3 text-center resultado">
                    <h4>Valor Final Líquido</h4>
                    <p>Variavel</p>
                </Col>
                <Col className="col-12 col-md-3 text-center resultado">
                    <h4>Valor Total Investivo</h4>
                    <p>Variavel</p>
                </Col>
                <Col className="col-12 col-md-3 text-center resultado">
                    <h4>Ganho Líquido</h4>
                    <p>Variavel</p>
                </Col>
            </Row>
        </Container>
        <Button>Nova Simulação</Button>
    </div>