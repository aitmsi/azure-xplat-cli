// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948',
    name: 'CollaberaInteropTest',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    registeredProviders: [],
    registeredResourceNamespaces: [],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'eastus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups//providers/Microsoft.Compute/virtualMachines/xplatTestGVMCreate?api-version=2014-12-01-preview')
  .reply(400, "{\"error\":{\"code\":\"InvalidApiVersionParameter\",\"message\":\"The api-version '2014-12-01-preview' is invalid. The supported versions are '2015-01-01,2014-04-01-preview,2014-04-01,2014-01-01,2013-03-01,2014-02-26,2014-04'.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '50a1ae9b-b8ab-4334-9995-67f72f96a683',
  'x-ms-correlation-request-id': '50a1ae9b-b8ab-4334-9995-67f72f96a683',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150415T112109Z:50a1ae9b-b8ab-4334-9995-67f72f96a683',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 15 Apr 2015 11:21:09 GMT',
  connection: 'close',
  'content-length': '220' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups//providers/Microsoft.Compute/virtualMachines/xplatTestGVMCreate?api-version=2014-12-01-preview')
  .reply(400, "{\"error\":{\"code\":\"InvalidApiVersionParameter\",\"message\":\"The api-version '2014-12-01-preview' is invalid. The supported versions are '2015-01-01,2014-04-01-preview,2014-04-01,2014-01-01,2013-03-01,2014-02-26,2014-04'.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '50a1ae9b-b8ab-4334-9995-67f72f96a683',
  'x-ms-correlation-request-id': '50a1ae9b-b8ab-4334-9995-67f72f96a683',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150415T112109Z:50a1ae9b-b8ab-4334-9995-67f72f96a683',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 15 Apr 2015 11:21:09 GMT',
  connection: 'close',
  'content-length': '220' });
 return result; }]];