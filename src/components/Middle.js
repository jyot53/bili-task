import React,{useEffect,useState} from "react";

import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Popover from "@mui/material/Popover";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import InputAdornment from "@mui/material/InputAdornment";
import { set } from "date-fns/esm";
// import AccountCircle from '@mui/icons-material/AccountCircle';

const Middle = () => {
  const [value, setValue] = useState(null);
  const [guests, setGuests] = useState("1 Adults");

  const [adult,setAdult] = useState(1);
  const [child, setChild] = useState(0);

  const incAdult = ()=>{
    setAdult(adult+1);
    
    if(adult==0){
      setGuests(child+ " Children");
    }else if(child==0){
      setGuests(adult+" Adults");
    }
    else{
      setGuests(adult+" Adults, "+ child+ " Children");
    }

  }

  const decAdult = () =>{
    if(adult<=0){
      setAdult(0);
    }else{
      setAdult(adult-1);
    }

    if(adult==0){
      setGuests(child+ " Children");
    }else if(child==0){
      setGuests(adult+" Adults");
    }
    else{
      setGuests(adult+" Adults, "+ child+ " Children");
    }

  }
  const incChild = ()=>{
    setChild(child+1);
    
    if(child==0){
      setGuests(adult+ " Adults");
    }else if(adult==0){
      setGuests(child+" Children");
    }
    else{
      setGuests(adult+" Adults, "+ child+ " Children");
    }
  }

  const decChild = () =>{
    if(child<=0){
      setChild(0);
    }else if(adult==0){
      setGuests(child+" Children");
    }
    else{
      setChild(child-1);
    }

    
    if(child==0){
      setGuests(adult+" Adults");
    }else{
      setGuests(adult+" Adults, "+ child+ " Children");
    }
  }

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopover = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText("#315680"),
    backgroundColor: "#315680",
    width: "50%",
    padding: "0.7rem",
    marginTop: "2rem",
    marginBottom: "2rem",
  }));
  const GuestButton = styled(Button)(({ theme }) => ({
    color: "#315680",
    backgroundColor: "#fff",
    width: "0px",
    height: "5px",
    padding: "0.7rem",
  }));


  useEffect(() => {

      setGuests(adult + " Adults , " + child + " Children")
  },[guests]);

  return (
    <div className="middle_wrapper">
      <div className="middle_main">
        <h2>Zetgo — amazing hostel for the free spirited traveler</h2>

        <div className="middle_para">
          <p>
            Egestas pretium aenean pharetra magna ac. Et tortor consequat id
            porta nibh venenatis cras sed. Vel turpis nunc eget lorem dolor sed
          </p>
        </div>

        <div className="check_main">
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid
              item
              xs={12}
              md={6}
              style={{
                textAlign: "center",
                align: "center",
                justifyContent: "center",
                display: "flex",
              }}
            >
              <div className="check_in">
                <label>Check-in</label>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    label=""
                    value={value}
                    onChange={(newValue) => {
                      setValue(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
              </div>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              style={{
                textAlign: "center",
                align: "center",
                justifyContent: "center",
                display: "flex",
              }}
            >
              <div className="check_in">
                <label>Check-out</label>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    label=""
                    value={value}
                    onChange={(newValue) => {
                      setValue(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
              </div>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              style={{
                textAlign: "center",
                align: "center",
                justifyContent: "center",
                display: "flex",
                marginTop: "2rem",
              }}
            >
              <TextField
                id="input-with-icon-textfield"
                // defaultValue={guests}
                value={guests}
                style={{
                  width: "50%",
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <svg
                        width="21"
                        height="26"
                        viewBox="0 0 21 26"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.2014 0.584106C6.80343 0.584106 4.02894 3.3586 4.02894 6.75661C4.02894 10.1546 6.80343 12.9291 10.2014 12.9291C13.5995 12.9291 16.3739 10.1546 16.3739 6.75661C16.3739 3.3586 13.5995 0.584106 10.2014 0.584106ZM10.2014 2.43586C12.5987 2.43586 14.5222 4.35935 14.5222 6.75661C14.5222 9.15386 12.5987 11.0774 10.2014 11.0774C7.80419 11.0774 5.88069 9.15386 5.88069 6.75661C5.88069 4.35935 7.80419 2.43586 10.2014 2.43586ZM2.78118 15.3981C1.43569 15.3981 0.325439 16.5084 0.325439 17.8538V18.793C0.325439 21.0177 1.73232 22.7386 3.60096 23.7696C5.46961 24.8005 7.8362 25.2741 10.2014 25.2741C12.5667 25.2741 14.9333 24.8005 16.8019 23.7696C18.3952 22.8905 19.5943 21.4858 19.9304 19.7189H20.0786V17.8538C20.0786 16.5084 18.9672 15.3981 17.6217 15.3981H2.78118ZM2.78118 17.2499H17.6217C17.9662 17.2499 18.2269 17.5093 18.2269 17.8538V17.8671H18.2257V18.793C18.2257 20.2718 17.395 21.3285 15.9074 22.1493C14.4197 22.9701 12.3113 23.4224 10.2014 23.4224C8.09162 23.4224 5.98315 22.9701 4.49549 22.1493C3.00784 21.3285 2.17719 20.2718 2.17719 18.793V17.8538C2.17719 17.5093 2.43664 17.2499 2.78118 17.2499Z"
                          fill="#315680"
                        />
                      </svg>
                    </InputAdornment>
                  ),
                }}
                variant="standard"
              />
              <svg
                aria-describedby={id}
                width="15"
                height="10"
                viewBox="0 0 22 10"
                id="svg"
                onClick={handlePopover}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.57751 2.67364L10.4177 11.5139L19.5876 2.34399"
                  stroke="#315680"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
              >
                <div className="addguests">
                   <div className="adult">
                     <p>Adult</p>
                     <div className="btngrp">
                      <button onClick={decAdult}>-</button>      
                      <span>{adult}</span>
                      <button onClick={incAdult}>+</button>
                     </div>
                   </div>
                   <div className="child">
                     <p>Children</p>
                     <button onClick={decChild}>-</button>
                      <span>{child}</span>
                     <button onClick={incChild}>+</button>
                   </div>
                </div>
              </Popover>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              style={{
                textAlign: "center",
                align: "center",
                justifyContent: "center",
                display: "flex",
              }}
            >
              <ColorButton variant="contained">Search</ColorButton>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default Middle;

/*

<div className="middle_date">
          <div className="date_first">
            <div className="date_in">
              <p>Check-in</p>
              <input type="date" />
            </div>
            <div className="date_in">
              <p>Check-out</p>
              <input type="date" />
            </div>
          </div>
          <div className="date_second">
            <div className="date_search">
              <p>Guests</p>
              <input type="text" />
            </div>
            <div >
              <button className="date_btn">Search</button>
            </div>
          </div>
 </div>

*/

/*

<div className="check_main">
          <div className="check_dates">
            <div className="check_in">
              <label>Check-in</label>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  label=""
                  value={value}
                  onChange={(newValue) => {
                    setValue(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
            </div>
            <div className="check_out">
              <label>Check-out</label>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  label=""
                  value={value}
                  onChange={(newValue) => {
                    setValue(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
            </div>
          </div>

          <div className="check_second">
            <div className="check_guest">
              <label>Guests</label>
              <TextField
                id="input-with-icon-textfield"
                // label="TextField"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <svg
                        width="21"
                        height="26"
                        viewBox="0 0 21 26"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.2014 0.584106C6.80343 0.584106 4.02894 3.3586 4.02894 6.75661C4.02894 10.1546 6.80343 12.9291 10.2014 12.9291C13.5995 12.9291 16.3739 10.1546 16.3739 6.75661C16.3739 3.3586 13.5995 0.584106 10.2014 0.584106ZM10.2014 2.43586C12.5987 2.43586 14.5222 4.35935 14.5222 6.75661C14.5222 9.15386 12.5987 11.0774 10.2014 11.0774C7.80419 11.0774 5.88069 9.15386 5.88069 6.75661C5.88069 4.35935 7.80419 2.43586 10.2014 2.43586ZM2.78118 15.3981C1.43569 15.3981 0.325439 16.5084 0.325439 17.8538V18.793C0.325439 21.0177 1.73232 22.7386 3.60096 23.7696C5.46961 24.8005 7.8362 25.2741 10.2014 25.2741C12.5667 25.2741 14.9333 24.8005 16.8019 23.7696C18.3952 22.8905 19.5943 21.4858 19.9304 19.7189H20.0786V17.8538C20.0786 16.5084 18.9672 15.3981 17.6217 15.3981H2.78118ZM2.78118 17.2499H17.6217C17.9662 17.2499 18.2269 17.5093 18.2269 17.8538V17.8671H18.2257V18.793C18.2257 20.2718 17.395 21.3285 15.9074 22.1493C14.4197 22.9701 12.3113 23.4224 10.2014 23.4224C8.09162 23.4224 5.98315 22.9701 4.49549 22.1493C3.00784 21.3285 2.17719 20.2718 2.17719 18.793V17.8538C2.17719 17.5093 2.43664 17.2499 2.78118 17.2499Z"
                          fill="#315680"
                        />
                      </svg>
                    </InputAdornment>
                  ),
                }}
                variant="standard"
              />
            </div>
            <div className="check_btn">
              <button type="button">Search</button>
            </div>

          </div>
        </div>

*/
