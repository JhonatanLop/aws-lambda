export function log(message) {
    console.log(process.env.MY_VARIABLE);
    console.log("my function log: ", message);
}