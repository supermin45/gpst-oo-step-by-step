// Write your code here
module.exports = class Class {
    constructor(number) {
        this.number = number;
        this.leader;
        this.member;
    }

    assignLeader(student) {
        this.leader = student.id;
        if (this.teacher) {
            teacher.notifyLeaderAssigned(`${student.name} has become Leader of Class ${student.clazz}`);
        }

        if (this.member === student.id) {
            return "Assign team leader successfully.";
        } else {
            return "It is not one of us.";
        }
    }

    appendMember(student) {
        this.member = student.id;
        if (this.teacher) {
            teacher.notifyStudentAppended(`${student.name} has joined Class ${student.clazz}`)
        }
    }

}