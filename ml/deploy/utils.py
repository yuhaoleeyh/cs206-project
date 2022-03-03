import random
import numpy as np
import pandas as pd
import torch
import json
from utils import net
from utils.pwd_utils import print_difficulties, print_negated_jobs, get_valid_jobs, get_full_list_of_jobs
from utils.pwd_utils import get_valid_companies

# Set up NN model
model = net.NeuralNetwork()
model.load_state_dict(torch.load('./weights/model_weights.pth', map_location=torch.device('cpu')))
model.eval()

def job_ids_to_listings(y_ints):
    valid_jobs = get_valid_jobs(y_ints)
    print(valid_jobs)

    jobs_info = json.load( open('./data/jobs_info.json') )
    ret_listings = []
    id = 0
    for i in range(len(valid_jobs)):
        job_title = valid_jobs[i]

        companies = get_valid_companies(job_title)
        for company in companies:
            id += 1
            job_listing = {}
            job_listing['job_title'] = job_title
            job_listing['company'] = company
            job_listing['id'] = id

            try:    desc = jobs_info['jobs'][job_title]['jobdesc']
            except: desc = 'No description'
            job_listing['desc'] = desc

            try:    qualifications = jobs_info['jobs'][job_title]['qualifications']
            except: qualifications = ['No qualifications specified']
            job_listing['qualifications'] = qualifications

            try:    disabilities = jobs_info['jobs'][job_title]['disability']
            except: disabilities = 'No disability information specified'
            job_listing['disabilities'] = disabilities

            ret_listings.append(job_listing)
    
    return ret_listings

def get_job_listings(disability_qn_vector):

    # Convert to tensor
    x = torch.tensor(disability_qn_vector).float()
    
    # Get model prediction --> sigmoid to convert to "probabilities" --> round to nearest integer, 0 or 1
    y_pred = model(x)
    y_ints = torch.round(torch.sigmoid(y_pred))

    # Verify it is working well
    print_difficulties(x)

    return job_ids_to_listings(y_ints)

