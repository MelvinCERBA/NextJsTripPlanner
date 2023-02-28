from tools.responder import Responder

#test for responder.py
def test_responder():

    responder = Responder()

    data = "The data"
    code = "The code"
    message = "This is the message"

    response_builder = responder.Builder(data, code, message)

    assert "data" in response_builder.keys()
    assert "code" in response_builder.keys()
    assert "message" in response_builder.keys()
    assert "poi" not in response_builder.keys()
    assert response_builder["data"] == data
    assert response_builder["code"] == code
    assert response_builder["message"] == message

    data_send_ok = {"message":"ok"}
    code_int_ok = 200

    response_send = responder.Send(data_send_ok, code_int_ok)

    assert "data" in response_send.keys()
    assert "code" in response_send.keys()
    assert "message" in response_send.keys()
    assert response_send["data"] == data_send_ok
    assert response_send["code"] == code_int_ok
    assert response_send["message"] == "OK"

    data_send_Unauthorized = {"message":"Unauthorized"}
    code_int_Unauthorized = 401

    response_send = responder.Send(data_send_Unauthorized, code_int_Unauthorized)

    assert "data" in response_send.keys()
    assert "code" in response_send.keys()
    assert "message" in response_send.keys()
    assert response_send["data"] == data_send_Unauthorized
    assert response_send["code"] == code_int_Unauthorized
    assert response_send["message"] == "Unauthorized"

    data_send_Unprocessable = {"message":"Unprocessable"}
    code_int_Unprocessable = 422

    response_send = responder.Send(data_send_Unprocessable, code_int_Unprocessable)

    assert "data" in response_send.keys()
    assert "code" in response_send.keys()
    assert "message" in response_send.keys()
    assert response_send["data"] == data_send_Unprocessable
    assert response_send["code"] == code_int_Unprocessable
    assert response_send["message"] == "Unprocessable Entity"

    data_send_Internal = {"message":"Internal"}
    code_int_Internal = 500

    response_send = responder.Send(data_send_Internal, code_int_Internal)

    assert "data" in response_send.keys()
    assert "code" in response_send.keys()
    assert "message" in response_send.keys()
    assert response_send["data"] == data_send_Internal
    assert response_send["code"] == code_int_Internal
    assert response_send["message"] == "Internal server error"

    data_send_Bad = {"message":"Bad"}
    code_int_Bad = 400

    response_send = responder.Send(data_send_Bad, code_int_Bad)

    assert "data" in response_send.keys()
    assert "code" in response_send.keys()
    assert "message" in response_send.keys()
    assert response_send["data"] == data_send_Bad
    assert response_send["code"] == code_int_Bad
    assert response_send["message"] == "Bad request"