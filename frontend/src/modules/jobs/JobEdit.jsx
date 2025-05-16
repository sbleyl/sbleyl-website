import React, { useState } from 'react';
import {useNavigate } from "react-router-dom";

export const JobEdit = ({ jobToEdit }) => {
    const [title, setTitle] = useState(jobToEdit.title);
    const [company, setCompany] = useState(jobToEdit.company);
    const [location, setLocation] = useState(jobToEdit.location);
    const [duration, setDuration] = useState(jobToEdit.duration);
    const [startDate, setStartDate] = useState(jobToEdit.startDate);
    const [endDate, setEndDate] = useState(jobToEdit.endDate);

    const redirect = useNavigate();

    const editJob = async () => {
        const response = await fetch(`/jobs/${jobToEdit._id}`, {
            method: 'PUT',
            body: JSON.stringify({
                title: title,
                company: company,
                location: location,
                duration: duration,
                startDate: startDate,
                endDate: endDate
            }),
            headers: {'Content-Type': 'application/json',},
        });

        if (response.status === 200) {
            alert(`Your job has been updated successfully!`);
        } else {
            const errMessage = await response.json();
            alert(`Error: We couldn't update your job. ${response.status}. ${errMessage.Error}`);
        }
        redirect("/JobsPage");
    }
    return (
        <>
            <h2>Edit a Job</h2>
            <article>
                <p>Update the job details in the table below. Please update the job title, company, location, duration, and dates.</p>
                <table id="jobs">
                    <caption>Please update the job.</caption>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Company</th>
                            <th>Location</th>
                            <th>Duration in Months</th>
                            <th>Start Date</th>
                            <th>End Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <label htmlFor="title">Title</label>
                                <input
                                    type="text"
                                    placeholder="Job Title"
                                    value={title}
                                    onChange={e => setTitle(e.target.value)}
                                    id="title" />
                            </td>
                            <td>
                                <label htmlFor="company">Company</label>
                                <input
                                    type="text"
                                    placeholder="Company Name"
                                    value={company}
                                    onChange={e => setCompany(e.target.value)}
                                    id="company" />
                            </td>
                            <td>
                                <label htmlFor="location">Location</label>
                                <input
                                    type="text"
                                    placeholder="City, State"
                                    value={location}
                                    onChange={e => setLocation(e.target.value)}
                                    id="location" />
                            </td>
                            <td>
                                <label htmlFor="duration">Duration in Months</label>
                                <input
                                    type="number"
                                    placeholder="Month(s)"
                                    value={duration}
                                    onChange={e => setDuration(e.target.value)}
                                    id="duration" />
                            </td>
                            <td>
                                <label htmlFor="startDate">Start Date</label>
                                <input
                                    type="date"
                                    placeholder=""
                                    value={startDate}
                                    onChange={e => setStartDate(e.target.value)}
                                    id="startDate" />
                            </td>
                            <td>
                                <label htmlFor="endDate">End Date</label>
                                <input
                                    type="date"
                                    value={endDate}
                                    onChange={e => setEndDate(e.target.value)}
                                    id="endDate" />
                            </td>
                            <td>
                                <label htmlFor="submit">Commit</label>
                                <button
                                    type="submit"
                                    onClick={editJob}
                                    id="submit"
                                >Edit
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <br></br>
            </article>
        </>
    );
}

export default JobEdit;