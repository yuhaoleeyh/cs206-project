import { useState, useEffect } from "react";
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


// Loader Component
import Loader from "react-spinners/ClipLoader";


function RecoList({ jobs }) {

  const [loading, setLoading] = useState(false);
  const [color, setColor] = useState("navy");

  useEffect(() => {
    if (jobs.length === 0) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [jobs]);

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




      {jobs.length === 0 ? <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "50vh" }}>
        <center><h1>Generating Deep Learning Recommendations..</h1>
        <Loader color={color} loading={loading} size={300} margin={0} /></center>
      </div> : <Grid container spacing={3}>
        {jobs.slice(3).map(job => (
          <Grid item xs={12} sm={6} md={6} lg={4}>
            <RecoBox
              key={job.id}
              company={job.company}
              title={job.job_title}
              desc={job.desc.length > 100 ? job.desc.substring(0, 97).concat("...") : job.desc}
            />
          </Grid>
        ))}
      </Grid>};
    </SuiBox>
  );
}

export default RecoList;
