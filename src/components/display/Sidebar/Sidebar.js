import useAuth from "../../../hooks/useAuth";
import Avatar from "@mui/material/Avatar";
import {
  Group,
  Groups,
  LocalGroceryStore,
  AddToQueue,
  History,
  Bookmark,
  Flag,
  Event,
} from "@mui/icons-material";
import "./Sidebar.css";

function Sidebar() {
  const { user } = useAuth();

  const staticSidebarOptions = [
    { icon: Group, title: "Friends" },
    { icon: Groups, title: "Groups" },
    { icon: LocalGroceryStore, title: "Marketplace" },
    { icon: AddToQueue, title: "Watch" },
    { icon: History, title: "Memories" },
    { icon: Bookmark, title: "Saved" },
    { icon: Flag, title: "Pages" },
    { icon: Event, title: "Events" },
  ];

  const staticSidebar = staticSidebarOptions.map((sidebarOption, index) => {
    return (
      <li key={`sidebar option ${sidebarOption.title}`}>
        <div className="sidebar__section">
          {<sidebarOption.icon />}
          <span className="sidebar__text">{sidebarOption.title}</span>
        </div>
      </li>
    );
  });

  return (
    <div className="sidebar hidden-under-900">
      <ul className="sidebar__sidebar-list normal-text">
        <li>
          <div className="sidebar__section sidebar__profile-container">
            <Avatar src={user?.photoURL} />
            <span className="sidebar__text">{user?.displayName}</span>
          </div>
        </li>
        {staticSidebar}
      </ul>
    </div>
  );
}

export default Sidebar;
