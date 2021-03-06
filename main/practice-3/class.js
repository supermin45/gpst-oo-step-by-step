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
            this.teacher.notifyLeaderAssigned(`${student.name} become Leader of Class ${student.clazz.number}`);
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
            this.teacher.notifyStudentAppended(`${student.name} has joined Class ${student.clazz.number}`)
        }
    }
}