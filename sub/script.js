let displayandclear=()=>{
    document.querySelector("#dName").innerText ="Name: " + document.querySelector("#name").value;
    document.querySelector("#dCompany").innerText ="Company: " + document.querySelector("#company").value;
    document.querySelector("#dPhone").innerText ="Phone: " + document.querySelector("#phone").value;
    document.querySelector("#dMailId").innerText ="Mail id: " + document.querySelector("#mail").value;
    document.querySelector("#dMessage").innerText ="Message: " + document.querySelector("#message").value;

    document.querySelector("#name").value=" ";
    document.querySelector("#company").value=" ";
    document.querySelector("#phone").value=" ";
    document.querySelector("#mail").value=" ";
    document.querySelector("#message").value=" ";
}