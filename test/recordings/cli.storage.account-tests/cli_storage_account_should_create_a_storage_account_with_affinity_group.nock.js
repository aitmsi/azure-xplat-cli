// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'a0d901ba-9956-4f7d-830c-2d7974c36666',
    managementCertificate: {
      key: 'mockedKey',
      cert: 'mockedCert'
    },
    name: 'Azure Storage DM Dev',
    registeredProviders: [],
    registeredResourceNamespaces: [],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_STORAGE_TEST_LOCATION'] = 'West Europe';
  process.env['AZURE_STORAGE_TEST_TYPE'] = 'LRS';
  process.env['AZURE_SITE_TEST_LOCATION'] = 'West Europe';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.core.windows.net:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/a0d901ba-9956-4f7d-830c-2d7974c36666/affinitygroups', '*')
  .reply(201, "", { 'cache-control': 'no-cache',
  'content-length': '0',
  location: 'https://management.core.windows.net/subscriptions/a0d901ba-9956-4f7d-830c-2d7974c36666/affinitygroup/xcliaffinity4801',
  server: '1.0.6198.208 (rd_rdfe_stable.150324-1051) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': 'c01d323f69868dc095974cc5e2c0101f',
  date: 'Fri, 03 Apr 2015 14:10:31 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/a0d901ba-9956-4f7d-830c-2d7974c36666/affinitygroups', '*')
  .reply(201, "", { 'cache-control': 'no-cache',
  'content-length': '0',
  location: 'https://management.core.windows.net/subscriptions/a0d901ba-9956-4f7d-830c-2d7974c36666/affinitygroup/xcliaffinity4801',
  server: '1.0.6198.208 (rd_rdfe_stable.150324-1051) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': 'c01d323f69868dc095974cc5e2c0101f',
  date: 'Fri, 03 Apr 2015 14:10:31 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.core.windows.net:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/a0d901ba-9956-4f7d-830c-2d7974c36666/services/storageservices', '*')
  .reply(202, "", { 'cache-control': 'no-cache',
  'content-length': '0',
  location: 'https://management.core.windows.net/subscriptions/a0d901ba-9956-4f7d-830c-2d7974c36666/storage/xcliaccount4831',
  server: '1.0.6198.208 (rd_rdfe_stable.150324-1051) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': '1c1c1a2c7ae5819daa5b8920c11e0e40',
  date: 'Fri, 03 Apr 2015 14:10:37 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/a0d901ba-9956-4f7d-830c-2d7974c36666/services/storageservices', '*')
  .reply(202, "", { 'cache-control': 'no-cache',
  'content-length': '0',
  location: 'https://management.core.windows.net/subscriptions/a0d901ba-9956-4f7d-830c-2d7974c36666/storage/xcliaccount4831',
  server: '1.0.6198.208 (rd_rdfe_stable.150324-1051) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': '1c1c1a2c7ae5819daa5b8920c11e0e40',
  date: 'Fri, 03 Apr 2015 14:10:37 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.core.windows.net:443')
  .get('/a0d901ba-9956-4f7d-830c-2d7974c36666/operations/1c1c1a2c7ae5819daa5b8920c11e0e40')
  .reply(200, "<Operation xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><ID>1c1c1a2c-7ae5-819d-aa5b-8920c11e0e40</ID><Status>Succeeded</Status><HttpStatusCode>200</HttpStatusCode></Operation>", { 'cache-control': 'no-cache',
  'content-length': '232',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.208 (rd_rdfe_stable.150324-1051) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': 'e6dedaf90d2a838bb8748d7b6ca96066',
  date: 'Fri, 03 Apr 2015 14:11:08 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/a0d901ba-9956-4f7d-830c-2d7974c36666/operations/1c1c1a2c7ae5819daa5b8920c11e0e40')
  .reply(200, "<Operation xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><ID>1c1c1a2c-7ae5-819d-aa5b-8920c11e0e40</ID><Status>Succeeded</Status><HttpStatusCode>200</HttpStatusCode></Operation>", { 'cache-control': 'no-cache',
  'content-length': '232',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.208 (rd_rdfe_stable.150324-1051) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': 'e6dedaf90d2a838bb8748d7b6ca96066',
  date: 'Fri, 03 Apr 2015 14:11:08 GMT',
  connection: 'close' });
 return result; }]];
 exports.randomTestIdsGenerated = function() { return ['xcliaccount4831','xcliaffinity4801'];};