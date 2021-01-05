let newNames = [];
let inputNames = document.getElementById("inputNames");
let outputNames = document.getElementById("outputNames");
let numberOfPeople = document.getElementById("numberOfPeople");
let numberOfGroups = document.getElementById("numberOfGroups")

//Script to have the button pull a name from the studentNames list
let getName = document.getElementById("getName").addEventListener("click", function () {
    if (newNames.length <= 0) {
        alert("There are no names listed. Please enter some names.")
    }
    else randomNameGenerator();
});

let groupNumber = document.getElementById("groupNumber").addEventListener("click", function () {
    randomGroupGenerator();
});

let numberPeople = document.getElementById("numberPeople").addEventListener("click", function () {
    randomPeopleGenerator();
});

inputNames.addEventListener("keypress", function (e) {
    if (e.code == "Enter") {
        appendElements(inputNames.value);
    }
});

function randomNameGenerator() {
    let selectedName = "";
    selectedName = newNames[Math.floor(Math.random() * newNames.length)];
    displayName.innerText = selectedName; //Script for button to display a random name wherever you set the id
    displayName.className = "list-group-item bleu center cremeColour"
}

function randomGroupGenerator() {
    let tempArray = JSON.parse(localStorage.getItem("List"));
    let peopleArray = [];
    while (tempArray.length != 0) {
        let tempNum = Math.floor(Math.random() * tempArray.length)
        peopleArray.push(tempArray[tempNum]);
        tempArray.splice(tempNum, 1);
    }
    result = new Array(Math.ceil(peopleArray.length / numberOfGroups.value))
        .fill()
        .map(_ => peopleArray.splice(0, numberOfGroups.value))
    console.log(result);
    let numberOfPeopleEntered = "";
    numberOfPeopleEntered = numberOfGroups.value;
    console.log(numberOfPeopleEntered);
    outputGroups.innerText = "Display Groups split by # of Groups entered";
    outputGroups.className = "list-group-item bleu center cremeColour"
}

function randomPeopleGenerator() {
    let tempArray = JSON.parse(localStorage.getItem("List"));
    let peopleArray = [];
    while(tempArray.length != 0){
        let tempNum = Math.floor(Math.random() * tempArray.length)
        peopleArray.push(tempArray[tempNum]);
        tempArray.splice(tempNum,1);
    }
    result = new Array(Math.ceil(peopleArray.length/numberOfPeople.value))
    .fill()
    .map(_=>peopleArray.splice(0, numberOfPeople.value))
    console.log(result);
    let numberOfPeopleEntered = "";
    numberOfPeopleEntered = numberOfPeople.value;
    console.log(numberOfPeopleEntered);
    outputGroups.innerText = "Display Groups split by # of People"
    outputGroups.className = "mt-3 list-group-item bleu center cremeColour"
}

let data = JSON.parse(localStorage.getItem("List"));
console.log(data);

function appendElements(checkList) {
    console.log(checkList);
    if (inputNames.value == "" || inputNames.value == null) {
        alert("Enter something other than nothing...");
    }
    else if (inputNames.value == "Something" || inputNames.value == "something") {
        alert("Ohhh you think you're funny, huh? Try again...");
    }
    else if (inputNames.value == "Nothing" || inputNames.value == "nothing") {
        alert("Smart ass. Try again...");
    }
    else if (newNames.includes(inputNames.value) == true) {
        alert("Name is already registered. Enter a new name!")
    }
    else {
        let pElement = document.createElement("p");
        pElement.innerText = checkList;
        pElement.className = "list-group-item center bleu px-5";
        outputNames.appendChild(pElement);
        inputNames.value = "";
        newNames.push(checkList);
        localStorage.setItem("List", JSON.stringify(newNames));

        pElement.addEventListener("click", function (e) {
            for (i = 0; i < newNames.length; i++) {
                if (e.target.innerText == newNames[i]) {
                    let nameToRemove = newNames.indexOf(e.target.textContent);
                    newNames.splice(nameToRemove, 1);
                    localStorage.setItem("List", JSON.stringify(newNames))
                    e.target.remove();
                }
            }
        });
    }
    console.log(newNames);
}

if (data != "" || data != null) {
    for (let i = 0; i < data.length; i++) {
        let pElement = document.createElement("p");
        pElement.innerText = data[i];
        pElement.className = "list-group-item center bleu px-5";
        outputNames.appendChild(pElement);
        newNames.push(data[i]);
        localStorage.setItem("List", JSON.stringify(newNames));

        pElement.addEventListener("click", function (e) {
            for (i = 0; i < newNames.length; i++) {
                if (e.target.innerText == newNames[i]) {
                    let nameToRemove = newNames.indexOf(e.target.textContent);
                    newNames.splice(nameToRemove, 1);
                    localStorage.setItem("List", JSON.stringify(newNames));
                    e.target.remove();
                }
            }
        });
    }
}