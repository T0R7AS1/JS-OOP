import { Todo } from './components/Todo.js';
import { Suo } from './components/Suo.js';

const prisistatymas = new Suo ('Donas', 'white');

prisistatymas.summary();









const randomuzduotys = new Todo('Random uzduotys');
const namuDarbai = new Todo('Namu Darbai');

randomuzduotys.add(`Sukurti pirma uzduoti`);
randomuzduotys.add(`Sukurti pirma uzduoti`);
randomuzduotys.add(`Sukurti pirma uzduoti`);

console.log(randomuzduotys);

randomuzduotys.summary();


namuDarbai.add(`susitvarkyti serloko projekta`);


console.log(namuDarbai);

namuDarbai.summary();


