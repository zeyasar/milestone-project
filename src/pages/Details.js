import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { AppContext } from "../context/AppContext";
import { useNavigate, useParams } from "react-router-dom";
import loadingGif from "../assets/gif-animations-replace.gif";
import moment from "moment";
import Stack from "@mui/material/Stack";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from '@mui/icons-material/Edit';
import { DeleteUser } from "../utils/firebase";
import Button from '@mui/material/Button';

export default function StickyFooter() {
  const navigate = useNavigate()
  let { getBlogDetail, currentUser } = React.useContext(AppContext);

  const { id } = useParams();
  const data = getBlogDetail(id);
  

  const handleUpdate = () => {
    navigate(`/UpdateBlog/${id}`)
  };

  const handleDelete = () => {
    DeleteUser(id)
    navigate('/')
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <CssBaseline />
      {data === undefined ? (
        <Container maxWidth="sm">
          <img src={loadingGif} alt="loading_gif" style={{ width: "100%" }} />
        </Container>
      ) : (
        <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="sm">
          <Typography variant="h2" component="h1" gutterBottom>
            {data[0]?.header}
          </Typography>
          <Typography variant="h5" component="h2" gutterBottom>
            {data[0]?.subtitle}
          </Typography>
          <img
            src={data[0]?.imageUrl}
            alt="loading_gif"
            style={{
              width: "100%",
              marginTop: "1.5rem",
              marginBottom: "1.5rem",
            }}
          />
          <Typography variant="overline" align="right">
            <i>
              Author : {data[0]?.author} ||{" "}
              {moment(data[0]?.published_date).format("MMM DD, YYYY")}
            </i>
          </Typography>
          <Typography
            variant="body1"
            align="justify"
            sx={{ textIndent: "3rem", marginTop: "2rem" }}
          >
            {data[0]?.content}
          </Typography>
          {
            data[0]?.author === currentUser.displayName && (
              <Stack
            sx={{ pt: 4 }}
            direction="row"
            spacing={2}
            justifyContent="center"
          >
            <Button variant="contained" startIcon={<EditIcon />} onClick={handleUpdate}>Update Blog</Button>
            <Button variant="contained" endIcon={<DeleteIcon />} onClick={handleDelete}>Delete Blog</Button>
          </Stack>
            ) 
          }
        </Container>
      )}
    </Box>
  );
}
