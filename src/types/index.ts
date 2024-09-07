export type TicketType = {
  id: string;
  priority: number;
  status: string;
  tag: string[];
  title: string;
  userId: string;
};

export type UserType = {
  id: string;
  name: string;
  available: boolean;
};

export type ResponseDataType = {
  tickets: TicketType[];
  users: UserType[];
};

export type AppContextType = {
  priorityLabels: string[];
  tickets: TicketType[];
  setTickets: React.Dispatch<React.SetStateAction<TicketType[]>>;
  users: UserType[];
  setUsers: React.Dispatch<React.SetStateAction<UserType[]>>;
  groupBy: string;
  setGroupBy: (value: string) => void;
  sortBy: string;
  setSortBy: (value: string) => void;
  groupingType: GroupingType;
  setGroupingType: React.Dispatch<React.SetStateAction<GroupingType>>;
  activeGroup: KeyValueType;
};

export type GroupingType = {
  status?: KeyValueType;
  user?: KeyValueType;
  priority?: KeyValueType;
};

export type KeyValueType = { [key: string]: string };
