function maxTickets(tickets) {
    if (tickets) {
        const longt = tickets.length;
        const sortArr = tickets.sort((a, b) => a - b);
        const sequence = [];
        const resNumbers = [];
        let countIndex = 0;

        for (let index = 0; index < longt; index++) {
            const nInitial = sortArr[index];
            const nEnd = sortArr[index - 1];
            const mathValidation = (nInitial - nEnd);

            if (mathValidation == 0 || mathValidation == 1) {
                (sequence[countIndex] = sequence[countIndex] || []).push(nInitial);
            } else {
                countIndex++;
                (sequence[countIndex] = sequence[countIndex] || []).push(nInitial);

            }
        }
        const resfiltered = sequence.filter((item) => item != null);
        resfiltered.forEach(item => {
            resNumbers.push(item.length);
        });

        return Math.max(...resNumbers)
    }

    return 0;
}

console.log('result-->', maxTickets([4, 13, 2, 3]));