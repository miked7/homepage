import { Storage } from '@stacks/storage';
import axios from 'axios';
import {parseZoneFile} from 'zone-file'; 
import { getPerson, getUserData, userSession, authenticate } from '../utils/auth';

const storage = new Storage({ userSession });

export const uploadFile = (targetFile) => {
    const options = {
        encrypt: false,
    };

    return new Promise((resolve, reject) => {
        storage.deleteFile(targetFile.name).then(() => {
            var reader = new FileReader();
            reader.onload = (event) => {
            var dataArrayBuffer = event.target.result;
            storage.putFile(targetFile.name, dataArrayBuffer, options)
                .then((url) => {
                    resolve(url);
                })
                .catch(err => {
                    reject(err);
                });
            };
            reader.onerror = (error) => {
                reject(error);
            };
            reader.readAsArrayBuffer(targetFile);
        })
        .catch(error => {
          console.log(error);
          var reader = new FileReader();
          reader.onload = (event) => {
          var dataArrayBuffer = event.target.result;
          storage.putFile(targetFile.name, dataArrayBuffer, options)
              .then((url) => {
                  resolve(url);
              })
              .catch(err => {
                  reject(err);
              });
          };
          reader.onerror = (error) => {
              reject(error);
          };
          reader.readAsArrayBuffer(targetFile);
        });
        
    });
}

// Workaround for bug with Stacks public storage
export const readPublicStorageFile = (userX, filename) => {
    return new Promise ((resolve1, reject1) =>{
      var nameLookupURL = "https://stacks-node-api.mainnet.stacks.co/v1/names/" + userX;
      axios.get(nameLookupURL)
        .then(result => {
          const zoneFileJson = parseZoneFile(result.data.zonefile)
          const zonefile4 = zoneFileJson.uri[0].target
          axios.get(zonefile4)
             .then(result => {
                const zoneFileString = JSON.stringify(result.data[0].decodedToken.payload.claim.appsMeta)
                const storageUrl = getAppStorageFromZoneFile(window.location.origin, zoneFileString);
                const getFile = storageUrl + filename;
                axios.get(getFile)
                  .then((fileContents) => {
                    if(fileContents) {
                      resolve1(fileContents.data)
                    } else {
                      reject1()
                    }
                  })
                  .catch(error => {
                     console.log(error)
                     reject1()
                  });
             })
           .catch(error => {
             console.log(error)
             reject1()
           });
        })
        .catch(error => {
           console.log(error)
           reject1()
        });
    });
  }

  export const getAppStorageFromZoneFile = (appUrl, zoneFileString) => {
    console.log(appUrl);
    console.log(zoneFileString);
    const replacedZoneFileString = zoneFileString.replace(`"${appUrl}"`,`"thisApp"`);
    console.log(replacedZoneFileString);
    const replacedZoneFileObject = JSON.parse(replacedZoneFileString);
    const appSectionOfZoneFile = replacedZoneFileObject.thisApp;
    const { storage } = appSectionOfZoneFile;
    return storage;
  }