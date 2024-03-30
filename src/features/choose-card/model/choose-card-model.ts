export function chooseCard(): number {
    var minCeiled = Math.ceil(1);
    var maxFloored = Math.floor(13);

    var randomNum = Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);

    return (randomNum - 1);
}