import { useState } from "react";
import { supabase } from "../supabaseClient";

function AttendanceForm(){
    const[formData, setFormData]=useState({
        employeeName: '',
        employeeID:'',
        date:'',
        status: 'Present',
    });

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validation
        if (!formData.employeeName || !formData.employeeID || !formData.date) {
            alert('Please fill in all fields');
            return;
        }

        const { data, error } = await supabase.from('attendance').insert([formData]);
        if (error) {
            alert('Error recording attendance: ' + error.message);
        } else {
            alert('Attendance recorded successfully!');

            setFormData({ employeeName: '', employeeID: '', date: '', status: 'Present' });
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                name="employeeName" 
                value={formData.employeeName}
                placeholder="Name" 
                onChange={handleChange}
                required
            />
            <input 
                name="employeeID" 
                value={formData.employeeID}
                placeholder="ID" 
                onChange={handleChange}
                required
            />
            <input 
                name="date" 
                value={formData.date}
                type="date" 
                onChange={handleChange}
                required
            />
            <select name="status" value={formData.status} onChange={handleChange}>
                <option value='Present'>Present</option>
                <option value='Absent'>Absent</option>
            </select>
            <button type="submit">Submit</button>    
        </form>
    );
}

export default AttendanceForm;