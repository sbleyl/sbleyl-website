import React from 'react';
import { MdDeleteForever, MdModeEdit } from "react-icons/md";

function Job({ job, onEdit, onDelete }) {
    const formatDate = (date) => {
        if (!date) return '';
        return new Date(date).toISOString().split('T')[0];
    };

    return (
        <tr>
            <td>{job.title}</td>
            <td>{job.company}</td>
            <td>{job.location}</td>
            <td>{job.duration}</td>
            <td>{formatDate(job.startDate)}</td>
            <td>{formatDate(job.endDate)}</td>
            <td><MdDeleteForever onClick={() => onDelete(job._id)} /></td>
            <td><MdModeEdit onClick={() => onEdit(job)} /></td>
        </tr>
    );
}

export default Job;