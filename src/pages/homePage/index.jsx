import { Link } from "react-router-dom";
import Button from "../../components/button";
import "./style.css";
import DateSelector from "../../components/dateSelector";
import { dateFormater } from "../../utils/dateFormater";
import { useState } from "react";
function HomePage() {

  const [info, setInfo] = useState({
    firtName:"",
    lastName:"",
    birthday:"",
    startDate: "",
    street: "",
    city: "",
    zipCode: 0
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(info)

  }
  return (
    <div className="home-container p-4 flex flex-col gap-y-4 w-3/5">
      <header className="flex flex-col gap-y-4 items-center p-4">
        <h1 className="font-bold text-3xl">HRnet</h1>
        <Link to="/employee-list">View Current Employees</Link>
        <h2 className="font-bold text-2xl">Create Employee</h2>
      </header>
      <form className="flex flex-col justify-center gap-y-5 border-2 border-gray-500 rounded-md p-4">
        <div className="inputs">
          <div className="input-item">
            <label htmlFor="firtName">First Name</label>
            <input className="p-2 bg-input" placeholder="Steven" id="firtName" ></input>
          </div>
          <div className="input-item">
            <label htmlFor="LastName">Last Name</label>
            <input className="p-2 bg-input" placeholder="King" id="LastName" ></input>
          </div>
        </div>
        <div className="inputs">
          <div className="input-item">
            {/* TODO: component date table */}
            <DateSelector 
            labelItem={"Date of Birth"} 
            labelDate={""}
            handleChange={(newDate) => setInfo((prev) => {
              return {
                ...prev,
                birthday: dateFormater(newDate)
              }
            }
           
            )}
                        
            />
            {/* <label htmlFor="firtName">Date of Birth</label>
            <input className="p-2 bg-input" placeholder="Steven" id="firtName" ></input> */}
          </div>
          <div className="input-item">
          <DateSelector 
            labelItem={"Start Date"}
            labelDate={""}
            handleChange={(newDate) => setInfo(
              (prev) => {
                return {
                  ...prev,
                  startDate: dateFormater(newDate)
                }
              }
            )}
/>

            {/* <label htmlFor="LastName">Start Date</label>
            <input className="p-2 bg-input" placeholder="King" id="LastName" ></input> */}
          </div>
        </div>
        <fieldset className="address border border-gray-400 p-4">
          <legend>Address</legend>
        <div className="input-item">
            <label htmlFor="street">Street</label>
            <input className="p-2 bg-input" placeholder="Street" id="street" ></input>
          </div>
          <div className="input-item">
            <label htmlFor="city">City</label>
            <input className="p-2 bg-input" placeholder="Steven" id="city" ></input>
          </div>
          {/* Dropdowm menu for states */}
          <div className="input-item">
            <label htmlFor="zip-code">Zip Code</label>
            <input className="p-2 bg-input" placeholder="Steven" id="zip-code" ></input>
          </div>
        </fieldset>

          {/* Dropdowm menu for departement */}

        <Button type="submit" handleClick={handleSubmit}>Save</Button>
      </form>
    </div>
  )
}

export default HomePage