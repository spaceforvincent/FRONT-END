import { Box, Card, CardActionArea, Typography, Container } from "@material-ui/core";
import React from "react";
import { useStyles } from "../styles";
import Mainicon from "../components/Mainicon";
import LendButton from "../components/LendButton";
import RecommendButton from "../components/RecommendButton";
import ReturnButton from "../components/ReturnButton";
import SearchButton from "../components/SearchButton";
import { ReactComponent as btnRent } from "../public/images/btn-rent.svg"

export default function HomeScreen() {
  const styles = useStyles();
  return (
    <>
    <div>
    <btnRent />
    </div>
    </>
    // <Card>
    //   <CardActionArea>
    //     {/* Box는 html의 div와 비슷 */}
    //     <Box className={[styles.root, styles.mainBackground]}>
    //       <Box className={[styles.main, styles.center]}>
    //         <Mainicon></Mainicon>
    //       </Box>
    //       {/* bottom */}
    //       <Box>
    //         <Container maxWidth="sm">
    //           <LendButton></LendButton>
    //           <RecommendButton></RecommendButton>
              
    //           <SearchButton></SearchButton>
    //         </Container>
    //       </Box>
    //     </Box>
    //   </CardActionArea>
    // </Card>
  );
}