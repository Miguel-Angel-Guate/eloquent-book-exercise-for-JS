const isIqualLength = (str1, str2) => str1.length === str2.length;

const isIdentical = (str1, str2) => str1 === str2;

const putNormalizeString = (string) => string.toLowerCase().split('').sort().join('');

const isAnagram = (str1, str2) => {
    return isIquallength(str1, str2) && !isIdentical(str1, str2) && putNormalizeString(str1) === putNormalizeString(str2)
}

/* console.log('is this Anagram phrase =>', isAnagram("clicli", "Cityeae")) */