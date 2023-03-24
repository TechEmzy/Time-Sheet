import {useState, useEffect} from "react";
import Header from "./Header";
import TimeSheetForm from "./TimeSheetForm";

const Dashboard = () => {

    const [employees, setEmployees] = useState ([
        { id: 1, name: "Emmy", email: "emmy@gmail.com", taskTitle: "React", description: "React practical", action: ""}
    ]);
      

    const handleCreate = (employee) => {
        setEmployees([...employees, employee])
    };

    const handleUpdateEmployee = (updatedEmployee) => {
      setEmployees(prevEmployees => prevEmployees.map(employee =>
        employee.id === updatedEmployee.id ? updatedEmployee : employee
        ))
    }

    const handleDelete = (id) => {
        setEmployees(employees.filter(employee => employee.id !==id ));
    };


    const handleAdd = (emp) => {
        handleCreate(emp);
        document.getElementById('txtName').value = "";
        document.getElementById('txtEmail').value = "";
        document.getElementById('txtTitle').value = "";
        document.getElementById('txtDescription').value = "";
    };


const grabData = () => {
    var id = employees.length + 1;
    var Sn = employees.length + 1;
    var nameValue = document.getElementById('txtName').value;
    var email = document.getElementById('txtEmail').value;
    var taskTitle = document.getElementById('txtTitle').value;
    var description = document.getElementById('txtDescription').value;

    var emp =  { id: id , Sn: Sn, name: nameValue, email: email, taskTitle: taskTitle, description: description, action: ""};
    console.log(emp);
    handleAdd(emp);
}

useEffect(() => {
    fetch('http://localhost:4000/employees')
    .then(res => {
        return res.json();
    })
    .then(data => {
        setEmployees(data);
        // console.log(data)
    })
    .catch(err => {
        console.log(err.message);
    })
}, []);

    return ( 
        <div className="dashboard">
            <Header />
            <TimeSheetForm />

            <div className="button-div">
                <button onClick={() => grabData()}>Add Timesheet</button>
            </div>
            
             <div className="table-div">
                <table border={1} cellPadding="20" cellSpacing={3}>
                    <thead>
                        <tr>
                        <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Task-Title</th>
                            <th>Description</th>
                            <th>Action</th>
                        </tr>                        
                    </thead>
                    
                    <tbody>
                        {employees.map(employee => (
                            <tr key= {employee.id}>
                                <td>{employee.id}</td>
                                <td>{employee.name}</td>
                                <td>{employee.email}</td>
                                <td>{employee.taskTitle}</td>
                                <td>{employee.description}</td>
                                <td className="action-buttons">
                                    <button className="edit-button" onClick={() => handleUpdateEmployee({...employee, name: " ", email: " ", taskTitle: " ", description: " "})}>Edit</button>
                                    <button className="delete-button" onClick={() => handleDelete(employee.id)}>Delete</button>      
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
             </div>
        </div>
     );
}
 
export default Dashboard;