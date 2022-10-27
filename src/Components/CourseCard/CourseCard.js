import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const CourseCard = ({ course }) => {
  const { id, displayName, imgURL } = course;

  return (
    <div className="mb-3">
      <Link to={`/courses/${id}`} className="text-decoration-none course-img">
        <Card>
          <Card.Img variant="top" src={imgURL} />
          <Card.Body>
            <Card.Text>{displayName}</Card.Text>
          </Card.Body>
        </Card>
      </Link>
    </div>
  );
};

export default CourseCard;
