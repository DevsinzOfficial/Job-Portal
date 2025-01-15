import DesktopSideMenu from "./Navigation/DesktopSideMenu";
import DashBoardNavbar from "./Navigation/DashBoardNavbar";
import Container from "./Container/Container";

const AdminHome = () => {
  return (
    <div>
      <section className="min-h-screen bg-gray-50">
        <DesktopSideMenu />
        <DashBoardNavbar />
        <Container />
      </section>
    </div>
  );
};

export default AdminHome;
