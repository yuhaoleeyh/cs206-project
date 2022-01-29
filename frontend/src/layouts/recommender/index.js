/**
=========================================================
* Soft UI Dashboard React - v3.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

// Soft UI Dashboard React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";

// Soft UI Dashboard React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import MiniStatisticsCard from "examples/Cards/StatisticsCards/MiniStatisticsCard";
import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";
import GradientLineChart from "examples/Charts/LineCharts/GradientLineChart";

// Soft UI Dashboard React base styles
import typography from "assets/theme/base/typography";

// Dashboard layout components
import RecoList from "layouts/recommender/components/RecoList";

function Recommender() {

  const data = [
    {id: 1, company : "Koufu", title : "Software Engineer", desc : "Job description. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam diam nibh, imperdiet id imperdiet id, rhoncus nec nisi."},
    {id: 2, company : "SMU", title : "Cleaner", desc : "Job description. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam diam nibh, imperdiet id imperdiet id, rhoncus nec nisi."},
    {id: 3, company : "Google", title : "Chef", desc : "Job description. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam diam nibh, imperdiet id imperdiet id, rhoncus nec nisi."},
    {id: 4, company : "DBS Bank", title : "Comedian", desc : "Job description. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam diam nibh, imperdiet id imperdiet id, rhoncus nec nisi."},
  ]

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <RecoList jobs={data}/>
      <Footer />
    </DashboardLayout>
  );
}

export default Recommender;
