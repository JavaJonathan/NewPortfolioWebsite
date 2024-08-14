import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Container, Grid } from "@mui/material";
import Fab from '@mui/material/Fab';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import ArticleIcon from '@mui/icons-material/Article';

function App() {
  return (
    <div className="App" style={{
      background: "linear-gradient(180deg, rgba(250,249,246,1) 0%, rgba(229,230,231,1) 16%, rgba(221,221,220,1) 38%, rgba(180,180,180,1) 55%, rgba(143,143,145,1) 94%)",
      height: "100%"
    }}>
      <Box sx={{ flexGrow: 1 }} >
        <AppBar position="static" >
          <Toolbar style={{background: "black"}}>
            <Typography
              display="flex"
              justifyContent="center"
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
            >
              JonathanHenderson.dev
            </Typography>
          </Toolbar>
        </AppBar>
        <Box
          sx={{
            p: 2,
            margin: { md: "10%", sm: "0" },
            mt: { md: '5%', sm: '0%' },
            minHeight: "75vh",
            alignContent: "center"
          }}
        >
          <Grid
            container
            sx={{
              display: { md: "flex", sm: "block" },
              justifyContent: "center",
              alignContent: "center",
              height: "100%",
            }}
            spacing={2}
          >
            <Grid item md={5} sm={12}>
              <Container maxWidth="xs">
                <img
                  src="headshot.jpg"
                  width="100%"
                  height="100%"
                  style={{
                    "object-fit": "contain",
                    "clip-path": "circle()",
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
                  sx={{ fontSize: { xs: "3vh", md: "5vh" }, fontWeight: 'bold' }}
                  variant="h4"
                >
                  Jonathan Henderson
                </Typography>
              </div>
              <div>
                <Typography
                  sx={{ fontSize: { xs: "2vh", md: "3vh" }, fontWeight: 'bold' }}
                  variant="h6"
                >
                  Software Engineer II
                </Typography>
              </div>
              <div style={{marginBottom: '3%'}}>
                <Typography
                  variant="subtitle2"
                  sx={{ fontSize: { xs: "2vh", md: "3vh" } }}
                >
                  Software Engineer with 5 years of experience in full-stack
                  development and software security within the Pharmaceutical
                  Industry. Expertise in C#, JavaScript, and SQL, with a proven
                  ability to develop database solutions and streamline
                  workflows.
                </Typography>
              </div>
              <div>
                <Grid container spacing={0}>
                  <Grid item xs={3} >
                  <Fab variant="extended" style={{ background: "#0a66c2", color: 'white' }}>
                  <LinkedInIcon sx={{ mr: 1 }} />
                  LinkedIn
                </Fab>
                  </Grid>
                  <Grid item xs={3}>
                  <Fab variant="extended" style={{ background: "black", color: 'white' }}>
                  <GitHubIcon sx={{ mr: 1 }} />
                  GitHub
                </Fab>
                  </Grid>
                  <Grid item xs={3}>
                  <Fab variant="extended" style={{ background: "black", color: 'white' }}>
                  <ArticleIcon sx={{ mr: 1 }}/>
                  Download CV
                </Fab>
                  </Grid>
                </Grid>
              </div>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </div>
  );
}

export default App;
