
//EVENTO DE CLICK

function onClick() {
    var nuevajusta;
    nuevajusta = new justa();
    nuevajusta.batalla();
    nuevajusta.imprimir();
}

//JSON

var jsonKnight1 = '{ "name": "Atenea", "attHighPct": 30, "attMidPct": 25, "attLowPct": 50, "defHighPct": 25, "defLowPct": 75 }';
    
var jsonKnight2 = '{ "name": "Ares", "attHighPct": 60, "attMidPct": 20, "attLowPct": 20, "defHighPct": 75, "defLowPct": 25 }';

var knight1 = JSON.parse(jsonKnight1);
var knight2 = JSON.parse(jsonKnight2);


//CLASE JUSTA

function justa() {
    
    //propiedades
    this.ataque1 = [knight1.attHighPct, knight1.attMidPct, knight1.attLowPct];
    this.defensa1 = [knight1.defHighPct, knight1.defLowPct];
   
    this.ataque2 = [knight2.attHighPct, knight2.attMidPct, knight2.attLowPct];
    this.defensa2 = [knight2.defHighPct, knight2.defLowPct];

    this.ataque1_random = this.ataque1[Math.floor(Math.random() * (this.ataque1.length))];
    this.defensa1_random = this.defensa1[Math.floor(Math.random() * (this.defensa1.length))];
    
    this.ataque2_random = this.ataque2[Math.floor(Math.random() * (this.ataque2.length))];
    this.defensa2_random = this.defensa2[Math.floor(Math.random() * (this.defensa2.length))];
    
    this.resultado_justa;
    
    //Metodos
    
    this.batalla = function(){
        
        console.log(this.ataque1.indexOf(this.ataque1_random));
        console.log(this.defensa2.indexOf(this.defensa2_random));
        console.log(this.ataque2.indexOf(this.ataque2_random));
        console.log(this.defensa1.indexOf(this.defensa1_random));
        

        if (((this.ataque1.indexOf(this.ataque1_random) == 0 && this.defensa2.indexOf(this.defensa2_random) == 1) ||    (this.ataque1.indexOf(this.ataque1_random) == 1 && this.defensa2.indexOf(this.defensa2_random) == 0) || (this.ataque1.indexOf(this.ataque1_random) == 2 && this.defensa2.indexOf(this.defensa2_random) == 0) ||(this.ataque1.indexOf(this.ataque1_random) == 1 && this.defensa2.indexOf(this.defensa2_random) == 1)) && ((this.defensa1.indexOf(this.defensa1_random) == 0 && this.ataque2.indexOf(this.ataque2_random) == 0) || (this.defensa1.indexOf(this.defensa1_random) == 1 && this.ataque2.indexOf(this.ataque2_random) == 1) || (this.defensa1.indexOf(this.defensa1_random) == 1 && this.ataque2.indexOf(this.ataque2_random) == 2) ))
        {
            //resultado
            this.resultado_justa = knight1.name + " ha ganado";
           
        } else if (((this.ataque1.indexOf(this.ataque1_random) == 0 && this.defensa2.indexOf(this.defensa2_random) == 0) || (this.ataque1.indexOf(this.ataque1_random) == 1 && this.defensa2.indexOf(this.defensa2_random) == 1) || (this.ataque1.indexOf(this.ataque1_random) == 2 && this.defensa2.indexOf(this.defensa2_random) == 1)) && ((this.defensa1.indexOf(this.defensa1_random) == 0 && this.ataque2.indexOf(this.ataque2_random) == 1) || (this.defensa1.indexOf(this.defensa1_random) == 1 && this.ataque2.indexOf(this.ataque2_random) == 0) || (this.defensa1.indexOf(this.defensa1_random) == 1 && this.ataque2.indexOf(this.ataque2_random) == 2) ||
    (this.defensa1.indexOf(this.defensa1_random) == 0 && this.ataque2.indexOf(this.ataque2_random) == 2))) {
            
            //resultado
            this.resultado_justa = knight2.name + " ha ganado";
            
        } else {
            
            this.resultado_justa = "Es un empate entre " + knight1.name + " y " + knight2.name + " Debes volver a luchar";
           
        }
        
    }
      
    
    this.ataque = function(ataque, arreglo){
        var posicion;
        if(arreglo.indexOf(ataque) == 0)
           {
             posicion = "Ataque Alto";
             return(posicion);
           }
        else if (arreglo.indexOf(ataque) == 1)
            {
             posicion = "Ataque Medio";
             return(posicion);   
            } 
        else {
            posicion = "Ataque Bajo";
             return(posicion);
        }
    }  
    
    this.defensa = function(defensa, arreglo){
        var posicion;
        if(arreglo.indexOf(defensa) == 0)
           {
             posicion = "Defensa Alta";
             return(posicion);
           }
        else if (arreglo.indexOf(defensa) == 1)
            {
             posicion = "Defensa Baja";
             return(posicion);   
            }
    }  
    
    
    
    this.imprimir = function(){
        
        var resultado = document.getElementById('resultado');
        var informacion = "";
        informacion += "<table class=\"carinfo\">\n<thead>\n\t<tr>\n";
        informacion += "\t\t<th colspan=\"2\">Resultado de justa </th>\n";
        informacion += "\t<tr>\n</thead>\n";
        informacion += "<tbody>\n\t<tr>\n";
        informacion += "\t\t<td>Ataque usado por " + knight1.name + ":</td>\n";
        informacion += "<td>" + this.ataque(this.ataque1_random, this.ataque1) + "</td></tr>\n";
      //  informacion += "<td>" + this.ataque1.indexOf(this.ataque1_random) + "</td></tr>\n";
        informacion += "\t\t<td>Defensa usada por " + knight2.name + ": </td>\n";
        informacion += "<td>" + this.defensa(this.defensa2_random, this.defensa2) + "</td></tr>\n";
        informacion += "\t\t<td>Ataque usado por " + knight2.name + ": </td>\n";
        informacion += "<td>" + this.ataque(this.ataque2_random, this.ataque2) + "</td></tr>\n";
        informacion += "\t\t<td>Defensa usada por " + knight1.name + ": </td>\n";
        informacion += "<td>" + this.defensa(this.defensa1_random, this.defensa1) + "</td></tr>\n";
        informacion += "\t\t<td>Resultado de la justa: </td>\n";
        informacion += "<td>" + this.resultado_justa + "</td></tr>\n";
        informacion += "\t</tr>\n</tbody>\n</table>\n";
        resultado.innerHTML = informacion;
    }
   
    
}

