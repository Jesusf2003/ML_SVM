import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler

datos = pd.read_csv('wineq.csv')
datos.astype(float).fillna(0, 0)

y = datos.quality
x = datos.drop('quality', axis=1)

print(datos['quality'].value_counts())

x_train, x_test, y_train, y_test = train_test_split(
    x, y,
    test_size=0.2,
    random_state=42,
    stratify=y
)

print(datos)