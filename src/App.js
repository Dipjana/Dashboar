import { ColorModeContext, useMode } from "./Theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import {Topbar} from "./scenes/global/Topbar";
import {Dashboard} from "./scenes/dashboard/Dashboard";
import Sidebar from "./scenes/global/Sidebar";

import {Team} from "./scenes/team/Team.js";
import Invoices from "./scenes/invoices/Invoices";
import {Contacts} from "./scenes/contacts/Contacts.js";
import Form from "./scenes/form/Form";
import FAQ from "./scenes/faq/FAQ";
import Calendar from "./scenes/calendar/Calender";
import Geography from "./scenes/geography/Geography";
import Bar from "./scenes/bar/Bar";
import Line from "./scenes/line/Line";
import Pie from "./scenes/pie/Pie";

function App() {
  const [theme, colorMode] = useMode();
  return (
<ColorModeContext.Provider value={colorMode}>
  <ThemeProvider theme={theme}>
  
    <CssBaseline />
  <div className="app">
    <Sidebar />
    <main className="content">
      <Topbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/team" element={<Team />} />
        <Route path="/invoices" element={<Invoices/>} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/form" element={<Form />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/bar" element={<Bar />} />
        <Route path="/line" element={<Line />} />
        <Route path="/pie" element={<Pie />} />
        <Route path="/geography" element={<Geography />} />
      </Routes>
    </main>
  </div>

  </ThemeProvider>
</ColorModeContext.Provider>
  );
}

export default App;
