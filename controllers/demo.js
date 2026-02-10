const FULL_NAME = "GS Agrawal";
const DOB = "01012002";
const EMAIL = "gs@example.com";
const ROLL_NUMBER = "123456";

async function handleFunctionBFHL(req, res) {
    try {
    const { data } = req.body;
    if (!Array.isArray(data)) {
      return res.status(400).json({
        is_success: false,
        message: 'Invalid input. `data` must be an array.',
      });
    }

    const response = {
      is_success: true,
      user_id: `${FULL_NAME.toLowerCase()}_${DOB}`,
      email: EMAIL,
      roll_number: ROLL_NUMBER,
      odd_numbers: [],
      even_numbers: [],
      alphabets: [],
      special_characters: [],
      sum: "0",
      concat_string: "",
    };

    let sum = 0;
    let alphaChars = [];

    data.forEach((item) => {
      const strItem = String(item);

      if (/^[0-9]+$/.test(strItem)) {
        const num = parseInt(strItem, 10);
        sum += num;
        if (num % 2 === 0) {
          response.even_numbers.push(strItem);
        } else {
          response.odd_numbers.push(strItem);
        }
      } else if (/^[a-zA-Z]+$/.test(strItem)) {
        response.alphabets.push(strItem.toUpperCase());
        alphaChars.push(...strItem.split(''));
      } else {
        response.special_characters.push(strItem);
      }
    });

    alphaChars = alphaChars.reverse();
    let concatStr = '';
    for (let i = 0; i < alphaChars.length; i++) {
      concatStr += i % 2 === 0
        ? alphaChars[i].toUpperCase()
        : alphaChars[i].toLowerCase();
    }

    response.sum = String(sum);
    response.concat_string = concatStr;

    return res.status(200).json(response);
  } catch (error) {
  console.error("BFHL ERROR:", error);
  return res.status(500).json({
    is_success: false,
    message: 'Internal Server Error',
  });
}

} 

async function handleFunctionLanding(req, res) {
  return res.status(200).json({
    message: "👋 Welcome to the BFHL API",
    description:
      "This API processes an array of values and returns odd numbers, even numbers, alphabets, special characters, sum of numbers, and a concatenated string.",

    available_endpoints: {
      landing: {
        method: "GET",
        description: "Shows API information and usage instructions",
        localhost: "http://localhost:2911/",
        vercel: "https://bajaj-rho-peach.vercel.app/"
      },

      bfhl: {
        method: "POST",
        description: "Main API endpoint to process input data",
        localhost: "http://localhost:2911/bfhl",
        vercel: "https://bajaj-rho-peach.vercel.app/bfhl",
        example_request_body: {
          data: ["1", "2", "a", "B", "@", "9"]
        }
      },

      health: {
        method: "GET",
        description: "Health check endpoint",
        localhost: "http://localhost:2911/health",
        vercel: "https://bajaj-rho-peach.vercel.app/health"
      }
    },

    how_to_use: {
      step_1: "Send a POST request to /bfhl",
      step_2: "Set header Content-Type: application/json",
      step_3: "Pass an array in the 'data' field",
      step_4: "Receive processed response"
    },

    author: {
      name: "Ghanshyam Agrawal",
      email: "ghanshyamagrawal456@gmail.com"
    }
  });
}


async function handleFunctionHealth(req, res) {
    const response = {
      name : "Ghanshyam Agrawal",
      email : "ghanshyamagrawal456@gmail.com",
      dob : "29112004",
      roll_number : 2310990167
    }
    return res.status(200).json({ status: "OK" , response});
} 


module.exports = {
    handleFunctionBFHL,
    handleFunctionHealth,
    handleFunctionLanding
}