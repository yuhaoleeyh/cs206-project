import os
import torch
from torch import nn
from torch.utils.data import DataLoader
from utils import net
from utils.dataset import PwdJobsDataset

import pandas as pd

device = 'cuda' if torch.cuda.is_available() else 'cpu'

def run(args):
    dataset = PwdJobsDataset(args.X_file, args.Y_file)
    dataloader = DataLoader(dataset, batch_size=16)

    model = net.NeuralNetwork().to(device)
    print(model)

    # X_file = pd.read_csv(args.X_file, header=None, skiprows=1)
    # x = torch.DoubleTensor(X_file.iloc[1]).float().to(device)
    # print(type(x))
    # print(x)
    # y_pred = model(x)
    # print(y_pred)
    