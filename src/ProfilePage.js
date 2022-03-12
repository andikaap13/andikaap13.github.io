import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// import Camera from "@material-ui/icons/Camera";
import Palette from "@material-ui/icons/Palette";
// import Favorite from "@material-ui/icons/Favorite";
import Work from "@material-ui/icons/Work";
import Queue from '@material-ui/icons/Queue';
// core components
// import Header from "./components/Header/Header.js";
import Footer from "./components/Footer/Footer.js";
// import Button from "./components/CustomButtons/Button.js";
import GridContainer from "./components/Grid/GridContainer.js";
import GridItem from "./components/Grid/GridItem.js";
// import HeaderLinks from "./components/Header/HeaderLinks.js";
import Card from "./components/Card/Card.js";
import NavPills from "./components/NavPills/NavPills.js";
import Parallax from "./components/Parallax/Parallax.js";

import profile from "./assets/img/initial-a.jpg";

import code from "./assets/img/expertise/code.png";
import palette from "./assets/img/expertise/palette.png";
import data from "./assets/img/expertise/data.png";

// import studio1 from "./assets/img/examples/studio-1.jpg";
// import studio2 from "./assets/img/examples/studio-2.jpg";
// import studio3 from "./assets/img/examples/studio-3.jpg";
// import studio4 from "./assets/img/examples/studio-4.jpg";
// import studio5 from "./assets/img/examples/studio-5.jpg";
// import work1 from "./assets/img/examples/olu-eletu.jpg";
// import work2 from "./assets/img/examples/clem-onojeghuo.jpg";
// import work3 from "./assets/img/examples/cynthia-del-rio.jpg";
// import work4 from "./assets/img/examples/mariya-georgieva.jpg";
// import work5 from "./assets/img/examples/clem-onojegaw.jpg";

import styles from "./assets/jss/material-kit-react/views/profilePage.js";

const useStyles = makeStyles(styles);

export default function ProfilePage(props) {
  const classes = useStyles();
  // const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  // const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  return (
    <div>
      {/* <Header
        color="transparent"
        brand="React"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "white"
        }}
        {...rest}
      /> */}
      <Parallax small filter image={require("./assets/img/cover-bg.jpg")} />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
                <div className={classes.profile}>
                  <div>
                    <img src={profile} alt="..." className={imageClasses} />
                  </div>
                  <div className={classes.name}>
                    <h2 className={classes.title}>Andika Ageng Prastawa</h2>
                    <p className={classes.email}>andikaagengprastawa@gmail.com</p>
                    <h4>IT Programmer</h4>
                    {/* <Button justIcon link className={classes.margin5}>
                      <i className={"fab fa-twitter"} />
                    </Button>
                    <Button justIcon link className={classes.margin5}>
                      <i className={"fab fa-instagram"} />
                    </Button>
                    <Button justIcon link className={classes.margin5}>
                      <i className={"fab fa-facebook"} />
                    </Button> */}
                  </div>
                </div>
              </GridItem>
            </GridContainer>
            <div className={classes.description}>
              <p>
                I am a passionate programmer experienced in Codeigniter, Laravel, Express, Flutter and React. <br />
                I love exploring things and coming up with new ideas!
              </p>
            </div>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
                <NavPills
                  alignCenter
                  color="primary"
                  tabs={[
                    {
                      tabButton: "Expertise",
                      tabIcon: Palette,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={4}>
                            <div className={classes.expertise}>
                              <img
                                alt="..."
                                src={code}
                                className={classes.expertiseImg}
                              />
                              <h4 className={classes.expertiseTitle}>App Development</h4>
                              <p className={classes.expertiseDesc}>
                                I am Experienced with HTML, JavaScript, CSS, PHP, NodeJS, Flutter, MySQL, PostgreSQL, and Python
                              </p>
                            </div>
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <div className={classes.expertise}>
                              <img
                                alt="..."
                                src={palette}
                                className={classes.expertiseImg}
                              />
                              <h4 className={classes.expertiseTitle}>Design</h4>
                              <p className={classes.expertiseDesc}>
                                I have experience of using design tools like Adobe Photoshop and Adobe Illustrator
                              </p>
                            </div>
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <div className={classes.expertise}>
                              <img
                                alt="..."
                                src={data}
                                className={classes.expertiseImg}
                              />
                              <h4 className={classes.expertiseTitle}>Data Structures and Algorithms</h4>
                              <p className={classes.expertiseDesc}>
                                Experienced with Data Structures and Algorithms
                              </p>
                            </div>
                          </GridItem>
                        </GridContainer>
                      )
                    },
                    {
                      tabButton: "Work Experiences",
                      tabIcon: Work,
                      tabContent: (
                        <div className={classes.container}>
                          <Card className={classes.description}>
                            <h3>August 2019 - April 2021</h3>
                            <h3>Web Developer</h3>
                            <h4>PT Deptech Digital Indonesia</h4>
                            <p>
                              Working as a Web Developer.{" "}
                            </p>
                          </Card>
                          <Card className={classes.description}>
                            <h3>March 2018 - April 2018</h3>
                            <h3>IT Support</h3>
                            <h4>PT Bintang Advis Entertainment</h4>
                            <p>
                              Working as a Windows and PC Troubleshooter.{" "}
                            </p>
                          </Card>
                          <br />
                        </div>
                      )
                    },
                    {
                      tabButton: "Achievements",
                      tabIcon: Queue,
                      tabContent: (
                        <div className={classes.container}>
                          <Card className={classes.description}>
                            <h3>November 2018</h3>
                            <h3>1st on FIKSI Contest</h3>
                            <p>
                              Our team won first place at the programming contest, where we presented a calculation app on the contest.{" "}
                            </p>
                          </Card>
                        </div>
                      )
                    },
                    // {
                    //   tabButton: "Studio",
                    //   tabIcon: Camera,
                    //   tabContent: (
                    //     <GridContainer justify="center">
                    //       <GridItem xs={12} sm={12} md={4}>
                    //         <img
                    //           alt="..."
                    //           src={studio1}
                    //           className={navImageClasses}
                    //         />
                    //         <img
                    //           alt="..."
                    //           src={studio2}
                    //           className={navImageClasses}
                    //         />
                    //       </GridItem>
                    //       <GridItem xs={12} sm={12} md={4}>
                    //         <img
                    //           alt="..."
                    //           src={studio5}
                    //           className={navImageClasses}
                    //         />
                    //         <img
                    //           alt="..."
                    //           src={studio4}
                    //           className={navImageClasses}
                    //         />
                    //       </GridItem>
                    //     </GridContainer>
                    //   )
                    // },
                    // {
                    //   tabButton: "Work",
                    //   tabIcon: Palette,
                    //   tabContent: (
                    //     <GridContainer justify="center">
                    //       <GridItem xs={12} sm={12} md={4}>
                    //         <img
                    //           alt="..."
                    //           src={work1}
                    //           className={navImageClasses}
                    //         />
                    //         <img
                    //           alt="..."
                    //           src={work2}
                    //           className={navImageClasses}
                    //         />
                    //         <img
                    //           alt="..."
                    //           src={work3}
                    //           className={navImageClasses}
                    //         />
                    //       </GridItem>
                    //       <GridItem xs={12} sm={12} md={4}>
                    //         <img
                    //           alt="..."
                    //           src={work4}
                    //           className={navImageClasses}
                    //         />
                    //         <img
                    //           alt="..."
                    //           src={work5}
                    //           className={navImageClasses}
                    //         />
                    //       </GridItem>
                    //     </GridContainer>
                    //   )
                    // },
                    // {
                    //   tabButton: "Favorite",
                    //   tabIcon: Favorite,
                    //   tabContent: (
                    //     <GridContainer justify="center">
                    //       <GridItem xs={12} sm={12} md={4}>
                    //         <img
                    //           alt="..."
                    //           src={work4}
                    //           className={navImageClasses}
                    //         />
                    //         <img
                    //           alt="..."
                    //           src={studio3}
                    //           className={navImageClasses}
                    //         />
                    //       </GridItem>
                    //       <GridItem xs={12} sm={12} md={4}>
                    //         <img
                    //           alt="..."
                    //           src={work2}
                    //           className={navImageClasses}
                    //         />
                    //         <img
                    //           alt="..."
                    //           src={work1}
                    //           className={navImageClasses}
                    //         />
                    //         <img
                    //           alt="..."
                    //           src={studio1}
                    //           className={navImageClasses}
                    //         />
                    //       </GridItem>
                    //     </GridContainer>
                    //   )
                    // }
                  ]}
                />
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}