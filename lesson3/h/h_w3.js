const atTheOldToad = {
    potions: [
        { name: "Speed potion", price: 460 },
        { name: "Dragon breath", price: 780 },
        { name: "Stone skin", price: 520 },
      ],

      getPotions() { 
        return this.potions;
      },

      addPotion(newPotion){
        for (const potion of this.potions) {
            if (potion.name === newPotion.name) {
                return `Error! Potion ${newPotion.name} is already in your inventory!`;
              } 
        }

        this.potions.push(newPotion);
      },

      removePotion(potionName){
        for (let i = 0; i < this.potions.length; i++) {
            const potion = this.potions[i];
            
            if(potionName === potion.name){
                this.potions.splice(i,1);
            }
        }
      },

      updatePotionName(oldNmae, newName){
        for (let i = 0; i < this.potions.length; i++) {
            const potion = this.potions[i];
            
            if(oldNmae === potion.name){
                potion.name = newName;
            }
        }
      }
}

atTheOldToad.addPotion({ name: "Invisibility", price: 620 })
atTheOldToad.addPotion({ name: "Power potion", price: 270 })


//atTheOldToad.removePotion("Dragon breath")

atTheOldToad.updatePotionName("Dragon breath", "Polymorth")

console.log(atTheOldToad.getPotions())