// Models for the Job Collection

// Import dependencies.
import mongoose from 'mongoose';
import 'dotenv/config';

// Connect based on the .env file parameters.
mongoose.connect(
    process.env.MONGODB_CONNECT_STRING,
    { useNewUrlParser: true}
);
const db = mongoose.connection;

// Confirm that the database has connected and print a message in the console.
db.once("open", (err) => {
    if(err){
        res.status(500).json({ Error: 'Internal Server Error. Unable to access the job history database. Please try again.' });
    } else  {
        console.log('Success: You have connected to the job history database.');
    }
});

// SCHEMA: Define the collection's schema.
const jobsSchema = mongoose.Schema({
	title:    { type: String, required: true },
    company:  { type: String, required: true, default: 'ABC Company' },
    location:  { type: String, required: true, default: 'City, State' },
	duration:     { type: Number, required: true, default: 'month(s)' },
	startDate: { type: Date, required: true, min: '1900-01-01' },
    endDate: { type: Date, max: Date.now, default: null, required: false  }
});

// Compile the model from the schema 
// by defining the collection name "jobs".
const jobs = mongoose.model('Jobs', jobsSchema);


// CREATE model *****************************************
const createJob = async (title, company, location, duration, startDate, endDate) => {
    const job = new jobs({ 
        title: title, 
        company: company, 
        location: location,
        duration: duration,
        startDate: startDate,
        endDate: endDate 
    });
    return job.save();
}


// RETRIEVE model *****************************************
// Retrieve all documents and return a promise.
const retrieveJobs = async () => {
    const query = jobs.find();
    return query.exec();
}

// RETRIEVE by ID
const retrieveJobByID = async (_id) => {
    const query = jobs.findById({_id: _id});
    return query.exec();
}

// DELETE model based on _id  *****************************************
const deleteJobById = async (_id) => {
    const result = await jobs.deleteOne({_id: _id});
    return result.deletedCount;
};


// UPDATE model *****************************************************
const updateJob = async (_id, title, company, location, duration, startDate, endDate) => {
    const result = await jobs.replaceOne({_id: _id }, {
        title: title, 
        company: company, 
        location: location,
        duration: duration,
        startDate: startDate,
        endDate: endDate 
    });
    return { 
        _id: _id, 
        title: title, 
        company: company, 
        location: location,
        duration: duration,
        startDate: startDate,
        endDate: endDate 
    }
}

// EXPORT the variables for use in the controller file.
export { createJob, retrieveJobs, retrieveJobByID, updateJob, deleteJobById }