"use strict";

(function() {
    let strings = Array.from(document.querySelectorAll('.string'));
    let stats = strings
                .map(s => Array.from(s.querySelectorAll('.grade'))
                .map(e => parseInt(e.textContent, 10))
                .filter(g => !isNaN(g))
                .reduce((res, grade) => {
                    res.sum += grade; 
                    res[grade]++;
                    res.count++; 
                    return res;
                }, {'1':0, '2':0, '3':0, '4':0, '5':0, sum: 0, count: 0}))
                .map(e => Object.assign({
                    average: e.sum/e.count
                },e));

    function render(statObject) {
        let d = document.createElement('div');
        d.className = 'stats';
        d.title = `${statObject['5']}, ${statObject['4']}, ${statObject['3']}, ${statObject['2']}`;
        d.innerHTML = `<span class="stats__inner">${statObject.average.toFixed(2)}</span>`;
        return d;
    }

    strings.forEach((s, i) => s.appendChild(render(stats[i])));
})()
