import React from "react";
import "../styles/homeBottom.css"


const HomeBottom =()=>{
    return(
        <div className="homebottom-div">
            <table className="homebottom-table">
                <tr id="head">
                    <th>No</th>
                    <th>Names</th>
                    <th>Date</th>
                    <th>Collections</th>
                    <th>Time</th>
                    <th>Status</th>
                </tr>
                <tr id="body1">
                    <td>1</td>
                    <td>Nyabugogo</td>
                    <td>2024-02-17</td>
                    <td>37 Kg</td>
                    <td>5.4 Hrs</td>
                    <td><button>Completed</button></td>
                </tr>
            </table>
        </div>
    )
}

export default HomeBottom;