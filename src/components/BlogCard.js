import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardMedia } from "@mui/material";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { toastWarnNotify } from "../utils/toastNotify";
import FavoriteIcon from '@mui/icons-material/Favorite';
import { pink } from '@mui/material/colors';
import AddCommentIcon from '@mui/icons-material/AddComment';


export default function BlogCard({ item }) {
  const navigate = useNavigate();
  const { currentUser } = React.useContext(AppContext);

  const truncateOverview = (string, maxLength) => {
    if (!string) return null;
    if (string.length <= maxLength) return string;
    return `${string.substring(0, maxLength)} ...`;
  };

  const handleDetail = () => {
    if (!currentUser) {
      toastWarnNotify("Please login for more.");
    } else {
      navigate(`Details/${item.id}`);
    }
  };

  return (
    <>
      <Card sx={{ width: 345, m: 5, maxHeight: 700 }}>
        <CardActionArea onClick={handleDetail}>
          <CardMedia
            component="img"
            height="250"
            image={
              item?.imageUrl ??
              "https://ichef.bbci.co.uk/news/976/cpsprodpb/5A8B/production/_122497132_tesla.png"
            }
            alt="img"
          />
          <CardContent height="300">
            <Typography variant="overline" align="right">
              <i>Author : {item?.author}</i>
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
              {item?.header ?? "Tesla disables gaming while driving feature"}
            </Typography>
            <Typography gutterBottom variant="subtitle1" component="div">
              {item?.subtitle ?? "Tesla disables gaming while driving feature"}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {truncateOverview(item?.content, 100) ??
                "It follows an inquiry into Passenger Play, which allowed games to be played while a car was moving."}
            </Typography>
            <Typography variant="subtitle1" color="primary">
              Continue reading...
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button>
            <FavoriteIcon sx={{ color: pink[500] }}/>
          </Button>
          <Button>
            <AddCommentIcon color="action"/>
          </Button>
        </CardActions>
      </Card>
    </>
  );
}
