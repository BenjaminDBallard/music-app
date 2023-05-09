import { Slider, Switch, FormControl, Select, MenuItem } from "@mui/material";
import CardTemp from "./Card";

export default function Dashboard(props) {
  const { notifications, setNotifications, events, setEvents } = props;

  const title = {
    connection: "Connection",
    volume: "Volume",
    quality: "Quality",
  };

  const info = {
    connection: "Toggle between online and offline.",
    volume: "Adjust volume.",
    quality: "Select a lower audio quality if there is audio reduction",
  };

  const type = {
    connection: (
      <Switch
        defaultChecked
        name="connection"
        sx={{ marginBottom: "1rem" }}
        onChange={handleConnection}
      />
    ),
    volume: (
      <Slider
        marks
        defaultValue={0}
        min={0}
        max={100}
        step={10}
        valueLabelDisplay="auto"
        onChange={handleVolume}
      />
    ),
    quality: (
      <FormControl fullWidth>
        <Select
          value={events.quality}
          onChange={handleQuality}
        >
          <MenuItem value={"high"}>High</MenuItem>
          <MenuItem value={"mid"}>Mid</MenuItem>
          <MenuItem value={"low"}>Low</MenuItem>
        </Select>
      </FormControl>
    ),
  };

  function handleConnection() {
    let alert;

    if (events.connection === true) {
      alert = "Offline.";
      setNotifications([...notifications, alert]);
    } else if (events.connection === false) {
      alert = "Online";
      setNotifications([...notifications, alert]);
    }
    setEvents({ ...events, connection: !events.connection });
  }

  function handleVolume(e) {
    let alert;

    if (e.target.value >= 80) {
      alert =
        "Listening to music at a high volume could cause long-term hearing loss.";
      setNotifications([...notifications, alert]);
    }
  }

  function handleQuality(e) {
    let alert;

    if (e.target.value === "low") {
      alert =
        "Music quality is degraded. Increase quality if your connection allows it.";
      setNotifications([...notifications, alert]);
    } else if (e.target.value === "mid" || e.target.value === "high") {
      alert = `Music quality is set to ${e.target.value}`;
      setNotifications([...notifications, alert]);
    }
    setEvents({ ...events, quality: e.target.value });
  }

  return (
    <section>
      <CardTemp
        title={title.connection}
        info={info.connection}
        type={type.connection}
      ></CardTemp>
      <CardTemp
        title={title.volume}
        info={info.volume}
        type={type.volume}
      ></CardTemp>
      <CardTemp
        title={title.quality}
        info={info.quality}
        type={type.quality}
      ></CardTemp>
    </section>
  );
}
