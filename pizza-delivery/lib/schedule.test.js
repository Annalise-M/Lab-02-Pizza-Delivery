const Schedule = require('./schedule');


// nextOpenMinute 
describe('Schedule Class', () => {
    it('finds the next unscheduled minute', () => {
        const schedule = new Schedule();

        expect(schedule.nextOpenMinute()).toEqual(0);
    });
})

// freeWindow


// clear


// print


// addOrder
