import React from "react";
import {
  Card, CardText, CardBody,
  CardTitle
} from 'reactstrap';

export default function Episode(props) {
  // const { name, type, dimension, residents } = props;
  console.log(props)
  return (

        <Card>
          <CardBody>
            <CardTitle>{props.episode.episode}</CardTitle>
            <CardText>{props.episode.name}</CardText>
            <CardText>{props.episode.air_date}</CardText>
            {/* <CardText>{props.location.residents}</CardText> */}
          </CardBody>
        </Card>
  )
}