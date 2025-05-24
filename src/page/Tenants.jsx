import Navbar from "../component/Navbar";
import TenantList from "../component/TenantList";
import TenantToolbar from "../component/TenantToolbar";

const Tenants = () => {
  return (
    <>
      <Navbar />

      <div className="container mt-12">
        <h2 className="font-poppins text-4xl font-bold"> Tenant List </h2>
      </div>

      <TenantToolbar />

      <TenantList />
    </>
  );
};

export default Tenants;
