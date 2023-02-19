import axios from 'axios';

const API_HOST = "https://stacks-node-api.stacks.co";
const API_BNS_NAMES_FOR_ADDRESS = "v1/addresses/stacks";
const API_NAME_SUBDOMAINS = "v1/names/{0}/subdomains";

const stxAddressMap = new Map();

export const getBnsNamesForAddress = (stxAddress) => {
    return new Promise((resolve, reject) => {
        if (stxAddressMap.has(stxAddress)) {
            resolve(stxAddressMap.get(stxAddress));
        }
        else {
            const namesUrl = `${API_HOST}/${API_BNS_NAMES_FOR_ADDRESS}/${stxAddress}`;
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

export const getNameSubdomains = (name) => {
    return new Promise((resolve, reject) => {
        const subdomainsUrl = `${API_HOST}/v1/names/${name}/subdomains`;
        axios.get(subdomainsUrl).then(res => {
            resolve(res.data);
        }).catch(err => {
            console.log(err);
            reject(err);
        });
    });
};