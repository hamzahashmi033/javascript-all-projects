console.log("postman clone is on working");
let addparamcount = 0;

function getElementfromstring(string) {
    let div = document.createElement('div');
    div.innerHTML = string;
    return div.firstElementChild;
}

let parameterbox = document.getElementById('parameterbox').style.display = 'none';

let paramsradio = document.getElementById('parameterRadio');
paramsradio.addEventListener('click', ()=>{
    document.getElementById('parameterbox').style.display = 'flex'
    document.getElementById('jsonbox').style.display = 'none'
})

let jsonradio = document.getElementById('jsonradio');
jsonradio.addEventListener('click', ()=>{
    document.getElementById('parameterbox').style.display = 'none'
    document.getElementById('jsonbox').style.display = 'block'
});

let button = document.getElementById('button');
button.addEventListener("click", function population() {
    let params = document.getElementById('populatedparams')
    
    let string = `
    <div class="form-row my-2" id="parameterbox" style="display: flex; flex-direction: row; justify-content: space-evenl;">
            <label for="form" class="col-sm-2 col-form-label"><b>Parameters ${addparamcount + 2}</b></label>
            <div class="col-md-4 " >
                <input type="text" class="form-control " id ="parameterkey" placeholder="Enter ${addparamcount + 2} key" >
            </div>
            <div class="col-md-4 ">
                 <input type="text" class="form-control"id ="parametervalue" placeholder="Enter ${addparamcount + 2} value" >
            </div>
                 <button id="button" class="btn btn-primary deletedParam" > - </button>
            </div>    
   
                
`
    let conparam = getElementfromstring(string);
    params.appendChild(conparam)
    
    let deleteParam = document.getElementsByClassName('deletedParam');
    for (item of deleteParam){
      
        item.addEventListener('click',(e)=>{
        e.target.parentElement.remove();
    })
}
    
    addparamcount++;
});

let submit = document.getElementById('submit');
submit.addEventListener('click', ()=>{
    document.getElementById('responsebox').value = "Please wait.. featching response..."

    let url = document.getElementById('url').value;
    let requesttype = document.querySelector("input[name='requesttype']:checked").value;
    let contenttype = document.querySelector("input[name='contenttype']:checked").value;

    

    if(contenttype == 'params'){
        let data = {};
        for(i = 0; i<addparamcount+1; i++){
                if(document.getElementById('parameterkey'+ (i+1)) != undefined){
                let key = document.getElementById('parameterkey'+ (i+1)).value;
                let value = document.getElementById('parametervalue'+ (i+1)).value;
                data[key] = value;
                
            }
        }
        data = JSON.stringify(data); 
    }
    // else{
    //     data = document.getElementById('jsontextarea').value
        
        
    // }
    console.log("url value is", url);
    console.log("request type is", requesttype);
    console.log("content type is", contenttype);
    console.log("param is", data);  
})
