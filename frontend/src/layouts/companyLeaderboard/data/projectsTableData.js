/* eslint-disable react/prop-types */
// @mui material components
import Icon from "@mui/material/Icon";

// Soft UI Dashboard React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import SuiProgress from "components/SuiProgress";

// Images
import logoSpotify from "assets/images/small-logos/logo-spotify.svg";
import logoInvesion from "assets/images/small-logos/logo-invision.svg";
import logoJira from "assets/images/small-logos/logo-jira.svg";
import logoSlack from "assets/images/small-logos/logo-slack.svg";
import logoWebDev from "assets/images/small-logos/logo-webdev.svg";
import logoXD from "assets/images/small-logos/logo-xd.svg";
import logoApple from "assets/images/small-logos/logo-apple.svg";
import logoAtlassian from "assets/images/small-logos/logo-atlassian.svg";
import logoFacebook from "assets/images/small-logos/logo-facebook.svg";
import logoGoogle from "assets/images/small-logos/logo-google.svg";

function Completion({ value, color }) {
  return (
    <SuiBox display="flex" alignItems="center">
      <SuiTypography variant="caption" color="text" fontWeight="medium">
        {value}
      </SuiTypography>
      <SuiBox width="8rem">
        <SuiProgress value={value} color={color} variant="gradient" label={false} />
      </SuiBox>
    </SuiBox>
  );
}

export default {
  columns: [
    { name: "rank", align: "center" },
    { name: "company", align: "center" },
    { name: "industries", align: "center" },
    { name: "hired", align: "center" },
    { name: "score", align: "center" },
  ],

  rows: [
    {
      rank: (
        <SuiTypography variant="button" color="text" fontWeight="medium">
          1
        </SuiTypography>
      ),
      company: [logoApple, "Apple"],
      industries: (
        <SuiTypography variant="button" color="text" fontWeight="medium">
          IT, Internet, Software & Services
        </SuiTypography>
      ),
      hired: (
        <SuiTypography variant="button" color="text" fontWeight="medium">
          2,890
        </SuiTypography>
      ),
      score:  <Completion value={98} color="info" />
    },
    {
      rank: (
        <SuiTypography variant="button" color="text" fontWeight="medium">
          2
        </SuiTypography>
      ),
      company: [logoGoogle, "Google"],
      industries: (
        <SuiTypography variant="button" color="text" fontWeight="medium">
          Telecommunications Services, Cable Supplier
        </SuiTypography>
      ),
      hired: (
        <SuiTypography variant="button" color="text" fontWeight="medium">
          1,345
        </SuiTypography>
      ),
      score:  <Completion value={96} color="success" />
    },
    {
      rank: (
        <SuiTypography variant="button" color="text" fontWeight="medium">
          3
        </SuiTypography>
      ),
      company: [logoFacebook, "Facebook"],
      industries: (
        <SuiTypography variant="button" color="text" fontWeight="medium">
          Banking and Financial Services
        </SuiTypography>
      ),
      hired: (
        <SuiTypography variant="button" color="text" fontWeight="medium">
          1,289
        </SuiTypography>
      ),
      score:  <Completion value={95} color="error" />
    },    {
      rank: (
        <SuiTypography variant="button" color="text" fontWeight="medium">
          4
        </SuiTypography>
      ),
      company: [logoAtlassian, "Atlassian"],
      industries: (
        <SuiTypography variant="button" color="text" fontWeight="medium">
          Retailing
        </SuiTypography>
      ),
      hired: (
        <SuiTypography variant="button" color="text" fontWeight="medium">
          2,019
        </SuiTypography>
      ),
      score:  <Completion value={92} color="info" />
    },
    {
      rank: (
        <SuiTypography variant="button" color="text" fontWeight="medium">
          5
        </SuiTypography>
      ),
      company: [logoSpotify, "Spotify"],
      industries: (
        <SuiTypography variant="button" color="text" fontWeight="medium">
          Food
        </SuiTypography>
      ),
      hired: (
        <SuiTypography variant="button" color="text" fontWeight="medium">
          987
        </SuiTypography>
      ),
      score:  <Completion value={91} color="success" />
    },
    {
      rank: (
        <SuiTypography variant="button" color="text" fontWeight="medium">
          6
        </SuiTypography>
      ),
      company: [logoInvesion, "Invesion"],
      industries: (
        <SuiTypography variant="button" color="text" fontWeight="medium">
          	Aerospace & Defense
        </SuiTypography>
      ),
      hired: (
        <SuiTypography variant="button" color="text" fontWeight="medium">
          870
        </SuiTypography>
      ),
      score:  <Completion value={90} color="error" />
    },
    {
      rank: (
        <SuiTypography variant="button" color="text" fontWeight="medium">
          7
        </SuiTypography>
      ),
      company: [logoJira, "Jira"],
      industries: (
        <SuiTypography variant="button" color="text" fontWeight="medium">
          Transportation and Logistics
        </SuiTypography>
      ),
      hired: (
        <SuiTypography variant="button" color="text" fontWeight="medium">
          1,045
        </SuiTypography>
      ),
      score:  <Completion value={83} color="info" />
    },
    {
      rank: (
        <SuiTypography variant="button" color="text" fontWeight="medium">
          8
        </SuiTypography>
      ),
      company: [logoSlack, "Slack"],
      industries: (
        <SuiTypography variant="button" color="text" fontWeight="medium"> 	
          Clothing, Shoes, Sports Equipment
        </SuiTypography>
      ),
      hired: (
        <SuiTypography variant="button" color="text" fontWeight="medium">
          992
        </SuiTypography>
      ),
      score:  <Completion value={81} color="success" />
    },
    {
      rank: (
        <SuiTypography variant="button" color="text" fontWeight="medium">
          9
        </SuiTypography>
      ),
      company: [logoWebDev, "Webdev"],
      industries: (
        <SuiTypography variant="button" color="text" fontWeight="medium">
          Retail and Wholesale
        </SuiTypography>
      ),
      hired: (
        <SuiTypography variant="button" color="text" fontWeight="medium">
          875
        </SuiTypography>
      ),
      score:  <Completion value={75} color="error" />
    },
    {
      rank: (
        <SuiTypography variant="button" color="text" fontWeight="medium">
          10
        </SuiTypography>
      ),
      company: [logoXD, "Adobe XD"],
      industries: (
        <SuiTypography variant="button" color="text" fontWeight="medium">
          Conglomerate
        </SuiTypography>
      ),
      hired: (
        <SuiTypography variant="button" color="text" fontWeight="medium">
          739
        </SuiTypography>
      ),
      score:  <Completion value={68} color="info" />
    }
  ],
};
