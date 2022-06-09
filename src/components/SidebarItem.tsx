import React from 'react';

interface SidebarItemProps {
  name: string;
  active: boolean;
  handleClick: React.MouseEventHandler<HTMLButtonElement>;
}

const SidebarItem = ({ name, active, handleClick }: SidebarItemProps) => {
  return (
    <button
      className={`sidebar-item ${active ? 'active' : ''}`}
      onClick={handleClick}
    >
      {name}
    </button>
  );
};

export default SidebarItem;
