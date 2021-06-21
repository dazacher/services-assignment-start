
export class CounterService {
    activeToInActiveCounter = 0;
    inactiveToActiveCounter = 0;

    incrementActiveToInActive() {
        this.activeToInActiveCounter++;
        console.log("Active to InActive: " + this.activeToInActiveCounter);
    }

    incrementInActiveToActive() {
        this.inactiveToActiveCounter++;
        console.log("InActive to Active: " + this.inactiveToActiveCounter);
    }
}