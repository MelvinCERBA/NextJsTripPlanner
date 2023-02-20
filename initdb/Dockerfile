FROM python:3.8-slim-buster

RUN pip install pymongo bcrypt

COPY populatedb.py /populatedb.py

CMD [ "python3","./populatedb.py" ]