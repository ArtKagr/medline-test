export function pluralizeWords(amount, words) {
    let cases = [2, 0, 1, 1, 1, 2];
    return words[ (amount % 100 > 4 && amount % 100 < 20) ? 2 : cases[ Math.min(amount % 10, 5)] ];
}