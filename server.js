// Replace with your actual Stripe public key
const stripe = Stripe('pk_live_51NjbH4C8qTuzHlkNLjsChWpxNeUofV2Uvfh3LWPxElA5Dcv4xXMJWu485Ygy5dyLCb4nWOgya3Pmu8bYVSTkNF0i00fOkTyAcO');

document.getElementById('buy-ticket').addEventListener('click', () => {
    fetch('/create-checkout-session', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ amount: 2500 }) // Amount in cents ($25)
    })
    .then(response => response.json())
    .then(sessionId => {
        return stripe.redirectToCheckout({ sessionId });
    })
    .then(result => {
        if (result.error) {
            alert(result.error.message);
        }
    })
    .catch(error => console.error('Error:', error));
});
