/*
 * @lc app=leetcode id=811 lang=javascript
 *
 * [811] Subdomain Visit Count
 */
/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function(cpdomains) {
  // var hashmap = {};

  // cpdomains.forEach((e) => {
  //   let domainPair = e.split(' ');
  //   let count = domainPair[0];
  //   let domain = domainPair[1];

  //   while(domain) {
  //     if(hashmap[domain]) {
  //       hashmap[domain] += parseInt(count);
  //     } else {
  //       hashmap[domain] = parseInt(count);
  //     }
  //     if(domain.indexOf('.') !== -1) {
  //       domain = domain.substring(domain.indexOf('.') + 1, domain.length);
  //     } else {
  //       domain = null;
  //     }
  //   }
  // })
  // var res = [];
  // for(key in hashmap) {
  //   res.push(hashmap[key] + ' ' + key)
  // }
  //  return res;
  var hashmap = {};

  cpdomains.forEach(e => {
    //split each index
    let pair = e.split(" ");
    //get count
    let count = pair[0];
    //get pair
    let domain = pair[1];

    //while there is a domain
    while (domain) {
      //if in hashmap
      if (hashmap[domain]) {
        //add to count
        hashmap[domain] += Number(count);
      } else {
        //set domain to count
        hashmap[domain] = Number(count);
      }
      //if there is a .
      if (domain.indexOf(".") !== -1) {
        domain = domain.substring(domain.indexOf(".") + 1, domain.length);
      } else {
        domain = null;
      }
    }
  });
  let res = [];
  for (key in hashmap) {
    res.push(hashmap[key] + " " + key);
  }
  return res;
};
