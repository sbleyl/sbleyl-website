// Controllers for the Movie Collection

import 'dotenv/config';
import express from 'express';
import * as jobs from './jobs-model.mjs';

const PORT = process.env.PORT;
const app = express();
app.use(express.json());  // REST needs JSON MIME type.


// CREATE controller ******************************************
app.post ('/jobs', (req,res) => { 
    jobs.createJob(
        req.body.title, 
        req.body.company, 
        req.body.location,
        req.body.duration,
        req.body.startDate,
        req.body.endDate
        )
        .then(job => {
            console.log(`"${job.title}" was added to the job database.`);
            res.status(201).json(job);
        })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: 'Bad Request. Unable to create the job entry. Please try again.' });
        });
});


// RETRIEVE controller ****************************************************
app.get('/jobs', (req, res) => {
    jobs.retrieveJobs()
        .then(jobs => { 
            if (jobs !== null) {
                console.log(`All jobs were retrieved from the collection.`);
                res.json(jobs);
            } else {
                res.status(404).json({ Error: 'Not Found. No jobs were found in the database. Please try again.' });
            }         
         })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: 'Bad Request. An error has occurred while retrieving jobs. Please try again.' });
        });
});


// RETRIEVE by ID controller
app.get('/jobs/:_id', (req, res) => {
    jobs.retrieveJobByID(req.params._id)
    .then(job => { 
        if (job !== null) {
            console.log(`"${job.title}" was retrieved, based on its ID.`);
            res.json(job);
        } else {
            res.status(404).json({ Error: 'Not Found. No jobs were found in the database. Please try again.' });
        }         
     })
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: 'Bad Request. An error occurred while retrieving the job by ID. Please try again.' });
    });

});


// UPDATE controller ************************************
app.put('/jobs/:_id', (req, res) => {
    jobs.updateJob(
        req.params._id, 
        req.body.title, 
        req.body.company, 
        req.body.location,
        req.body.duration,
        req.body.startDate,
        req.body.endDate
    )
    .then(job => {
        console.log(`"${job.title}" was updated.`);
        res.json(job);
    })
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: 'Bad Request. Unable to update the job entry. Please try again.' });
    });
});


// DELETE Controller ******************************
app.delete('/jobs/:_id', (req, res) => {
    jobs.deleteJobById(req.params._id)
        .then(deletedCount => {
            if (deletedCount === 1) {
                console.log(`Based on its ID, ${deletedCount} job was deleted.`);
                res.status(200).send({ Success: 'Request Successful. Job was deleted successfully.' });
            } else {
                res.status(404).json({ Error: 'Not Found. No job was found to delete. Please try again.' });
            }
        })
        .catch(error => {
            console.error(error);
            res.send({ Error: 'Error while processing the request. Please try again.' });
        });
});


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});