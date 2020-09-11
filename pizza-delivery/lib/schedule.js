class Schedule {
    MINUTES_PER_DAY = 60 * 24;
    #schedule = Array(this.MINUTES_PER_DAY).fill(false);

    nextOpenMinute() {
        return this.#schedule.findIndex(minute => !minute);
    }

}

module.exports = Schedule;
