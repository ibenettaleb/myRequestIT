import React from 'react';
import { Container, Row, Col, Card, CardImg, CardTitle, CardColumns, CardBody } from 'reactstrap';

const card = () => (
    <Container>
        <Row>
            <Col sm="12" md={{ size: 8, offset: 2 }}>
                <CardColumns>
                    <Card>
                        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="OS" />
                        <CardBody>
                            <CardTitle>Windows Server</CardTitle>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="OS" />
                        <CardBody>
                            <CardTitle>Ubuntu</CardTitle>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="OS" />
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
