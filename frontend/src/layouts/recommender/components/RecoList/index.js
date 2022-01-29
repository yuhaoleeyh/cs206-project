// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

// Soft UI Dashboard React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";

// Dashboard layout components
import RecoBox from "layouts/recommender/components/RecoBox";

function RecoList({jobs}) {

  return (
    <SuiBox py={3}>
      <Grid container spacing={3}>
          {jobs.map(job => (
            <Grid item xs={12} sm={6} md={6} lg={4}>
              <RecoBox
                key={job.id}
                company={job.company}
                title={job.title}
                desc={job.desc}
              />
            </Grid>
          ))}
      </Grid>
    </SuiBox>
  )
}

export default RecoList;