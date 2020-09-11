const Schedule = require('./schedule');
const Order = require('./order');


describe('Schedule Class', () => {
    it('finds the next unscheduled minute', () => {
        const schedule = new Schedule();

        expect(schedule.nextOpenMinute()).toEqual(0);
    });

    
    it('adds a new order to the schedule', () => {
        const schedule = new Schedule();
        const order = new Order('pizza order', 40, 20);
        schedule.addOrder(order);

        expect(schedule.nextOpenMinute()).toEqual(41);
    });
    
    // clear
    
    
    
    
    
})
// print

