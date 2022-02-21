import Avatar from "@mui/material/Avatar";
import { Search, Camera, ListOutlined } from "@mui/icons-material";
import JeremyHeadshotSrc from "../../../assets/headshot_jeremy.jpg";
import AlexHeadshotSrc from "../../../assets/headshot_alex.jpg";
import HannahHeadshotSrc from "../../../assets/headshot_hannah.jpg";
import JeffHeadshotSrc from "../../../assets/headshot_jeff.jpg";
import AndriaHeadshotSrc from "../../../assets/headshot_andria.jpg";
import DillonHeadshotSrc from "../../../assets/headshot_dillon.jpg";
import RichardHeadshotSrc from "../../../assets/headshot_richard.jpg";
import FrankHeadshotSrc from "../../../assets/headshot_frank.jpg";
import JustinHeadshotSrc from "../../../assets/headshot_justin.jpg";
import "./Contacts.css";

function Contacts() {
  const staticContacts = [
    { profilePic: JeremyHeadshotSrc, userName: "Jeremy Johnson" },
    { profilePic: AlexHeadshotSrc, userName: "Alex Hamilton" },
    { profilePic: HannahHeadshotSrc, userName: "Hannah Jacobs" },
    { profilePic: JeffHeadshotSrc, userName: "Jeff Richards" },
    { profilePic: AndriaHeadshotSrc, userName: "Andria Jefferson" },
    { profilePic: DillonHeadshotSrc, userName: "Dillon Jameson" },
    { profilePic: RichardHeadshotSrc, userName: "Richard Frost" },
    { profilePic: FrankHeadshotSrc, userName: "Frank Hendrix" },
    { profilePic: JustinHeadshotSrc, userName: "Justin Jameson" },
  ];

  const allContacts = staticContacts.map((contact) => (
    <li key={`contact ${contact.userName}`}>
      <div className="contacts__section">
        <span className="contacts__icon">
          <Avatar src={contact.profilePic} />
          <span className="contacts__online-icon-container">
            <span className="contacts__online-icon"></span>
          </span>
        </span>
        <span className="contacts__text">{contact.userName}</span>
      </div>
    </li>
  ));

  return (
    <div className="contacts hidden-under-1250">
      <div className="contacts__header alt-text">
        <div className="contacts__title large-text bolded">Contacts</div>
        <div className="contacts__icons">
          <span className="contacts__icon-container">
            <Camera className="contact-icon" />
          </span>
          <span className="contacts__icon-container">
            <Search className="contact-icon" />
          </span>
          <span className="contacts__icon-container">
            <ListOutlined className="contact-icon" />
          </span>
        </div>
      </div>
      <ul className="contacts__contacts-list">{allContacts}</ul>
    </div>
  );
}

export default Contacts;
