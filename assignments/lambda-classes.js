// CODE here for your Lambda Classes

class Person {
    constructor(attributes){
    this.newName = attributes.name,
    this.newLocation = attributes.location,
    this.newAge = attributes.age
  }
speack(){
    return `Hello my name is ${this.newName}, I am from ${this.newLocation}`;
}
    }




    class Instructor extends Person {
        constructor(InstAttributes) {
            super(InstAttributes)
            this.newFavLanguage = InstAttributes.favLanguage
            this.newCatchPhrase = InstAttributes.catchPhrase
        }

        demo(subject) {
            return `Today we will learn about ${subject}`;

        }

        grade(student, subject) {
            return `${student} receives a perfect score on ${subject}`;
        }
    }


    class Student extends Instructor {
        constructor(StudentAttributes) {
            super(StudentAttributes)
            this.newPreviousBackground = StudentAttributes.previousBackground
            this.newClassName = StudentAttributes.className
            this.newFavSubject = StudentAttributes.favSubject
        }

        listsSubjects(kiwi){
            return `${kiwi} is their fav subject`;
        }

        PRAssignment(name, subject) {
            return `${name} has submitted a PR for ${subject}`;
        }

        sprintChallenge(name, subject) {
            return `${name} has begun sprint challenge on ${subject}`;
        }


    }


    class Project_Manager extends Student{
        constructor(PtAttributes) {
            super(PtAttributes)
            this.newGradClassName = PtAttributes.gradClassName
            this.newFavInstructor = PtAttributes.favInstructor
        }
        standUp(name, channel){
            return `${name} announces to ${channel}, @channel standy times!`;
        }

        debugsCode(name, student_name, subject){
            return `${name} debugs ${student_name} code on ${subject}`;

        }
    }







const fred = new Person({
    name:'Fred',
    location: 'Los Angeles',
    age: 32
});



const bob = new Instructor({
    name:'Bob',
    location: 'Austin',
    age: 34,
    speciality: 'redux',
    favLanguage:'JavaScript, Python, Elm etc..',
    catchPhrase: 'Dont forget the homies'
});

const anna = new Student ({
    name:'Anna',
    location: 'Miami',
    age: 28,
    speciality: 'cooking',
    favLanguage:'spanish',
    catchPhrase: 'See you mañana',
    previousBackground: 'chef',
    className: 'Web24',
    favSubject: 'LESS'


});


const michelle = new Project_Manager ({
    name:'Michelle',
    location: 'Boston',
    age: 42,
    speciality: 'React',
    favLanguage:'Python',
    catchPhrase: 'Code Up',
    previousBackground: 'Teacher',
    className: 'TL',
    favSubject: 'English',
    gradClassName: 'Web1',
    favInstructor: 'Britt'

});


console.log(fred.speack());
console.log(bob.speack());
console.log(bob.demo('math'));
console.log(bob.grade('jack', 'CSS'));
console.log(anna.listsSubjects('banana'));
console.log(anna.PRAssignment('emma', 'JS'));
console.log(anna.sprintChallenge('leo', 'french'));
console.log(michelle.standUp('Don', 'Web24'));
console.log(michelle.debugsCode('james', 'lucy', 'HTML'))
console.log(michelle.speack());
console.log(michelle.demo('History'));
console.log(anna.grade('susie','react'));
console.log(anna.demo('Media Query'));
console.log(michelle.listsSubjects('JS'));
console.log(michelle.PRAssignment('Emily','coding'));
