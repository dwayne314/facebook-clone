import useAuth from "../../../hooks/useAuth";
import Avatar from "@mui/material/Avatar";
import {
  Feedback,
  Settings,
  Help,
  Nightlight,
  ExitToApp,
  ArrowForwardIos,
} from "@mui/icons-material";
import "./ProfilePopup.css";

function ProfilePopup({ popupRef }) {
  const { user } = useAuth();
  const { logout } = useAuth();

  const profilePopupOptions = [
    { icon: Settings, text: "Settings & Privacy" },
    { icon: Help, text: "Help & Support" },
    { icon: Nightlight, text: "Display & Accessibility" },
    { icon: ExitToApp, text: "Log Out", onClick: logout },
  ];

  const staticProfilePopupOptions = profilePopupOptions.map((option) => {
    return (
      <div
        key={`profile popup option - ${option.text}`}
        className="profile-popup__section"
        onClick={option.onClick || null}
      >
        <span className="flex-center profile-popup__icon-container profile-popup__icon-bordered-container">
          <option.icon />
        </span>

        <div className="profile-popup__text-container">
          <span className="normal-text">{option.text}</span>
        </div>
        <span className="flex-center profile-popup__icon-container profile-popup__right-icon">
          <ArrowForwardIos />
        </span>
      </div>
    );
  });

  return (
    <div ref={popupRef} className="profile-popup">
      <div className="profile-popup__section">
        <span className="profile-popup__icon-container">
          <Avatar id="profile-popup__avatar" src={user?.photoURL}></Avatar>
        </span>

        <div className="profile-popup__text-container">
          <span className="bolded">{user?.displayName}</span>
          <span className="normal-text alt-text">See your profile</span>
        </div>
      </div>
      <hr></hr>
      <div className="profile-popup__section">
        <span className="flex-center profile-popup__icon-container profile-popup__icon-bordered-container">
          <Feedback />
        </span>

        <div className="profile-popup__text-container">
          <span className="normal-text">Give Feedback</span>
          <span className="profile-popup__small-text alt-text">
            Help us improve the new Facebook.
          </span>
        </div>
      </div>
      <hr></hr>
      {staticProfilePopupOptions}
    </div>
  );
}

export default ProfilePopup;
