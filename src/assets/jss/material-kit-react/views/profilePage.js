import { container } from "../../material-kit-react.js";

import imagesStyle from "../imagesStyles.js";

const profilePageStyle = {
  container,
  profile: {
    textAlign: "center",
    "& img": {
      maxWidth: "160px",
      width: "100%",
      margin: "0 auto",
      transform: "translate3d(0, -50%, 0)"
    }
  },
  description: {
    margin: "1.071rem auto 0",
    maxWidth: "600px",
    color: "#333",
    textAlign: "center !important",
    padding: "15px 20px" 
  },
  name: {
    marginTop: "-80px"
  },
  ...imagesStyle,
  main: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: "3"
  },
  mainRaised: {
    margin: "-60px 30px 0px",
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
  },
  title: {
    display: "inline-block",
    position: "relative",
    marginTop: "30px",
    marginBottom: "0",
    minHeight: "32px",
    textDecoration: "none"
  },
  email: {
    marginTop: "5px",
  },
  socials: {
    marginTop: "0",
    width: "100%",
    transform: "none",
    left: "0",
    top: "0",
    height: "100%",
    lineHeight: "41px",
    fontSize: "20px",
    color: "#999"
  },
  navWrapper: {
    margin: "20px auto 50px auto",
    textAlign: "center"
  },
  expertise: {
    boxShadow: "1px 4px 4px rgba(0,0,0,0.2)",
    overflow: "hidden",
    clear: "both",
    padding: "10px 0",
    borderRadius: "6px"
  },
  expertiseImg: {
    width: "calc(100% - 100px)",
    padding: "10px 50px"
  },
  expertiseTitle: {
    padding: "10px 0",
    margin: "0"
  },
  expertiseDesc: {
    padding: "10px 10px",
    margin: "0"
  }
};

export default profilePageStyle;
