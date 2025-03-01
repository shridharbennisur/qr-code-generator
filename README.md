# qr-code-generator

# to generate watsapp redirect qr code 
curl --location --request POST 'http://localhost:3000/generateWhatsappQR' \
--header 'Content-Type: application/json' \
--data-raw '{
    "message": "Hello ",
    "phoneNumber": "**********"
}'
