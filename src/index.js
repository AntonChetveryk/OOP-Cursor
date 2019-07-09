// //const user = {
// //name: "Anton",
// //age: 27
// //};
// //const admin = {
// //name: "administrator",
// //age: 45
// //};
// //userInfo.bind(user)();
// //userInfo.bind(admin)();
// //function userInfo() {
// //console.log(`name: ${this.name}, age: ${this.age}`);
// //}
// //userInfo(user);
// //userInfo("admin", 45);

// const valik = {
//   name: "valik",
//   finished: 7,
//   inprogress: function(homework) {
//     this.finished += 1;
//     return this.name + "done hw " + homework;
//   }
// };
// // const artem = {
// //   name: "artem",
// //   finished: 5,
// //   inprogress: function(homework) {
// //     this.finished += 1;
// //     return this.name + "done hw " + homework;
// //   }
// // };

// //console.log(valik.inprogress("Pianino"));

// const Student = function(name, finished, inprogress) {
//   this.name = name;
//   this.finished = finished;
//   //this.inprogress = function(homework) {
//   //this.finished += 1;
//   //return this.name + "done hw " + homework;
//   //};
// };

// Student.prototype.inprogress = function(homework) {
//   this.finished += 1;
//   return this.name + "done hw " + homework;
// };
// const valikCon = new Student("valik", 7);
// const artemCon = new Student("artem", 5);

// class Student {
//   constructor(name, finished) {
//     this.name = name;
//     this.finished = finished;
//   }
//   static sum(a) {
//     return 10 - a;
//   }
// }

// const valik = new Student("valik", 7);
// console.log(Student.sum(valik.finished));
// console.log(valik);

class Ship {
  constructor(name, country, health) {
    this.name = name;
    this.country = country;
    this.health = health;
  }
}

class BattleShip extends Ship {
  constructor(name, country, armour, health) {
    super(name, country, health);
    this.armour = armour;
  }
}

const bismark = new BattleShip("bismark", "germany", 6000, 10000);
console.log(bismark);

class Destroyer extends BattleShip {
  constructor(name, country, health, armour, torpedos) {
    super(name, country, health, armour);
    this.torpedos = torpedos;
  }
}

const gremashy = new Destroyer("gremashy", "USSR", 20000, 10000, 8);
console.log(gremashy);
