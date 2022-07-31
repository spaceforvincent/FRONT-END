import { Box, Card, CardActionArea } from "@material-ui/core";
import { Grid } from "@mui/material";
import React from "react";
import { useStyles } from "../styles";
import { ReactComponent as MainIcon } from "../images/Frame 1.svg";
import { ReactComponent as BtnRent } from "../images/btn-rent.svg";
import { ReactComponent as BtnRecommend } from "../images/btn-recommend.svg";
import { ReactComponent as BtnSearch } from "../images/btn-search.svg";
import { ReactComponent as BtnReturn } from "../images/btn-return.svg";
import { useNavigate } from 'react-router-dom';
export default function HomeScreen(props) {
  const styles = useStyles();
  const navigate = useNavigate();
  return (
    <Card>
      <CardActionArea>
        {/* Box는 html의 div와 비슷 */}
        <Box className={[styles.root, styles.background]}>
          <Box className={[styles.main, styles.center]}>
            <MainIcon className={styles.largeLogo}/>
          </Box>
          {/* bottom */}
          <Box className={styles.center}>
            <Grid container>
              <Grid item sm={6} columnSpacing={0}>
                <BtnRent className={styles.MainButton} onClick={() => navigate('/rental')}></BtnRent>
                <BtnRecommend className={styles.MainButton} onClick={() => navigate('/recommend')}></BtnRecommend>
              </Grid>
              <Grid item sm={6}>
                <BtnReturn className={styles.MainButton} onClick={() => navigate('/return')}></BtnReturn>
                <BtnSearch className={styles.MainButton} onClick={() => navigate('/search')}></BtnSearch>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </CardActionArea>
    </Card>
  );
}
