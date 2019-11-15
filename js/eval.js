document.querySelector("button").addEventListener("click", () =>{
    let people=document.querySelector("input").value;
    fetch(` https://ghibliapi.herokuapp.com/people/${people}`)
    .then ((response)=>{
        response.json()
        .then ((data)=>{
            document.querySelector("main").innerHTML="";

            let tableElement=document.createElement("table");
            document.querySelector("main").appendChild(tableElement);

            let theadElement=document.createElement("thead");
            tableElement.appendChild(theadElement);

            let trElement1=document.createElement("tr");
            theadElement.appendChild(trElement1);

            let thElement1=document.createElement("th");
            let thElement2=document.createElement("th");
            let thElement3=document.createElement("th");
            let thElement4=document.createElement("th");
            let thElement5=document.createElement("th");
            let thElement6=document.createElement("th");

            thElement1.innerHTML="Nom";
            thElement2.innerHTML="Genre";
            thElement3.innerHTML="Age";
            thElement4.innerHTML="Yeux";
            thElement5.innerHTML="Cheveux";
            thElement6.innerHTML="Film";

            trElement1.appendChild(thElement1);
            trElement1.appendChild(thElement2);
            trElement1.appendChild(thElement3);
            trElement1.appendChild(thElement4);
            trElement1.appendChild(thElement5);
            trElement1.appendChild(thElement6);

            let tbodyElement=document.createElement("tbody");
            tableElement.appendChild(tbodyElement);

            let trElement2=document.createElement("tr");
            tbodyElement.appendChild(trElement2);

            let tdElement1=document.createElement("td");
            let tdElement2=document.createElement("td");
            let tdElement3=document.createElement("td");
            let tdElement4=document.createElement("td");
            let tdElement5=document.createElement("td");
            let tdElement6=document.createElement("td");
            tdElement6.classList.add("classeLien");

            tdElement1.innerHTML=data.name;
            tdElement2.innerHTML=data.gender;
            tdElement3.innerHTML=data.age;
            tdElement4.innerHTML=data.eye_color;
            tdElement5.innerHTML=data.hair_color;
            tdElement6.innerHTML=data.films[0];

            trElement2.appendChild(tdElement1);
            trElement2.appendChild(tdElement2);
            trElement2.appendChild(tdElement3);
            trElement2.appendChild(tdElement4);
            trElement2.appendChild(tdElement5);
            trElement2.appendChild(tdElement6);
       });
    })
});
