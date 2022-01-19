class Player
{
    constructor(name, club, birth) 
    {
        this.name = name;
        this.club = club;
        this.birth = birth;
    }

    generalInfo() {
        return `${this.name} playing at ${this.club} FC and was born at ${this.birth}`
    }

    ageInfo() {
        const age = new Date().getFullYear() - this.birth;
        return ` His age is ${age} years old.`
    }
}

const player1 = new Player('Cristiano Ronaldo', 'Manchester United', '1985')
const data1 = player1.generalInfo();
const data2 = player1.ageInfo();

const result = document.getElementById('result');
result.textContent = `${data1} , ${data2}`;