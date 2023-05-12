struct Component;

impl bindings::Component for Component {
    /// Say hello!
    fn big_greet(name: String) -> String {
      let greeting = bindings::hello_world(&name);
      let big = greeting.to_ascii_uppercase();
      big
    }
}

bindings::export!(Component);
