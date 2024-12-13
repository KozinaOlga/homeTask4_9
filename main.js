'use strict';
/* пример без импортируемого файла
const uniqueIpAdresses = ipArray => {
    const uniqueIp = new Set(ipArray); //хранение уникальных IP адресов

    return uniqueIp.size; // возвращ.кол-во уникальных IP адресов
};

const listIPv4 = [
    "10.90.112.24",
    "10.64.146.250",
    "10.215.63.84",
    "10.125.20.72",
    "10.143.250.143",
    "10.181.137.59",
    "10.228.172.128",
    "10.111.75.25",
    "10.248.130.41",
    "10.61.119.18",
    "10.181.137.59",
    "10.228.172.128",
    "10.111.75.25",
    "10.248.130.41",
    "10.61.119.18",
];

const uniqueIpSize = uniqueIpAdresses(listIPv4);
console.log(`Количество уникальных IP адресов: ${uniqueIpSize}`);
*/

import { listIPv4 } from './ipv4.js';

const uniqueIPadresses = ipAdresses => {
    const uniqueIP = new Set(ipAdresses);

    return uniqueIP.size;
};

const uniqueIPsize = uniqueIPadresses(listIPv4);

console.log(`Количество уникальных IP адресов: ${uniqueIPsize}`);