import {useState} from "react";

const TimeSheetForm = () => {

    return ( 
        <div>
            <input
                type="text"
                id="txtName"
                placeholder="Name"
            />

            <input
                type="text"
                id="txtEmail"
                placeholder="Email"
            />

            <input
                type="text"
                id="txtTitle"
                placeholder="Task-title"
            />

            <input
                type="text"
                id="txtDescription"
                placeholder="Description"
            />
        
        </div>
     );

}
 
export default TimeSheetForm;