import React from "react";
import {
  Card, CardText, CardBody,
  CardTitle
} from 'reactstrap';

export default function LocationCard(props) {
  // const { name, type, dimension, residents } = props;
  // console.log(props)
  return (

        <Card>
          <CardBody>
            <CardTitle>{props.location.name}</CardTitle>
            <CardText>{props.location.type}</CardText>
            <CardText>{props.location.dimension}</CardText>
            {/* <CardText>{props.location.residents}</CardText> */}
          </CardBody>
        </Card>
  )
}
