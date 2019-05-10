const chai = require('chai');
const assertArrays = require('chai-arrays');
chai.use(assertArrays);
var sumValues = require('../sumValues.js');

let t1 = [2, 7,2 ,4,11,52]; //target 11
let t2 = [
    5,9,11,7,6,4
]; //target 11




describe('arr-sum-values', function () {
    it('should return [1,3]', function () {
        //Test 1
       
        chai.expect([1,2]).to.be.equalTo(sumValues.index(t1,11));
    });

    it('should return a combination of index of the elements', function () {
     
        chai.expect([1,2,4]).to.be.containingAnyOf(sumValues.index(t2,15));
       });

    });

   

  
