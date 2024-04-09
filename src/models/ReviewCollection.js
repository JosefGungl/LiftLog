export default class ReviewCollection{
    constructor(arr = []) {
        this.list = arr;
    }

    add (review, date){
        review.date = date;
        this.push(new Review(review));
        return this;
    }

    delete (review){
        this.splice(this.indexOf(review), 1);
        return this;
    }
}
