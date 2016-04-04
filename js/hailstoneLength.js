function hailstoneLength(l) {
    var index = 1;
    while (hailstoneCount(index)!==l) {
        index++;
    }
    return index;
}


function hailstone(n){
    if (n %2 === 0) {
        return n / 2;
    } else { 
        return 3*n+1;
    }
}


function hailstoneCount(n){
    if (n === 1){
        return 0;
    }
    return 1+hailstoneCount(hailstone(n));
}


QUnit.test("Expand it", function(assert) {
    assert.equal(hailstoneLength(8), 6);
    assert.equal(hailstoneLength(7), 3);
    assert.equal(hailstoneLength(17), 14);
    assert.equal(hailstoneLength(1), 2);
    assert.equal(hailstoneLength(15), 22);
    assert.equal(hailstoneLength(107), 62);
    assert.equal(hailstoneLength(254), 10415);
    assert.equal(hailstoneLength(123), 514);
    assert.equal(hailstoneLength(321), 53483);
    assert.equal(hailstoneLength(159), 2697);
});