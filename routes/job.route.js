const express = require('express');
const router = express.Router();
const jobController = require('../controllers/job.controller')


router.route('/jobs')
.post(jobController.createJob);

router.route('/manager/jobs')
.get(jobController.getJobs);

router.route('/manager/jobs/:id')
.get(jobController.getJobById);

router.route('/jobs/:id')
.patch(jobController.jobUpdateById);



module.exports = router;
