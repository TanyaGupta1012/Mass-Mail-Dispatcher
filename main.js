
let upload = document.getElementById('upload');
upload.addEventListener('change', () => {
    let fr = new FileReader();
    fr.readAsText(upload.files[0]);
    
    fr.onload = function ()
     { console.log(fr.result)
        let Arr = fr.result.split(/\r?\n|\n/).map(e => {
            return e.split(',');
        });
        Window.valNo = 0;
        let invalNo = 0;
        Window.valMail = [];
        Arr.forEach( e => {
            let em = String(e);
            let m = e.map(e => {
                return `<td>${e}</td>`;
            })
            let creEle = document.createElement("tr");
            creEle.innerHTML = m;
            if (em != ""){
                if(em.charAt(em.length - 4) == '.'){
                    document.querySelector("table#val").appendChild(creEle);
                    Window.valMail.push(em);
                    Window.valNo = Window.valNo + 1;
                    return false;
                }
                else if (em.charAt(em.length - 3) == '.') {
                    document.querySelector("table#val").appendChild(creEle);
                    Window.valMail.push(em);
                    Window.valNo = Window.valNo + 1;
                    return false; 
                }
                else {
                    document.querySelector("table#inval").appendChild(creEle);
                    invalNo = invalNo + 1;
                    return false;
                }

                
            }
            
        });

        document.querySelector('#valid-count').innerHTML = Window.valNo;
        document.querySelector('#invalid-count').innerHTML = invalNo;

    };
});

// function sendEmail() {
//     Email.send({
//         Host: "smtp.elsticemail.com",
//         Username: "tanugupta1811@gamil.com",
//         
//         To: "tanugupta1811@gamil.com",
//         From: "tanugupta1811@gamil.com",
//         Subject: document.querySelector("#subject").Value,
//         Body: document.getElementById('text').value
//     }).then(
//         message => alert(Window.valNo + "mails has been successfully sent, press " + message +" to contiue. ")

//     );
//     console.log(document.getElementById('text').value)
//     console.log(document.getElementById('text').innerHTML)
//     console.log(document.getElementById('text').innerText)
// }
function sendEmail(event) {
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    alert("Mail from " + email + " has been successfully sent with subject " + subject +", press OK to contiue. ");
}