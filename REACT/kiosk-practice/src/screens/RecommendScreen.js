import { Box, CardActionArea, Fade, Grid } from '@material-ui/core';
import React from 'react'
import { ReactComponent as BtnMiniReturn } from "../images/btnmini-return.svg";
import { ReactComponent as BtnMiniRental } from "../images/btnmini-rental.svg";
import { ReactComponent as BtnMiniSearch } from "../images/btnmini-search.svg";
import { ReactComponent as BtnMiniRecommendPressed } from "../images/btnmini-recommend-pressed.svg";
import { ReactComponent as LendTitle } from "../images/대여.svg";
import { ReactComponent as BookUp } from "../images/도서를 올려주세요.svg";
import { ReactComponent as MainIcon } from "../images/Frame 1.svg";
import { useStyles } from '../styles';
import { useNavigate } from 'react-router-dom';

export default function RecommendScreen() {
    const styles = useStyles();
    const navigate = useNavigate();
    return (
      <div> 
        <Fade in={true}>
          <CardActionArea>
            <Box className={[styles.root, styles.background]}>
              <Box className={[styles.main, styles.center]}>
                <LendTitle className={styles.title}></LendTitle>
                <MainIcon className={styles.largeLogo}></MainIcon>
              </Box>
              <Box className={styles.center}>
                <BookUp className={[styles.ment]}></BookUp>
              </Box>
              <Box className={styles.center}>
                <Grid container>
                  <Grid item sm={3}>
                    <BtnMiniRental onClick={() => navigate('/rental')} className={styles.MiniButton} />
                    <BtnMiniReturn onClick={() => navigate('/return')} className={styles.MiniButton} />
                    <BtnMiniRecommendPressed className={styles.MiniButton} />
                    <BtnMiniSearch  onClick={() => navigate('/search')}className={styles.MiniButton} />
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </CardActionArea>
        </Fade>
        </div>
  )
}
