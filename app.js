// MODULE PATTERN
/* (function(){

    //private vars and functions

    return {
        //public var and functions
    }

})(); */

//standard module pattern
// const UICtrl = (function() {
//   let text = "Jellou world";

//   const changeText = function() {
//     const element = document.querySelector("h1");
//     element.textContent = text;
//   };

//   return {
//     callChangeText: function() {
//       changeText();
//     }
//   };
// })();

// UICtrl.callChangeText();

// REVEALINF MODULE PATTERN

// const ItemCtrl = (function() {
//   let _data = [];

//   function add(item) {
//     _data.push(item);
//   }

//   function get(id) {
//     return _data.find(item => {
//       return item.id === id;
//     });
//   }

//   return {
//     add: add,
//     get: get
//   };
// })();

// ItemCtrl.add({ id: 1, name: "Jhon" });
// console.log(ItemCtrl.get(1));

// SINGLETON PATTERN
// const Singleton = (function() {
//   let instance;

//   function createInstance() {
//     const object = new Object({ name: "Brad" });
//     return object;
//   }

//   return {
//     getInstance: function() {
//       if (!instance) {
//         instance = createInstance();
//       }

//       return instance;
//     }
//   };
// })();

// const instanceA = Singleton.getInstance();
// const instanceB = Singleton.getInstance();

// console.log(instanceA === instanceB);

//FACTORY PATTERN

// function MemberFactory() {
//   this.createMember = function(name, type) {
//     let member;

//     if (type === "simple") {
//       member = new SimpleMemebership(name);
//     } else if (type === "standard") {
//       member = new StandardMemebership(name);
//     } else if (type === "super") {
//       member = new SuperMemebership(name);
//     }

//     member.type = type;

//     member.define = function() {
//       console.log(`${this.name} (${this.type}): ${this.cost}`);
//     };

//     return member;
//   };
// }

// const SimpleMemebership = function(name) {
//   this.name = name;
//   this.cost = "$5";
// };

// const StandardMemebership = function(name) {
//   this.name = name;
//   this.cost = "$15";
// };
// const SuperMemebership = function(name) {
//   this.name = name;
//   this.cost = "$25";
// };

// const members = [];
// const factory = new MemberFactory();

// members.push(factory.createMember("Jhon Doe", "simple"));
// members.push(factory.createMember("Jfdsahon Ddsafoe", "standard"));
// members.push(factory.createMember("Jhofasdfasdn Dofdase", "super"));

// members.forEach(function(member) {
//   member.define();
// });

//Observer Pattern

/* function EventObserver() {
  this.observers = [];
}

EventObserver.prototype = {
  subscribe: function(fn) {
    this.observers.push(fn);
    console.log(`You are now subscribed to ${fn.name}`);
  },

  unsubscribe: function(fn) {
    this.observers = this.observers.filter(function(item) {
      if (item !== fn) {
        return item;
      }
    });
    console.log(`You are now unsubscribed to ${fn.name}`);
  },
  fire: function() {
    this.observers.forEach(function(item) {
      item.call();
    });
  }
};

const click = new EventObserver();

// Event Listeners
document.querySelector(".sub-ms").addEventListener("click", function() {
  click.subscribe(getCurMilliseconds);
});

document.querySelector(".unsub-ms").addEventListener("click", function() {
  click.unsubscribe(getCurMilliseconds);
});

document.querySelector(".fire").addEventListener("click", function() {
  click.fire();
});

//Click handler
const getCurMilliseconds = function() {
  console.log(`Current Milisenconds: ${new Date().getMilliseconds()}`);
};
 */

//MEDIATOR PATTERN

// const User = function(name) {
//   this.name = name;
//   this.chatroom = null;
// };

// User.prototype = {
//   send: function(message, to) {
//     this.chatroom.send(message, this, to);
//   },
//   recieve: function(message, from) {
//     console.log(`${from.name} to ${this.name} : ${message}`);
//   }
// };

// const Chatroom = function() {
//   let users = {}; // list of users

//   return {
//     register: function(user) {
//       users[user.name] = user;
//       user.chatroom = this;
//     },
//     send: function(message, from, to) {
//       if (to) {
//         //single user message
//         to.recieve(message, from);
//       } else {
//         //mass message
//         for (key in users) {
//           if (users[key] !== from) {
//             users[key].recieve(message, from);
//           }
//         }
//       }
//     }
//   };
// };

// const brad = new User("Brad");
// const jeff = new User("Jeff");
// const sara = new User("Sara");

// const chatroom = new Chatroom();

// chatroom.register(brad);
// chatroom.register(jeff);
// chatroom.register(sara);

// brad.send("hello Jeff", jeff);
// sara.send("Hello brad, you are the best dev ever", brad);
// sara.send("Hello everyone");

// STATE PATTERN

const PageState = function() {
  let currentState = new homeState(this);

  this.init = function() {
    this.change(new homeState());
  };

  this.change = function(state) {
    currentState = state;
  };
};

//Home State

const homeState = function(page) {
  document.querySelector("#heading").textContent = null;
  document.querySelector("#content").innerHTML = `
    <div class="jumbotron">
    <h1 class="display-4">Hello, world!</h1>
    <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
    <hr class="my-4">
    <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
    <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
    </div>
  `;
};

// about state

const aboutState = function(page) {
  document.querySelector("#heading").textContent = "About us";
  document.querySelector("#content").innerHTML = `
      <p> This is about page</p>
    `;
};

//Contact state

const contactState = function(page) {
  document.querySelector("#heading").textContent = "Contact us";
  document.querySelector("#content").innerHTML = `
    <form>
    <div class="form-group">
      <label for="exampleInputEmail1">Email address</label>
      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
      <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Password</label>
      <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
    </div>
    <div class="form-group form-check">
      <input type="checkbox" class="form-check-input" id="exampleCheck1">
      <label class="form-check-label" for="exampleCheck1">Check me out</label>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
      `;
};

// Instantiate pageState

const page = new PageState();

//init the first state

page.init();

//Ui vars

const home = document.getElementById("home");
const about = document.getElementById("about");
const contact = document.getElementById("contact");

//Home

home.addEventListener("click", e => {
  page.change(new homeState());
  e.preventDefault();
});

//About

about.addEventListener("click", e => {
  page.change(new aboutState());
  e.preventDefault();
});

//Contact

contact.addEventListener("click", e => {
  page.change(new contactState());
  e.preventDefault();
});
