import Grid from "@mui/joy/Grid";
import { styled } from "@mui/joy/styles";
import Sheet from "@mui/joy/Sheet";
import PropTypes from "prop-types";

const Item = styled(Sheet)(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark" ? theme.palette.background.level1 : "#fff",
  ...theme.typography["body-sm"],
  height: "calc((100vh - 24px - 36px - 16px) / 10)", // Adjusted height
  textAlign: "center",
  borderRadius: 10,
  color: theme.vars.palette.text.secondary,
  display: "flex", // Added to center content
  justifyContent: "center",
  alignItems: "center",
}));

const days = [
  {
    day: "Mon, Jul 8th",
    slots: [" --- ", " --- ", " --- ", " --- ", " --- ", "Pending"],
  },
  {
    day: "Tue, Jul 9th",
    slots: [" --- ", " --- ", " --- ", "Occupied", " --- ", " --- "],
  },
  {
    day: "Wed, Jul 10th",
    slots: [" --- ", " --- ", " --- ", " --- ", " --- ", "Occupied"],
  },
  {
    day: "Thu, Jul 11th",
    slots: [" --- ", " --- ", " --- ", " --- ", "Pending", " --- "],
  },
  {
    day: "Fri, Jul 12th",
    slots: [" --- ", " --- ", " --- ", "Occupied", " --- ", " --- "],
  },
  {
    day: "Sat, Jul 13th",
    slots: [" --- ", "Pending", " --- ", " --- ", "Pending", " --- "],
  },
  {
    day: "Sun, Jul 14th",
    slots: [" --- ", " --- ", " --- ", "Occupied", " --- ", "Occupied"],
  },
];

const CalendarView = (props: any) => {
  return (
    <div {...props}>
      <Grid container spacing={2} sx={{ flexGrow: 1 }}>
        {[
          "N/A",
          "8 ~ 9.30",
          "9.30 ~ 11",
          "15 ~ 16.30",
          "16.30 ~ 18",
          "19.30 ~ 21",
          "21 ~ 22.30",
        ].map((timeSlot, index) => (
          <Grid xs key={index}>
            <Item>{timeSlot}</Item>
          </Grid>
        ))}
      </Grid>

      {days.map((day, dayIndex) => (
        <Grid container spacing={2} sx={{ flexGrow: 1 }} key={dayIndex}>
          <Grid xs>
            <Item>{day.day}</Item>
          </Grid>
          {day.slots.map((slot, slotIndex) => (
            <Grid xs key={slotIndex}>
              <Item>{slot}</Item>
            </Grid>
          ))}
        </Grid>
      ))}
    </div>
  );
};

CalendarView.propTypes = {
  className: PropTypes.string,
};

export default CalendarView;
