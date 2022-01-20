const button = document.querySelector('#button');
const result = document.getElementById('result');
const database = [];

button.addEventListener("click", () => {

    const name = document.querySelector('#name').value;
    const job  = document.querySelector('#job').value;
    const age  = document.querySelector('#age').value;

    class Player {
        constructor(name, job, birth) {
            this.name = name;
            this.job = job;
            this.age = age;
        }

        generalInfo() {
            return `${this.name} working at ${this.job} and ${this.age} years old.`
        }

        ageInfo() {
            const age = new Date().getFullYear() - this.age;
            return ` His birth year is ${age}`
        }
    }

    const player1 = new Player(name, job, age);
    const data1 = player1.generalInfo();
    const data2 = player1.ageInfo();

    database.push(player1);
    
    if(player1.age < 30)
    {
        
        result.innerHTML += `<p>${data1}${data2}<p>`;
    }
    console.table(database);

});
