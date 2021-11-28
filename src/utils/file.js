import { Storage } from '@stacks/storage';
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