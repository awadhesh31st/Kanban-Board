import React, { useCallback, useMemo } from "react";
import GroupColumn from "../GroupColumn";
import { useAppContext } from "../../context/AppContext";
import { TicketType } from "../../types";

const KanbanBoard: React.FC = () => {
  const { activeGroup, tickets = [], groupBy, sortBy } = useAppContext();

  const groupedTickets = useCallback(
    (group: string) => {
      const sortedTickets = [...tickets].sort((a, b) => {
        if (sortBy === "priority") return b.priority - a.priority;
        if (sortBy === "title") return a.title.localeCompare(b.title);
        return 0;
      });

      if (groupBy === "status") {
        return sortedTickets.filter((ticket: TicketType) => {
          return ticket?.status === group;
        });
      }
      if (groupBy === "user") {
        return sortedTickets.filter((ticket: TicketType) => {
          return ticket?.userId === group;
        });
      }
      if (groupBy === "priority") {
        return sortedTickets.filter((ticket: TicketType) => {
          return ticket?.priority?.toString() === group;
        });
      } else {
        return sortedTickets;
      }
    },
    [groupBy, sortBy, tickets]
  );

  const groupColumns = useMemo(() => {
    return (Object.keys(activeGroup) || [])?.map((group: string) => {
      const ticketList = groupedTickets(group);
      return <GroupColumn key={group} group={activeGroup[`${group}`]} tickets={ticketList} />;
    });
  }, [activeGroup, groupedTickets]);

  return <div className="kanban-board">{groupColumns}</div>;
};

export default KanbanBoard;
