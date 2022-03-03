// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

// Soft UI Dashboard React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import SuiButton from "components/SuiButton"

import { Link, useHistory } from "react-router-dom";


import { useState, useEffect, React, useContext } from 'react'

import AppContext from '../../../profileCreation/AppContext'


function RecoBox({key, company, title, desc}) {
  const myContext = useContext(AppContext);

  const history = useHistory();

  const saveStateAndRedirect = () => {
    myContext.setCompanyValue(company)
    myContext.setTitleValue(title)
    const path = '/jobdesc'
    history.push(path)
  }

  return (
    <Card>
      <SuiBox p={2}>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={12}>
            <SuiBox display="flex" flexDirection="column" height="100%">
              <SuiBox p={0}>
                <Grid container alignItems="center">
                  <Grid item xs={4}>
                    <SuiBox ml={2} lineHeight={1}
                      variant="gradient"
                      bgColor="info"
                      color="white"
                      width="3rem"
                      height="3rem"
                      borderRadius="md"
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                      shadow="md"
                    >
                      <Icon fontSize="small" color="white">
                        paid
                      </Icon>
                    </SuiBox>
                  </Grid>
                  <Grid item xs={8}>
                    <SuiBox ml={1} lineHeight={1}>
                      <SuiBox pt={1} mb={0.5}>
                        <SuiTypography variant="body2" color="text" fontWeight="medium">
                          {company}
                        </SuiTypography>
                      </SuiBox>
                      <SuiTypography variant="h5" fontWeight="bold" gutterBottom>
                        {title}
                      </SuiTypography>
                    </SuiBox>
                  </Grid>
                </Grid>
              </SuiBox>

              <SuiBox mb={1}>
                <SuiTypography variant="body2" color="text">
                  {desc}
                </SuiTypography>
              </SuiBox>
              <SuiButton variant="gradient" color="dark" onClick={saveStateAndRedirect} >
                &nbsp;Read more
              </SuiButton>
              {/* <SuiTypography
                variant="button"
                fontWeight="regular"
                textTransform="capitalize"
                sx={{ lineHeight: 0 }}
                onClick={() => doSomething}
              >
                "HELLO"
              </SuiTypography>
              <SuiTypography
                component="a"
                onClick={() => doSomething}
                variant="button"
                color="text"
                fontWeight="medium"
                sx={{
                  mt: "auto",
                  mr: "auto",
                  display: "inline-flex",
                  alignItems: "center",
                  cursor: "pointer",

                  "& .material-icons-round": {
                    fontSize: "1.125rem",
                    transform: `translate(2px, -0.5px)`,
                    transition: "transform 0.2s cubic-bezier(0.34,1.61,0.7,1.3)",
                  },

                  "&:hover .material-icons-round, &:focus  .material-icons-round": {
                    transform: `translate(6px, -0.5px)`,
                  },
                }}
                
              >
                Read more
                <Icon sx={{ fontWeight: "bold" }}>arrow_forward</Icon>
              </SuiTypography> */}
            </SuiBox>
          </Grid>
        </Grid>
      </SuiBox>
    </Card>
  );
}

export default RecoBox;