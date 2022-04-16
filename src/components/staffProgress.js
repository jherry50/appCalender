import React from 'react';
import AdjustIcon from '@mui/icons-material/Adjust';


const StaffProgress = (props) => {
    const {staff} = props;
    const getFunction = (startID, endID) => {
        debugger
        let parentStartPosition = document.getElementById('calendarWrapper').offsetLeft;

        let startPosition = document.getElementById(startID).offsetLeft - parentStartPosition;
        let endPosition = document.getElementById(endID).offsetLeft - parentStartPosition;
        let difference = endPosition - startPosition;
  
        let dataNeeded ={
            difference,
            startPosition
        }

        return dataNeeded;
        //display: 'flex',justifyContent: "center", alignItems: 'center',

    }

    return (
        <div style={{zIndex: 1, padding: "10px 0px 10px 0px"}}>
            <div style={{postion: 'relative', zIndex: 1, height: '80px',  borderRadius: '20px', width: getFunction(staff.startDate, staff.endDate).difference, overflow: 'hidden', backgroundColor: staff.bg, marginLeft: `${getFunction(staff.startDate, staff.endDate).startPosition}px`}}>
                <div style={{ color: "white", zIndex: 1, width: staff.percentage, height: "100%",borderRadius: '0px 20px 20px 0px', backgroundColor: staff.color}}>
                    <div>
                        <div  style={{display: 'inline', marginTop: "30px !important"}}>
                            <AdjustIcon style={{display: 'inline', marginLeft: "10px", marginTop: "30px"}}/>
                        </div>
                        <div style={{display: 'inline', paddingBottom: '20px'}}>
                            <span style={{display: 'inline',  marginBottom: '20px', marginLeft: "10px"}}>Task Name</span>
                        </div>
                        <p style={{margin: '5px 5px'}}>
                            test again
                        </p>
                        <span>tes</span>
                    </div>
                </div>
                <p style={{color:staff.color ,position: 'absolute',top: '0', right: '20px'}}>{staff.percentage}</p>
            </div>
        </div>
    )
}

export default StaffProgress;