function CreateFullPage(Values) {
    console.log(typeof Values);
    const mainBlock = document.getElementById('foxy');
    if (typeof Values != 'object') {
        document.getElementsByTagName('body')[0].innerHTML = Values;
        alert('Values must be a dictionary');
    }else{
       let valLen = Values.length;
       for (let index = 0; index < valLen; index++) {
            console.log(Values[index])
            //mainBlock.innerHTML += Values[index];
            let createElement = document.createElement(Values[index]['element']);

            createElement.setAttribute('id', Values[index]['id']);            
            document.getElementById(Values[index]['parent']).appendChild(createElement);
            
            let generatedElement = document.getElementById(Values[index]['id']);
            
            generatedElement.innerHTML = Values[index]['content'];
            generatedElement.innerText = Values[index]['text'];
            generatedElement.style.position = "relative";
            console.log( window.innerWidth, window.innerHeight)
            let wwidth = window.innerWidth;
            let wheight = window.innerHeight;
            generatedElement.style.padding = "0px";
            generatedElement.style.width = wwidth + 'px';
            generatedElement.style.height = wheight + 'px';
             
            generatedElement.style.backgroundColor = Values[index]['backgroundColor'];
       }
    }
        
    
}