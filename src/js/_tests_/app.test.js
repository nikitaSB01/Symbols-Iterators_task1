// прописать import все файлы JS
import Pers from '../Pers';
import Team from '../app';
// начать тесты
test('Should be Bowman', () => {
  const pers1 = new Pers('Лучник', 'Bowman', 50, 1, 40, 10);
  expect(pers1).toEqual({
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 1,
    attack: 40,
    defence: 10,
  });
});

test('add team', () => {
  const pers1 = new Pers('Лучник', 'Bowman', 50, 1, 40, 10);
  const team1 = new Team('team1');
  expect(team1.add(pers1)).toEqual([pers1]);
});

test('add team', () => {
  const pers1 = new Pers('Лучник', 'Bowman', 50, 1, 40, 10);
  const team1 = new Team('team1');
  team1.add(pers1);
  expect(() => team1.add(pers1)).toThrow();
});

test('add in team more one pers', () => {
  const pers1 = new Pers('Лучник', 'Bowman', 50, 1, 40, 10);
  const pers2 = new Pers('Воин', 'Bowman', 50, 1, 40, 10);
  const team1 = new Team('team1');
  team1.addAll(pers1, pers2);
  const result = [
    {
      name: 'Лучник',
      type: 'Bowman',
      health: 50,
      level: 1,
      attack: 40,
      defence: 10,
    },
    {
      name: 'Воин',
      type: 'Bowman',
      health: 50,
      level: 1,
      attack: 40,
      defence: 10,
    },
  ];
  expect(team1.team).toEqual(result);
});

test('check Symbol.iterator in Team', () => {
  const pers1 = new Pers('Лучник', 'Bowman', 50, 1, 40, 10);
  const team1 = new Team('team1');
  team1.add(pers1);
  const teamIterator = team1[Symbol.iterator]();
  expect.assertions(2);
  expect(teamIterator.next()).toEqual({ done: false, value: pers1 });
  expect(teamIterator.next()).toEqual({ done: true });
});
