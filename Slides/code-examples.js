if (!Function.prototype.bind) {
  Function.prototype.bind = function(newThis) {
    var restArgs = Array.prototype.slice.call(arguments, 1),
    var funtionToBind = this;
    var result = function() {
      return funtionToBind.apply(
        newThis, 
        restArgs.concat(Array.prototype.slice.call(arguments)));
    };
    return result;
  };
}

/// ----------------------

class Animal {
    run() { }
}

class Dog extends Animal {
    bark() {
        console.log('bark')
    }
}

class Cat extends Animal {
    meow() {
        console.log('bark')
    }
}

/// ----------------------

// @flow

function runAndDoAction<T: Animal>(
    subject: T, 
    action: (animal: T) => void
): T {
    subject.run();
    action(subject);
    return subject;
}

runAndDoAction(new Dog(), x => x.bark());
runAndDoAction(new Cat(), x => x.meow());

const animal: Animal = new Dog();


// -------------------------------

class Button extends React.Component {

    // ...

    render(): React.Element<*> {
        // ...

        return (
            <button>
                <Icon icon={icon} />
                {text}
            </button>
        );
    }
}