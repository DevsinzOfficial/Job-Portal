const { promises } = require("nodemailer/lib/xoauth2");
const Stripe = require("stripe");

const stripe = Stripe(
  "sk_test_51M17OIK5zumRq0HzNjxrHefwzzbsBtJR5BUAHMaJ9HmI9GMqbBFFVc44AuQZG7UOMl9NagpyuuYNKzTDS6R0Yean00p4oej8zP"
);

module.exports.createCharges = (email, price, customer_Id, card_ID) => {
  try {
    return new Promise(async (resolve, reject) => {
      console.log(price);
      const createCharge = await stripe.charges.create({
        receipt_email: email,
        amount: price * 100, //USD*100
        currency: "usd",
        card: card_ID,
        customer: customer_Id,
      });

      if (createCharge) {
        resolve(createCharge);
      } else {
        reject(createCharge);
      }
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
};
