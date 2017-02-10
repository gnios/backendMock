
function Teacher() {
    var entity = {};
    entity.cpf = '';
    entity.nome = '';
    entity.ies = '';
    entity.email = '';
    return entity;
}

function ResponseAction() {
    var entity = {};
    entity.sucessMessage = '';
    entity.errorMessages = [];
    entity.isSucess = false;
    entity.data = {};
    return entity;
}


var appRouter = function (app) {
    app.get("/ErrorGetTeacher/:id", function (req, res) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With");
        res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
        console.log(req.query.since);
        var updatesObjects = singleTeacherMock();
        res.send(JSON.stringify(updatesObjects));
    });

    app.get("/ErrorGetTeacher/", function (req, res) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With");
        res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
        console.log(req.query.since);
        var updatesObjects = teacherArrayMock();
        res.send(JSON.stringify(updatesObjects));
    });

    app.post("/ErrorAddTeacher/", function (req, res) {
        console.log("chamou o post");  
        console.log(req.body);
        res.send(JSON.stringify(ResponseActionMock()));
    });
}

function teacherMock() {
    var mock = new Teacher();
    mock.nome = "teste";
    mock.ies = "IES";
    mock.email = "teste";
    return mock;
}

function ResponseActionMock() {
    var response = new ResponseAction();
    var arrayError = [];
    arrayError.push('error 1');
    arrayError.push('error 2');
    arrayError.push('error 3');
    response.isSucess = false;

    response.errorMessages = arrayError;
    response.data = {};
    return response;
}

function singleTeacherMock() {
    var mock = teacherMock();
    
    var response = ResponseActionMock();
    // response.data = mock;
    return response;
}

function teacherArrayMock() {
    var array = [];

    var response = ResponseActionMock();

    for (var index = 0; index < 10; index++) {
        var element = teacherMock();
        array.push(element);
    }
    // response.data = array;
    return response;
}

module.exports = appRouter;