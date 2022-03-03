from flask import Flask, request, jsonify
from deploy.utils import get_job_listings, get_job_info
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/')
def hello_world():
    return 'Hello, this is cs206 main'

@app.route('/jobs', methods = ['GET', 'POST'])
def app_get_jobs():
    data = request.get_json()
    print(data)
    disability_qn_vector = data['data']['input']

    job_listings = get_job_listings(disability_qn_vector)
    return jsonify(job_listings)



@app.route('/jobs/info')
def app_get_job_info():
    # job_title = request.args.get('job_title')
    # company = request.args.get('company')

    job_title = 'Mailman'
    company = 'SingPost'

    return get_job_info(job_title, company)

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=3000, threaded=True, debug=True)