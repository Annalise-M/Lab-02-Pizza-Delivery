const Driver = require('./driver');
const Schedule = require('./schedule');

describe('Driver class', () => {
    it('has a currentSchedule and a name', () => {
        const driver = new Driver('George');

        expect(driver.name).toEqual('George');
        expect(driver.currentSchedule).toEqual(expect.any(Schedule));
    });
});
