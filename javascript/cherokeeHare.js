function cherokeeHare(population, birthRate, numberOfWeeks) {

    for (let i = 0; i <  numberOfWeeks; i++) {
        population = parseInt(population * birthRate + population);
    }

    return population;
}  

module.exports = cherokeeHare