function sleep(time: number) {
    return new Promise((resolve) => {
        setTimeout(resolve, time)
    })
}

class D {
    constructor() {
        this.a = ''
    }

    //afdsfsd
    get c() {
        return this.a
    }

    public a = ''

    protected async test() {
        try {
            return Promise.resolve('aa')
        } catch (err) {
            console.log(err)
        }
    }
}

const b = 2
const a = new D()
console.log(a, b)
