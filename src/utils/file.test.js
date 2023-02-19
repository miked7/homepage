import { getAppStorageFromZoneFile, getFilename } from "./file";

test('get appstorager test', () => {
  var appUrl = "http://localhost:3000";
  var zoneFileString = '{"http://localhost:3000":{"storage":"https://gaia.blockstack.org/hub/1Dt7gFhWVASQCw3Zk8VDduxzdKMUP4Fjaq/","publicKey":"02bd0778ace56976784bea4b7495a6f234752289eac0ea1481060a91efd8299ef7"},"https://michael-thompson.mixmi.app:3000":{"storage":"https://gaia.blockstack.org/hub/1N6FXEnzoya4uij8hNWirN5qskW1VkSXmu/","publicKey":"03a8eab199b6cd4ae0678e4ab2c1b58d646f35d5e4624608f799349cba5c7a2cfa"},"https://mixmi.app:3000":{"storage":"https://gaia.blockstack.org/hub/1G3YDkqRfCWZCmRQV25BhTVVKqgxjPvPwq/","publicKey":"0332691c0ff79ea6038db5b9f4bd4aaa287a6cf731cddbbe2198f557759ba5f508"},"https://xck.app":{"storage":"https://gaia.blockstack.org/hub/13ArV3r8KZBgWoJ7VKsir29h6qVBsoWY2S/","publicKey":"0272ab608c44510394042e27a344fa905e3f37a9273e9e00798d3b4df9d68ba83f"},"https://stxnft.com":{"storage":"https://gaia.blockstack.org/hub/1AqSRmWiEAmoJV49TzKjX1gwH4Gj19XSBX/","publicKey":"0219d7697cfa61ea32b858bb2bcdce64dd75b769526fd409c6b5435f4bd0edaeaf"},"https://master.d2l0tpetdicwn0.amplifyapp.com":{"storage":"https://gaia.blockstack.org/hub/1Dmz41S1krrTx9kTL828sQbmfw5dRZFKxT/","publicKey":"0331fa4a10b2b3ae6e883070d820270395a1a4242733f1ec2ee1a1387bf8ef8638"},"http://michael-thompson.mixmi-dev.net":{"storage":"https://gaia.blockstack.org/hub/1HTZvSwD6wJsSDGnkWmVMkJPY6upxKJx2/","publicKey":"025dc6172b1c5904d4b4d648e71bd8e7050f2d6406652217c2f1d4bc763d40801b"},"https://michael-thompson.mixmi-dev.net":{"storage":"https://gaia.blockstack.org/hub/1HTYBdbV4oGRp6Z9nRyG2UVnJkAxjoMB9Y/","publicKey":"0267dbda42b27a9bb36a7dd736d85e63f420db1495228fab4a8e430be6e77786f4"}}';
  var expectedAppStorage = 'https://gaia.blockstack.org/hub/1Dt7gFhWVASQCw3Zk8VDduxzdKMUP4Fjaq/';
  expect(getAppStorageFromZoneFile(appUrl, zoneFileString) === expectedAppStorage);
  });

test('get appstorager test 2', () => {
  var appUrl = "https://michael-thompson.mixmi.app";
  var zoneFileString = '{"http://localhost:3000":{"storage":"https://gaia.blockstack.org/hub/1Dt7gFhWVASQCw3Zk8VDduxzdKMUP4Fjaq/","publicKey":"02bd0778ace56976784bea4b7495a6f234752289eac0ea1481060a91efd8299ef7"},"https://michael-thompson.mixmi.app:3000":{"storage":"https://gaia.blockstack.org/hub/1N6FXEnzoya4uij8hNWirN5qskW1VkSXmu/","publicKey":"03a8eab199b6cd4ae0678e4ab2c1b58d646f35d5e4624608f799349cba5c7a2cfa"},"https://mixmi.app:3000":{"storage":"https://gaia.blockstack.org/hub/1G3YDkqRfCWZCmRQV25BhTVVKqgxjPvPwq/","publicKey":"0332691c0ff79ea6038db5b9f4bd4aaa287a6cf731cddbbe2198f557759ba5f508"},"https://xck.app":{"storage":"https://gaia.blockstack.org/hub/13ArV3r8KZBgWoJ7VKsir29h6qVBsoWY2S/","publicKey":"0272ab608c44510394042e27a344fa905e3f37a9273e9e00798d3b4df9d68ba83f"},"https://stxnft.com":{"storage":"https://gaia.blockstack.org/hub/1AqSRmWiEAmoJV49TzKjX1gwH4Gj19XSBX/","publicKey":"0219d7697cfa61ea32b858bb2bcdce64dd75b769526fd409c6b5435f4bd0edaeaf"},"https://master.d2l0tpetdicwn0.amplifyapp.com":{"storage":"https://gaia.blockstack.org/hub/1Dmz41S1krrTx9kTL828sQbmfw5dRZFKxT/","publicKey":"0331fa4a10b2b3ae6e883070d820270395a1a4242733f1ec2ee1a1387bf8ef8638"},"http://michael-thompson.mixmi-dev.net":{"storage":"https://gaia.blockstack.org/hub/1HTZvSwD6wJsSDGnkWmVMkJPY6upxKJx2/","publicKey":"025dc6172b1c5904d4b4d648e71bd8e7050f2d6406652217c2f1d4bc763d40801b"},"https://michael-thompson.mixmi.app":{"storage":"https://gaia.blockstack.org/hub/1HTYBdbV4oGRp6Z9nRyG2UVnJkAxjoMB9Y/","publicKey":"0267dbda42b27a9bb36a7dd736d85e63f420db1495228fab4a8e430be6e77786f4"}}';
  var expectedAppStorage = 'https://gaia.blockstack.org/hub/1HTYBdbV4oGRp6Z9nRyG2UVnJkAxjoMB9Y/';
  expect(getAppStorageFromZoneFile(appUrl, zoneFileString) === expectedAppStorage);
  });

  test('getFilename test', () => {
    expect(getFilename("https://michael-thompson.mixmi.app/path/to/file.jpg") === "file.jpg");
    expect(getFilename("C:\\michael-thompson.mixmi.app\\path\\to\\file.jpg") === "file.jpg");
    });

  