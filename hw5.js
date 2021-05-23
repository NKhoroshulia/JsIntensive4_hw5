class Stack {
    constructor (maxSize = 10) {
        if (isNaN(maxSize) || maxSize > 10 || maxSize === Infinity || 
            typeof maxSize !== 'number' || maxSize === -Infinity || maxSize <= 0) {
                throw new Error()
        } else {
            this.maxSize = maxSize;
            this.arr = [];
            this.top = 0;
        }
    }

    push(element) {
        if (this.top == this.maxSize) {
            throw new Error("Стек переполнен!");
        } else {
            this.arr[this.top] = element;
            this.top = this.top + 1;
        }
    }

    pop() {
        if( this.isEmpty() === false ) {
            this.top = this.top -1;
            return this.arr.pop(); 
        } else {
            throw new Error("Стек пуст!");
        }
    }

    peek() {
        if( this.isEmpty() === false ) {
            return this.arr[this.top-1];
        } else {
            return null;
        }
    }

    isEmpty() {
        return this.top === 0;
    }

    toArray() {
        return this.arr;
    }

    static fromIterable(iterable) {
        if (typeof iterable[Symbol.iterator] !== 'function') {
            throw new Error ("Сущность не является итерируемой!");
        } else {
            let maxSize = iterable.lenght;
            let newStack = new Stack(maxSize);
            for (let i = 0; i < maxSize; i++) {
                newStack.push(iterable[i]);
            }
            return newStack;
        }
    }
}

module.exports = { Stack };