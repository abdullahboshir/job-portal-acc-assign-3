const Job = require("../models/job")


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


exports.jobApplyService = async () => {
    const JobApply = await Job.create({});
    return JobApply;
};