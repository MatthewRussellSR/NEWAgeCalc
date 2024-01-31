function calculateTotal() {
    const fireboxSize = document.getElementById('firebox').value;
    const arches = document.getElementById('arches').value;
    const storageBoxes = document.getElementById('storageBoxes').value;
    const outerBlock = document.getElementById('outerBlock').value;
    const clayFlu = document.getElementById('clayFlu').value;
    const bucketsMortar = document.getElementById('bucketsMortar').value;
    const fullBrick = document.getElementById('fullBrick').value;

    const fireboxPrice = getFireboxPrice(fireboxSize);
    const archesPrice = arches * 150;
    const storageBoxesPrice = storageBoxes * 1075;
    const outerBlockPrice = outerBlock * 120;
    const clayFluPrice = clayFlu * 105;
    const bucketsMortarPrice = bucketsMortar * 105;
    const fullBrickPrice = fullBrick * 4;

    const totalCost = fireboxPrice + archesPrice + storageBoxesPrice + outerBlockPrice + clayFluPrice + bucketsMortarPrice + fullBrickPrice;
    const minBuckets = calculateMinBuckets(fireboxSize);

    const height = calculateHeight(fireboxSize, outerBlock);

    const breakdown = `
        Firebox Price: $${fireboxPrice.toFixed(2)}
        Arches: $${archesPrice.toFixed(2)}
        Storage Boxes: $${storageBoxesPrice.toFixed(2)}
        Outer Block: $${outerBlockPrice.toFixed(2)}
        Clay Flu: $${clayFluPrice.toFixed(2)}
        Buckets of Mortar: $${bucketsMortarPrice.toFixed(2)}
        Full Brick: $${fullBrickPrice.toFixed(2)}
    `;

    document.getElementById('result').innerText = `Total Cost: $${totalCost.toFixed(2)}`;
    document.getElementById('height').innerText = `Height: ${height} inches`;
    document.getElementById('breakdown').innerText = `Breakdown:\n${breakdown}`;
    document.getElementById('minBuckets').innerText = `Minimum Buckets of Mortar: ${minBuckets}`;
}

function getFireboxPrice(size) {
    const prices = {
        "42": 3502,
        "48": 3860,
        "60": 5743
    };

    return prices[size];
}

function calculateMinBuckets(size) {
    const minBucketsMap = {
        "42": 6,
        "48": 7,
        "60": 7
    };

    return minBucketsMap[size];
}

function calculateHeight(fireboxSize, outerBlock) {
    const heights = {
        "42": 66.5,
        "48": 72.5,
        "60": 85
    };

    const baseHeight = heights[fireboxSize];
    const additionalHeight = outerBlock * 8;

    return baseHeight + additionalHeight;
}
