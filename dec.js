// function Input (labelText) {
//     let $element = $('<div></div>').addClass('input')
//     .append(
//       $('<span></span>')
//       .addClass('input__label').text(labelText),
//       $('<input>').addClass('input__field')
//     );
//     this.get = function () {
//       return $element;
//     }
//   }
  
//   function Decorator (obj) {
//     this._obj = obj;
//     this.get = () => (this._obj.get());
//   }
  
//   Decorator.prototype = Object.create(Input.prototype);
//   Decorator.prototype.constructor = Decorator;
  
//   function ClearDec (obj) {
//     Decorator.call(this, obj);
//     this._obj.get().append(
//       $('<span>x</span>').addClass('input__clear')
//     );
//     $(document.body).on('click','.input__clear', (e) => {
//       $(e.target).siblings('.input__field').val('');
//     });
//   }
  
//   ClearDec.prototype = Object.create(Decorator.prototype);
//   ClearDec.prototype.constructor = ClearDec;
  
//   function ValidDec (obj) {
//     Decorator.apply(this, arguments);
//     this._obj.get().children('.input__field').attr('data-validate','');
//     $(document.body).on('input', '.input__field[data-validate]',(e)=>{
//       if(/[0-9]/.test($(e.target).val())) {
//         $(e.target).parent().addClass('input_wrong');
//       } else {
//         $(e.target).parent().removeClass('input_wrong');
//       }
//     });
//   }
  
//   ValidDec.prototype = Object.create(Decorator.prototype);
//   ValidDec.prototype.constructor = ValidDec;
  
//   let i = new Input('Простой'),
//       iClear = new ClearDec(new Input('Очищаемый')),
//       iValid = new ValidDec(new Input('Проверяемый')),
//       iBoth = new ValidDec(new ClearDec(new Input('Совместный')));
  
//   $(document.body).append(i.get(),iClear.get(),iValid.get(),iBoth.get());



var User = function(name) {
    this.name = name;
 
    this.say = function() {
        log.add("User: " + this.name);
    };
}
 
var DecoratedUser = function(user, street, city) {
    this.user = user;
    this.name = user.name;  // ensures interface stays the same
    this.street = street;
    this.city = city;
 
    this.say = function() {
        log.add("Decorated User: " + this.name + ", " +
                   this.street + ", " + this.city);
    };
}

var log = (function() {
    var log = "";
 
    return {
        add: function(msg) { log += msg + "\n"; },
        show: function() { alert(log); log = ""; }
    }
})();
 
function run() {
 
    var user = new User("Kelly");
    user.say();
 
    var decorated = new DecoratedUser(user, "Broadway", "New York");
    decorated.say();
 
    log.show();
}