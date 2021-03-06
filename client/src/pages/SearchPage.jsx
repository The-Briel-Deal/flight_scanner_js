import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Slider from "@mui/material/Slider"
import Button from "@mui/material/Button"
import "../styles/SearchPageStyles.css"
import DateFnsAdapter from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateAdapter from '@mui/lab/AdapterLuxon';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
const mainBlue = "#FF499E";
const cloudAqua = "#85FFC7";


const SearchPage = () => {
    const [buttonEnabled, setButtonEnabled] = useState(true);
    const [flightData, setFlightData] = useState({});
    const [flightDataDec, setFlightDataDec] = useState({
        price: "",
        departure: "",
        link: ""
    });
    const [fields, setFields] = useState({
        from: "",
        to: "",
        slider: "100"
    })

    const submitForm = () => {
        fetch("/search",
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(fields)
            })
            .then(response => response.json())
            .then(data => {
                setFlightData(data);
                setFlightDataDec({
                    price: `${data.data[0].price} ${data.currency}`,
                    departure: data.data[0].duration.departure,
                    link: data.data[0].deep_link
                })
                setButtonEnabled(false);

            })
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFields((prev) => {
            switch (name) {
                case "from":
                    prev.from = value;
                    break;
                case "to":
                    prev.to = value;
                    break;
                case "slider":
                    prev.slider = value;
                    break;
                default:
                    break;
            }
            return {
                from: prev.from,
                to: prev.to,
                slider: prev.slider
            }
        })
    }
    return (
        <div style={{
            position: "fixed",
            top: "0",
            left: "0",
            bottom: "0",
            right: "0",
        }}>
            <Button
                style={{ left: "70%", top: "36%", position: "fixed" }}
                variant="outlined"
                href={flightDataDec.link}
                disabled={buttonEnabled}>

                Take me to flight
            </Button>
            <div style={{ left: "45%", top: "35%", position: "fixed" }}>
                <DesktopDatePicker
                    label="Date desktop"
                    inputFormat="MM/dd/yyyy"
                    value={new Date('2014-08-18T21:11:54')}
                    // onChange={handleChange}
                    renderInput={(params) => <TextField {...params} />}
                />
            </div>
            <TextField
                style={{ left: "45%", top: "35%", position: "fixed" }}
                value={fields.from}
                name="from"
                id="from"
                ident="from"
                label="From"
                variant="standard"
                onChange={handleChange}
            />
            <br />
            <TextField
                style={{ left: "45%", top: "30%", position: "fixed" }}
                value={fields.to}
                name="to"
                id="to"
                ident="to"
                label="To"
                variant="standard"
                onChange={handleChange}
            />
            <br />
            <Slider
                style={{ left: "45%", top: "43%", width: "12REM", position: "fixed" }}
                value={fields.slider}
                aria-label="Default"
                name="slider"
                id="slider"
                valueLabelDisplay="auto"
                max={1000}
                onChange={handleChange} />

            <br />
            <Button
                style={{ left: "47%", top: "50%", position: "fixed" }}
                variant="outlined"
                onClick={submitForm}>Search</Button>
            <div class="custom-shape-divider-top-1643334743">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill"></path>
                    <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill"></path>
                    <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path>
                </svg>
            </div>
            <div class="custom-shape-divider-bottom-1643332554">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill"></path>
                    <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill"></path>
                    <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path>
                </svg>
            </div>
        </div >
    )
}

export default SearchPage;