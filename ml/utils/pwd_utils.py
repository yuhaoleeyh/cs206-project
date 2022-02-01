def get_list_of_questions():
    questions = [
        'Are you visually impaired?',
        'Do you have hearing problems?',
        'Do you require wheelchairs to move around?',
        'Are you autistic?',
        'Do you face difficulties working with your hands?',
        'Do you face difficulties talking to strangers?',
        'Do you face difficulties working with computers?',
        'Do you face difficulties using your creativity to make something new?'
    ]
    return questions

viz_wheel = ['Flyer Distributer', 'Mailman', 'Delivery Staff', 'Delivery Personnel','Truck Driver']
hear_autism_strangers = ['Cashier', 'Waiter', 'Call Center Worker', 'Customer Service', 'Bank Teller', 'Frontline Sales']
hands = ['Factory/General Worker', 'Food Processing Worker', 'Packing Worker', 'Manufacturing Worker']
computer = ['Data Entry', 'Data Processing Clerk', 'Data Analyst', 'Business Analyst', 'Data Engineer', 'IT Help Desk', 'Web Developer']
creativity = ['Advertising Copywriter', 'Marketing Copywriter', 'Advertising Staff', 'Marketing Staff']
for_everyone = ['Admin Assistant', 'HR Staff', 'Research Assistant', 'Personal Assistant']

def get_list_of_jobs():
    return viz_wheel + hear_autism_strangers + hands + computer + creativity + for_everyone

def get_job_vector(question_num):
    list_of_jobs = get_list_of_jobs()
    jobs_to_exclude_list = [viz_wheel, hear_autism_strangers, viz_wheel, hear_autism_strangers,
                            hands, hear_autism_strangers, computer, creativity]
    jobs_to_exclude = jobs_to_exclude_list[question_num]

    job_vector = [0] * len(list_of_jobs)
    for job in jobs_to_exclude:
        job_index = list_of_jobs.index(job)
        job_vector[job_index] = -1

    return job_vector

def print_difficulties(x):
    questions = get_list_of_questions()
    difficulties = []
    for i in range(len(x)):
        if x[i] == 1:
            difficulties.append(questions[i])
    print(difficulties)

def print_negated_jobs(y):
    list_of_jobs = get_list_of_jobs()
    negated_jobs = []
    for i in range(len(y)):
        if y[i] == 0:
            negated_jobs.append(list_of_jobs[i])
    print(negated_jobs)
    
