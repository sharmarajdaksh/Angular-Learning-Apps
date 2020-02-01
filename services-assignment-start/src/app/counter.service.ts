export class CounterService {
    count = 0;

    incrementCount() {
        ++this.count;
        console.log(this.count);
    }
}
