from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
# con origins='*' se permite que cualquier origen pueda acceder a la API
cors = CORS(app, origins='*')
@app.route('/api/products', methods=['GET'])
def products():
    return jsonify({
        'products': [
            {
                'id':1,
                'name': 'iPhone 11 Pro',
                'price': 999.99,
                'image': 'https://i.blogs.es/187a45/iphone-11-pro-02/840_560.jpg',
                'marca': 'Apple',
            }
        ]
    })
if __name__ == '__main__':
    app.run(debug=True, port=5001)
