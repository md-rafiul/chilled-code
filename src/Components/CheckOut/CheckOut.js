import React from "react";
import { useLoaderData } from "react-router-dom";

const CheckOut = () => {
  const data = useLoaderData();

  console.log(data);

  return (
    <div className="container my-3 text-center">
      <h3 className="mt-5">
        You have purchased premium access for {data.displayName}
      </h3>
      <h3>Thanks for purchasing!</h3>
    </div>
  );
};

export default CheckOut;
