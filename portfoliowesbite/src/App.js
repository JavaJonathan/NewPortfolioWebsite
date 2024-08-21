import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import {
  Button,
  ButtonGroup,
  Container,
  Divider,
  Drawer,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  MenuItem,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Fab from "@mui/material/Fab";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import ArticleIcon from "@mui/icons-material/Article";
import "@fontsource/alfa-slab-one";
import { Fragment, useEffect, useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';

function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [homeSelected, setHomeSelected] = useState(false);
  const [portfolioSelected, setPortfolioSelected] = useState(false);
  const theme = useTheme();

  const smallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div
      className="App"
      style={{
        // background:
        //   "linear-gradient(90deg, rgba(250,249,246,1) 0%, rgba(229,230,231,1) 16%, rgba(221,221,220,1) 60%, rgba(180,180,180,1) 87%, rgba(181,181,181,1) 96%)",
        height: "100%",
        background: "black"
      }}
    >
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar sx={{ background: "linear-gradient(75deg, rgba(0,0,0,1) 61%, rgba(10,102,194,1) 92%)" }}>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, fontFamily: "Alfa Slab One" }}
              color="#0a66c2"
            >
              {"<JH />"}
            </Typography>
            {
              smallScreen ?
              <Fragment>
                <IconButton onClick={() => setDrawerOpen(true)}>
                  <MenuIcon fontSize="large" />
                </IconButton>
                <Drawer open={drawerOpen} anchor="right" onClose={() => setDrawerOpen(false)}>
                <Box sx={{ width: 250, height: "100vh", background: "linear-gradient(180deg, rgba(0,0,0,1) 61%, rgba(10,102,194,1) 92%)" }} role="presentation" onClick={() => setDrawerOpen(false)}>
                <List>
                    <ListItem disablePadding>
                      <ListItemButton selected sx={{"&.Mui-selected": {                        
                        background: "rgb(0 128 255 / 26%)"
                      }}}>
                        <ListItemIcon>
                          <HomeIcon sx={{color: "#0a66c2"}} fontSize="large" />
                        </ListItemIcon>
                        <ListItemText primaryTypographyProps={{sx:{
                          fontFamily: "Alfa Slab One",
                          color: "#0a66c2"}}} primary={"Home"} />
                      </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemButton sx={{"&.Mui-selected": {                        
                        background: "rgb(0 128 255 / 26%)"
                      }}}>
                        <ListItemIcon>
                          <ArticleIcon sx={{color: "#0a66c2"}} fontSize="large"/>
                        </ListItemIcon>
                        <ListItemText primaryTypographyProps={{sx:{
                          fontFamily: "Alfa Slab One",
                          color: "#0a66c2"}}} primary={"Portfolio"} />
                      </ListItemButton>
                    </ListItem>
                </List>
              </Box>
                </Drawer>
              </Fragment> :
              (<Fragment>
                  <MenuItem selected sx={{color: "black", fontFamily: "Alfa Slab One", "&.Mui-selected": {
                  color: "white",
                  background: "#000000a8"
                }}}>
                  Home
                </MenuItem>
                <MenuItem sx={{color: "black", fontFamily: "Alfa Slab One", "&.Mui-selected": {
                  color: "white",
                  background: "black"
                }}}>
                  Projects
                </MenuItem>
              </ Fragment>)
            }
            
          </Toolbar>
        </AppBar>
        <Box
          sx={{
            p: 2,
            margin: { md: "5% 0% 0% 0%", lg: "5% 10% 0% 10%", sm: "0%" },
            minHeight: "75vh",
            alignContent: "center",
          }}
        >
          <Grid
            container
            sx={{
              display: { md: "flex", sm: "block" },
              justifyContent: "center",
              alignContent: "center",
              height: "100%"
            }}
            spacing={2}
          >
            <Grid item md={5} sm={12}>
              <Container maxWidth="xs">
                <img
                  src="headshot2.jpg"
                  width="100%"
                  height="100%"
                  style={{
                    "object-fit": "contain",
                    minHeight: "50vh",
                  }}
                  sx={{
                    alignContent: { sm: "center" },
                  }}
                />
              </Container>
            </Grid>
            <Grid
              item
              sm={12}
              md={7}
              sx={{
                alignContent: { xs: "center" },
              }}
            >
              <div>
                <Typography
                  sx={{
                    fontSize: { xs: "5vh", md: "6vh" },
                    fontWeight: "bold",
                    fontFamily: "Alfa Slab One",
                    color: "white"
                  }}
                  variant="h3"
                >
                  Jonathan Henderson
                </Typography>
              </div>
              <div>
                <Typography
                  sx={{
                    fontSize: { xs: "3vh", md: "4vh" },
                    fontWeight: "bold",
                    fontFamily: "Alfa Slab One",
                    color: "#0a66c2"
                  }}
                  variant="h3"
                >
                  Software Engineer II
                </Typography>
              </div>
              <div style={{ marginBottom: "3%", marginTop: "3%" }}>
                <Typography
                  variant="subtitle2"
                  sx={{
                    fontSize: { xs: "2vh", md: "3vh" },
                    fontFamily: "Alfa Slab One",
                    color: "white"
                  }}
                >
                  Software Engineer with 5 years of experience in full-stack
                  development and software security within the Pharmaceutical
                  Industry. Expertise in C#, JavaScript, and SQL, with a proven
                  ability to develop database solutions and streamline
                  workflows.
                </Typography>
              </div>
              <div>
                {smallScreen ? (
                  <ButtonGroup
                    orientation="horizontal"
                    variant="text"
                    sx={{ display: "flex", justifyContent: "center" }}
                  >
                    <Button
                      sx={{
                        color: "black",
                        "&:hover": {
                          backgroundColor: "blue !important",
                        },
                      }}
                    >
                      <LinkedInIcon fontSize="large" />
                    </Button>
                    <Button>
                      <GitHubIcon fontSize="large" />
                    </Button>
                    <Button>
                      <ArticleIcon fontSize="large" />
                    </Button>
                  </ButtonGroup>
                ) : (
                  <Grid container spacing={0}>
                    <Grid
                      item
                      xs={4}
                      style={{ display: "flex", justifyContent: "flex-end" }}
                    >
                      <Fab
                        variant="extended"
                        size="medium"
                        sx={{
                          background: "#0a66c2",
                          color: "white",
                          fontFamily: "Alfa Slab One",
                          transition: "background 1s, color 1s",
                          "&:hover": {
                          backgroundColor: "black",
                          color: "white"
                          }
                        }}
                      >
                        <LinkedInIcon sx={{ mr: 1 }} />
                        LinkedIn
                      </Fab>
                    </Grid>
                    <Grid
                      item
                      xs={4}
                      style={{ display: "flex", justifyContent: "center" }}
                    >
                      <Fab
                        variant="extended"
                        size="medium"
                        sx={{
                          background: "#0a66c2",
                          color: "white",
                          fontFamily: "Alfa Slab One",
                          transition: "background 1s, color 1s",
                          "&:hover": {
                          backgroundColor: "black",
                          color: "white"
                          }
                        }}
                      >
                        <GitHubIcon sx={{ mr: 1 }} />
                        GitHub
                      </Fab>
                    </Grid>
                    <Grid
                      item
                      xs={4}
                      style={{ display: "flex", justifyContent: "flex-start" }}
                    >
                      <Fab
                        variant="extended"
                        size="medium"
                        sx={{
                          background: "#0a66c2",
                          color: "white",
                          fontFamily: "Alfa Slab One",
                          transition: "background 1s, color 1s",
                          "&:hover": {
                          backgroundColor: "black",
                          color: "white"
                          }
                        }}
                      >
                        <ArticleIcon sx={{ mr: 1 }} />
                        Resume
                      </Fab>
                    </Grid>
                  </Grid>
                )}
              </div>
            </Grid>
          </Grid>
        </Box>
        <Box sx={{background: 'linear-gradient(75deg, rgba(0,0,0,1) 75%, rgba(10,102,194,1) 97%)', padding: "3%", color: 'white'}}>
          { !smallScreen ? 
            <div style={{display: "flex", justifyContent: "center"}}>
                  <LinkedInIcon sx={{ mr: 1, color: "#0a66c2" }} fontSize="large" />
                  <GitHubIcon sx={{ mr: 1, color: "#0a66c2" }} fontSize="large" />
                  <ArticleIcon sx={{ mr: 1, color: "#0a66c2" }} fontSize="large" />
            </div> 
            : null 
          }
          <div style={{display: "flex", justifyContent: "center", color: "#0a66c2"}}>© 2024 by Jonathan Henderson</div>
        </Box>
      </Box>
    </div>
  );
}

export default App;
