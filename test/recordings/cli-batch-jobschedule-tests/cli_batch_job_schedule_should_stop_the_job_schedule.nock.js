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
  .post('/jobschedules/xplatJobSchedule/terminate?api-version=2016-07-01.3.1&timeout=30')
  .reply(202, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Thu, 04 Aug 2016 00:00:40 GMT',
  etag: '0x8D3BBFA5F3BB1C7',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'fa147141-0280-495a-bfc1-6d12ad8d0425',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': 'b095bc72-be8c-4dce-9eee-266ef2f327f1',
  dataserviceversion: '3.0',
  dataserviceid: 'https://matthchreastus2.eastus2.batch.azure.com/jobschedules/xplatJobSchedule/terminate',
  date: 'Thu, 04 Aug 2016 00:00:38 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://matthchreastus2.eastus2.batch.azure.com:443')
  .post('/jobschedules/xplatJobSchedule/terminate?api-version=2016-07-01.3.1&timeout=30')
  .reply(202, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Thu, 04 Aug 2016 00:00:40 GMT',
  etag: '0x8D3BBFA5F3BB1C7',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'fa147141-0280-495a-bfc1-6d12ad8d0425',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': 'b095bc72-be8c-4dce-9eee-266ef2f327f1',
  dataserviceversion: '3.0',
  dataserviceid: 'https://matthchreastus2.eastus2.batch.azure.com/jobschedules/xplatJobSchedule/terminate',
  date: 'Thu, 04 Aug 2016 00:00:38 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://matthchreastus2.eastus2.batch.azure.com:443')
  .get('/jobschedules/xplatJobSchedule?api-version=2016-07-01.3.1&timeout=30')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://matthchreastus2.eastus2.batch.azure.com/$metadata#jobschedules/@Element\",\"id\":\"xplatJobSchedule\",\"displayName\":\"displayName\",\"url\":\"https://matthchreastus2.eastus2.batch.azure.com/jobschedules/xplatJobSchedule\",\"eTag\":\"0x8D3BBFA5F3BB1C7\",\"lastModified\":\"2016-08-04T00:00:40.3337671Z\",\"creationTime\":\"2016-08-04T00:00:32.3481667Z\",\"state\":\"completed\",\"stateTransitionTime\":\"2016-08-04T00:00:40.3437583Z\",\"previousState\":\"active\",\"previousStateTransitionTime\":\"2016-08-04T00:00:36.447674Z\",\"schedule\":{\r\n    \"startWindow\":\"P2D\",\"recurrenceInterval\":\"P1D\"\r\n  },\"jobSpecification\":{\r\n    \"displayName\":\"jobSpecDisplayName2\",\"priority\":1,\"usesTaskDependencies\":false,\"constraints\":{\r\n      \"maxWallClockTime\":\"P1D\",\"maxTaskRetryCount\":5\r\n    },\"jobManagerTask\":{\r\n      \"id\":\"jobManager2\",\"displayName\":\"jobManagerDisplay\",\"commandLine\":\"cmd /c dir /s\",\"resourceFiles\":[\r\n        {\r\n          \"blobSource\":\"https://testacct.blob.core.windows.net/\",\"filePath\":\"filePath\"\r\n        }\r\n      ],\"constraints\":{\r\n        \"maxWallClockTime\":\"P10675199DT2H48M5.4775807S\",\"retentionTime\":\"P10675199DT2H48M5.4775807S\",\"maxTaskRetryCount\":5\r\n      },\"runElevated\":false,\"runExclusive\":true,\"killJobOnCompletion\":false\r\n    },\"poolInfo\":{\r\n      \"autoPoolSpecification\":{\r\n        \"autoPoolIdPrefix\":\"TestSpecPrefix\",\"poolLifetimeOption\":\"jobschedule\",\"keepAlive\":false,\"pool\":{\r\n          \"vmSize\":\"small\",\"maxTasksPerNode\":1,\"taskSchedulingPolicy\":{\r\n            \"nodeFillType\":\"Spread\"\r\n          },\"resizeTimeout\":\"PT15M\",\"targetDedicated\":3,\"enableAutoScale\":false,\"enableInterNodeCommunication\":false,\"startTask\":{\r\n            \"commandLine\":\"cmd /c dir /s\",\"runElevated\":false,\"maxTaskRetryCount\":0,\"waitForSuccess\":false\r\n          },\"cloudServiceConfiguration\":{\r\n            \"osFamily\":\"4\",\"targetOSVersion\":\"*\"\r\n          }\r\n        }\r\n      }\r\n    }\r\n  },\"executionInfo\":{\r\n    \"recentJob\":{\r\n      \"url\":\"https://matthchreastus2.eastus2.batch.azure.com/jobs/xplatJobSchedule:job-1\",\"id\":\"xplatJobSchedule:job-1\"\r\n    },\"endTime\":\"2016-08-04T00:00:40.3437583Z\"\r\n  },\"metadata\":[\r\n    {\r\n      \"name\":\"meta3\",\"value\":\"value3\"\r\n    },{\r\n      \"name\":\"meta4\",\"value\":\"value4\"\r\n    }\r\n  ]\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  'last-modified': 'Thu, 04 Aug 2016 00:00:40 GMT',
  etag: '0x8D3BBFA5F3BB1C7',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '5a3510e5-4ec9-4078-87a2-64ea3b33927f',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': '1429caa4-267f-4627-829d-aa634b1cd159',
  dataserviceversion: '3.0',
  date: 'Thu, 04 Aug 2016 00:00:39 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://matthchreastus2.eastus2.batch.azure.com:443')
  .get('/jobschedules/xplatJobSchedule?api-version=2016-07-01.3.1&timeout=30')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://matthchreastus2.eastus2.batch.azure.com/$metadata#jobschedules/@Element\",\"id\":\"xplatJobSchedule\",\"displayName\":\"displayName\",\"url\":\"https://matthchreastus2.eastus2.batch.azure.com/jobschedules/xplatJobSchedule\",\"eTag\":\"0x8D3BBFA5F3BB1C7\",\"lastModified\":\"2016-08-04T00:00:40.3337671Z\",\"creationTime\":\"2016-08-04T00:00:32.3481667Z\",\"state\":\"completed\",\"stateTransitionTime\":\"2016-08-04T00:00:40.3437583Z\",\"previousState\":\"active\",\"previousStateTransitionTime\":\"2016-08-04T00:00:36.447674Z\",\"schedule\":{\r\n    \"startWindow\":\"P2D\",\"recurrenceInterval\":\"P1D\"\r\n  },\"jobSpecification\":{\r\n    \"displayName\":\"jobSpecDisplayName2\",\"priority\":1,\"usesTaskDependencies\":false,\"constraints\":{\r\n      \"maxWallClockTime\":\"P1D\",\"maxTaskRetryCount\":5\r\n    },\"jobManagerTask\":{\r\n      \"id\":\"jobManager2\",\"displayName\":\"jobManagerDisplay\",\"commandLine\":\"cmd /c dir /s\",\"resourceFiles\":[\r\n        {\r\n          \"blobSource\":\"https://testacct.blob.core.windows.net/\",\"filePath\":\"filePath\"\r\n        }\r\n      ],\"constraints\":{\r\n        \"maxWallClockTime\":\"P10675199DT2H48M5.4775807S\",\"retentionTime\":\"P10675199DT2H48M5.4775807S\",\"maxTaskRetryCount\":5\r\n      },\"runElevated\":false,\"runExclusive\":true,\"killJobOnCompletion\":false\r\n    },\"poolInfo\":{\r\n      \"autoPoolSpecification\":{\r\n        \"autoPoolIdPrefix\":\"TestSpecPrefix\",\"poolLifetimeOption\":\"jobschedule\",\"keepAlive\":false,\"pool\":{\r\n          \"vmSize\":\"small\",\"maxTasksPerNode\":1,\"taskSchedulingPolicy\":{\r\n            \"nodeFillType\":\"Spread\"\r\n          },\"resizeTimeout\":\"PT15M\",\"targetDedicated\":3,\"enableAutoScale\":false,\"enableInterNodeCommunication\":false,\"startTask\":{\r\n            \"commandLine\":\"cmd /c dir /s\",\"runElevated\":false,\"maxTaskRetryCount\":0,\"waitForSuccess\":false\r\n          },\"cloudServiceConfiguration\":{\r\n            \"osFamily\":\"4\",\"targetOSVersion\":\"*\"\r\n          }\r\n        }\r\n      }\r\n    }\r\n  },\"executionInfo\":{\r\n    \"recentJob\":{\r\n      \"url\":\"https://matthchreastus2.eastus2.batch.azure.com/jobs/xplatJobSchedule:job-1\",\"id\":\"xplatJobSchedule:job-1\"\r\n    },\"endTime\":\"2016-08-04T00:00:40.3437583Z\"\r\n  },\"metadata\":[\r\n    {\r\n      \"name\":\"meta3\",\"value\":\"value3\"\r\n    },{\r\n      \"name\":\"meta4\",\"value\":\"value4\"\r\n    }\r\n  ]\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  'last-modified': 'Thu, 04 Aug 2016 00:00:40 GMT',
  etag: '0x8D3BBFA5F3BB1C7',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '5a3510e5-4ec9-4078-87a2-64ea3b33927f',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': '1429caa4-267f-4627-829d-aa634b1cd159',
  dataserviceversion: '3.0',
  date: 'Thu, 04 Aug 2016 00:00:39 GMT',
  connection: 'close' });
 return result; }]];