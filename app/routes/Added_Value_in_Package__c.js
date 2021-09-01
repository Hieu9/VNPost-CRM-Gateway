const express = require('express');
const router = express.Router();
const objectController = require('../controllers/Added_Value_in_Package__c');
const checkAuth = require('../middlewares');
const validate = require('../middlewares/validate');
const countRequest = require('../middlewares/countRequest');
const cache = require('../libs/cache_request');

router.get('/', [checkAuth,countRequest,cache.useCache,cache.cacheRequest({prefix: 'added_value_in_package'}).route()], objectController.list);
router.get('/:id', [checkAuth,countRequest,cache.useCache,cache.cacheRequest({prefix: 'added_value_in_package-detail'}).route()], objectController.detail);
router.post('/upsert', [checkAuth,validate,countRequest], objectController.upsert);

module.exports = router;