'use strict';var DC=DC||{};DC.blocklist={};DC.blocklistSubdomain=[];DC.load=function(){DC.blocklist=localStorage.hasOwnProperty('blockLIST')?JSON.parse(localStorage.getItem('blockLIST')):{};var k;DC.blocklistSubdomain=[];for(k in DC.blocklist){if(DC.blocklist.hasOwnProperty(k)){if(k.substr(0,2)==='*.'){DC.blocklistSubdomain.push(k.substr(1));}}}};DC.save=function(){localStorage.setItem('blockLIST',JSON.stringify(DC.blocklist));};DC.load();