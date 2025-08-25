
function merge(intervals) {
    if (intervals.length <= 1) return intervals;

    intervals.sort((a, b) => a[0] - b[0]);
    let resultado = [intervals[0]];

    for (let i = 1; i < intervals.length; i++) {
        let ultimo = resultado[resultado.length - 1];
        let atual = intervals[i];
        if (atual[0] <= ultimo[1]) {
            ultimo[1] = Math.max(ultimo[1], atual[1]);
        } else {
            resultado.push(atual);
        }
    }
    return resultado;
}

// Teste
console.log(merge([[1, 3], [2, 6], [8, 10], [15, 18]]));
console.log(merge([[1, 4], [4, 5]]));                