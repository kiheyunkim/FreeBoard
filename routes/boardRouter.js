let data = []

router.post("/add", (request, response) => {
    let id = request.body.id;
    let title = request.body.title;
    let content = request.body.content;

    data.push({id,title,content});
    response.send({"result":"ok"});
});

router.post("/read", (request, response) => {
    let id = request.body.id;
    let result = data.filter(e => e.id === id);

    response.send(result);
});

router.post("/update", (request, response) => {
    let id = request.body.id;
    let title = request.body.titleModify;
    let content = request.body.contentModify;
    
    let findArray = data.find(e => e.id === id);
    if(findArray === undefined){
        response.send({"result":"ok"});
        return;
    }
    findArray = {id,title,content};
    
    response.send({"result":"ok"});
});

router.post("/delete", (request, response) => {
    let id = request.body.id;

    data = data.filter(e=>e.id === id);

    response.send({"result":"ok"});
});
