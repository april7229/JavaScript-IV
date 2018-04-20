// CODE here for your Lambda Classes


class Person {
    constructor(Attributes) {
        this.age = Attributes.age;
        this.name = Attributes.name;
        this.location = Attributes.location;
        this.gender = Attributes.gender;
    }
    speak() {
        console.log`Hello my name is ${this.name}, I am from ${this.location}.`;

    }

}



class Instructor extends Person {
    constructor(childAttributes) {
        super(childAttributes);
        this.specialty = childAttributes.specailty;
        this.favLanguage = childAttributes.language;
        this.catchPhrase = childAttributes.catchPhrase;
    }
    demo(subject) {
        console.log`​​​​​Today we are learning about ${this.subject}`;
    }
    grade(obj, stuStr) {
        console.log(`${obj.name} recieves a perfect score on ${stuStr}`);
    }
}





class Students extends Person {
    constructor(grandChildAttributes) {
        super(grandChildAttributes);
        this.previousBackground = grandChildAttributes.previousBackground;
        this.className = grandChildAttributes.className;
        this.favSubject = grandChildAttributes.favSubject;

    }


    listsSubjects() {
        for (let i = 0; i < this.favSubjects.length; i++)
            console.log(this.favSubjects[i]);
    }

    PRAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}`);
    }

    sprintChallenge(subject) {
        console.log(`${this.name} has begun spring challenge on ${subject}`)
    }

}
class ProjectMangers extends Instructor {
    constructor(greatgrandChildAttributes) {
        super(greatgrandChildAttributes);
        this.gradClassName = greatgrandChildAttributes.gradClassName;
        this.favInstructor = greatgrandChildAttributes.favInstructor;
    }
    standUp(channel) {
        console.log(`${this.name} announces to slackChannel @ ${channel} standy times!​​​​​`);
    }

    debugsCode(student, subect) {
        console.log(​​​​​`${this.name} debugs ${student} s  code on ${subject}`);
    }
}


const Fred = new Person({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    gender: 'male',
});


const charles = new Instructor({
    favLanguage: 'JavaScript, Python, Elm etc.',
    specialty: 'redux',
    catchPhrase: 'Dont forget the homies',
});

const april = new Students({
    previousBackground: "self learning",
    className: "CS10",
    favSubject: "Html, CSS, JavaScript",

});

const Ellen = new ProdjectMangers({
    gradClassName: "CS1",
    favInstructor: "sean",
});
