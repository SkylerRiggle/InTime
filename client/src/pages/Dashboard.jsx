/**
 * Route: /:id
 *
 * The dashboard page will allow users to search
 * for reviews and companys, as well as manage their accounts.
 */

const Dashboard = () => {
  return (
    <>
      Dashboard Page
      <button id="view-companies">View Companies</button>
      <table>
        <td>Amazon</td>
        <td>Apple</td>
      </table>
    </>
  );
};

export default Dashboard;
