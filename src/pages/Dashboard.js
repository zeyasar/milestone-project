import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import BlogCard from "../components/BlogCard";
import WaypointNews from "../assets/Waypoint News.jpg";
import Paper from "@mui/material/Paper";
import { AppContext } from "../context/AppContext";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import loadingGif from "../assets/gif-animations-replace.gif";

export default function Dashboard() {
  const { blogList } = React.useContext(AppContext);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <CssBaseline />
      {!(blogList === undefined) && (
        <Paper>
          {
            <img
              src={WaypointNews}
              alt="dashboardImage"
              style={{ width: "100%" }}
            />
          }
        </Paper>
      )}

      <Box
        xs={{ d: "flex" }}
        display="flex"
        alignItems="center"
        justifyContent="space-evenly"
        flexWrap="wrap"
      >
        {blogList === undefined ? (
          <Container maxWidth="sm">
            <img src={loadingGif} alt="loading_gif" style={{ width: "100%" }} />
          </Container>
        ) : blogList ? (
          blogList.map((item, index) => {
            return <BlogCard key={index} item={item} />;
          })
        ) : (
          <Container maxWidth="sm">
            <Typography variant="h2" component="h1" gutterBottom>
              I can't find data
            </Typography>
          </Container>
        )}
      </Box>
    </Box>
  );
}
