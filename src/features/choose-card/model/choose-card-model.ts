export function chooseCard(setCard: (card: number) => void): void {
    var minCeiled = Math.ceil(1);
    var maxFloored = Math.floor(13);

    var randomNum = Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);

    setCard(randomNum - 1);
}