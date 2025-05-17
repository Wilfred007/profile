fn Multiply_vec(input: Vec<i32>) -> Vec<i32> {
    input.iter().map(|element| element * 5).collect()
}

fn add_vec(input: Vec<i32>) -> Vec<i32> {
    input.iter().map(|element| element + 5).collect()
}

fn main() {
    // println!("Hello, world!");
}

#[cfg(test)]

mod test {
    use super::*;

    #[test]
    fn test_multiply_vec() {
        let input = vec![1,2,3,4];
        let ans = Multiply_vec(input);
        assert_eq!(ans, vec![5,10,15,20]);
    }
}
