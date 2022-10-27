import React from "react";
import "./Courses.css";
import { Col, Container, Row } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";
import CourseCard from "../CourseCard/CourseCard";

const Courses = () => {
  const coursesData = useLoaderData();

  return (
    <div className="container mt-3 text-center">
      <Container>
        <Row>
          <Col sm={4}>
            {coursesData.map((course) => (
              <Link
                to={`/courses/${course.id}`}
                key={course.id}
                className="Course d-block w-100"
              >
                {course.displayName}
              </Link>
            ))}
          </Col>
          <Col sm={8}>
            {coursesData.map((course) => (
              <CourseCard key={course.id} course={course}></CourseCard>
            ))}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Courses;
