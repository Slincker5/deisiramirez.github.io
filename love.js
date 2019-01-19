window.onload = () => {

    // show loading 
let loader = document.querySelector(".load")
  setTimeout(() => {
loader.classList.add("fadeout")
  }, 4000)

  setTimeout(() => {
    loader.classList.remove("fadeout")
    loader.style.display = "none"
  }, 5000)
    let cancionDeAmor = new Audio("https://controldefechas.mianimeonline.net/cero.mp3")
    let btn = document.querySelector(".continue")
    let playm
    let texto = document.querySelector(".teamo")
    let key = 18122018
    let pass = document.getElementById("clave")
    // fuincion para letra 
    const letra = (letra, tiempo) => {
        setTimeout(() => {
            texto.innerHTML = letra
        }, tiempo) 
    }
    
    pass.focus()
    
    btn.addEventListener("click", (e) => {
    e.preventDefault()
    let valor = parseInt(pass.value, 10)
    if(valor === key){
        texto.innerHTML = "Perdona que mis detalles sean muy digitales, pero sabes esta manera de expresar mis sentimientos y amor por ti siento que es cuando mas sincero puedo ser contigo quiza porque me sienta seguro haciendo lo que mejor se \" programar \" y que mejor forma de usar este conocimiento si no es usandolo para decirte cuanto te amo, por favor quiero que guardes esto muy dentro de tu corazon <b>TU VALES MUCHO</b> nunca dudes de eso y ten en cuenta que me tienes como loco totalmente enamorado y puedes contar siempre con mi cariño y mi amor. \nEres lo mejor que la vida me ha podido dar y ahhhh el sentimiento dentro de mi es tan grandes que las palabras se quedan cortas por eso y mucho mas te dedico con toda mi vida esta cancion. \n<a href=\"#\" class=\"play\">escuchar ahora</a>"
    let playm = document.querySelector(".play")
    playm.addEventListener("click", () => {
        texto.innerHTML = "Es Tu Amor - ZERI"
        cancionDeAmor.play()
        cancionDeAmor.addEventListener("canplay", () => {
        letra("Hoy se detiene el tiempo", 19900)
        letra("Tengo que escoger mi direcion", 23900)
        letra("Todo me dirige a estar contigo", 27400)
        letra("Donde pertenece MI CORAZON", 31900)
        letra("Porque a mi vida nadie", 35500)
        letra("Me ha dado lo que tu me das", 39400)
        letra("Y ahora que te tengo\n NO TE VOY A SOLTAR", 43500)
        let zoom = setTimeout(() => {
          texto.classList.add("zoom")
        }, 49905)
        letra("ES TU AMOR", 49900)
        letra("Que me llena y me mantiene vivo", 54400)
        letra("ES TU AMOR", 58700)
        letra("Mi unica verdad", 60300)
        letra("No quiero perderte JAMAS", 64800)
        letra("No quiero saber lo que se siente", 70000)
        letra("Perderte JAMAS", 74000)
        setTimeout(() => {
          texto.classList.remove("zoom")
          texto.classList.add("zoominus")
        }, 82999)
        letra("En el calor de tus brazos...", 83000)
        letra("Me olvido del <b>FRIO</b> y del <b>DOLOR</b>", 86500)
        letra("Me abrigo en el consuelo que derrama tu voz", 93000)
        letra("Porque en mi vida nadie...", 99000)
        letra("Me ha dado lo que tu me das", 103000)
        letra("Y ahora que te tengo", 107000)
        letra("<b>NO TE VOY A SOLTAR</b>", 110000)
        setTimeout(() => {
          texto.classList.remove("zoominus")
          texto.classList.add("zoom")
        }, 114000)
        letra("<b>ES TU AMOR</b>", 114000)
        letra("Que me llena y me mantiene <b>VIVO</b>", 118000)
        letra("<b>ES TU AMOR</b>", 122000)
        letra("Mi unica verdad", 124000)
        letra("Y no quiero perderte jamas", 129000)
        letra("No quiero saber lo que se siente", 134000)
        letra("Perderte jamas......", 139000)
          setTimeout(() => {
          texto.classList.remove("zoom")
          texto.classList.add("zoominus")
        }, 145000)
      })
    })
    }else{
    alert("Escribe la contraseña correctamente")
    }
    })
    }