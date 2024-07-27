// string to object and object to string
// convert to string before sendind data

//JSON: Javascript object notation

function jsonMethods(jsonString) {
  console.log("Original JSON String:", jsonString);

  // 3 ->
  // Parsing JSON string to JavaScript object
  let parsedObject = JSON.parse(jsonString);
  console.log("After JSON.parse():", parsedObject);

  // 4 ->
  // Stringifying JavaScript object to JSON string
  let jsonStringified = JSON.stringify(parsedObject);
  console.log("After JSON.stringify():", jsonStringified);
}

// Example Usage for JSON Methods
// 1 -> here it is string as within ''
const sampleJSONString =
  '{"key": "value", "number": 42, "nested": {"nestedKey": "nestedValue"}}';

  // 2 -> method called
jsonMethods(sampleJSONString);
