import {useEffect, useState} from 'react';
import { supabase } from '../supabaseClient';

function AttendanceDashboard(){
    const[records, setRecords]=useState([]);

    useEffect(() => {
        async function fetchData(){
            const {data, error} = await supabase.from('attendance').select('*');
            if (error) console.error(error);
            else setRecords(data);
        }
        fetchData();
    }, []);

    return(
        <div>
            <h2>Attendance History</h2>
            <table className="attendance-table">
            <thead>
                <tr>
                <th>Date</th>
                <th>Employee Name</th>
                <th>Employee ID</th>
                <th>Status</th>
                </tr>
            </thead>
            <tbody>
                {records.map((r) => (
                <tr key={r.id}>
                    <td>{r.date}</td>
                    <td>{r.employeeName}</td>
                    <td>{r.employeeID}</td>
                    <td>{r.status}</td>
                </tr>
                ))}
            </tbody>
            </table>
        
        </div>
        
    );
}

export default AttendanceDashboard;