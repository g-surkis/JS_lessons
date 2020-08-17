

let counter = {
    amount: 0,
    plus() {
      this.amount++;
      return this;
    },
    minus() {
      this.amount--;
      return this;
    },
    showAmount: function() { 
     console.log('Amount', this.amount);
    //  return this;
    }
  };


// counter.plus().plus();
// counter.plus();
// counter.minus();
// counter.plus();
// counter.showAmount();




counter.plus().plus().minus().showAmount().plus().plus().showAmount()