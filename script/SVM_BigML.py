# Importando librería
from bigml.api import BigML
from bigml.model import Model
from bigml import api

# Declarando variable

USERNAME = 'fernandocanales'
API_KEY = '3429b587a94ff045d6494c4c4f9f130678932028'
CREDENTIAL = 'username=$BIGML_USERNAME;api_key=$BIGML_API_KEY'
PROJECT = 'project/627bbaf58be2aa27c30002f7'

api_info = BigML(
    username = USERNAME,
    api_key = API_KEY,
    project = PROJECT
)

# https://bigml.io/andromeda/source?username=fernandocanales;api_key=3429b587a94ff045d6494c4c4f9f130678932028

IRIS_PROJECT = 'https://static.bigml.com/csv/iris.csv'
DIABETES_PROJECT = 'https://static.bigml.com/csv/diabetes.csv'
WINES_CSV = 'wineq.csv'
IRIS_CSV = 'iris.csv'

source = api_info.create_source(IRIS_CSV)
api_info.ok(source)

dataset = api_info.create_dataset(source)
api_info.ok(dataset)

model = api_info.create_model(dataset)
api_info.ok(model)

input_data = {
    "Petal.width": 1.75,
    "Petal.length": 2.45
}

prediction = api_info.create_prediction(model, input_data)
print(prediction)

"""

source = api.create_source(IRIS_PROJECT)
api.ok(source)

dataset = api.create_dataset(source)
api.ok(dataset)

model = api.create_model(dataset)
api.ok(model)

local_model = Model(model)

INP_DATA = []
local_model.predict (
    input_data = INP_DATA,
    add_confidence = True
)

"""