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
    handleFunctionHealth
}