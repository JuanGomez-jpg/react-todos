import React from 'react';
import '../CSS/Card.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import  { Card, CardBody, CardTitle, CardSubtitle, CardText, Badge} from 'reactstrap';

const CardContainer = props => {
  return (
    <div className="CardContainer">
    <Card className="card">
      <CardBody>
        <CardTitle>
        <h4>{props.title}</h4>
        </ CardTitle>
        <CardSubtitle>
        <h5>{props.completed ? (<Badge color="success">Completed</Badge>) : (<Badge color="danger">Incompleted</Badge>)}</h5>
        </ CardSubtitle>
        <CardText>
        <h5>{<Badge color="info">{props.id}</Badge>}</ h5>
        </ CardText>
      </ CardBody>
      </Card>
    </div>
)
}

export default CardContainer;
