import joblib
import pandas as pd

model = joblib.load("models/isolation_forest.pkl")


def detect_anomaly(log):

    df = pd.DataFrame([{
        "port": log["port"],
        "bytes": log["bytes"],
        "packets": log["packets"]
    }])

    prediction = model.predict(df)[0]

    score = model.decision_function(df)[0]

    confidence = round((1 - abs(score)) * 100, 2)

    confidence = max(0, min(confidence, 100))

    return {
        "anomaly": prediction == -1,
        "confidence": confidence
    }