getPost = () =>{
    var request = new XMLHttpRequest();
    request.onreadystatechange = function(){
        if(this.readyState == XMLHttpRequest.DONE && this.status ==200)
        var response =JSON.parse(this.responseText);
        console.log(response)
    }
};
request.open("GET","http://localhost:8080/api/employee");
//request.open("POST","http://localhost:8080/api/group");
request.send();