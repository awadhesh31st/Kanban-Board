import React from "react";
import TicketCard from "../TicketCard";
import { TicketType } from "../../types";
import { useAppContext } from "../../context/AppContext";
import Avtar from "../TicketCard/Avtar";

type GroupColumnProps = {
  groupKey: string;
  group: string;
  tickets: TicketType[];
};

const GroupColumn: React.FC<GroupColumnProps> = ({ groupKey, group, tickets }) => {
  const { groupBy, users } = useAppContext();
  return (
    <div className="group-column">
      <div className="ticket-group-container">
        <div className="ticket-group-left">
          {(groupBy === "status" || groupBy === "priority") && (
            <span className="ticket-group-icon">
              <img src={`${process.env.PUBLIC_URL}/assets/img/${group}.svg`} alt="avtar" />
            </span>
          )}
          {groupBy === "user" && <Avtar status={users?.[`${groupKey}`]?.available} />}
          <span className="ticket-group-text">{group}</span>
          <span className="ticket-group-text">{(tickets || [])?.length}</span>
        </div>
        <div className="ticket-group-right">
          <span className="ticket-group-icon">
            <img src={`${process.env.PUBLIC_URL}/assets/img/add.svg`} alt="avtar" />
          </span>
          <span className="ticket-group-icon">
            <img src={`${process.env.PUBLIC_URL}/assets/img/3 dot menu.svg`} alt="avtar" />
          </span>
        </div>
      </div>
      {tickets && (
        <div className="tickets-container">
          {(tickets || [])?.map((ticket) => <TicketCard key={ticket.id} ticket={ticket} />)}
        </div>
      )}
    </div>
  );
};

export default GroupColumn;
