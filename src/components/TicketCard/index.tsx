import React from "react";
import { TicketType } from "../../types";
import Avtar from "./Avtar";
import { useAppContext } from "../../context/AppContext";

type TicketCardProps = {
  ticket: TicketType;
};

const TicketCard: React.FC<TicketCardProps> = ({ ticket }) => {
  const { groupBy } = useAppContext();
  return (
    <div className="ticket-card">
      <div className="ticket-user">
        <span className="ticket-id">{ticket.id}</span>
        {groupBy !== "user" && <Avtar />}
      </div>
      <span className="ticket-title">{ticket.title}</span>
      <div></div>
    </div>
  );
};

export default TicketCard;
