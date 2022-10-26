const express = require('express');
const router = express.Router();
const jobController = require('../controllers/job.controller');
const authorization = require('../middleware/authorization');
const verifyToken = require('../middleware/verifyToken');


// router.use(verifyToken);

router.route('/jobs')
.post( authorization('admin', 'manager') ,jobController.createJob);

router.route('/manager/jobs')
.get(jobController.getManagerJobs);

router.route('/manager/jobs/:id')
.get(jobController.getJobById);

router.route('/jobs/:id')
.patch(jobController.jobUpdateById);

router.route('/jobs')
.get(jobController.getJobs);


router.route('/jobs/:id')
.get(jobController.jobFindById);


router.route('/jobs/:id/apply')
.post(verifyToken, jobController.jobApply);




module.exports = router;
