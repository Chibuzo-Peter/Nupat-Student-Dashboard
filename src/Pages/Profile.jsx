import React from "react";
import Sidebar from "../Components/Sidebar";
import { Box, Card, CardContent, Stack, Typography } from "@mui/material";
import Navbar from "../Components/Navbar";
import Banner from "../Images/profile banner.png";
import ProfilePic from "../Images/Profile photo.png";
import {
  AccountBalance,
  AutoStories,
  Edit,
  Email,
  Instagram,
  LinkedIn,
  LocationOn,
  X,
} from "@mui/icons-material";
import Logo from "../Images/logo.png";

const Profile = () => {
  return (
    <Box>
      <Navbar />
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={1}
        sx={{ background: "#eee" }}
      >
        <Sidebar style={{ display: { xs: "none", sm: "none", md: "none" } }} />
        <Box
          my={4}
          display="flex"
          alignItems="center"
          flexDirection="column"
          gap={2}
          p={2}
          flexGrow={1}
        >
          <Card
            style={{
              width: "100%",
              maxWidth: "100%",
              borderRadius: "15px",
              background: "#F4F4F4",
            }}
          >
            <img
              src={Banner}
              alt=""
              style={{
                height: "25vh",
                width: "100%",
                objectFit: "cover",
                borderTopLeftRadius: "15px",
                borderTopRightRadius: "15px",
              }}
            />
            <span>
              <Edit
                sx={{
                  position: "absolute",
                  top: "15vh",
                  left: "57vw",
                  color: "#fff",
                }}
              />
            </span>
            <CardContent>
              <img
                src={ProfilePic}
                alt=""
                style={{
                  width: "80px",
                  height: "80px",
                  borderRadius: "50%",
                  position: "relative",
                  top: "-61px",
                  left: "14px",
                }}
              />
              <span>
                <Edit
                  sx={{
                    marginLeft: "30vw",
                    position: "relative",
                    top: "-17vh",
                    color: "#000",
                    zIndex: "10",
                  }}
                />
              </span>
              <div style={{ marginLeft: "10px", marginTop:"-50px" }}>
                <h4>
                  James Obogu
                </h4>
                <h5>
                  Full Stack Developer
                </h5>
                <small>
                  Lagos State, Nigeria{" "}
                  <span>
                    <a href="/Profile" style={{ textDecoration: "none" }}>
                      Contact info
                    </a>
                  </span>
                </small>
              </div>
            </CardContent>
          </Card>

          <Box my={2}>
            <Typography variant="h4" component="h3" gutterBottom>
              About
              <span>
                <Edit sx={{ marginLeft: "33vw", color: "#000" }} />
              </span>
            </Typography>
            <Card
              style={{
                width: "90vw",
                maxWidth: "600px",
                borderRadius: "15px",
                background: "#F4F4F4",
              }}
            >
              <div style={{ padding: "20px" }}>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                  sapiente, laboriosam perspiciatis ab commodi laborum quaerat
                  repudiandae tempora voluptates eaque!
                </p>
                <div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      margin: "10px",
                    }}
                  >
                    <AccountBalance />
                    <span style={{ marginInline: "10px" }}>
                      Full Stack Developer
                    </span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      margin: "10px",
                    }}
                  >
                    <Email />
                    <span style={{ marginInline: "10px" }}>
                      oboguj@gmail.com
                    </span>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      margin: "10px",
                    }}
                  >
                    <AutoStories />
                    <span style={{ marginInline: "10px" }}>
                      Studying at NUPAT Technologies
                    </span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      margin: "10px",
                    }}
                  >
                    <LocationOn />
                    <span style={{ marginInline: "10px" }}>Lagos, Nigeria</span>
                  </div>
                </div>
              </div>
            </Card>
          </Box>

          <div style={{ marginLeft: "-50px" }}>
            <Typography variant="h6" component="p" gutterBottom>
              <strong>Social Media Accounts</strong>
              <span>
                <Edit sx={{ marginLeft: "20vw", color: "#000" }} />
              </span>
            </Typography>

            <section>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  margin: "10px",
                }}
              >
                <LinkedIn />
                <span style={{ margin: "10px" }}>
                  https://linkedIn.com/james-obogu
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  margin: "10px",
                }}
              >
                <X />{" "}
                <span style={{ margin: "10px" }}>
                  https://twitter.com/james-obogu
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  margin: "10px",
                }}
              >
                <Instagram />{" "}
                <span style={{ margin: "10px" }}>
                  https://instagram.com/james-obogu
                </span>
              </div>
            </section>
          </div>
        </Box>

        {/* Rightbar section */}

        <Box
          height={200}
          width={500}
          margin="20px"
          display={{ xs: "none", sm: "none", md: "block" }}
          alignItems="center"
          justifyContent="center"
          sx={{marginTop:"20vh"
        }}
        >
          <Typography
            variant="h6"
            component="p"
            gutterBottom
            sx={{ marginTop:"10vh" }}
          >
            <strong>Skills</strong>
            <span>
              <Edit sx={{ marginLeft: "25vw", color: "#000" }} />
            </span>
          </Typography>
          <div style={{ marginTop: "5vh" }}>
            <h5>Figma</h5>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                fontSize: "16px",
                borderBottom: "1px solid gray",
              }}
            >
              <img
                src={Logo}
                alt=""
                width={25}
                style={{ background: "darkBlue", margin: "5px" }}
              />
              <span>NUPAT Technologies</span>
            </div>
          </div>

          <div style={{ marginTop: "5vh" }}>
            <h5>Miro</h5>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                fontSize: "16px",
              }}
            >
              <img
                src={Logo}
                alt=""
                width={25}
                style={{ background: "darkBlue", margin: "5px" }}
              />
              <span>NUPAT Technologies</span>
            </div>
            <section style={{ display: "block" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  fontSize: "16px",
                  borderBottom: "1px solid gray",
                }}
              >
                <img
                  src={Logo}
                  alt=""
                  width={25}
                  style={{ background: "darkBlue", margin: "5px" }}
                />
                <span>APTECH Technologies</span>
              </div>
              <a
                href="/courses"
                style={{
                  textDecoration: "none",
                  marginLeft: "50%",
                  marginTop: "20%",
                }}
              >
                <small style={{ textAlign: "center" }}>Show More Skills</small>
              </a>
            </section>
          </div>

          <div style={{ marginTop: "15vh", padding:"10px"}}></div>

          <Typography
            variant="h6"
            component="p"
            gutterBottom
            sx={{ margin: "10px" }}
          >
            <strong>Interst</strong>
            <span>
              <Edit sx={{ marginLeft: "25vw", color: "#000" }} />
            </span>
          </Typography>

          <div style={{ display: "flex", gap: "20px" }}>
            <div>
              <h5>Figma</h5>
              <small>World leaders in Research-Based on User Interface.</small><br />
              <button
                style={{
                  backgroundColor: "violet",
                  padding: "3px",
                  border: "none",
                  borderRadius: "5px",
                }}
              >
                Design App
              </button>
            </div>
            <div>
              <h5>Figma</h5>
              <small>World leaders in Research-Based on User Interface.</small><br />
              <button
                style={{
                  backgroundColor: "violet",
                  padding: "3px",
                  border: "none",
                  borderRadius: "5px",
                }}
              >
                Design App
              </button>
            </div>
          </div>

          <div style={{ display: "flex", gap: "20px", marginTop: "10%" }}>
            <div>
              <h5>InDesign</h5>
              <h6>Adobe XD</h6>
              <small marginTop="5px">World leaders in Research-Based on User Interface.</small><br />
              <button
                style={{
                  backgroundColor: "violet",
                  padding: "3px",
                  border: "none",
                  borderRadius: "5px",
                }}
              >
                Design App
              </button>
            </div>
            <div>
              <h5>InDesign</h5>
              <h6>Adobe XD</h6>
              <small>World leaders in Research-Based on User Interface.</small><br />
              <button
                style={{
                  backgroundColor: "violet",
                  padding: "3px",
                  border: "none",
                  borderRadius: "5px",
                }}
              >
                Design App
              </button>
            </div>
          </div>
        </Box>
      </Stack>
    </Box>
  );
};

export default Profile;
