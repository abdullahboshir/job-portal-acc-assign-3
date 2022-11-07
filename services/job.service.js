
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
    const result = await Job.findOne({ _id: jobId });
    return result;
};

exports.JobUpdateByIdService = async (jobId, data) => {
    const result = await Job.updateOne({ _id: jobId }, data);
    return result;
};


exports.getJobService = async () => {
    const job = await Job.find({});
    return job;
};


exports.jobApplyService = async (userEmail, applyJobId) => {

    const { id } = await User.findOne({ email: userEmail });
    const jobIdFind = await Job.findOne({ _id: applyJobId });
    const { id: jobIdApply, jobId } = jobIdFind;
    const checkUserExist = await jobId.includes(id);

    if (!checkUserExist) {
        await Job.updateOne(
            { _id: jobIdApply },
            { $push: { jobId: id } } 
        )
    }

    return { jobIdFind, checkUserExist };
};