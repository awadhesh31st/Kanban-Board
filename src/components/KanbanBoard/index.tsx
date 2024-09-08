import React, { useMemo } from "react";
import GroupColumn from "../GroupColumn";
import { useAppContext } from "../../context/AppContext";
import { TicketType } from "../../types";

const KanbanBoard: React.FC = () => {
  const { activeGroup, tickets = [], groupBy, sortBy } = useAppContext();

  const groupedTickets = useMemo(() => {
    const sortedTickets = [...tickets].sort((a, b) => {
      if (sortBy === "priority") return b.priority - a.priority;
      if (sortBy === "title") return a.title.localeCompare(b.title);
      return 0;
    });

    return (group: string) => {
      return sortedTickets.filter((ticket: TicketType) => {
        switch (groupBy) {
          case "status":
            return ticket?.status === group;
          case "user":
            return ticket?.userId === group;
          case "priority":
            return ticket?.priority?.toString() === group;
          default:
            return true;
        }
      });
    };
  }, [tickets, sortBy, groupBy]);

  const groupColumns = useMemo(() => {
    return Object.keys(activeGroup).map((group) => {
      const ticketList = groupedTickets(group);
      return <GroupColumn key={group} group={activeGroup[group]} tickets={ticketList} />;
    });
  }, [activeGroup, groupedTickets]);

  return <div className="kanban-board">{groupColumns}</div>;
};

export default KanbanBoard;
