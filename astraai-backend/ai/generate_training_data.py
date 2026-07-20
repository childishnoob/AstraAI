import random
import pandas as pd

from simulator.log_generator import generate_log
from simulator.attack_generator import generate_attack

rows = []

print("Generating training data...")

for _ in range(10000):

    if random.randint(1, 5) == 1:
        log = generate_attack()
    else:
        log = generate_log()

    rows.append({
        "port": log["port"],
        "bytes": log["bytes"],
        "packets": log["packets"]
    })

df = pd.DataFrame(rows)

df.to_csv(
    "datasets/simulator_training.csv",
    index=False
)

print("Training dataset created!")