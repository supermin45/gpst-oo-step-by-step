const Person = require('./person');

module.exports = class Teacher extends Person {
    constructor(name, age, clazzes) {
        super(name, age);
        this.clazzes = clazzes;
    }

    introduce() {
        return super.introduce() + this.getTeacherClass();
    }

    getTeacherClass() {
        let result = ' I am a Teacher. ';
        if (this.clazzes.length === 0) {
            result += 'I teach No Class.';
        } else {
            result += 'I teach Class ' + this.getClassNumber() + '.';
        }
        return result;
    }

    getClassNumber() {
        return this.clazzes.reduce((clazz, val) => {
                    clazz.push(val.number);
                    return clazz;
                    }, []).join(',');
    }
}

