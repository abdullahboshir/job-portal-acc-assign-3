
const Job = require("../models/Job");
const User = require("../models/user");

exports.createJobService = async (data) => {
    const job = await Job.create(data);
    return job;
};

exports.getManagerJobService = async () => {
    const job = await Job.find({});
    return job;
};

exports.getJobByIdService = async (jobId) => {
    const result = await Job.findOne({_id: jobId});
    return result;
};

exports.JobUpdateByIdService = async (jobId, data) => {
    const result = await Job.updateOne({_id: jobId}, data);
    return result;
};


exports.getJobService = async () => {
    const job = await Job.find({});
    return job;
};


exports.jobApplyService = async (applyJobId) => {
    const {id} = await User.findOne({});
    console.log('user id', id)
    const jobIdFind = await Job.findOne({_id: applyJobId});
    const doesUserExist = await Job.find({jobId: {$elemMatch: {id: ObjectId('id')}}});
    const {_id: jobIdApply} = jobIdFind;
    console.log('User is exist', doesUserExist)
    if(doesUserExist){
        return;
    }
    else{
        const jobRecord = await Job.updateOne(
            {_id: jobIdApply},
            {$push : {jobId: id}}
        )
    }
    
  
    console.log('update success?', jobRecord)
    return jobRecord;
};