import React from "react";
import { TicketType } from "../../types";
import Avtar from "./Avtar";
import { useAppContext } from "../../context/AppContext";

type TicketCardProps = {
  ticket: TicketType;
};

const TicketCard: React.FC<TicketCardProps> = ({ ticket }) => {
  const { groupBy, groupingType } = useAppContext();
  return (
    <div className="ticket-card">
      <div className="ticket-user">
        <span className="ticket-id">{ticket.id}</span>
        {groupBy !== "user" && <Avtar />}
      </div>
      <div className="ticket-title">
        {groupBy !== "status" && (
          <img
            className="ticket-tag-icon"
            src={`${process.env.PUBLIC_URL}/assets/img/${groupingType?.status?.[`${ticket.status}`]}.svg`}
            alt={groupingType?.priority?.[`${ticket.priority}`]}
          />
        )}
        <span className="title">{ticket.title}</span>
      </div>
      <div className="ticket-tags">
        {groupBy !== "priority" && (
          <div className="ticket-tag">
            <img
              className="ticket-tag-icon"
              src={`${process.env.PUBLIC_URL}/assets/img/${groupingType?.priority?.[`${ticket.priority}`]}.svg`}
              alt={groupingType?.priority?.[`${ticket.priority}`]}
            />
          </div>
        )}
        {ticket?.tag?.map((item: string) => {
          return (
            <div className="ticket-tag">
              <span className="ticket-tag-css-icon" />
              <span className="ticket-tag-name">{item}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TicketCard;
