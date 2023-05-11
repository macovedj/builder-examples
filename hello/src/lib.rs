struct Component;

impl bindings::Component for Component {
    /// Say hello!
    fn hello_world(name: String) -> String {
        let mut greeting= "Hello, World!".to_string();
        greeting.push_str(&name);
        greeting
    }
}

bindings::export!(Component);
