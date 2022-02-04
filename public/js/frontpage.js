var data= 
    {
    title: "Virtual Pets",
    footer: "By Chris Sanchez, Emily Reese, Charles Money and Benny"
};

var template = Handlebars.compile(document.querySelector('#template').innerHTML);
var filled = template(data);
document.querySelector('#output').innerHTML = filled;
}

var options = 
{
    "consult": "request a consultation",
    "forums": "forums"
}

 var login = {
        "userLogin": "User login",
        "vetLogin": "Veterinarian Login",
        "signupUser": "User Sign Up",
        "signupVet": "Veterinarian Sign Up"
}

