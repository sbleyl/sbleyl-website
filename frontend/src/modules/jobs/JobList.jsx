import React from 'react';
import Job from './Job';

function JobList({ jobs, onDelete, onEdit }) {
    return(
        <table id="jobs">
        <caption>Add, Edit, and Delete Jobs</caption>
        <thead>
            <tr>
                <th>Title</th>
                <th>Company</th>
                <th>Location</th>
                <th>Duration in Months</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Delete</th>
                <th>Edit</th>
            </tr>
        </thead>
        <tbody>
            {jobs.map((job, i) =>
            <Job
                job={job}
                key={i}
                onDelete={onDelete}
                onEdit={onEdit}
            />)}
        </tbody>
        </table>
    );
}

export default JobList;