import axios from 'axios';

const BNS_ADDRESS_SERVER = "https://stacks-node-api.stacks.co";
const BNS_ADDRESS_PATH = "v1/addresses/stacks";

const stxAddressMap = new Map();

export const getBnsNamesForAddress = (stxAddress) => {
    return new Promise((resolve, reject) => {
        if (stxAddressMap.has(stxAddress)) {
            resolve(stxAddressMap.get(stxAddress));
        }
        else {
            const namesUrl = `${BNS_ADDRESS_SERVER}/${BNS_ADDRESS_PATH}/${stxAddress}`;
            axios.get(namesUrl).then(res => {
                stxAddressMap.set(stxAddress, res.data.names);
                resolve(res.data.names);
            }).catch(err => {
                console.log(err);
                reject(err);
            });
        }
    });
}