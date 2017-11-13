function Ninja(name){
    this.name = name;
    var health = 100;
    var speed = 3;
    var strength = 3;
    this.sayName(){
        console.log('My ninja name is ' + this.name);
        return this;
    }
    this.showStats(){
        console.log('Name: ' + this.name + ', ' + 'Health: ' + this.health + ', ' + 'Speed: ' + this.speed);
        return this;
    }
}

sayName(name){

}

var ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
// -> "My ninja name is Hyabusa!"
ninja1.showStats();
// -> "Name: Hayabusa, Health: 100, Speed: 3, Strength: 3"
