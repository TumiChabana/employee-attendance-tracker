import { useState } from "react";
import { supabase } from "../supabaseClient";

function AttendanceForm(){
    const[formData, setFormData]=useState({
        employeeName: '',
        employeeID:'',
        date:'',
        status: 'Present',
    });

    const handleChange=(e)=>
        setFormData({...formData,[e.target.name]: e.target.value});

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { data, error } = await supabase.from('attendance').insert([formData]);
        if (error) {
            console.error('Insert error:', error.message);
        } else {
            console.log('Insert success:', data);
            alert('Attendance recorded successfully!');
        }
    };

    return(
        <form onSubmit={handleSubmit}>
            <input name="employeeName" placeholder="Name" onChange={handleChange}/>
            <input name="employeeID" placeholder="ID" onChange={handleChange}/>
            <input name="date" type="date" onChange={handleChange}/>
            <select name="status" onChange={handleChange}>
                <option value='Present'>Present</option>
                <option value='Absent'>Absent</option>
            </select>
            <button type="submit">Submit</button>    
        </form>
    );
}

export default AttendanceForm;