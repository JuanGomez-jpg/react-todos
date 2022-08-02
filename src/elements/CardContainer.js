import React from 'react';
import '../CSS/Card.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import  { Card, CardBody, CardTitle, CardSubtitle, CardText} from 'reactstrap';

const CardContainer = props => {
  <div className="CardContainer">
  <Card
    style={{
      width: '18rem'
    }}>
    <CardBody>
      <CardTitle>
      {props.title}
      </ CardTitle>
      <CardSubtitle>
      {props.completed}
      </ CardSubtitle>
      <CardText>
      {props.id}
      </ CardText>
    </ CardBody>
    </Card>
  </div>
}

export default CardContainer;
