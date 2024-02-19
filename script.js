// I've added a JavaScript script at the end of the HTML body that adds event listeners to each image element within the .column divs.
// When the mouse enters the image (mouseenter event), the opacity of the "Make Order" button within the same column is set to 1, making it visible.
// When the mouse leaves the image (mouseleave event), the opacity of the button is set back to 0, hiding it again.

const columns = document.querySelectorAll('.column');

    columns.forEach(column => {
      const img = column.querySelector('img');
      const button = column.querySelector('.orderButton');

      button.addEventListener('mouseenter', () => {
        img.style.opacity = '0';
      });

      button.addEventListener('mouseleave', () => {
        img.style.opacity = '1';
      });
    });

//intergrating daraja mpesa API
    async function makePayment() {
      const consumerKey = 'zngM7dQAAwq5VrcEhcf9M3s4eQUaSpcbG6D5AdgT20KNa88N';
      const consumerSecret = 'u6dsGd2bdDA6YAEdOFgHNIRCwRbzm3tf5tnFGAoYJsGiru5Y6VnIuIJXe6NUhiJ3';
  
      try {
          // Step 1: Obtain access token
          const authResponse = await fetch('https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials', {
              method: 'GET',
              headers: {
                  'Authorization': 'Basic ' + btoa(consumerKey + ':' + consumerSecret),
                  'Content-Type': 'application/json'
              }
          });
  
          const authData = await authResponse.json();
          const accessToken = authData.access_token;
  
          // Step 2: Make payment request
          const paymentRequest = {
              'BusinessShortCode': 'YOUR_BUSINESS_SHORTCODE',
              'Password': 'YOUR_PASSWORD', // Replace with your actual password or generate dynamically
              'Timestamp': 'YYYYMMDDHHMMSS', // Replace with actual timestamp
              'TransactionType': 'CustomerPayBillOnline',
              'Amount': '1',
              'PartyA': 'YOUR_PHONE_NUMBER', // Replace with customer's phone number
              'PartyB': 'YOUR_PAYBILL_NUMBER', // Replace with your Paybill number
              'PhoneNumber': 'YOUR_PHONE_NUMBER', // Replace with customer's phone number
              'CallBackURL': 'YOUR_CALLBACK_URL', // URL for receiving payment notifications
              'AccountReference': 'YOUR_ORDER_ID', // Replace with your order ID
              'TransactionDesc': 'Payment for Order' // Description of the transaction
          };
  
          const paymentResponse = await fetch('https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest', {
              method: 'POST',
              headers: {
                  'Authorization': 'Bearer ' + accessToken,
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify(paymentRequest)
          });
  
          const paymentData = await paymentResponse.json();
          console.log(paymentData); // Log the payment response
      } catch (error) {
          console.error('Error making payment:', error);
          alert('Error making payment. Please try again later.');
      }
  }