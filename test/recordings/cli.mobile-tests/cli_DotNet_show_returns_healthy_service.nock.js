// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '5e7d1bb6-4953-44fe-8a54-43fbdb53b989',
    managementCertificate: {
      key: 'mockedKey',
      cert: 'mockedCert'
    },
    name: 'Mobilytics Test1',
    registeredProviders: ['website', 'mobileservice'],
    registeredResourceNamespaces: [],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
};

exports.scopes = [[function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/5e7d1bb6-4953-44fe-8a54-43fbdb53b989/applications/clitestDotNet5570mobileservice')
  .reply(200, "<Application xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Name>clitestDotNet5570mobileservice</Name><Label>clitestDotNet5570</Label><Description>clitestDotNet5570</Description><Uri>https://management.core.windows.net/5e7d1bb6-4953-44fe-8a54-43fbdb53b989/applications/clitestDotNet5570mobileservice</Uri><State>Healthy</State><InternalResources><InternalResource><LogicalName>ZumoMobileService</LogicalName><State>ProvisionConfigured</State><Type>Microsoft.WindowsAzure.MobileServices.MobileService</Type><Name>clitestDotNet5570</Name><SelfLinkUri>https://management.core.windows.net:8443/5e7d1bb6-4953-44fe-8a54-43fbdb53b989/services/mobileservices/clitestDotNet5570</SelfLinkUri><FailureCode/></InternalResource><InternalResource><LogicalName>ZumoSqlDatabase_1cc4e01c57ba416d9bc42ef6fc7f2744</LogicalName><State>Provisioned</State><Type>Microsoft.WindowsAzure.SQLAzure.DataBase</Type><Name>clitestDotNet5570_db</Name><SelfLinkUri>https://management.core.windows.net:8443/5e7d1bb6-4953-44fe-8a54-43fbdb53b989/services/sqlservers/servers/obpgu6o0w6/databases/clitestDotNet5570_db</SelfLinkUri><FailureCode/></InternalResource><InternalResource><LogicalName>ZumoSqlServer_8f222fcf678d4fc698e63d5527768434</LogicalName><State>ProvisionConfigured</State><Type>Microsoft.WindowsAzure.SQLAzure.Server</Type><Name>obpgu6o0w6</Name><SelfLinkUri>https://management.core.windows.net:8443/5e7d1bb6-4953-44fe-8a54-43fbdb53b989/services/sqlservers/servers/obpgu6o0w6</SelfLinkUri><FailureCode/></InternalResource></InternalResources><ExternalResources/></Application>", { 'cache-control': 'no-cache',
  'content-length': '1612',
  'content-type': 'application/xml; charset=utf-8',
  etag: '65feedd0d554470dac09c8741977ec12:0001',
  server: '1.0.6198.213 (rd_rdfe_stable.150402-1703) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': 'e452ffa19dad858a8d5c5d8df3bf08a6',
  date: 'Wed, 08 Apr 2015 21:44:48 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/5e7d1bb6-4953-44fe-8a54-43fbdb53b989/services/mobileservices/mobileservices/clitestDotNet5570')
  .reply(200, "{\"name\":\"clitestDotNet5570\",\"type\":\"ZumoApp\",\"state\":\"Ready\",\"selflink\":\"https:\\/\\/management.core.windows.net\\/5e7d1bb6-4953-44fe-8a54-43fbdb53b989\\/services\\/5e7d1bb6-4953-44fe-8a54-43fbdb53b989\\/mobileservices\\/clitestDotNet5570\\/\",\"applicationUrl\":\"https:\\/\\/clitestdotnet5570.azure-mobile.net\\/\",\"applicationKey\":\"UdnTjUZWAhnuHaVWGzZFHLgRuAjVVt78\",\"masterKey\":\"WjWrYXPNCcLBEKBBzpvjrKijWvyILe12\",\"tables\":[],\"webspace\":\"WESTUSWEBSPACE\",\"region\":\"West US\",\"managementPortalLink\":\"https:\\/\\/manage.windowsazure.com\\/#Workspaces\\/MobileServicesExtension\\/apps\\/clitestDotNet5570\",\"sourceRepositoryUrl\":\"https:\\/\\/clitestdotnet5570.scm.azure-mobile.net\\/clitestDotNet5570.git\",\"deploymentTriggerUrl\":\"https:\\/\\/$mobile$clitestDotNet5570:Draw4da0nLwpeleGiiWvRBJ6LCXitHor8qxLo0Ebmt6sE1cYSGBsedtaXtkY@clitestdotnet5570.scm.azure-mobile.net\\/deploy\",\"platform\":\"dotNet\",\"backendVersion\":\"1.0.450\",\"enableExternalPushEntity\":true}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '925',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: '1.0.6198.213 (rd_rdfe_stable.150402-1703) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-powered-by': 'ASP.NET',
  'x-ms-request-id': '300f8fa571fb86e6960aa215119c837c',
  date: 'Wed, 08 Apr 2015 21:44:48 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/5e7d1bb6-4953-44fe-8a54-43fbdb53b989/services/mobileservices/mobileservices/clitestDotNet5570/scalesettings')
  .reply(200, "{\"tier\":\"tier1\",\"numberOfInstances\":1}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '38',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: '1.0.6198.213 (rd_rdfe_stable.150402-1703) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-powered-by': 'ASP.NET',
  'x-ms-request-id': '758c641136f888a998d015ef38f00fdb',
  date: 'Wed, 08 Apr 2015 21:44:48 GMT' });
 return result; }]];