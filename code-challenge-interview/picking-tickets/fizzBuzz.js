function fizzBuzz(n) {
    const F = 'Fizz'
    const B = 'Buzz'
    for (var i = 1; i <= n.length; i++) {
        let resulString = '';
        switch (i) {
            case (i % 3 == 0 && i % 5 == 0):
                resulString = F + B;
                break;
            case (i % 3 == 0 && !(i % 5 == 0)):
                resulString = F;
                break;
            case (!(i % 3 == 0) && i % 5 == 0):
                resulString = B;
                break;
            case (!(i % 3 == 0) && !(i % 5 == 0)):
                resulString = i;
                break;
        }

        print(resulString)
    }


}

fizzBuzz(15);