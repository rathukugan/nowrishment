function Food(id, name, cost){
    this.id = id;
    this.name = name;
    this.cost = cost;
    this.customization = null;
}

Food.prototype.setCustomization = function(customization){
    this.customization = customization;
}

Food.prototype.getPrice = function(){
    if (this.customization)
        return this.cost + this.customization.getPrice();
    return this.cost;
}

Food.prototype.equals = function(other){
    if (this.id = other.id){
        return true;
    }
    
    if (this.name == other.name && this.getPrice() == other.getPrice()
        && ((this.customization == null) == (other.customization == null))
        && ( (this.customization 
              && this.customization.equals(other.customization))
             || (!this.customization))){
        return true;
    }
    return false;
}