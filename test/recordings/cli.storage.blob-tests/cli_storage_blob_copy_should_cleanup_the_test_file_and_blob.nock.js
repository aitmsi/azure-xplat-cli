// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'a0d901ba-9956-4f7d-830c-2d7974c36666',
    name: 'Azure Storage DM Dev',
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
  process.env['AZURE_STORAGE_CONNECTION_STRING'] = 'DefaultEndpointsProtocol=https;AccountName=xplat;AccountKey=null';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://xplat.blob.core.windows.net:443')
  .delete('/testblobcopysource?restype=container')
  .reply(202, "", { 'transfer-encoding': 'chunked',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '22078b1e-0001-004a-776d-e2a660000000',
  'x-ms-version': '2015-04-05',
  date: 'Wed, 20 Jul 2016 10:00:16 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.blob.core.windows.net:443')
  .delete('/testblobcopysource?restype=container')
  .reply(202, "", { 'transfer-encoding': 'chunked',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '22078b1e-0001-004a-776d-e2a660000000',
  'x-ms-version': '2015-04-05',
  date: 'Wed, 20 Jul 2016 10:00:16 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://xplat.blob.core.windows.net:443')
  .delete('/testblobcopydest?restype=container')
  .reply(202, "", { 'transfer-encoding': 'chunked',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '797cd077-0001-0004-106d-e26385000000',
  'x-ms-version': '2015-04-05',
  date: 'Wed, 20 Jul 2016 10:00:17 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.blob.core.windows.net:443')
  .delete('/testblobcopydest?restype=container')
  .reply(202, "", { 'transfer-encoding': 'chunked',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '797cd077-0001-0004-106d-e26385000000',
  'x-ms-version': '2015-04-05',
  date: 'Wed, 20 Jul 2016 10:00:17 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://xplat.file.core.windows.net:443')
  .delete('/testblobcopyshare?restype=share')
  .reply(202, "", { 'transfer-encoding': 'chunked',
  server: 'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '7324c7e9-001a-000c-356d-e278f6000000',
  'x-ms-version': '2015-04-05',
  date: 'Wed, 20 Jul 2016 10:00:17 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.file.core.windows.net:443')
  .delete('/testblobcopyshare?restype=share')
  .reply(202, "", { 'transfer-encoding': 'chunked',
  server: 'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '7324c7e9-001a-000c-356d-e278f6000000',
  'x-ms-version': '2015-04-05',
  date: 'Wed, 20 Jul 2016 10:00:17 GMT',
  connection: 'close' });
 return result; }]];