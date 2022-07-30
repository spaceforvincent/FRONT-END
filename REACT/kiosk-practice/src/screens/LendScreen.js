import React from "react";
import { useStyles } from "../styles";
import { ReactComponent as MainIcon } from "../images/Frame 1.svg";
import { Box, Card, CardActionArea, CardMedia, Fade } from "@material-ui/core";

export default function LendScreen() {
  const styles = useStyles();
  return (
    <div>
      <Fade in={true}>
        <Box className={[styles.root, styles.mainBackground]}>
          <Box className={[styles.main, styles.center]}>
            <MainIcon></MainIcon>
          </Box>
          <Box className={styles.cards}>
            <Card className={[styles.card, styles.space]}>
                <CardActionArea>
                    <CardMedia>

                    </CardMedia>
                </CardActionArea>
            </Card>
          </Box>
        </Box>
      </Fade>
    </div>
  );
}
