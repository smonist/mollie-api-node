/**
 * @docs https://docs.mollie.com/reference/v2/payments-api/get-payment
 */
(async () => {
  const mollie = require('@mollie/api-client');
  const mollieClient = mollie({ apiKey: 'test_dHar4XY7LxsDOtmnkVtjNVWXLSlXsM' });

  try {
    const payment = await mollieClient.payments.get('tr_Eq8xzWUPA4');

    console.log(payment);
  } catch (e) {
    console.log(e);
  }
})();
