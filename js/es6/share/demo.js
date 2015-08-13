
  function* Hello(name) {
    var data;
    yield "hello";

    // do something

    data = yield name;

    // do something

    return data;
  }

  var hello = Hello("Allenice");
  hello.next(); // {value: "hello", done: false}
  hello.next(); // {value: "Allenice", done: false}
  hello.next('2333'); // {value: "2333", done: true}
  hello.next(); // {value: undefined, done: true}