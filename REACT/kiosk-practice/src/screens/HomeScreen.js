import { Box, Card, CardActionArea } from "@material-ui/core";
import { Grid } from "@mui/material";
import React from "react";
import { useStyles } from "../styles";
import { ReactComponent as MainIcon } from "../images/Frame 1.svg";
import { ReactComponent as BtnRent } from "../images/btn-rent.svg";
import { ReactComponent as BtnRecommend } from "../images/btn-recommend.svg";
import { ReactComponent as BtnSearch } from "../images/btn-search.svg";
import { ReactComponent as BtnReturn } from "../images/btn-return.svg";

export default function HomeScreen() {
  const styles = useStyles();
  return (
    <Card>
      <CardActionArea>
        {/* Box는 html의 div와 비슷 */}
        <Box className={[styles.root, styles.mainBackground]}>
          <Box className={[styles.main, styles.center]}>
            <MainIcon />
          </Box>
          {/* bottom */}
          <Box className={styles.center}>
            <Grid container>
              <Grid item sm={6}>
                <BtnRent></BtnRent>
                <BtnRecommend></BtnRecommend>
              </Grid>
              <Grid item sm={6}>
                <BtnReturn></BtnReturn>
                <BtnSearch></BtnSearch>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </CardActionArea>
    </Card>
  );
}
