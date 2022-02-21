import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/display/Sidebar/Sidebar";
import Body from "../../components/display/Body/Body";
import Contacts from "../../components/display/Contacts/Contacts";
import useAuth from "../../hooks/useAuth";
import Header from "../../components/display/Header/Header";
import "./Home.css";

function Home() {
  const navigate = useNavigate();
  const { user } = useAuth();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);
  return user ? (
    <div className="home">
      <Header />
      <Sidebar />
      <Body />
      <Contacts />
    </div>
  ) : (
    ""
  );
}

export default Home;
