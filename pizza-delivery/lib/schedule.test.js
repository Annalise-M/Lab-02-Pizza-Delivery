const Schedule = require('./schedule');
const Order = require('./order');


describe('Schedule Class', () => {
    it('finds the next unscheduled minute', () => {
        const schedule = new Schedule();

        expect(schedule.nextOpenMinute()).toEqual(0);
    });

    
    it('adds a new order to the schedule with addOrder method', () => {
        const schedule = new Schedule();
        const order = new Order('pizza order', 40, 20);
        schedule.addOrder(order);

        expect(schedule.nextOpenMinute()).toEqual(41);
    });
    
    // clear
    it('should clear schedule items with clear method', () => {
        const testSchedule = new Schedule();
        const testOrder = new Order('Bob', 20, 20);

        testSchedule.addOrder(testOrder.startMinute, testOrder.deliveryMinute);
        testSchedule.clear();

        const openMinute = testSchedule.nextOpenMinute();

        expect(openMinute).toEqual(0);
    });
    
    
    
    
})
// print

