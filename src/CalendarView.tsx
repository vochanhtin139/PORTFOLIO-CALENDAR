import Grid from "@mui/joy/Grid";
import { styled } from "@mui/joy/styles";
import Sheet from "@mui/joy/Sheet";
import PropTypes from "prop-types";

const Item = styled(Sheet)(({ theme }) => ({
  position: "relative",
  backgroundColor:
    theme.palette.mode === "dark"
      ? theme.palette.background.level1
      : "rgba(0,0,0,0.68)",
  ...theme.typography["body-sm"],
  color: "#FFFFFF",
  fontFamily: "K2D",
  fontSize: 24,
  height: "calc((100vh - 24px - 36px - 16px) / 9.5)",
  textAlign: "center",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: 4, // Adjust for rounded corners
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: 4, // Match the border radius    padding: 2, // Space between the gradient border and the content
    background: "linear-gradient(to bottom right, #FF7A00, #0C0099)", // Gradient color from top left to bottom right
    WebkitMask:
      "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
    mask:
      "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
    WebkitMaskComposite: "xor",
    maskComposite: "exclude",
  },
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

const CalendarContainer = styled("div")`
  background: linear-gradient(to bottom right, #FF7A00, #0C0099); /* Adjust the gradient */
  padding: 2px; /* Adjust the spacing */
  border-radius: 8px; /* Adjust for rounded corners */
`;

const CalendarView = (props: any) => {
  return (
    <CalendarContainer {...props}>
      <style>{`
        div::-webkit-scrollbar {
          display: none; /* For Chrome, Safari, and Opera */
        }
      `}</style>
      <Grid container spacing={1} sx={{ flexGrow: 1 }}>
        {[
          "N/A",
          "8 ~ 9.30",
          "9.30 ~ 11",
          "15 ~ 16.30",
          "16.30 ~ 18",
          "19.30 ~ 21",
          "21 ~ 22.30",
        ].map((timeSlot, index) => (
          <Grid xs={index === 0 ? 3 : true} key={index} fontSize={24}>
            <Item>
              {timeSlot}
            </Item>
          </Grid>
        ))}
      </Grid>

      {days.map((day, dayIndex) => (
        <Grid container spacing={1} sx={{ flexGrow: 1 }} key={dayIndex}>
          <Grid xs={3}>
            <Item>{day.day}</Item>
          </Grid>
          {day.slots.map((slot, slotIndex) => (
            <Grid xs key={slotIndex}>
              <Item>
                <span
                  style={{
                    ...(slot === "Pending" && {
                      background: "linear-gradient(#FFFFFF, #00F0FF)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      fontWeight: "bold",
                    }),
                    ...(slot === "Occupied" && {
                      background: "linear-gradient(#FFFFFF, #FF0000)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      fontWeight: "bold",
                    }),
                  }}
                >
                  {slot}
                </span>
              </Item>
            </Grid>
          ))}
        </Grid>
      ))}
    </CalendarContainer>
  );
};

CalendarView.propTypes = {
  className: PropTypes.string,
};

export default CalendarView;
