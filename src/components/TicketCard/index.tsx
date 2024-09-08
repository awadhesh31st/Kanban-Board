import React, { useMemo } from "react";
import { TicketType } from "../../types";
import Avtar from "./Avtar";
import { useAppContext } from "../../context/AppContext";

type TicketCardProps = {
  ticket: TicketType;
};

const TicketCard: React.FC<TicketCardProps> = ({ ticket }) => {
  const { groupBy, groupingType, users } = useAppContext();
  const { id, title, status, priority, tag = [], userId } = ticket;

  console.log(users, userId);

  const statusIconSrc = useMemo(() => {
    return groupBy !== "status" ? `${process.env.PUBLIC_URL}/assets/img/${groupingType?.status?.[status]}.svg` : null;
  }, [groupBy, status, groupingType]);

  const priorityIconSrc = useMemo(() => {
    return groupBy !== "priority"
      ? `${process.env.PUBLIC_URL}/assets/img/${groupingType?.priority?.[priority]}.svg`
      : null;
  }, [groupBy, priority, groupingType]);

  return (
    <div className="ticket-card">
      <div className="ticket-user">
        <span className="ticket-id">{id}</span>
        {groupBy !== "user" && <Avtar status={users?.[`${userId}`]?.available} />}
      </div>

      <div className="ticket-title">
        {statusIconSrc && (
          <img className="ticket-tag-icon" src={statusIconSrc} alt={groupingType?.priority?.[priority]} />
        )}
        <span className="title">{title}</span>
      </div>

      <div className="ticket-tags">
        {priorityIconSrc && (
          <div className="ticket-tag">
            <img className="ticket-tag-icon" src={priorityIconSrc} alt={groupingType?.priority?.[priority]} />
          </div>
        )}
        {tag.map((item) => (
          <div className="ticket-tag" key={item}>
            <span className="ticket-tag-css-icon" />
            <span className="ticket-tag-name">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TicketCard;
