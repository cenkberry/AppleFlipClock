const firmName  = "Karaca";
const firmPlace = "Şişli";
const firmYear  = 1996;

class Company{
    constructor(_name,_place,_year){
        this.name  = _name;
        this.place = _place;
        this.year  = _year;
    }
    get CompName(){
        return this.name;
    }
    get CompPlace(){
        return this.place;
    }
    get CompYear(){
        return this.year;
    }

    set CompName(newName){
        this.name = newName;
    }
    set CompPlace(newPlace){
        this.place = newPlace;
    }
    set CompYear(newYear){
        this.year = newYear;
    }
    get personeldatas()
     {
        return `${this.empName}, ${this.empPos} pozisyonunda ${this.name} firmasında çalışıyordur.${this.name},${this.year} yılında kurulmuştur.Merkezi ${this.place} ilçesindedir...`;
     }
}

class employee extends Company{

     constructor(_name,_place,_year,_empName,_empPos,_empAge)
     {
        super(_name,_place,_year);
        this.empName = _empName;
        this.empPos  = _empPos;
        this.empAge  = _empAge;
     }
}

const emp1 = new employee(firmName,firmPlace,firmYear,"Cenk Beri","Mağaza Müdürü",33);
const emp2 = new employee(firmName,firmPlace,firmYear,"Yeliz Çağlayan","Satış Danışmanı",22);
const emp3 = new employee(firmName,firmPlace,firmYear,"Doğukan Noberi","Part Star",25);

console.log(emp1.personeldatas);
console.log(emp2.personeldatas);
console.log(emp3.personeldatas);

if(emp1.CompName === firmName){
    document.write(`${emp1.personeldatas}`);
}