import React, {useEffect, useState} from "react";
import './styles/dashboard.css';
import {Button} from "@mui/material";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Grid from '@mui/material/Grid';
import StaffProgress from "../components/staffProgress";
import ProfileAvater from "../assets/pAvatar.PNG";

const Dashboard = () => {
    const [distance, setDistance] = useState(0);
    const [marginLeft, setMarginLeft] = useState(0);

    const [cal, setCal] = useState(false);

    const [staffs, setStaffs] = useState([]);

    const CalDays = [
        {
            dayNo: 1,
            id: "s1"
        },
        {
            dayNo: 2,
            id: "s2"
        },
        {
            dayNo: 3,
            id: "s3"
        },
        {
            dayNo: 4,
            id: "s4"
        }, {
            dayNo: 5,
            id: "s5"
        },
        {
            dayNo: 6,
            id: "s6"
        }, {
            dayNo: 7,
            id: "s7"
        },
        {
            dayNo: 8,
            id: "s8"
        }, {
            dayNo: 9,
            id: "s9"
        },
        {
            dayNo: 10,
            id: "s10"
        }, {
            dayNo: 11,
            id: "s11"
        },
        {
            dayNo: 12,
            id: "s12"
        }, {
            dayNo: 13,
            id: "s13"
        },
        {
            dayNo: 14,
            id: "s14"
        }, {
            dayNo: 15,
            id: "s15"
        },
        {
            dayNo: 16,
            id: "s16"
        }, {
            dayNo: 17,
            id: "s17"
        },

    ];

    const GetDayId = (id) => {
        debugger
        //get position
        // var selDayPosition = document.getElementById(id).offsetLeft;
        document.getElementById(id).style.backgroundColor = 'pink';

    };

    const getDistanceBetweenDates = (startID, endID) => {
        debugger
        let startPosition = document.getElementById(startID).offsetLeft;
        let endPosition = document.getElementById(endID).offsetLeft;
        let difference = endPosition - startPosition;
        setDistance(difference);
        setMarginLeft(startPosition);
        let dataNeeded ={
            difference,
            startPosition
        }

        return dataNeeded;

    }

    useEffect(()=>{
       let theStaffs =[
                {
                    name: "test1",
                    image: "",
                    color:"#FD7E2E",
                    bg: "#FFF2EA",
                    startDate: "s6",
                    endDate: "s10",
                    percentage: "68%"
                },
                {
                    name: "test2",
                    image: "",
                    color:"#F9D018",
                    bg: "#FEF9E6",
                    startDate: "s4",
                    endDate: "s9",
                    percentage: "70%"
                },
                {
                    name: "test3",
                    image: "",
                    color:"#090739",
                    bg: "#F5F4FF",
                    startDate: "s6",
                    endDate: "s13",
                    percentage: "63%"
                },
                {
                    name: "test4",
                    image: "",
                    color:"#1BD3FC",
                    bg: "#E9F8FB",
                    startDate: "s4",
                    endDate: "s9",
                    percentage: "45%"
                },
                {
                    name: "test5",
                    image: "",
                    color:"#FD7E2E",
                    bg: "#FFF2EA",
                    startDate: "s6",
                    endDate: "s10",
                    percentage: "48%"
                },
                {
                    name: "test6",
                    image: "",
                    color:"#F9D018",
                    bg: "#FEF9E6",
                    startDate: "s5",
                    endDate: "s15",
                    percentage: "20%"
                },
                {
                    name: "test7",
                    image: "",
                    color:"#090739",
                    bg: "#F5F4FF",
                    startDate: "s8",
                    endDate: "s17",
                    percentage: "50%"
                },
                {
                    name: "test8",
                    image: "",
                    color:"#1BD3FC",
                    bg: "#E9F8FB",
                    startDate: "s3",
                    endDate: "s15",
                    percentage: "90%"
                },
                {
                    name: "test9",
                    image: "",
                    color:"#FD7E2E",
                    bg: "#FFF2EA",
                    startDate: "s5",
                    endDate: "s14",
                    percentage: "72%"
                },
                {
                    name: "test10",
                    image: "",
                    color:"#F9D018",
                    bg: "#FEF9E6",
                    startDate: "s6",
                    endDate: "s16",
                    percentage: "57%"
                }
            ]
        
        setTimeout(() => {
            setStaffs(theStaffs);
        }, 2000);
    },[])

    return (
        <div>
            <h2>Welcome to GSE Banking App</h2>

            <div id="calendarWrapper" style={{marginLeft: '100px'}}>
                <div className="daysWrapper">
                    {
                        CalDays.map((item) => (
                            <div id={item.id} key={item.id} className="dayItem">
                                {item.dayNo}
                                {/* <Button onClick={() => GetDayId(item.id)}>GetID</Button> */}
                            </div>
                        ))
                    }
                </div>
                {/* <div style={{marginTop: '100px'}}>
                    <Button onClick={() => getDistanceBetweenDates('s2','s8')}>Get distance</Button>
                </div> */}

                {
                staffs.length !== 0 && CalDays.length !== 0 && staffs.map((item) => {
                        return(
                            <div  className="calItemWrapper">
                                <div className="calItemCard">
                                    <Grid container>
                                        <Grid item xs={3}>
                                            <img src={ProfileAvater} width="100%" height="100%" style={{borderRadius: "50%"}}/>
                                        </Grid>
                                        <Grid item xs={7}>
                                            <span>Name</span><br/>
                                            <span> UI/UX</span>
                                        </Grid>
                                        <Grid item xs={2}>
                                            <MoreVertIcon/>
                                        </Grid>
                                    </Grid>
                                </div>
                                <div className="calItemChart">
                                    <StaffProgress key={item.name} staff={item}/>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Dashboard;