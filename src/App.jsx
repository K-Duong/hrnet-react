import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import { RouterProvider } from "react-router-dom";
import { router } from "./router/route";
import "./App.css";

function App({children}) {
  return (
  <LocalizationProvider dateAdapter={AdapterDayjs}>
     <RouterProvider router={router}>
      {children}
      </RouterProvider>
  </LocalizationProvider>
  );
}

export default App;
