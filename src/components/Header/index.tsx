import React, { useState } from "react";
import { useAppContext } from "../../context/AppContext";

const Header: React.FC = () => {
  const { groupBy, setGroupBy, sortBy, setSortBy } = useAppContext();
  const [showFilter, setShowFilter] = useState<boolean>(false);

  const handleGroupByChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setGroupBy(e?.target?.value);
  };

  const handleSortByChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(e.target.value);
  };

  return (
    <div className="header">
      <button className="header-btn" onClick={() => setShowFilter(!showFilter)}>
        <img src={`${process.env.PUBLIC_URL}/assets/img/Display.svg`} alt="Display Icon" className="header-btn-icon" />
        <span className="header-btn-title">Display</span>
        <img src={`${process.env.PUBLIC_URL}/assets/img/down.svg`} alt="Dropdown Icon" className="header-btn-action" />
      </button>

      {showFilter && (
        <div className="filter-container">
          <div className="filter">
            <div className="group-title">Grouping</div>
            <select className="group-options" value={groupBy} onChange={handleGroupByChange}>
              <option value="status">Status</option>
              <option value="user">User</option>
              <option value="priority">Priority</option>
            </select>
          </div>
          <div className="filter">
            <div className="group-title">Ordering</div>
            <select className="group-options" value={sortBy} onChange={handleSortByChange}>
              <option value="priority">Priority</option>
              <option value="title">Title</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
