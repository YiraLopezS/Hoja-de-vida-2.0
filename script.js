var people = [];
var auxPerson;

var liTug, divTug, imgSrc;

$(document).ready(function () {
    $("#btnRegister").on("click", function () {

        people.push(new Person($("#inputName").val() + " " + $("#inputSurname").val(), $("#inputPhone").val(), $("#inputAddress").val(), 
                $("#inputEmail").val(), $("#inputAge").val(), $("#exp").val(), $("#inputDoc").val(), $("#inputFBD").val(), $("#inputFBH").val(),
				$("#inputFSD").val(), $("#inputFSH").val()));

        //alert(people[people.length - 1].name + "-" + people[people.length - 1].phone + "-" + people[people.length - 1].address + "-" + people[people.length - 1].email);
        //alert(aux);
        console.log(people[people.length - 1].name + "-" + people[people.length - 1].phone + "-" + people[people.length - 1].address + "-" + people[people.length - 1].email)

		liTug = $("<li class='list-group-item list-group-item-primary'>");

        imgSrc = "images/this.png";
        divTug = $("<div class='card mb-3' style='max-width: 100%; max-height: 100%;"
            + "background-color:dodgerblue;'>");


        $("#contacts").append(
            liTug.append(
                divTug.append(
                    $("<div class='row no-gutters'>").append(
                        $("<div class='col-md-8'>").append(
                            $("<div class='card-body'>").append(
                                $("<button type='button' class='btn btn-primary btn-lg btn-block' id='btnTitle'/>").text(people[people.length - 1].name).on("click", function(){
                                    auxPerson = findPerson($(this).text());
                                    //alert(auxPerson.name);
                                    alert(auxPerson.age);
                                    localStorage.setItem('name',auxPerson.name);
                                    localStorage.setItem('phone',auxPerson.phone);
                                    localStorage.setItem('add',auxPerson.address);
                                    localStorage.setItem('email',auxPerson.email);
                                    localStorage.setItem('exp',auxPerson.experience);
									localStorage.setItem('age',auxPerson.age);
                                    localStorage.setItem('document',auxPerson.document);
									localStorage.setItem('secD',auxPerson.secD);
									localStorage.setItem('secH',auxPerson.secH);
									localStorage.setItem('uniD',auxPerson.uniD);
									localStorage.setItem('uniH',auxPerson.uniH);
							
									var win = window.open('HojasdeVida.html', '_blank');
									// Cambiar el foco al nuevo tab (punto opcional)
									win.focus();
                                }),
                                $("<div class='row'>").append(
                                    $("<dt class='col-sm-4'>").append("Teléfono"),
                                    $("<dd class='col-sm-8' id='ddPhone'>").text(people[people.length - 1].phone),

                                    $("<dt class='col-sm-4'>").append("Dirección"),
                                    $("<dd class='col-sm-8' id='ddAddress'>").text(people[people.length - 1].address),

                                    $("<dt class='col-sm-4'>").append("Email"),
                                    $("<dd class='col-sm-8' id='ddEmail'>").text(people[people.length - 1].email)
                                )
                            )
                        )
                    )
                )
            )
        );

        //alert('El contacto "' + people[people.length - 1].name + '" ha sido \nalmacenado correctamente');

        /*$("#cardTitle").text(people[0].name);
        $("#ddPhone").text(people[0].phone);
        $("#ddAddress").text(people[0].address);
        $("#ddEmail").text(people[0].email);*/

        $("#inputName").attr("placeholder", "Nombre").val("");
        $("#inputSurname").attr("placeholder", "Apellido").val("");
        $("#inputPhone").attr("placeholder", "Número de teléfono").val("");
        $("#inputAddress").attr("placeholder", "Dirección").val("");
        $("#inputEmail").attr("placeholder", "Email").val("");
        $("#inputDoc").attr("placeholder", "Documento").val("");
        $("#exp").attr("placeholder", "").val("");
		$("#inputAge").atrr("placeholder", "").val("");
		$("#inputDoc").atrr("placeholder", "").val("");
		$("#inputFBD").atrr("placeholder", "").val("");
		$("#inputFBH").atrr("placeholder", "").val("");
		$("#inputFSD").atrr("placeholder", "").val("");
		$("#inputFBH").atrr("placeholder", "").val("");
    });

    $("#btnTitle").on("click", function(){
       
     }); 

});

function findPerson(name){
    for(i=0; i<people.length;i++){
        if(people[i].name==name) return people[i];
    }
}



