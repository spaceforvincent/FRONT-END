import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
  },
  mainBackground:{
    backgroundColor: "#0F1DA0",
    color: "#ffffff",
    opacity: 0.65,
  },
  main: {
    flex: 1,
    overflow: "auto",
    flexDirection: "column",
    display: "flex",
    color: "#ffffff",
  },
  center: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  largeLogo: {
    position: 'relative',
    height: "40vh",
    width: "40vh",
    opacity: 1.0,
  },
  MainButton: {
    position:'relative',
    height:"28vh",
    widh:'28vh'
  },
  green: {
    backgroundColor: "#00b020",
  },
  cards: {
    display: 'flex',
    justifyContent:'center',
    alignItems:'center'
  },
  card: {
    margin:10
  },
  space: {
    padding:10
  }
}));
