import { nanoid } from 'nanoid'
import { Typography } from "@mui/material";

export default function Notifications(props) {
  const { notifications } = props;

  return (
    <section className='notification'>
      <Typography gutterBottom variant="h4">
        Notifications
      </Typography>
      <ul>
        {notifications.map((notification) => (
          <li key={nanoid()}>
            <Typography variant="body2" sx={{ display: "inline" }}>
              {notification}
            </Typography>
          </li>
        ))}
      </ul>
    </section>
  );
}