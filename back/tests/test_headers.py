from tools.headers import Headers

#test for headers.py
def test_header():

    header = Headers()

    data = {
            "username": "Admin",
            "password": "admin",
            "history": []
        }
    head = {
            "username": "Admin",
            "password": "root",
            "history": []
        }

    response = header.Check(data, head)

    assert response == True

    head_false = {
            "username": "Admin",
            "password": "pass",
            "poi": []
        }

    response_false = header.Check(data, head_false)

    assert response_false == False