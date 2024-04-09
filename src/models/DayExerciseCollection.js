export default class DayExerciseCollection {
    constructor(arr = []) {
        this.list = arr;
    }

    add(exercise, date){
        exercise.date = date;
        exercise.id =  date + Math.random().toString(36).substring(2);
        this.list.push(exercise);
        return this.list;
    }

    delete(exercise){
        this.list.splice(this.indexOf(exercise), 1);
        return this.list;
    }

}
