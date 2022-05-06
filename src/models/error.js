export class Error {
    constructor(message, code) {
        this.message = message;
        this.code = code;
    }
}

export class Info {
    constructor(result = undefined) {
        if (result === undefined) {
            this.foundCount = 0;
            this.tableCount = 0;
        } else {
            try {
                this.foundCount = result['foundCount'];
            } catch(error) {
                this.foundCount = 0;
                this.foundCountError = new Error(error, 500);
            }
            try {
                this.tableCount = result['tableCount'];
            } catch(error) {
                this.tableCount = 0;
                this.tableCountError = new Error(error, 500);
            }
        }
    }
}

export class Response {
    constructor(data, error, info = undefined) {
        if (info === undefined) {
            this.info = new Info();
        } else {
            this.info = new Info(info);
        }
        this.data = data;
        this.error = error;
    }
}