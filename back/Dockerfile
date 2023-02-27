FROM python:3.8-alpine

WORKDIR /code

COPY requirements.txt /code/requirements.txt
RUN pip install --no-cache-dir --upgrade -r /code/requirements.txt
COPY . /code


#RUN ./launch_tests

CMD ["uvicorn", "server.app:app", "--host", "0.0.0.0", "--port", "8000"]
