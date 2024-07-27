import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import HighlightOffOutlinedIcon from "@mui/icons-material/HighlightOffOutlined";
import BootstrapInput from "./BootstrapInput";
import { FormControl } from "@mui/material";
import { TwitterOutlined } from "@ant-design/icons";
import { Textarea } from "@mui/joy";
import { LoadingButton } from "@mui/lab";
import SendIcon from "@mui/icons-material/Send";
import { styled } from "@mui/material/styles";

const StyledButton = styled(Button)({
  marginTop: 39,
  height: 45,
  boxShadow: "none",
  textTransform: "none",
  fontSize: 16,
  padding: "6px 12px",
  border: "1px solid",
  borderRadius: 8,
  lineHeight: 1.5,
  color: "#656BFF",
  backgroundColor: "#fff",
  borderColor: "linear-gradient(#FF0000,#0029FF)",
  fontFamily: "K2D",
  "&:hover": {
    backgroundColor: "#0069d9",
    color: "#fff",
    borderColor: "#0062cc",
    boxShadow: "none",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#0062cc",
    borderColor: "#005cbf",
  },
  "&:focus": {
    boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
  },
});

export const PopupDialog = (props: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  snackbarState: any;
  setSnackbarState: any;
}) => {
  const [loading, setLoading] = React.useState(false);

  const handleClose = () => {
    props.setOpen(false);
    props.setSnackbarState(true);
  };

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      handleClose();
    }, 2000);
  };

  return (
    <React.Fragment>
      <Dialog
        sx={{
          color: "#000000",
          fontFamily: "K2D",
          fontSize: 24,
          fontWeight: "bold",
        }}
        open={props.open}
        onClose={handleClose}
        maxWidth="sm"
        fullWidth={true}
        PaperProps={{
          style: {
            // borderRadius: 15,
            // borderImage: "linear-gradient(#FF6B00,#0047FF) 1",
            // borderStyle: "solid",
            // borderWidth: 5,
            border: "5px solid transparent",
            backgroundImage:
              "linear-gradient(#fff, #fff), linear-gradient(to right, #FF0000, #0029FF)",
            backgroundOrigin: "border-box",
            backgroundClip: "padding-box, border-box",
            borderRadius: "10px",
          },
          component: "form",
          onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const email = formJson.email as string;
            console.log(email);
            handleClose();
          },
        }}
      >
        <DialogTitle>
          <div
            className="flex justify-between"
            style={{
              fontSize: 32,
              fontFamily: "K2D",
              fontWeight: "bold",
              background: "-webkit-linear-gradient(45deg,#FF00C7, #001AFF)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            <h1>Monday, July 8th</h1>
            <h1>19:30 ~ 21</h1>
            <HighlightOffOutlinedIcon
              style={{
                color: "C00F0C",
                width: 48,
                height: 48,
              }}
              onClick={() => {
                props.setOpen(false);
              }}
            />
          </div>
        </DialogTitle>
        <DialogContent>
          <h1 className="mb-5" style={{ fontSize: 32 }}>
            <span className="font-extrabold">STATUS</span>:{" "}
            <span className="font-extrabold text-green-600">FREE</span>
          </h1>
          <FormControl variant="standard" className="w-full">
            <div className="flex justify-between">
              <div className="w-8/12">
                {/* <InputLabel shrink htmlFor="bootstrap-input-name">
                  Name
                </InputLabel> */}
                <p className=" mb-1">Name:</p>
                <BootstrapInput
                  id="bootstrap-input-name"
                  defaultValue=""
                  placeholder="Enter your name..."
                  className="w-full "
                />
              </div>
              <div className="flex flex-col-reverse">
                <Button
                  startIcon={
                    <img
                      style={{ width: "20px", height: "20px" }}
                      src="/Linkedin.png"
                      alt="Linkedin"
                    />
                  }
                  // startIcon={<TwitterOutlined />}
                  variant="outlined"
                  size="large"
                  style={{
                    color: "#656BFF",
                    border: "3px solid transparent",
                    backgroundImage:
                      "linear-gradient(#fff, #fff), linear-gradient(to right, #FF0000, #0029FF)",
                    backgroundOrigin: "border-box",
                    backgroundClip: "padding-box, border-box",
                    padding: "9px 21px",
                    borderRadius: "10px",
                    position: "relative",
                    fontWeight: "bold",
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
                  }}
                >
                  LinkedIn
                </Button>
                {/* <StyledButton
                  className="absolute my-4"
                  variant="outlined"
                  startIcon={<TwitterOutlined />}
                >
                  LinkedIn
                </StyledButton> */}
              </div>
            </div>

            <div className="mt-4">
              {/* <InputLabel shrink htmlFor="bootstrap-input-title">
                Title
              </InputLabel> */}
              <p className="mb-1">Title:</p>
              <BootstrapInput
                id="bootstrap-input-title"
                defaultValue=""
                placeholder="Enter the title..."
                className="w-full"
              />
            </div>

            <div className="mt-4">
              {/* <InputLabel shrink htmlFor="bootstrap-input-title">
                Title
              </InputLabel> */}
              <p className="mb-1">Description:</p>
              <Textarea
                aria-label="minimum height"
                minRows={10}
                placeholder="write something..."
                sx={{
                  bgcolor: "#F3F6F9",
                  border: "3px solid transparent",
                backgroundImage:
                  "linear-gradient(#fff, #fff), linear-gradient(to right, #FF0000, #0029FF)",
                backgroundOrigin: "border-box",
                backgroundClip: "padding-box, border-box",
                borderRadius: "10px",
                }}
              />
            </div>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <div className="flex justify-center w-full">
            <LoadingButton
              size="small"
              onClick={handleClick}
              endIcon={<SendIcon />}
              loading={loading}
              loadingPosition="end"
              variant="outlined"
              style={{
                margin: "0px 0px 16px 0px",
                color: "#656BFF",
                border: "3px solid transparent",
                backgroundImage:
                  "linear-gradient(#fff, #fff), linear-gradient(to right, #FF0000, #0029FF)",
                backgroundOrigin: "border-box",
                backgroundClip: "padding-box, border-box",
                padding: "9px 21px",
                borderRadius: "10px",
                position: "relative",
                fontWeight: "bold",
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
              }}
            >
              <span style={{ color: "black", fontWeight: "bolder" }}>Book</span>
            </LoadingButton>
          </div>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};
