'use strict';

/** 
 * 
 *  List taken from https://en.wikipedia.org/wiki/Sort_code
 * 
 *  07-00 to 07-49	Nationwide Building Society
 *  08-60 to 08-61	clearing accounts for building societies, Virgin Money etc.
 *  16-52-21 for the Cumberland Building Society
 *  40-63-01 for The Coventry Building Society
 *  40-65-00 for Norwich & Peterborough Building Society
 */

const isNationwideSociety = function(parts) {
    if(parts.part1 === '07' && (parseInt(parts.part2) >= 0 && parseInt(parts.part2) < 50)) {
        return true;
    }
}

const isClearingAccount = function(parts) {
    if(parts.part1 === '08' && (parts.part2 === '60' || parts.part2 === '61')) {
        return true;
    }
}

const isCumberlandBuildingSociety = function(sortCode) {
    if(sortCode === '165221') {
        return true;
    }
}

const isCoventryBuildingSociety = function(sortCode) {
    if(sortCode === '406301') {
        return true;
    }
}

const isNorwichAndPeterboroughBuildingSociety = function(sortCode) {
    if(sortCode === '406500') {
        return true;
    }
}

const formatString = function (sortCode) {
    sortCode = sortCode.replace(/-/g, '');
    sortCode = sortCode.replace(/ /g, '');
    return sortCode;
};

const parts = function(sortCode) {
    return {
        part1: `${sortCode[0]}${sortCode[1]}`,
        part2: `${sortCode[2]}${sortCode[3]}`,
        part3: `${sortCode[4]}${sortCode[5]}`
    }
}

var containsOnlyNumbers = new RegExp('^\\d+$');

module.exports = function (sortCode) {
    const formattedSortCode = formatString(sortCode);

    if(!containsOnlyNumbers.test(formattedSortCode)) {
        return 'Error: Sort Code should only contain numbers';
    }

    if(formattedSortCode.length !== 6) {
        return 'Error: Sort Code is not 6 characters';
    }

    const sortCodeParts = parts(formattedSortCode);

    if (isCumberlandBuildingSociety(formattedSortCode)) {
        return true;
    }

    if (isNorwichAndPeterboroughBuildingSociety(formattedSortCode)) {
        return true;
    }

    if (isCoventryBuildingSociety(formattedSortCode)) {
        return true;
    }

    if (isNationwideSociety(sortCodeParts)) {
        return true;
    }

    if (isClearingAccount(sortCodeParts)) {
        return true;
    }

    return false;
};
