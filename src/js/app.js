//  import Pers from './Pers.js';
class Team {
  constructor(name) {
    this.name = name;
    this.team = [];
  }

  add(heroes) {
    this.team.forEach((member) => {
      if (member.name === heroes.name) {
        throw new Error(`Этот игрок / ${heroes.name} / уже существует`);
      }
    });

    this.team.push(heroes);
    return this.team;
  }

  addAll(...heroes) {
    heroes.forEach((hero) => this.add(hero));
    return this.team;
  }

  [Symbol.iterator]() {
    const { team } = this;
    let i = 0;
    return {
      next() {
        if (i < team.length) {
          const current = team[i];
          i += 1;
          return { done: false, value: current };
        }
        return { done: true };
      },
    };
  }
}

/* const shur = new Pers('Сюрикенщик', 'Shurikener', 40, 4, 20, 15);
const newTeam = new Team('newTeam');
console.log(newTeam.team); */

export default Team;
