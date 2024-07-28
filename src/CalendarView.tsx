import Grid from "@mui/joy/Grid";
import { styled } from "@mui/joy/styles";
import Sheet from "@mui/joy/Sheet";
import PropTypes from "prop-types";
import { PopupDialog } from "./PopupDialog";
import { useState } from "react";
import { LinearGradient } from "react-text-gradients";

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
  height: "calc((100vh - 24px - 36px - 16px) / 9.67)",
  textAlign: "center",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  margin: 3,
  borderRadius: 15, // Adjust for rounded corners,
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
    mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
    WebkitMaskComposite: "xor",
    maskComposite: "exclude",
  },
}));

const CalendarContainer = styled("div")`
  background: linear-gradient(
    to bottom right,
    #ff7a00,
    #0c0099,
    rgba(0, 0, 0, 0.1)
  ); /* Adjust the gradient */
  padding: 2px; /* Adjust the spacing */
  border-radius: 15px; /* Adjust for rounded corners */
`;

const CalendarView = (props: { snackbarState: any; setSnackbarState: any }) => {
  const [open, setOpen] = useState(false);
  const [dayID, setDaysID] = useState(-1);
  const [slotID, setSlotID] = useState(-1);
  const [status, setStatus] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const [days, setDays] = useState([
    {
      id: 0,
      day: "Mon, Jul 8th",
      slots: [
        { id: 0, slot: " --- " },
        { id: 1, slot: " --- " },
        { id: 2, slot: " --- " },
        { id: 3, slot: "Free" },
        { id: 4, slot: " --- " },
        { id: 5, slot: "Pending" },
      ],
    },
    {
      id: 1,
      day: "Tue, Jul 9th",
      slots: [
        { id: 0, slot: " --- " },
        { id: 1, slot: " --- " },
        { id: 2, slot: " --- " },
        { id: 3, slot: "Occupied" },
        { id: 4, slot: " --- " },
        { id: 5, slot: " --- " },
      ],
    },
    {
      id: 2,
      day: "Wed, Jul 10th",
      slots: [
        { id: 0, slot: " --- " },
        { id: 1, slot: " --- " },
        { id: 2, slot: " --- " },
        { id: 3, slot: " --- " },
        { id: 4, slot: "Free" },
        { id: 5, slot: "Occupied" },
      ],
    },
    {
      id: 3,
      day: "Thu, Jul 11th",
      slots: [
        { id: 0, slot: " --- " },
        { id: 1, slot: " --- " },
        { id: 2, slot: " --- " },
        { id: 3, slot: " --- " },
        { id: 4, slot: "Pending" },
        { id: 5, slot: " --- " },
      ],
    },
    {
      id: 4,
      day: "Fri, Jul 12th",
      slots: [
        { id: 0, slot: " --- " },
        { id: 1, slot: " --- " },
        { id: 2, slot: " --- " },
        { id: 3, slot: "Occupied" },
        { id: 4, slot: " --- " },
        { id: 5, slot: " --- " },
      ],
    },
    {
      id: 5,
      day: "Sat, Jul 13th",
      slots: [
        { id: 0, slot: " --- " },
        { id: 1, slot: "Pending" },
        { id: 2, slot: " --- " },
        { id: 3, slot: "Free" },
        { id: 4, slot: "Pending" },
        { id: 5, slot: "Free" },
      ],
    },
    {
      id: 6,
      day: "Sun, Jul 14th",
      slots: [
        { id: 0, slot: "Free" },
        { id: 1, slot: "Free" },
        { id: 2, slot: "Free" },
        { id: 3, slot: "Occupied" },
        { id: 4, slot: "Free" },
        { id: 5, slot: "Occupied" },
      ],
    },
  ]);

  const timeFrame = [
    "8 ~ 9.30",
    "9.30 ~ 11",
    "15 ~ 16.30",
    "16.30 ~ 18",
    "19.30 ~ 21",
    "21 ~ 22.30",
  ];

  const handleBookSuccessfully = () => {
    let newDays = [...days];
    newDays[dayID].slots[slotID].slot = "Pending";
    setDays(newDays);
  };

  return (
    <CalendarContainer className="fixed top-24 left-20 right-20 bottom-36 z-10 overflow-scroll">
      <style>{`
        div::-webkit-scrollbar {
          display: none; /* For Chrome, Safari, and Opera */
        }
      `}</style>
      <Grid container sx={{ flexGrow: 1 }}>
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
            <Item style={{ ...(index === 0 && { fontSize: 32 }) }}>
              {timeSlot}
            </Item>
          </Grid>
        ))}
      </Grid>

      {days.map((day) => (
        <Grid container sx={{ flexGrow: 1 }} key={day.id}>
          <Grid xs={3}>
            <Item style={{ fontSize: 32 }}>{day.day}</Item>
          </Grid>
          {day.slots.map((slot) => {
            return (
              <Grid xs key={day.id} fontSize={24}>
                <Item
                  onClick={(e) => {
                    if (slot.slot !== " --- ") {
                      setOpen(true);
                      setDaysID(day.id);
                      setSlotID(slot.id);
                      setStatus(slot.slot);
                      setDate(day.day);
                      setTime(timeFrame[slot.id]);
                    }
                  }}
                >
                  <span
                    key={day.id * 6 + slot.id}
                    // style={{
                    //   zIndex: 100,
                    //   ...(slot.slot === "Pending" && {
                    //     background: "linear-gradient(#FFFFFF, #00F0FF)",
                    //     // WebkitBackgroundClip: "text",
                    //     // WebkitTextFillColor: "transparent",
                    //     // fontWeight: "bold",
                    //   }),
                    //   ...(slot.slot === "Occupied" && {
                    //     background: "linear-gradient(#FFFFFF, #FF0000)",
                    //     WebkitBackgroundClip: "text",
                    //     WebkitTextFillColor: "transparent",
                    //     fontWeight: "bold",
                    //   }),
                    //   ...(slot.slot === "Free" && {
                    //     background: "linear-gradient(#FFFFFF, #0FBE00)",
                    //     WebkitBackgroundClip: "text",
                    //     WebkitTextFillColor: "transparent",
                    //     fontWeight: "bold",
                    //   }),
                    // }}
                  >
                    {slot.slot === "Pending" && (
                      <LinearGradient
                        gradient={["to bottom", "#FFFFFF ,#00F0FF"]}
                      >
                        {slot.slot}
                      </LinearGradient>
                    )}
                    {slot.slot === "Occupied" && (
                      <LinearGradient
                        gradient={["to bottom", "#FFFFFF ,#FF0000"]}
                      >
                        {slot.slot}
                      </LinearGradient>
                    )}
                    {slot.slot === "Free" && (
                      <LinearGradient
                        gradient={["to bottom", "#FFFFFF ,#0FBE00"]}
                      >
                        {slot.slot}
                      </LinearGradient>
                    )}
                    {slot.slot !== "Free" &&
                      slot.slot !== "Occupied" &&
                      slot.slot !== "Pending" && (
                        <LinearGradient
                          gradient={["to bottom", "#FFFFFF ,#FFFFFF"]}
                        >
                          {slot.slot}
                        </LinearGradient>
                      )}
                  </span>
                </Item>
              </Grid>
            );
          })}
        </Grid>
      ))}

      <PopupDialog
        open={open}
        setOpen={setOpen}
        snackbarState={props.snackbarState}
        setSnackbarState={props.setSnackbarState}
        handleBookSuccessfully={handleBookSuccessfully}
        status={status}
        time={time}
        date={date}
      />
    </CalendarContainer>
  );
};

CalendarView.propTypes = {
  className: PropTypes.string,
};

export default CalendarView;
