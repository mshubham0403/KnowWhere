

import * as React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { v4 as uid } from "uuid";

export default function Choice() {

const ChoiceContainer = styled(Grid)({
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const ChoiceCard = styled(Card)({
  minWidth: 275,
  textAlign: "center",
  backgroundColor:""
});

const ChoiceCardContent = styled(CardContent)({
  padding: "2rem",
});

// const nav = useNavigate();


// function CreateRoom(){
//   const RoomId = uid();
//   nav(`/room/:${RoomId}`)

// }
  return (
    <ChoiceContainer>
      <Grid container spacing={2} justifyContent="center">
        <Grid item>
          <ChoiceCard>
            <ChoiceCardContent>
              <Typography variant="h5" component="h2">
               Choice 1
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Be a puzzler
              </Typography>
              <Button variant="contained" component={Link} to="/newRoom">
               Create Room
              </Button>
            </ChoiceCardContent>
          </ChoiceCard>
        </Grid>
        <Grid item>
          <ChoiceCard>
            <ChoiceCardContent>
              <Typography variant="h5" component="h2">
                Choice 2
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Answer the puzzle
              </Typography>
              <Button variant="contained" component={Link} to="/newRoom">
                Join a Room
              </Button>
            </ChoiceCardContent>
          </ChoiceCard>
        </Grid>
      </Grid>
    </ChoiceContainer>
  );
}

