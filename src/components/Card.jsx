// import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
// import style from "../css/modules/App.module.css";

export default function CardTemp(props) {
  const { title, info, type } = props;

  return (
    <Card variant="outlined" sx={{ padding: "1rem", paddingBottom: "2rem", width: "250px", height: "200px",}}>
      <CardContent>
        <Typography gutterBottom variant="h4">
          {title}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {info}
        </Typography>
      </CardContent>
      {type}
    </Card>
  );
}