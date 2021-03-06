// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '2915bbd6-1252-405f-8173-6c00428146d9',
    name: 'Batch-MatthChr',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: [],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_BATCH_ACCOUNT'] = 'matthchreastus2';
  process.env['AZURE_BATCH_ENDPOINT'] = 'https://matthchreastus2.eastus2.batch.azure.com';
  
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://matthchreastus2.eastus2.batch.azure.com:443')
  .get('/pools/xplatTestPool/nodes?api-version=2016-07-01.3.1&timeout=30')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://matthchreastus2.eastus2.batch.azure.com/$metadata#nodes\",\"value\":[\r\n    {\r\n      \"id\":\"tvm-3850571994_6-20160803t201149z\",\"url\":\"https://matthchreastus2.eastus2.batch.azure.com/pools/xplatTestPool/nodes/tvm-3850571994_6-20160803t201149z\",\"state\":\"idle\",\"schedulingState\":\"enabled\",\"stateTransitionTime\":\"2016-08-03T23:10:35.91665Z\",\"lastBootTime\":\"2016-08-03T23:10:32.785991Z\",\"allocationTime\":\"2016-08-03T20:11:49.8693034Z\",\"ipAddress\":\"100.118.152.66\",\"affinityId\":\"TVM:tvm-3850571994_6-20160803t201149z\",\"vmSize\":\"small\",\"totalTasksRun\":4,\"totalTasksSucceeded\":4,\"runningTasksCount\":0,\"startTask\":{\r\n        \"commandLine\":\"cmd /c dir\",\"resourceFiles\":[\r\n          \r\n        ],\"runElevated\":false,\"maxTaskRetryCount\":0,\"waitForSuccess\":true\r\n      },\"startTaskInfo\":{\r\n        \"state\":\"completed\",\"startTime\":\"2016-08-03T23:10:35.651042Z\",\"endTime\":\"2016-08-03T23:10:35.91665Z\",\"exitCode\":0,\"retryCount\":0\r\n      }\r\n    },{\r\n      \"id\":\"tvm-3850571994_7-20160803t223007z\",\"url\":\"https://matthchreastus2.eastus2.batch.azure.com/pools/xplatTestPool/nodes/tvm-3850571994_7-20160803t223007z\",\"state\":\"idle\",\"schedulingState\":\"enabled\",\"stateTransitionTime\":\"2016-08-03T22:33:55.591075Z\",\"lastBootTime\":\"2016-08-03T22:33:53.7894325Z\",\"allocationTime\":\"2016-08-03T22:30:07.6718509Z\",\"ipAddress\":\"100.109.20.93\",\"affinityId\":\"TVM:tvm-3850571994_7-20160803t223007z\",\"vmSize\":\"small\",\"totalTasksRun\":7,\"totalTasksSucceeded\":5,\"runningTasksCount\":0,\"startTask\":{\r\n        \"commandLine\":\"cmd /c dir\",\"resourceFiles\":[\r\n          \r\n        ],\"runElevated\":false,\"maxTaskRetryCount\":0,\"waitForSuccess\":true\r\n      },\"startTaskInfo\":{\r\n        \"state\":\"completed\",\"startTime\":\"2016-08-03T22:33:55.4572945Z\",\"endTime\":\"2016-08-03T22:33:55.591075Z\",\"exitCode\":0,\"retryCount\":0\r\n      }\r\n    },{\r\n      \"id\":\"tvm-3850571994_8-20160803t235002z\",\"url\":\"https://matthchreastus2.eastus2.batch.azure.com/pools/xplatTestPool/nodes/tvm-3850571994_8-20160803t235002z\",\"state\":\"idle\",\"schedulingState\":\"enabled\",\"stateTransitionTime\":\"2016-08-03T23:55:42.7510894Z\",\"lastBootTime\":\"2016-08-03T23:55:40.5605756Z\",\"allocationTime\":\"2016-08-03T23:50:02.3738644Z\",\"ipAddress\":\"100.118.238.52\",\"affinityId\":\"TVM:tvm-3850571994_8-20160803t235002z\",\"vmSize\":\"small\",\"totalTasksRun\":1,\"totalTasksSucceeded\":0,\"runningTasksCount\":0,\"startTask\":{\r\n        \"commandLine\":\"cmd /c dir\",\"resourceFiles\":[\r\n          \r\n        ],\"runElevated\":false,\"maxTaskRetryCount\":0,\"waitForSuccess\":true\r\n      },\"startTaskInfo\":{\r\n        \"state\":\"completed\",\"startTime\":\"2016-08-03T23:55:42.6973764Z\",\"endTime\":\"2016-08-03T23:55:42.7510894Z\",\"exitCode\":0,\"retryCount\":0\r\n      }\r\n    }\r\n  ]\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '09b623fe-b6a6-4fb8-867a-69c80943cb41',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': 'e92d66fd-91ee-44ff-9e83-4e582148b18b',
  dataserviceversion: '3.0',
  date: 'Thu, 04 Aug 2016 00:01:17 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://matthchreastus2.eastus2.batch.azure.com:443')
  .get('/pools/xplatTestPool/nodes?api-version=2016-07-01.3.1&timeout=30')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://matthchreastus2.eastus2.batch.azure.com/$metadata#nodes\",\"value\":[\r\n    {\r\n      \"id\":\"tvm-3850571994_6-20160803t201149z\",\"url\":\"https://matthchreastus2.eastus2.batch.azure.com/pools/xplatTestPool/nodes/tvm-3850571994_6-20160803t201149z\",\"state\":\"idle\",\"schedulingState\":\"enabled\",\"stateTransitionTime\":\"2016-08-03T23:10:35.91665Z\",\"lastBootTime\":\"2016-08-03T23:10:32.785991Z\",\"allocationTime\":\"2016-08-03T20:11:49.8693034Z\",\"ipAddress\":\"100.118.152.66\",\"affinityId\":\"TVM:tvm-3850571994_6-20160803t201149z\",\"vmSize\":\"small\",\"totalTasksRun\":4,\"totalTasksSucceeded\":4,\"runningTasksCount\":0,\"startTask\":{\r\n        \"commandLine\":\"cmd /c dir\",\"resourceFiles\":[\r\n          \r\n        ],\"runElevated\":false,\"maxTaskRetryCount\":0,\"waitForSuccess\":true\r\n      },\"startTaskInfo\":{\r\n        \"state\":\"completed\",\"startTime\":\"2016-08-03T23:10:35.651042Z\",\"endTime\":\"2016-08-03T23:10:35.91665Z\",\"exitCode\":0,\"retryCount\":0\r\n      }\r\n    },{\r\n      \"id\":\"tvm-3850571994_7-20160803t223007z\",\"url\":\"https://matthchreastus2.eastus2.batch.azure.com/pools/xplatTestPool/nodes/tvm-3850571994_7-20160803t223007z\",\"state\":\"idle\",\"schedulingState\":\"enabled\",\"stateTransitionTime\":\"2016-08-03T22:33:55.591075Z\",\"lastBootTime\":\"2016-08-03T22:33:53.7894325Z\",\"allocationTime\":\"2016-08-03T22:30:07.6718509Z\",\"ipAddress\":\"100.109.20.93\",\"affinityId\":\"TVM:tvm-3850571994_7-20160803t223007z\",\"vmSize\":\"small\",\"totalTasksRun\":7,\"totalTasksSucceeded\":5,\"runningTasksCount\":0,\"startTask\":{\r\n        \"commandLine\":\"cmd /c dir\",\"resourceFiles\":[\r\n          \r\n        ],\"runElevated\":false,\"maxTaskRetryCount\":0,\"waitForSuccess\":true\r\n      },\"startTaskInfo\":{\r\n        \"state\":\"completed\",\"startTime\":\"2016-08-03T22:33:55.4572945Z\",\"endTime\":\"2016-08-03T22:33:55.591075Z\",\"exitCode\":0,\"retryCount\":0\r\n      }\r\n    },{\r\n      \"id\":\"tvm-3850571994_8-20160803t235002z\",\"url\":\"https://matthchreastus2.eastus2.batch.azure.com/pools/xplatTestPool/nodes/tvm-3850571994_8-20160803t235002z\",\"state\":\"idle\",\"schedulingState\":\"enabled\",\"stateTransitionTime\":\"2016-08-03T23:55:42.7510894Z\",\"lastBootTime\":\"2016-08-03T23:55:40.5605756Z\",\"allocationTime\":\"2016-08-03T23:50:02.3738644Z\",\"ipAddress\":\"100.118.238.52\",\"affinityId\":\"TVM:tvm-3850571994_8-20160803t235002z\",\"vmSize\":\"small\",\"totalTasksRun\":1,\"totalTasksSucceeded\":0,\"runningTasksCount\":0,\"startTask\":{\r\n        \"commandLine\":\"cmd /c dir\",\"resourceFiles\":[\r\n          \r\n        ],\"runElevated\":false,\"maxTaskRetryCount\":0,\"waitForSuccess\":true\r\n      },\"startTaskInfo\":{\r\n        \"state\":\"completed\",\"startTime\":\"2016-08-03T23:55:42.6973764Z\",\"endTime\":\"2016-08-03T23:55:42.7510894Z\",\"exitCode\":0,\"retryCount\":0\r\n      }\r\n    }\r\n  ]\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '09b623fe-b6a6-4fb8-867a-69c80943cb41',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': 'e92d66fd-91ee-44ff-9e83-4e582148b18b',
  dataserviceversion: '3.0',
  date: 'Thu, 04 Aug 2016 00:01:17 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://matthchreastus2.eastus2.batch.azure.com:443')
  .get('/pools/xplatTestLinuxPool/nodes?api-version=2016-07-01.3.1&timeout=30')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://matthchreastus2.eastus2.batch.azure.com/$metadata#nodes\",\"value\":[\r\n    {\r\n      \"id\":\"tvm-1695681911_1-20160803t220254z\",\"url\":\"https://matthchreastus2.eastus2.batch.azure.com/pools/xplatTestLinuxPool/nodes/tvm-1695681911_1-20160803t220254z\",\"state\":\"idle\",\"schedulingState\":\"enabled\",\"stateTransitionTime\":\"2016-08-03T22:05:29.483419Z\",\"lastBootTime\":\"2016-08-03T22:05:29.283379Z\",\"allocationTime\":\"2016-08-03T22:02:54.1560523Z\",\"ipAddress\":\"10.0.0.4\",\"affinityId\":\"TVM:tvm-1695681911_1-20160803t220254z\",\"vmSize\":\"standard_a1\",\"totalTasksRun\":0,\"totalTasksSucceeded\":0,\"runningTasksCount\":0\r\n    }\r\n  ]\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'c3d0baf1-8838-44ea-b816-b0a31ead52e8',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': 'f432ac5a-0e65-4122-bc6f-c0fdddb2f091',
  dataserviceversion: '3.0',
  date: 'Thu, 04 Aug 2016 00:01:17 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://matthchreastus2.eastus2.batch.azure.com:443')
  .get('/pools/xplatTestLinuxPool/nodes?api-version=2016-07-01.3.1&timeout=30')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://matthchreastus2.eastus2.batch.azure.com/$metadata#nodes\",\"value\":[\r\n    {\r\n      \"id\":\"tvm-1695681911_1-20160803t220254z\",\"url\":\"https://matthchreastus2.eastus2.batch.azure.com/pools/xplatTestLinuxPool/nodes/tvm-1695681911_1-20160803t220254z\",\"state\":\"idle\",\"schedulingState\":\"enabled\",\"stateTransitionTime\":\"2016-08-03T22:05:29.483419Z\",\"lastBootTime\":\"2016-08-03T22:05:29.283379Z\",\"allocationTime\":\"2016-08-03T22:02:54.1560523Z\",\"ipAddress\":\"10.0.0.4\",\"affinityId\":\"TVM:tvm-1695681911_1-20160803t220254z\",\"vmSize\":\"standard_a1\",\"totalTasksRun\":0,\"totalTasksSucceeded\":0,\"runningTasksCount\":0\r\n    }\r\n  ]\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'c3d0baf1-8838-44ea-b816-b0a31ead52e8',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': 'f432ac5a-0e65-4122-bc6f-c0fdddb2f091',
  dataserviceversion: '3.0',
  date: 'Thu, 04 Aug 2016 00:01:17 GMT',
  connection: 'close' });
 return result; }]];