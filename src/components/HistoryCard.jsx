import React from "react";
import { Card } from "antd";
import "../styles/card.css";
function HistoryCard({ item }) {
  return (
    <div>
      <Card className="card">
        <h1>{item.title}</h1>
        <p className="text-body">{item.body}</p>
        <p className="text-body">{item.event_date_utc}</p>
        <p className="text-body">{item.event_date_unix}</p>
        <p className="text-body">
          Flight number <span className="sub">{item.flight_number}</span>
        </p>
        <p className="text-body">{item.details}</p>
      </Card>
    </div>
  );
}

export default HistoryCard;
