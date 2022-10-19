const {
    createJobService,
    getJobService,
    getJobByIdService,
    JobUpdateByIdService
} = require("../services/job.service")


exports.createJob = async (req, res) => {
    try {
        const job = await createJobService(req.body);

        res.status(200).json({
            status: 'success',
            message: 'successfully created the job',
            data: job
        })
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: "couln'd create the job",
            error: error.message
        })
    }
};


exports.getJobs = async (req, res) => {
    try {
        const job = await getJobService();

        res.status(200).json({
            status: 'success',
            message: 'successfully get the job',
            data: job
        })
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: "couldn'd get the job",
            error: error.message
        })
    }
};


exports.getJobById = async (req, res) => {
    try {
        const {id} = req.params;
        const result = await getJobByIdService(id);

        res.status(200).json({
            status: 'success',
            message: 'successfully get the job',
            data: result
        })
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: "couldn'd get the job",
            error: error.message
        })
    }
};


exports.jobUpdateById = async (req, res) => {
    try {
        const {id} = req.params;
        const result = await JobUpdateByIdService(id, req.body);

        res.status(200).json({
            status: 'success',
            message: 'successfully update the job',
            data: result
        })
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: "couldn'd update the job",
            error: error.message
        })
    }
};