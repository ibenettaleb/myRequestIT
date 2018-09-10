import React, {Component} from 'react';
import { Container, Row, Col, Card, CardImg, CardTitle, CardColumns, CardBody } from 'reactstrap';

import logoWindows from '../../../assets/images/windowsLogo.png';
import logoUbuntu from '../../../assets/images/logoUbuntu.png';
import logoRedHat from '../../../assets/images/logoRedHat.png';

import classes from './Card.css';

class card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            addClassWin: false,
            addClassUb: false,
            addClassRh: false
        }
    };

    toggleWin() {
        this.setState({addClassWin: !this.state.addClassWin});
    };

    toggleUb() {
        this.setState({addClassUb: !this.state.addClassUb});
    };

    toggleRh() {
        this.setState({addClassRh: !this.state.addClassRh});
    };

    render() {
        let boxClassWin = [classes.border];
        if(this.state.addClassWin) {
            boxClassWin.push(classes.borderSelected);
        }

        let boxClassUb = [classes.border];
        if(this.state.boxClassUb) {
            boxClassUb.push(classes.borderSelected);
        }

        let boxClassRh = [classes.border];
        if(this.state.boxClassRh) {
            boxClassRh.push(classes.borderSelected);
        }
        

        return(
            <Container>
                <Row>
                    <Col sm="12" md={{ size: 8, offset: 2 }}>
                        <CardColumns>
                            <Card className={boxClassWin.join(' ')} onClick={this.toggleWin.bind(this)}>
                                <CardImg top width="100%" src={logoWindows} alt="OS" />
                                <CardBody>
                                    <CardTitle>Windows Server</CardTitle>
                                </CardBody>
                            </Card>
                            <Card className={boxClassUb.join(' ')} onClick={this.toggleUb.bind(this)}>
                                <CardImg top width="100%" src={logoUbuntu} alt="OS" />
                                <CardBody>
                                    <CardTitle>Ubuntu</CardTitle>
                                </CardBody>
                            </Card>
                            <Card className={boxClassRh.join(' ')} onClick={this.toggleRh.bind(this)}>
                                <CardImg top width="100%" src={logoRedHat} alt="OS" />
                                <CardBody>
                                    <CardTitle>RedHat</CardTitle>
                                </CardBody>
                            </Card>
                        </CardColumns>
                    </Col>
                </Row>
            </Container>
        )
    };
};

export default card;
