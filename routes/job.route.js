const express = require('express');
const router = express.Router();
const jobController = require('../controllers/job.controller');
const authorization = require('../middleware/authorization');
const verifyToken = require('../middleware/verifyToken');



router.route('/jobs')
.post(verifyToken, authorization('admin', 'manager'), jobController.createJob);

router.route('/manager/jobs')
.get(verifyToken, authorization('admin', 'manager'), jobController.getManagerJobs);

router.route('/manager/jobs/:id')
.get(verifyToken, authorization('admin', 'manager'), jobController.getJobById);

router.route('/jobs/:id')
.patch(verifyToken, authorization('admin', 'manager'), jobController.jobUpdateById);

router.route('/jobs')
.get(verifyToken, jobController.getJobs);

router.route('/jobs/:id')
.get(verifyToken, jobController.jobFindById);

router.route('/jobs/:id/apply')
.post(verifyToken, jobController.jobApply);

// router.delete('/deleteAll', async (req, res) => {
// const result = await Job.deleteMany()
// })



module.exports = router;
