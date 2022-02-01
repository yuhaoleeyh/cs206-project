import argparse

if __name__ == '__main__':

    parser = argparse.ArgumentParser()
    parser.add_argument("--n_examples", default=100, type=int)
    parser.add_argument("--X_file", default='/home/awkl/extra/cs206-project/ml/data/X_file.txt')
    parser.add_argument("--Y_file", default='/home/awkl/extra/cs206-project/ml/data/Y_file.txt')
    args = parser.parse_args()

    # import step.data_gen
    # step.data_gen.run(args)

    import step.train_nn
    step.train_nn.run(args)





