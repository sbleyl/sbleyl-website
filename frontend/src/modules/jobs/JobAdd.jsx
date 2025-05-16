import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

export const JobAdd = () => {
    const [title, setTitle] = useState('');
    const [company, setCompany] = useState('');
    const [location, setLocation] = useState('');
    const [duration, setDuration] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    const redirect = useNavigate();

    const addJob = async () => {
        const newJob = { title, company, location, duration, startDate, endDate: endDate === '' ? null : endDate };
        const response = await fetch('/jobs', {
              method: 'POST',
              body: JSON.stringify(newJob),
              headers: {
                  'Content-Type': 'application/json',
              },
          });
        if(response.status === 201){
              alert(`Your Job was successfully added`);
        } else {
              alert(`Error: Your job was not added = ${response.status}`);
        }
        redirect("/JobsPage");
    }

    return (
        <>
            <h2>Add a Job</h2>
            <article>
                <p>Fill out the table below to add a new job to the list. Provide information such as the job title, company, location, duration, and dates to complete the entry.</p>
                <table id="jobs">
                    <caption>Please add a job</caption>
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
                                    value={endDate || ''}
                                    onChange={e => setEndDate(e.target.value)}
                                    id="endDate" />
                            </td>
                            <td>
                                <label htmlFor="submit">Commit</label>
                                <button
                                    type="submit"
                                    onClick={addJob}
                                    id="submit"
                                >Add
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

export default JobAdd;