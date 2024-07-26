import { alpha, styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import { BorderColor } from "@mui/icons-material";

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    borderImage: "linear-gradient(to right, #FF0000,#0029FF) 1",
    borderStyle: "solid",
    borderWidth: 3,
    BorderColor: "transparent",
    borderRadius: 8,
    position: "relative",
    backgroundClip: "padding-box, border-box",
    backgroundOrigin: "padding-box, border-box",
    //backgroundColor: theme.palette.mode === "light" ? "#F3F6F9" : "#1A2027",
    // border: "1px solid",
    // borderColor: theme.palette.mode === "light" ? "#E0E3E7" : "#2D3843",
    fontSize: 16,
    padding: "10px 12px",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },
}));

export default BootstrapInput;
