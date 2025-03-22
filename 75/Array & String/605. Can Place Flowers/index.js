/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
    if (!flowerbed.length) {
        return false;
    }
    if (flowerbed.length == 1) {
        if (n == 0) {
            return true;
        }
        if (n == 1) {
            const el = flowerbed[0];
            if (!el) {
                return true;
            }
        }
        return false;
    }
    let totalFlipCount = 0;
    for (let i = 0; i < flowerbed.length; i++) {
        if (totalFlipCount === n) {
            return true;
        }
        if (i === 0) {
            const [firstEl, secondEl] = flowerbed;
            if (!firstEl && firstEl === secondEl) {
                totalFlipCount++;
                flowerbed[i] = !firstEl;
                continue;
            }
        } else if (i == flowerbed.length - 1) {
            const currentEl = flowerbed[i];
            const prevEl = flowerbed[i  - 1];
            if (!currentEl && currentEl === prevEl) {
                totalFlipCount++;
                break;
            }
        } else {
            const currentEl = flowerbed[i];
            const prevEl = flowerbed[i  - 1];
            const nextEl = flowerbed[i+1];
            if (prevEl === currentEl && currentEl === nextEl && !currentEl) {
                totalFlipCount++;
                flowerbed[i] = !currentEl;
            }
        }
    }
    if (totalFlipCount === n) {
        return true;
    }
    return false;
};

console.log(canPlaceFlowers([0,0,1,0,1], 1));
console.log(canPlaceFlowers([1, 0, 0, 0, 1], 2));
console.log(canPlaceFlowers([1, 0, 0, 0, 1], 1));
console.log(canPlaceFlowers([0], 1));
console.log(canPlaceFlowers([1], 0));