// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

// Soft UI Dashboard React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";

// Dashboard layout components
import RecoBox from "layouts/recommender/components/RecoBox";
import Box from "@mui/material/Box";

import "./index.css";

function RecoList({ jobs }) {
  if (jobs.length === 0) {
    return (
      <SuiBox py={3}>
        <SuiTypography variant="h5" fontWeight="medium" gutterBottom>
          Sorry, no results found. Please try again!
        </SuiTypography>
      </SuiBox>
    );
  }

  const doThis = () => {
    alert("HELLO WORLD")
  }

  return (
    <SuiBox py={3}>
      <div className="center">
        <b>After Jobility's deep learning analysis, we recommend the following:</b>
      </div>
      <div>&nbsp;</div>
      <Grid container rowSpacing={5} columnSpacing={{ xs: 10, sm: 10, md: 10 }}>
        <Grid item xs={2} sm={2} md={2} lg={2} />
        <Grid item xs={8} sm={8} md={8} lg={8}>
          {jobs.slice(0, 3).map((job) => (
            <div>
              <RecoBox
                key={job.id}
                company={job.company}
                title={job.job_title}
                desc={job.desc.length > 100 ? job.desc.substring(0, 97).concat("...") : job.desc}
              />
              <div>&nbsp;</div>
            </div>
          ))}
        </Grid>
      </Grid>

      <div className="center">
        <b>OTHER RECOMMENDATIONS</b>
      </div>
      <Grid container spacing={3}>
        {jobs.slice(3).map((job) => (
          <Grid item xs={12} sm={6} md={6} lg={4}>
            <RecoBox
              key={job.id}
              company={job.company}
              title={job.job_title}
              desc={job.desc.length > 100 ? job.desc.substring(0, 97).concat("...") : job.desc}
            />
          </Grid>
        ))}
      </Grid>
    </SuiBox>
  );
}

export default RecoList;
