from flask import Flask, request, send_file, render_template
import qrcode
import io

app = Flask(__name__)

FARE_TABLE = {
    ("Bhopal", "Indore"): 300,
    ("Bhopal", "Delhi"): 1200,
    ("Indore", "Mumbai"): 800,
    ("Bhopal", "Mumbai"): 1500,
    ("Delhi", "Mumbai"): 2000,
}

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/blog')
def blog():
    return render_template('blog.html')

@app.route('/generate_qr', methods=['GET'])
def generate_qr():
    source = request.args.get('source', '').strip()
    destination = request.args.get('destination', '').strip()

    # Ensure source and destination are provided
    if not source or not destination:
        return "Error: Both source and destination must be provided.", 400

    # Determine fare (defaulting to 500 if the route isn't found)
    fare = FARE_TABLE.get((source, destination), 500)

    # Create QR Code Data
    qr_data = f"Source: {source} | Destination: {destination} | Fare: ₹{fare}"

    # Generate QR Code
    qr = qrcode.QRCode(
        version=1,
        error_correction=qrcode.constants.ERROR_CORRECT_L,
        box_size=10,
        border=4
    )
    qr.add_data(qr_data)
    qr.make(fit=True)

    img = qr.make_image(fill="black", back_color="white")

    # Save image to a BytesIO stream instead of a file
    img_io = io.BytesIO()
    img.save(img_io, 'PNG')
    img_io.seek(0)

    return send_file(img_io, mimetype='static/image/png')

if __name__=='__main__':
    app.run(debug=True)