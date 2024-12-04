const playground = document.getElementById("playground");

playground.append('🪄 Wizard',' ','🔮 Crystal Ball',' ','📖 Spell book ');

const magicalOrb = document.createElement('div');
magicalOrb.append('🔮');
playground.append(magicalOrb);

const scrollOfWisdom = document.createElement('p');
playground.append(scrollOfWisdom);

scrollOfWisdom.textContent = 'Ancient wisdom lies within';
console.log(scrollOfWisdom.innerText);

console.log(playground.innerText);
console.log(playground.textContent);

const spellBook = document.createElement('div');
spellBook.innerHTML = '<p>Spell include: <strong>Levitation</strong> and <em>Invisibility</em>!</p>';
playground.append(spellBook);

/*const userInput = '<img src="x" onerror="alert(\'Hacked!\')">';
playground.innerHTML = userInput;*/

const tempElement = document.createElement('p');
tempElement.textContent = 'Now you see me!...';
playground.append(tempElement);

tempElement.remove(); //playground.removeChild(tempElement); 

const fruitBasket = document.createElement('div');
fruitBasket.innerHTML = `
    <p>Mango</p>
    <p>Banana</p>
    <p>Orange</p>
`;
playground.append(fruitBasket);

/*
while(fruitBasket.firstChild){
    fruitBasket.removeChild(fruitBasket.firstChild);
}
*/

const magicWand = document.createElement('div');
magicWand.setAttribute('id', 'wand');
magicWand.setAttribute('class', 'magic-item wand');
magicWand.textContent = '🪄 Magic Wand';
playground.append(magicWand);

magicWand.id = 'wand1';


const secretScroll = document.createElement('div');
secretScroll.id = 'secretScroll';
secretScroll.dataset.spell = 'Invisibility';
secretScroll.dataset.componenets = 'moonlight,shadow essence';
secretScroll.textContent = '📜 Secret Scroll';
playground.append(secretScroll);

const shapeShifter = document.createElement('div');
shapeShifter.textContent = '🦎 Shape Shifter';
playground.append(shapeShifter);

shapeShifter.classList.add('magical','creature');

shapeShifter.classList.remove('creature');
shapeShifter.classList.add('humanoid');
shapeShifter.classList.toggle('invisible');
shapeShifter.classList.toggle('visible',Math.random() > .5);
shapeShifter.classList.replace('humanoid','beast');

const enchantedGem = document.createElement('div');
enchantedGem.textContent = '💎';
enchantedGem.style.fontSize = '50px';
enchantedGem.style.transition = 'all 2s';
playground.append(enchantedGem);

setInterval(() => {
    enchantedGem.style.transform = `rotate(${Math.random() * 360}deg)`;
    enchantedGem.style.color = `hsl(${Math.random() * 360}, 100%, 50%)`;
},2000)

const magicButton = document.createElement('button');
magicButton.textContent = 'Cast Spell';
playground.append(magicButton);

magicButton.addEventListener('click', () => {
    alert('✨Magic fills the air!');
});

magicButton.addEventListener('mouseover', (event) => {
    event.target.style.backgroundColor = 'purple';
});

magicButton.addEventListener('mouseout', (event) => {
    event.target.style.backgroundColor = '';
});

const spellList = document.createElement('ul');
playground.append(spellList);

function addSpell(spellName){
     const spell = document.createElement('li');
     spell.textContent = spellName;
     const removeButton = document.createElement('button');
     removeButton.textContent = 'Remove';
     removeButton.addEventListener('click', () => spell.remove());
     spell.append(removeButton);
     spellList.append(spell);
}

addSpell('🔥Fireball');
addSpell('❄ Frost Nova');

const parentElement = document.createElement('div');
const childElement1 = document.createElement('p');
const childElement2 = document.createElement('span');

parentElement.append(childElement1, childElement2);
playground.append(parentElement);

console.log(parentElement.firstChild);
console.log(parentElement.lastChild);
console.log(childElement1.nextSibling);
console.log(childElement2.previousSibling);
console.log(childElement1.parentNode);

const fragment = document.createDocumentFragment();

for(let i=0; i<5; i++){
    const magicalItem = document.createElement('li');
    magicalItem.textContent = `🔮Magical Item ${i+1}`;
    fragment.append(magicalItem);
}

const spellList1 = document.createElement('ul');
playground.append(spellList1);
spellList1.append(fragment);

const template = document.getElementById('wizard-template');

function createWizard(name, specialty){
    const wizardElement = template.content.cloneNode(true);
    wizardElement.querySelector('.wizard-name').textContent = name;
    wizardElement.querySelector('.wizard-specialty').textContent = specialty;
    playground.append(wizardElement);
}

createWizard('Gandalf', 'Fireworks');