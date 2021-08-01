describe("pow", function() {

    it("raises 2 to the power 3 and gives 8", function() {
      chai.assert.equal(pow(2, 3), 8);
    });

    it('raises 3 to the power 4 and gives 81', function () {
        chai.assert.equal(pow(3, 4), 81);
    })

    function makeTest(x, y) {
        let expected = x**y;
        it(`raises ${x} to the power ${y} and gives ${expected}`, function() {
            chai.assert.equal(pow(x, y), expected)
        })
    }

    for (let i = 0; i < 99; i++) {
        let raiseTo = Math.floor(Math.random() * (10 - 1) + 1);    
        makeTest(i, raiseTo);    
        console.log(raiseTo)
    }

    makeTest(5,5);
  
});