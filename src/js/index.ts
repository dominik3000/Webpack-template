let SubmitButton : HTMLButtonElement = <HTMLButtonElement> document.getElementById("submitButton");
SubmitButton.addEventListener("click", (e:Event) => onClick()) ;
let modifiedText:string;
let index:number =1;

function onClick() : void
{
    let inputTextBox : HTMLInputElement = <HTMLInputElement> document.getElementById("inputTextBox");
    let inputText :string = inputTextBox.value;

    let option : HTMLSelectElement = <HTMLSelectElement> document.getElementById("selector");
    
    if(option.value == "toUpper"){modifiedText= inputText.toUpperCase()}
    if(option.value == "toLower"){modifiedText = inputText.toLowerCase()}

    inputTextBox.value = ""
    console.log("Insterted text: " + inputText);
    console.log("Modified text: " + modifiedText);
    AddToList(inputText,modifiedText)

}

function AddToList(baseText:string, modifiedText:string)
{
    let table : HTMLTableElement = <HTMLTableElement>document.getElementById("resultList")
    var row:HTMLTableRowElement = table.insertRow(-1)
    if(index %2 ==0) {row.className="resultRowRed"}
    else{row.className="resultRowGreen"}
    var newCell1 = row.insertCell(0)
    var newCell2 = row.insertCell(1)
    var newCell3 = row.insertCell(2)

    
    newCell1.appendChild(document.createTextNode(index+"."));
    newCell2.appendChild(document.createTextNode(baseText));
    newCell3.appendChild(document.createTextNode(modifiedText));

    index++
}