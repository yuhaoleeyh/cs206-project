from flask import Flask, request, jsonify
from deploy.utils import get_job_listings
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/')
def hello_world():
    return 'Hello, this is cs206 main'

@app.route('/jobs')
def app_get_jobs():
    disability_qn_vector = [0, 1, 1, 0, 1, 1, 1, 0]

    job_listings = get_job_listings(disability_qn_vector)
    return jsonify(job_listings)

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=3000, threaded=True, debug=True)