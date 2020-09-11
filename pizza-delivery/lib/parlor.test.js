const Parlor = require('./parlor');
const Driver = require('./driver');
const Order = require('./order');

describe('Parlor class', () => {
    it('adds drivers', () => {
        const parlor = new Parlor();
        const driver = new Driver('Jorje');

        parlor.addDriver(driver);
    });
    
    it('adds orders', () => {
        const parlor = new Parlor();
        const order = new Order('pizza order up', 50, 20);

        parlor.addOrder(order);
    });

    it('prints a schedule', () => {
        console.table = jest.fn();
        const parlor = new Parlor();

        const order1 = new Order('pizza order 1', 30, 10);
        parlor.addOrder(order1);

        const order2 = new Order('pizza order 2', 50, 20);
        parlor.addOrder(order2);

        const order3 = new Order('pizza order 3', 60, 5);
        parlor.addOrder(order3);

        const jorje = new Driver('Jorje');
        parlor.addDriver(jorje);

        const mary = new Driver('Mary');
        parlor.addDriver(mary);

        parlor.printSchedule();

        expect(console.table).toHaveBeenCalledWith([
            { start: 0, end: 30, status: 'busy'},
            { start: 31, end: 34, status: 'free'},
            { start: 35, end: 60, status: 'busy'},
            { start: 61, end: 1439, status: 'free'}
        ]);

        expect(console.table).toHaveBeenCalledWith([
            { start: 0, end: 9, status: 'free'},
            { start: 10, end: 50, status: 'busy'},
            { start: 51, end: 1439, status: 'free'},
        ])
    });
});
