import React from "react";
import { Card } from "antd";
import "../styles/card.css";

const AddressCard = ({ item }) => {
  return (
    <div>
      <Card className="card">
        <h1>{item.payload_id}</h1>
        <p>
          Nationality <span className="sub">{item.nationality}</span>
        </p>
        <p className="text-body">
          Manufacturer <span className="sub">{item.manufacturer}</span>
        </p>
        <p className="text-body">
          Type
          <span className="sub"> {item.payload_type}</span>
        </p>
        <p className="text-body">
          Orbit <span className="sub">{item.orbit} </span>
        </p>
        <p className="text-body">{item.details}</p>
      </Card>
    </div>
  );
};

export default AddressCard;
