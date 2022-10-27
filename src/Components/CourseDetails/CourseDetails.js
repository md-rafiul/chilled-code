import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";
import Pdf from "react-to-pdf";

const ref = React.createRef();

const CourseDetails = () => {
  const Details = useLoaderData();
  const { id, displayName, imgURL, details } = Details;

  return (
    <div className="container my-3 text-center" ref={ref}>
      <div className="d-flex justify-content-between mb-3 ">
        <h2>{displayName} details:</h2>
        <Pdf targetRef={ref} filename="code-example.pdf">
          {({ toPdf }) => (
            <Button variant="dark" onClick={toPdf}>
              Download PDF
            </Button>
          )}
        </Pdf>
      </div>

      <Card className="w-100">
        <Card.Img variant="top" src={imgURL} />
        <Card.Body>
          <Card.Title>{displayName}</Card.Title>
          <Card.Text>{details}</Card.Text>
          <Button variant="dark">
            <Link to={`/checkout/${id}`}>Get Premium Access</Link>
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CourseDetails;
