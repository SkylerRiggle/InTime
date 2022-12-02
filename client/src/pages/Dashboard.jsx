/** 
 * Route: /:id
 * 
 * The dashboard page will allow users to search 
 * for reviews and companys, as well as manage their accounts.
 */

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

 const Dashboard = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const user = localStorage.getItem('user');
    if (!user) navigate(`/login`);
  })

  return (
    <>
      Dashboard Page
    </>
  );
 };
 
 export default Dashboard;
 