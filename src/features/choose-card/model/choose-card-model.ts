export function chooseCard(card: number, setCard: (card: number) => void): void {
    var minCeiled = Math.ceil(1);
    var maxFloored = Math.floor(14);

    function calculateRandomInteger(min: number, max: number): number {
        return (Math.floor(Math.random() * (max - min) + min));
    };

    var randomNum = calculateRandomInteger(minCeiled, maxFloored);

    while ((card) === (randomNum - 1)) {
        randomNum = calculateRandomInteger(minCeiled, maxFloored);
    };

    setCard(randomNum - 1);
}