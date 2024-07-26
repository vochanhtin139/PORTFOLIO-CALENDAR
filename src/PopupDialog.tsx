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

export const PopupDialog = (props: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [loading, setLoading] = React.useState(false);

  const handleClose = () => {
    props.setOpen(false);
  };

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      handleClose();
    }, 2000);
  }

  return (
    <React.Fragment>
      <Dialog
        open={props.open}
        onClose={handleClose}
        maxWidth="md"
        fullWidth={true}
        PaperProps={{
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
          <div className="flex justify-between">
            <h1>Monday, July 8th</h1>
            <h1>19:30 ~ 21</h1>
            <HighlightOffOutlinedIcon
              onClick={() => {
                props.setOpen(false);
              }}
            />
          </div>
        </DialogTitle>
        <DialogContent>
          <h1 className="mb-5">
            <span className="font-bold">STATUS</span>:{" "}
            <span className="font-bold text-green-600">FREE</span>
          </h1>
          <FormControl variant="standard" className="w-full">
            <div className="flex justify-between">
              <div className="w-9/12">
                {/* <InputLabel shrink htmlFor="bootstrap-input-name">
                  Name
                </InputLabel> */}
                <p className="text-sm mb-1">Name</p>
                <BootstrapInput
                  id="bootstrap-input-name"
                  defaultValue=""
                  placeholder="Enter your name..."
                  className="w-full"
                />
              </div>
              <Button
                variant="outlined"
                startIcon={<TwitterOutlined />}
                className="ml-4"
              >
                Delete
              </Button>
            </div>

            <div className="mt-4">
              {/* <InputLabel shrink htmlFor="bootstrap-input-title">
                Title
              </InputLabel> */}
              <p className="text-sm mb-1">Title</p>
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
              <p className="text-sm mb-1">Description</p>
              <Textarea
                aria-label="minimum height"
                minRows={10}
                placeholder="write something..."
                sx={{ bgcolor: "#F3F6F9" }}
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
              style={{ margin: "0px 0px 16px 0px" }}
            >
              <span>Send</span>
            </LoadingButton>
          </div>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};
