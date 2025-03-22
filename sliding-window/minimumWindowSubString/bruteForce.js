/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
    if (t.length > s.length) {
      return '';
    }
  
    let minLength = Number.POSITIVE_INFINITY;
    let minSubString = '';
    for (let i = 0; i < s.length; i++) {
      for (let j=i; j< s.length;j++) {
        const subStr = s.substring(i, j+1);
        const isValidSubString = checkIsValidSubString(subStr, t);
        if (isValidSubString) {
          if (subStr.length < minLength) {
            minLength = subStr.length;
            minSubString = subStr;
          }
        }
      }
    }
    return minSubString;
  };
  
  function checkIsValidSubString(subString, comparatorString) {
    let map = {};
    for (let str of comparatorString) {
      map[str] = (map[str] || 0) + 1;
    }
    for (let str of subString) {
      if (map[str]) {
        map[str]--;
      }
    }
    return Object.values(map).every(count => count <= 0);
  }
  console.log(minWindow('ADOBECODEBANC', 'ABC')); //BANC
  console.log(minWindow('a', 'a')); // a
  console.log(minWindow('wegdtzwabazduwwdysdetrrctotpcepalxdewzezbfewbabbseinxbqqplitpxtcwwhuyntbtzxwzyaufihclztckdwccpeyonumbpnuonsnnsjscrvpsqsftohvfnvtbphcgxyumqjzltspmphefzjypsvugqqjhzlnylhkdqmolggxvneaopadivzqnpzurmhpxqcaiqruwztroxtcnvhxqgndyozpcigzykbiaucyvwrjvknifufxducbkbsmlanllpunlyohwfsssiazeixhebipfcdqdrcqiwftutcrbxjthlulvttcvdtaiwqlnsdvqkrngvghupcbcwnaqiclnvnvtfihylcqwvderjllannflchdklqxidvbjdijrnbpkftbqgpttcagghkqucpcgmfrqqajdbynitrbzgwukyaqhmibpzfxmkoeaqnftnvegohfudbgbbyiqglhhqevcszdkokdbhjjvqqrvrxyvvgldtuljygmsircydhalrlgjeyfvxdstmfyhzjrxsfpcytabdcmwqvhuvmpssingpmnpvgmpletjzunewbamwiirwymqizwxlmojsbaehupiocnmenbcxjwujimthjtvvhenkettylcoppdveeycpuybekulvpgqzmgjrbdrmficwlxarxegrejvrejmvrfuenexojqdqyfmjeoacvjvzsrqycfuvmozzuypfpsvnzjxeazgvibubunzyuvugmvhguyojrlysvxwxxesfioiebidxdzfpumyon', 'ozgzyywxvtublcl')); // ''
  