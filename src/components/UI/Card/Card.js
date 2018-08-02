import React from 'react';
import { Container, Row, Col, Card, CardImg, CardTitle, CardColumns, CardBody } from 'reactstrap';

import logoWindows from '../../../assets/images/windowsLogo.png';
import logoUbuntu from '../../../assets/images/logoUbuntu.png';
import logoRedHat from '../../../assets/images/logoRedHat.png';

const card = () => (
    <Container>
        <Row>
            <Col sm="12" md={{ size: 8, offset: 2 }}>
                <CardColumns>
                    <Card>
                        <CardImg top width="100%" src={logoWindows} alt="OS" />
                        <CardBody>
                            <CardTitle>Windows Server</CardTitle>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardImg top width="100%" src={logoUbuntu} alt="OS" />
                        <CardBody>
                            <CardTitle>Ubuntu</CardTitle>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardImg top width="100%" src={logoRedHat} alt="OS" />
                        <CardBody>
                            <CardTitle>RedHat</CardTitle>
                        </CardBody>
                    </Card>
                </CardColumns>
            </Col>
        </Row>
    </Container>
);

export default card;
