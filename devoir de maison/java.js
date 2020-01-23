var validation = document.getElementById("submit");
var nom = document.getElementById("nom");
var nom_m = document.getElementById("nom_manquant");
var nom_v = /^[A-Z]+/;
validation.addEventListener("click", f_valid);

function f_valid(e)
{
	if (nom.validity.valueMissing)
	{
		e.preventDefault();
		nom_m.textContent = "nom manquant"
		nom_m.style.color = "red"
	}
	else if (nom_v.test(nom.value) == false)
	{
		event.preventDefault();
		nom_m.textContent = "format incorect"
		nom_m.style.color = "red"
	}
}