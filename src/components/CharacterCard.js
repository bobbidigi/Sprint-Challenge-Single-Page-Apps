import React from "react";
import {
  Card, CardText, CardBody,
  CardTitle, CardImg
} from 'reactstrap';

export default function CharacterCard(props) {
  console.log(props)
  return(
    <Card>
      <CardBody>
        <CardImg src={props.character.image}/>
        <CardTitle>{props.character.name}</CardTitle>
      </CardBody>
    </Card>
  ); 
}
