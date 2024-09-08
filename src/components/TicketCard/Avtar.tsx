import React from "react";

type AvtarType = {
  status: boolean;
};

const Avtar: React.FC<AvtarType> = ({ status }) => {
  return (
    <div className="ticket-user-avtar">
      <span className="user-avtar">
        <img src={`${process.env.PUBLIC_URL}/assets/img/avtar.svg`} alt="avtar" />
      </span>
      <span className={`user-status ${status ? "active" : "inactive"}`} />
    </div>
  );
};

export default Avtar;
