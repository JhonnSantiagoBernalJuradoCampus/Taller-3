let miFormularioCampus = document.querySelector("#miFormularioCampus");
let miFormularioPersonas = document.querySelector("#miFormularioCampers");
let miFormularioTrainers = document.querySelector("#miFormularioTrainers")
let campus = {};


miFormularioCampus.addEventListener("submit", (e)=>{
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.target))
    campus[`${data.nombreSede}`] = {Campers: [], Trainers: []};
    listaSedes();
    miFormularioCampus.reset();
})

let listaSedes = ()=>{
    let opciones = document.querySelector("[name='sede']");
    opciones.innerHTML = null;
    for (let [val, id] of Object.entries(campus)) {
        opciones.insertAdjacentHTML("beforeend", `
            <option value="${val}">${val}</option>
        `);
    }
}

miFormularioCampers.addEventListener("submit", (e)=>{
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.target));
    console.log(data);
    let sede = data.sede;
    delete data.sede;
    campus[`${sede}`]["Campers"].unshift(data);
    console.log(campus);
    miFormularioPersonas.reset();
})
miFormularioTrainers.addEventListener("submit", (e)=>{
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.target));
    console.log(data);
    let sede = data.sede;
    delete data.sede;
    campus[`${sede}`]["Trainers"].unshift(data);
    console.log(campus);
    miFormularioTrainers.reset();
})

