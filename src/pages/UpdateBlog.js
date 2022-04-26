import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { AppContext } from "../context/AppContext";
import { EditBlog } from "../utils/firebase";
import { useNavigate, useParams } from "react-router-dom";
import loadingGif from "../assets/gif-animations-replace.gif";
import {
  toastErrorNotify,
  toastSuccessNotify,
} from "../utils/toastNotify";


export default function UpdateBlog() {
  let { getBlogDetail} = React.useContext(AppContext);
  

  const { id } = useParams();
  const data = getBlogDetail(id);

  const navigate = useNavigate()

  const handleUpdateSubmit = ((e) => {
    e.preventDefault();
    try {
      const {header, subtitle, imageUrl, content} = e.target
      EditBlog({...data[0], header:header.value, subtitle:subtitle.value, imageUrl:imageUrl.value, content:content.value});
      navigate('/')
      toastSuccessNotify('Blog Updated Successfuly')      
    } catch (error) {
      toastErrorNotify('Something went wrong!!')
      console.log(error);
    }
  })
  return (
    <div style={{
      backgroundImage:`url(https://r.resimlink.com/Zg9SXGaKAMV5.png)`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: "center",
      backgroundAttachment: "fixed",}}>
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          paddingTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
      {
        data === undefined ? (
        <Container maxWidth="sm">
          <img src={loadingGif} alt="loading_gif" style={{ width: "100%" }} />
        </Container>
      ) : (
        <div>
          <Typography component="h1" variant="h4" sx={{ mb: 2 }}>
            Update
          </Typography>
          <form noValidate autoComplete="off" onSubmit={handleUpdateSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  id="outlined-multiline-flexible-required"
                  required
                  label="Header"
                  fullWidth
                  multiline
                  maxRows={4}
                  name="header"
                  defaultValue={data[0]?.header}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="outlined-multiline-flexible"
                  label="Subtitle"
                  fullWidth
                  multiline
                  maxRows={4}
                  name="subtitle"
                  defaultValue={data[0]?.subtitle}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="outlined-multiline-static-required"
                  label="Image Url"
                  fullWidth
                  multiline
                  rows={4}
                  name="imageUrl"
                  defaultValue={data[0]?.imageUrl}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="outlined-multiline-static-required"
                  label="Content"
                  fullWidth
                  multiline
                  rows={15}
                  name="content"
                  defaultValue={data[0]?.content}
                  required
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 5 }}
            >
              Submit
            </Button>
          </form>
        </div>
      )
      }
        
      </Box>
    </Container>
    </div>
  );
}
