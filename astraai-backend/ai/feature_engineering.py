import pandas as pd


def prepare_features(csv_path):

    df = pd.read_csv(csv_path)

    return df[
        [
            "port",
            "bytes",
            "packets"
        ]
    ]