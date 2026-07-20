import joblib

from sklearn.ensemble import IsolationForest

from ai.feature_engineering import prepare_features


print("Loading dataset...")

X = prepare_features(
    "datasets/simulator_training.csv"
)

print(f"Training on {len(X)} samples and {len(X.columns)} features...")

model = IsolationForest(
    n_estimators=100,
    contamination=0.05,
    random_state=42
)

model.fit(X)

joblib.dump(model, "models/isolation_forest.pkl")

print("Model trained successfully!")