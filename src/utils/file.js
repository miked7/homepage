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
                const jsonBlockstack1 = JSON.stringify(result.data[0].decodedToken.payload.claim.appsMeta)
                let jsonBlockstack2 = jsonBlockstack1
                let jsonBlockstack4 = {}
                if (window.location.origin === 'http://localhost:3000') {
                   jsonBlockstack2 = jsonBlockstack1.replace("http://localhost:3000","localhost");
                   const jsonBlockstack3 = JSON.parse(jsonBlockstack2)
                   jsonBlockstack4 = jsonBlockstack3.localhost
                }else{
                  // AWS hosting URL is something like https://master.d2l0tpetdicwn0.amplifyapp.com.  Replace that with app name.
                  jsonBlockstack2 = jsonBlockstack1.replace("/.*amplifyapp\.com/","Mixmi");
                  const jsonBlockstack3 = JSON.parse(jsonBlockstack2)
                  jsonBlockstack4 = jsonBlockstack3.Mixmi
                }
                const {storage} = jsonBlockstack4
                const getFile = storage + filename;
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