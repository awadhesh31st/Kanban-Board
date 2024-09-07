import React from "react";

const Avtar: React.FC = () => {
  return (
    <div className="ticket-user-avtar">
      <span className="user-avtar">
        <img src={`${process.env.PUBLIC_URL}/assets/img/avtar.svg`} alt="avtar" />
      </span>
      <span className="user-status" />
    </div>
  );
};

export default Avtar;
