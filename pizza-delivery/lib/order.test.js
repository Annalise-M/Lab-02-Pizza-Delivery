const Order = require('./order');

describe('Order class', () => {
    it('has a deliverMinute', () => {
        const order = new Order('pizza order', 50, 20);
        expect(order.name).toEqual('pizza order');
        expect(order.deliveryMinute).toEqual(50);
    });

    it('has a startMinute', () => {
        const order = new Order('pizza order', 50, 20);
        expect(order.startMinute).toEqual(10);
    });
});
