const Navbar = () => {
  return (
    <div className="container py-8">
      <div className="flex items-center justify-between">
        <h1 className="text-primary font-lily text-3xl font-bold">BhadaBook</h1>

        <ul className="flex items-center gap-10">
          <li> Dashboard </li>
          <li> Tenant </li>
          <li> Records </li>
          <li> Expenses </li>
        </ul>

          <div
            className="flex cursor-pointer select-none items-center"
          >
            <div
              className={`relative h-6 w-11 rounded-full transition-colors duration-300 bg-primary`}
            >
              <span
                className={`absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform duration-300`}
              ></span>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Navbar;
