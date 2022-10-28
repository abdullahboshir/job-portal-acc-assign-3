const {
    createJobService,
    getJobService,
    getJobByIdService,
    JobUpdateByIdService,
    jobApplyService,
    jobApplyServiceRecord
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


exports.getManagerJobs = async (req, res) => {
    try {
        const job = await getManagerJobService();

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




exports.jobFindById = async (req, res) => {
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


exports.jobApply = async (req, res) => {
   try {
    const {id} = req.params;
    const {jobRecord, jobIdFind} = await jobApplyService(id);

    
    const endDate = new Date()
    if(jobIdFind.applyDeadline.end < endDate){
        return res.status(408).json({
            status: 'fail',
            message: 'Application period is over'
        });
    }

    res.status(200).json({
        status: 'success',
        message: 'successfully applyng the job',
        data: jobRecord || jobIdFind
    })
   } catch (error) {
    res.status(400).json({
        status: 'fail',
        message: "couldn'd apply the job",
        error: error.message
    })
   }
};
