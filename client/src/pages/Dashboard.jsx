/**
 * Route: /:id
 *
 * The dashboard page will allow users to search
 * for reviews and companys, as well as manage their accounts.
 */

import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Req from "../utils/Req";

const CompanyCard = ({ title, color, cId }) => {
  const navigate = useNavigate();
  return (
    <div className="d-flex ">
      <div
        className="border rounded p-2 m-2 pt-3 pb-3 outlineSwapGreen d-flex justify-content-center"
        style={{
          width: "300px",
          borderColor: `#${color ? color : "ffffff"}`,
          backgroundColor: `#${color ? color.toString(16) : "ffffff"}`,
        }}
        onClick={() => navigate(`/company/${cId}`)}
      >
        <h3>{title}</h3>
      </div>
    </div>
  );
};

const Dashboard = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [uId] = useState(localStorage.getItem("user"));
  const [user, setUser] = useState({});
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    const load = async () => {
      if (!uId) {
        navigate(`/login`);
      } else if (uId !== id) {
        navigate(`/${uId}`);
      } else {
        const userData = await Req.get(`/user/${id}`);
        if (userData) setUser(userData);
      }

      const companyData = await Req.get("/company");
      if (companyData) setCompanies(companyData);
    };

    load();
  }, [uId, id, navigate]);

  return (
    <>
      <h1>Welcome, {user.username}</h1>
      <h5>Joined: {new Date(user.createdAt).toDateString()}</h5>
      <hr />

      <div className="justify-content-center center">
        {companies.map((company, i) => {
          return (
            <CompanyCard
              cId={company.id}
              title={company.name}
              color={company.color}
              key={`CompanyCard-${i}`}
            />
          );
        })}
      </div>
    </>
  );
};

export default Dashboard;
