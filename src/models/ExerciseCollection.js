export default class ExerciseCollection{
    constructor(arr = []) {
        this.list = arr;
    }

    add(exercise, date){
        if (date){
            exercise.date = date;
        }
        exercise.id = date + Math.random().toString(36).substring(2);
        this.push(exercise);
        return this;
    }
    delete(exercise){
        this.splice(this.indexOf(exercise), 1);
        return this;
    }

    deleteSet(exercise, set){
        let editExercise = this.indexOf(exercise);
        editExercise.weight.splice(set, 1);
        editExercise.reps.splice(set, 1);
        editExercise.sets--;
        return this;
    }

    addSet(exercise){
        this.indexOf(exercise).sets++;
        return this;
    }
}
