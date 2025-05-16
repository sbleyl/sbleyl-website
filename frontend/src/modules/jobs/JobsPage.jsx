import { React, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import JobList from './JobList';

function JobsPage({ setJob }) {
    const redirect = useNavigate();
    const [jobs, setJobs] = useState([]);
    const loadJobs = async () => {
        const response = await fetch('/jobs');
        const jobs = await response.json();
        setJobs(jobs);
    }

    const onEditJob = async job => {
        setJob(job);
        redirect("/update");
    }

    const onDeleteJob = async _id => {
        const response = await fetch(`/jobs/${_id}`, {method: 'DELETE'});
        if (response.status === 200) {
            const getResponse = await fetch('/jobs');
            const jobs = await getResponse.json();
            setJobs(jobs);
        } else {
            console.error(`Job Entry Successfully Deleted! = ${_id}, status code = ${response.status}`)
        }
    }

    useEffect(() => {
        loadJobs();
    }, []);

    return (
       <>
            <h2>List of Jobs</h2>
            <article>
                <p>
                    This tool gives you a view of your job experiences and allows you to add, remove, or edit entries. It’s like an interactive resume builder, showing off your job 
                    title, company, location, duration, and dates.
                </p>
                <Link to="/create">Add Job</Link>
                <JobList
                    jobs={jobs}
                    onEdit={onEditJob}
                    onDelete={onDeleteJob}
                    />
                <br></br>
            </article>
       </>
    );
}
export default JobsPage;