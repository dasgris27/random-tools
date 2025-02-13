function randomInteger(min, max, includeMax) {
    return Math.floor(Math.random() * (max - min + includeMax)) + min;
}
