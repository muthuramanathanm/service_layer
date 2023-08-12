exports.handler = async (event) => {
  try {
    console.log('event val ==',event);
    if (event.httpMethod !== "POST") {
      return {
        statusCode: 405,
        body: JSON.stringify({ message: "Method Not Allowed" }),
      };
    }

    // Parse the request body to extract username and password
    const requestBody = JSON.parse(event.body);
    const { username, password } = requestBody;
    
    console.log('username === ',username);
    console.log('password === ',password);
    // Your authentication logic goes here
    // For simplicity, we'll just check if the username and password are "admin"
    const validCredentials = username === "admin" && password === "admin";
    
    console.log('validCredentials === ',validCredentials);
    
    if (validCredentials) {
      return {
        statusCode: 200,
        body: JSON.stringify({ message: "Login successful" }),
      };
    } else {
      return {
        statusCode: 401,
        body: JSON.stringify({ message: "Invalid credentials" }),
      };
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Internal Server Error" }),
    };
  }
};
