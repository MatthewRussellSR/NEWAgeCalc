function calculateTotal() {
    const fireboxSize = document.getElementById('firebox').value;
    const arches = document.getElementById('arches').value;
    const storageBoxes = document.getElementById('storageBoxes').value;
    const outerBlock = document.getElementById('outerBlock').value;
    const clayFlu = document.getElementById('clayFlu').value;
    const bucketsMortar = document.getElementById('bucketsMortar').value;
    const fullBrick = document.getElementById('fullBrick').value;

    const fireboxPrice = getFireboxPrice(fireboxSize);
    const archesPrice = arches * getDiscountedPrice("Arches");
    const storageBoxesPrice = storageBoxes * getDiscountedPrice("Storage Boxes");
    const outerBlockPrice = outerBlock * getDiscountedPrice("Outer Block");
    const clayFluPrice = clayFlu * getDiscountedPrice("Clay Flu");
    const bucketsMortarPrice = bucketsMortar * getDiscountedPrice("Buckets Mortar");
    const fullBrickPrice = fullBrick * getDiscountedPrice("Full Brick");

    const totalCost = fireboxPrice + archesPrice + storageBoxesPrice + outerBlockPrice + clayFluPrice + bucketsMortarPrice + fullBrickPrice;
    const minBuckets = calculateMinBuckets(fireboxSize);

    document.getElementById('result').innerText = `Total Cost: $${totalCost.toFixed(2)}`;
    document.getElementById('minBuckets').innerText = `Minimum Buckets of Mortar: ${minBuckets}`;
}

function getFireboxPrice(size) {
    const prices = {
        "42": 1926,
        "48": 2123,
        "60": 3159
    };

    return prices[size] * 0.55; // Apply 45% discount
}

function getDiscountedPrice(item) {
    const prices = {
        "Arches": 83,
        "Storage Boxes": 591,
        "Outer Block": 66,
        "Clay Flu": 105,
        "Buckets Mortar": 68,
        "Full Brick": 2
    };

    return prices[item] * 0.65; // Apply 35% discount
}

function calculateMinBuckets(size) {
    const minBucketsMap = {
        "42": 6,
        "48": 7,
        "60": 7
    };

    return minBucketsMap[size];
}
