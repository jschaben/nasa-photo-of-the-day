import React from "react";
import { Card as Cardstyle} from "reactstrap";
import {Container} from "reactstrap";
import {CardTitle, CardSubtitle} from "reactstrap";
import {Button} from "reactstrap";

const Cardset = props => {
  function refreshPage(){
    window.location.reload(false);
  }  
  return (
      <Container key={props.id}>
      <Cardstyle color="dark" className="text-white">
        <h3>{props.date}</h3>
        <h2>{props.title}</h2>
        <Button onClick={refreshPage}> New Image </Button>
        <img alt="Random NASA pic of the day" src={props.url} />
        <hr></hr>
        <CardSubtitle>{props.explanation}</CardSubtitle>
      </Cardstyle>
    </Container>
    );
};

export default Cardset;