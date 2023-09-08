import { useState } from "react"

function Student(){
    const [data] = useState([
        {name : "Ranjan", age: 24, course : "mern", batch : "CSE", edit : "edit"},
        {name : "Ranjan", age: 24, course : "mern", batch : "CSE", edit : "edit"},
        {name : "Ranjan", age: 24, course : "mern", batch : "CSE", edit : "edit"},
        {name : "Ranjan", age: 24, course : "mern", batch : "CSE", edit : "edit"},
        {name : "Ranjan", age: 24, course : "mern", batch : "CSE", edit : "edit"},
        {name : "Ranjan", age: 24, course : "mern", batch : "CSE", edit : "edit"},
    ])
    return(
        <div id="stdetls">
        <h1>Student Details</h1>
        <table >
            <thead>
            <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Course</th>
                <th>Batch</th>
                <th>Edit</th>
            </tr>
            </thead>
            {data.map((item,index)=>{
                return(
                    <tbody key={index}>
                        <tr>
                            <td>{item.name}</td>
                            <td>{item.age}</td>
                            <td>{item.course}</td>
                            <td>{item.batch}</td>
                            <td><button className="btnedit">{item.edit}</button></td>
                        </tr>
                    </tbody>
                )
            })}
        </table>
        </div>
    )
}

export default Student