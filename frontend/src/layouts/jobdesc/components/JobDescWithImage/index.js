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
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

// Soft UI Dashboard React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";

// Images
import wavesWhite from "assets/images/shapes/waves-white.svg";
import rocketWhite from "assets/images/illustrations/rocket-white.png";
import googleimg from "assets/images/logos/Google__G__Logo.svg.png";

function JobDescWithImage() {
  return (
    <Card>
      <SuiBox p={2}>
        <Grid item xs={3} lg={3}>
          <SuiBox
            height="100%"
            display="grid"
            justifyContent="left"
            alignItems="center"
            bgColor=""
            borderRadius="sm"
            variant="gradient"
          >
            <SuiBox component="img" src={googleimg} alt="companyLogo" maxWidth='200px' width="50%" pt={3} />
          </SuiBox>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={12}>
            <SuiBox display="flex" flexDirection="column" height="100%">
              <SuiBox pt={1} mb={0.5}>
                <SuiTypography variant="body2" color="text" fontWeight="medium">
                  Google
                </SuiTypography>
              </SuiBox>
              <SuiTypography variant="h5" fontWeight="bold" gutterBottom>
                Software Engineer
              </SuiTypography>
              <SuiBox mb={6} >
                <SuiTypography variant="body2" color="text">Google&apos;s software engineers develop the next-generation technologies that change how billions of users connect, explore, and interact with information and one another.
                  Our products need to handle information at massive scale, and extend well beyond web search.
                  We&apos;re looking for engineers who bring fresh ideas from all areas, including information retrieval, distributed computing, large-scale system design, networking and data storage, security, artificial intelligence, natural language processing, UI design and mobile; the list goes on and is growing every day.
                  As a software engineer, you will work on a specific project critical to Google&apos;s needs with opportunities to switch teams and projects as you and our fast-paced business grow and evolve.
                  We need our engineers to be versatile, display leadership qualities and be enthusiastic to take on new problems across the full-stack as we continue to push technology forward.</SuiTypography>
                <br />
                <SuiTypography variant="body2" color="text">Minimum qualifications:</SuiTypography>
                <ul style={{ 'padding-left': '20px' }}>
                  <li ><SuiTypography variant="body2" color="text">Bachelors degree or equivalent practical experience.</SuiTypography></li>
                  <li ><SuiTypography variant="body2" color="text">Experience with software development in one or more programming languages, or experience with an advanced degree.</SuiTypography></li>
                  <li ><SuiTypography variant="body2" color="text">Experience with data structures or algorithms in either an academic or industry setting.</SuiTypography></li>
                </ul>
                <br />
                <SuiTypography variant="body2" color="text">Preferred qualifications:</SuiTypography>
                <ul style={{ 'padding-left': '20px' }}>
                  <li ><SuiTypography variant="body2" color="text">Master&apos;s degree or PhD in Computer Science or related technical field.</SuiTypography></li>
                  <li ><SuiTypography variant="body2" color="text">Experience with Android application development.</SuiTypography></li>
                  <li ><SuiTypography variant="body2" color="text">Experience with performance, large scale systems data analysis, visualization tools, and/or debugging.</SuiTypography></li>
                  <li ><SuiTypography variant="body2" color="text">Experience developing accessible technologies.</SuiTypography></li>
                </ul>
                <br/>
                <SuiTypography variant="body2" fontWeight='bold' color="text">Disability & Accessibility Requirements:</SuiTypography>
                <ul style={{ 'padding-left': '20px', columnCount: 2 }}>
                  <li ><SuiTypography variant="body2" color="text">Wheelchair Accessible: Yes</SuiTypography></li>
                  <li ><SuiTypography variant="body2" color="text">Suitable For: Physical, Motor, Hearing Disabilities</SuiTypography></li>
                  <li ><SuiTypography variant="body2" color="text">Available Assistive Technologies: Wheelchair, Rollator, Guiderails, Guidesticks</SuiTypography></li>
                  <li ><SuiTypography variant="body2" color="text">Employee Insurance: Available</SuiTypography></li>
                  <li ><SuiTypography variant="body2" color="text">Transport to Workplace: Provided</SuiTypography></li>
                  <li ><SuiTypography variant="body2" color="text">Disability Support Staff: Available</SuiTypography></li>
                </ul>
              </SuiBox>
            </SuiBox>

          </Grid>

        </Grid>
      </SuiBox>
    </Card>
  );
}

export default JobDescWithImage;
