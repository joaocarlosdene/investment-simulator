import React from "react";
import 'bootstrap/dist/css/bootstrap.css'
import './simulador.css'
import { Col, Container, Row } from "react-bootstrap";
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import Resultado from '../pages/resultado'



export default props =>
    <div className="formulario">
        <Container >
        <Row>
            <Col className="col-12 text-center">
            <h3>Simulador</h3>
            </Col>
        </Row>
        <Row className="justify-content-md-center">
            <Col className="col-12 col-md-4 text-center service-box2 ">
                <p>Rendimento</p>
                <ButtonGroup size="lg" className="mb-2">
                    <Button>Bruto</Button>
                    <Button>Liquido</Button>
                </ButtonGroup>
                <Form>
                    <Form.Group className="mb-3" controlId="formGroup">
                        <Form.Label>Aporte Inicial</Form.Label>
                        <Form.Control type="number" placeholder="Digite aqui seu aporte" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroup">
                        <Form.Label>Prazo (em meses)</Form.Label>
                        <Form.Control type="number" placeholder="Digite aqui o prazo" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroup">
                        <Form.Label>IPCA (ao ano)</Form.Label>
                        <p>10,06%</p>
                    </Form.Group>
                </Form>
                <Button variant="primary" type="submit">
                    Limpar Campos
                </Button>
            </Col>
            <Col className="col-12 col-md-4 text-center service-box2 ">
            <p>Tipos de indexação</p>
            <ButtonGroup size="lg" className="mb-2">
                <Button>PRÉ-FIXADO</Button>
                <Button>POS-FIXADO</Button>
            </ButtonGroup>
            <Form>
                <Form.Group className="mb-3" controlId="formGroup">
                    <Form.Label>Aporte Mensal</Form.Label>
                    <Form.Control type="number" placeholder="Digite aqui seu aporte" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroup">
                    <Form.Label>Rentabilidade</Form.Label>
                    <Form.Control type="number" placeholder="Digite aqui o prazo" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroup">
                    <Form.Label>CDI (ao ano)</Form.Label>
                    <p>9,18%</p>
                </Form.Group>
            </Form>
                        <Button variant="primary" type="submit">
                            Simular
                        </Button>
            </Col>
        </Row>
        </Container>
        
       
    </div>

    