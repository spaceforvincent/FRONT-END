import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
  },
  background: {
    backgroundColor: "rgba(15, 29, 160, 0.65)",
    color: "#ffffff",
  },
  main: {
    flex: 1,
    overflow: "auto",
    flexDirection: "column",
    display: "flex",
    color: "#ffffff",
  },
  title: { marginTop: 30 },
  ment: {
    width: 200,
    height: 200,
  },

  center: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  largeLogo: {
    position: "relative",
    display: "flex",
    width: 300,
    marginTop: 30,
    marginBottom: 30,
  },
  MainButton: {
    position: "relative",
    height: 200,
    width: 200,
  },
  footer: {
    display: "flex",
    flexDirection: "row",
  },
  MiniButton: {
    position: "relative",
    height: 90,
    width: 90,
    marginInline:5,
  },
  cards: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));
