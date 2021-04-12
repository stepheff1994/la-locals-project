import React from "react";
import {Container, Row, Col} from "react-bootstrap";

function Footer () {
    return (
        <footer style={{width:"100%"}} className="color-nav nav-text fixed-bottom py-10" >
            <Container>
                <Row>
                    <Col className="text-center py-3">
                        Copyright &copy; LA LOCALS 2021
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}



export default Footer