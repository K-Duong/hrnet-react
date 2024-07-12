import { Link } from "react-router-dom";
function EmployeesPage () {
  return (
    <>
    <header>
      <h1>Current Employees</h1>
      <Link to="/">Home</Link>
    </header>
    <section>
      {/* TODO: table employee */}
    </section>
    </>
  )
}

export default EmployeesPage