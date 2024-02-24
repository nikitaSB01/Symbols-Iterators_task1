// прописать import все файлы JS
import Pers from "../Pers";
import Team from "../app";
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
