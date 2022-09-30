class ForagerBee extends Bee {
  constructor(age = 10) {
    super(age);
    this.job = "find pollen";
    this.canFly = true;
    this.treasureChest = [];
  }

  forage(treasure) {
    this.treasureChest.push(treasure);
  }
}
