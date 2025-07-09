// #1
const person = {
  hungry: true,

  feed: function () {
    if (this.hungry) {
      this.hungry = false;
      console.log('Im no longer hungry!')
    }
  }
}  

person.feed() //should log "I'm no longer hungry"




// #2
const pump = function (amount) {
  this.liters += amount;
  console.log('You put ' + amount + ' liters in ' + this.name);
};

const garage = {
  car1: {
    name: 'Audi',
    liters: 3,
    fillTank: pump
  },
  car2: {
    name: 'Mercedes',
    liters: 1,
    fillTank: pump
  }
};

garage.car1.fillTank(2);
console.log('Audi should have 5 liters: ',  garage.car1.liters);

garage.car2.fillTank(30);
console.log('Mercedes should have 31 liters: ', garage.car2.liters);




// #3
const pumpFuel = function (plane) {
  plane.fuel += 1;
};

const airplane = {
    fuel: 0,

  fly: function () {
    if (this.fuel < 2) {
      return 'on the ground!';
    }
    else {
      return 'flying!';
    }
  }
};

console.log('The plane should not be able to fly (yet): ' + airplane.fly());

pumpFuel(airplane);
console.log('The plane should STILL not be able to fly: ' + airplane.fly());

pumpFuel(airplane);
console.log('Take off! ' + airplane.fly());




// #4
const tipJar = {
  coinCount: 20,
  tip: function () {
    this.coinCount += 1;
  },
  stealCoins: function(coinsToSteal){
    this.coinCount -= coinsToSteal;
  }
};

tipJar.tip();
console.log('Tip jar should have 21 coins: ' + tipJar.coinCount);

tipJar.stealCoins(3);
console.log('Tip jar should have 18 coins: ' + tipJar.coinCount);

tipJar.stealCoins(10);
console.log('Tip jar should have 8 coins: ' + tipJar.coinCount);




// #5
const revealSecret = function () {
  return this.secret;
};

const shoutIt = function (person, func) {
  person.revealItAll = func;
  const result = person.revealItAll();
  console.log(person.name + " said: " + result);
};

const avi = {
  name: "Avi",
  secret: "Im scared of snakes!"
};

const narkis = {
  name: "Narkis",
  secret: "I don't have secrets because I'm zen like that."
};

shoutIt(avi, revealSecret);
shoutIt(narkis, revealSecret);




// #6
const coffeeShop = {
  beans: 40,
  money: 100,

  drinkRequirements: {
    latte: {beanRequirement: 10, price: 5},
    americano: {beanRequirement: 5, price: 4},
    doubleShot: {beanRequirement: 15, price: 6},
    frenchPress: {beanRequirement: 12, price: 7}
  },

  makeDrink: function (drinkType) {
    const requiredBeans = this.drinkRequirements[drinkType];

    if (!requiredBeans) {
      console.log("Sorry, we don't make " + drinkType);
      return;
    }

    if (requiredBeans > this.beans) {
      console.log("Sorry, we're all out of beans");
      return;
    }

    this.beans -= requiredBeans;
  },

  buyBeans: function (numBeans) {
    const costPerBean = 2;
    const totalCost = numBeans * costPerBean;

    if (totalCost > this.money) {
      console.log("Sorry, not enough money to buy " + numBeans + " beans.");
      return;
    }

    this.beans += numBeans;
    this.money -= totalCost;
    console.log(`Bought ${numBeans} beans for $${totalCost}. You now have ${this.beans} beans and $${this.money} left.`);
  },

  buyDrink: function(drinkType){
    this.makeDrink(drinkType);
    this.money += this.drinkRequirements[drinkType].price;

  }
};


// coffeeShop.makeDrink("latte"); 
// coffeeShop.makeDrink("americano");
// coffeeShop.makeDrink("filtered"); //should console "Sorry, we don't make filtered"
// coffeeShop.makeDrink("doubleShot");
// coffeeShop.makeDrink("frenchPress"); //should console "Sorry, we're all out of beans"

coffeeShop.buyDrink("americano");
