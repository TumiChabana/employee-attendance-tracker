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
            <ul>
                {records.map((r) =>(
                    <li key={r.id}>{r.date} - {r.employeeName} ({r.employeeID}) - {r.status}</li>
                ))}
            </ul>
        </div>
    );
}

export default AttendanceDashboard;