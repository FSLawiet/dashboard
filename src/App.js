import { ProSidebarProvider } from "react-pro-sidebar";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";

import { AppBar } from "./components/global/AppBar";
import { NavBar } from "./components/global/NavBar";

import { Dashboard } from "./pages/Dashboard";
import { Team } from "./pages/Team";
import { Invoices } from "./pages/Invoices";
import { Contacts } from "./pages/Contacts";
import { Calendar } from "./pages/Calendar";
import { Bar } from "./pages/Bar";
import { Form } from "./pages/Form";
import { Line } from "./pages/Line";
import { Pie } from "./pages/Pie";
import { Faq } from "./pages/Faq";
import { Geography } from "./pages/Geography";

export const App = () => {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <ProSidebarProvider>
          <CssBaseline />
          <div className="app">
            <NavBar />
            <main className="content">
              <AppBar />
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/team" element={<Team />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/invoices" element={<Invoices />} />
                <Route path="/form" element={<Form />} />
                <Route path="/bar" element={<Bar />} />
                <Route path="/line" element={<Line />} />
                <Route path="/pie" element={<Pie />} />
                <Route path="/faq" element={<Faq />} />
                <Route path="/geo" element={<Geography />} />
                <Route path="/calendar" element={<Calendar />} />
              </Routes>
            </main>
          </div>
        </ProSidebarProvider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};
