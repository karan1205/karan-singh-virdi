import {MONTHS} from "../constants";

export function shuffleArray(arr) {
    let currentIndex = arr.length, randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        // And swap it with the current element.
        [arr[randomIndex], arr[currentIndex]] = [arr[currentIndex], arr[randomIndex]];
    }
    return arr;
}

export function getDate(dateString) {
    const date = new Date(dateString);
    return `${date.getDate()} ${MONTHS[date.getMonth()]}, ${date.getFullYear()}`;
}