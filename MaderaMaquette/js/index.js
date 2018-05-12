$( document ).ready(function() {
  displayCarouselLobby();
});

function displayCarouselLobby()
{
  var carouselLobby = "<div id='myCarousel' class='carousel slide' data-ride='carousel'> \
    <ol class='carousel-indicators'> \
      <li data-target='#myCarousel' data-slide-to='0' class='active'></li> \
      <li data-target='#myCarousel' data-slide-to='1'></li> \
      <li data-target='#myCarousel' data-slide-to='2'></li> \
    </ol> \
    <div class='carousel-inner'> \
      <div class='item active'> \
        <img src='./img/maderaWoodenHouse1.jpg' class='imgCaroussel' alt='EDEN'> \
        <div class='carousel-caption'> \
        <h3>EDEN</h3> \
        <p>Maisons type gamme EDEN</p> \
        </div> \
      </div> \
      <div class='item'> \
        <img src='./img/maderaWoodenHouse2.jpg' class='imgCaroussel' alt='PARADISE'> \
        <div class='carousel-caption'> \
        <h3>PARADISE</h3> \
        <p onclick='focusOnHouse()'>Maisons type gamme PARADISE</p> \
        </div> \
      </div> \
      <div class='item'> \
        <img src='./img/maderaWoodenHouse3.jpg' class='imgCaroussel' alt='SUNNY'> \
        <div class='carousel-caption'> \
        <h3>SUNNY</h3> \
        <p>Maisons type gamme SUNNY</p> \
        </div> \
      </div> \
    </div> \
    <a class='left carousel-control' href='#myCarousel' data-slide='prev'> \
    <span class='glyphicon glyphicon-chevron-left'></span> \
    <span class='sr-only'>Previous</span> \
    </a> \
    <a class='right carousel-control' href='#myCarousel' data-slide='next'> \
    <span class='glyphicon glyphicon-chevron-right'></span> \
    <span class='sr-only'>Next</span> \
    </a> \
  </div> \
  <div class='row'> \
    <div class='col-xs-3'></div> \
    <div class='col-xs-6' id='menuInfoHouse' hidden='true'> \
      <div class='btn-group btn-group-justified'> \
        <div class='btn-group'><button type='button' class='btn btn-success' id='buttonPlanDeCoupe' onclick='displayPlanDeCoupe()'>Plans</button></div> \
        <div class='btn-group'><button type='button' class='btn btn-success' id='buttonVisite' onclick='displayVisite()'>Visite</button></div> \
        <div class='btn-group'><button type='button' class='btn btn-success' id='buttonInfoSup' onclick='displayInfoSup()'>Informations</button></div> \
        <div class='btn-group'><button type='button' class='btn btn-success' id='buttonGenererDevis' onclick='openDevisPDF()'>Afficher devis</button></div> \
      </div> \
    </div> \
    <div class='col-xs-3'></div> \
  </div>";

  $("#containerWorkZone").html(carouselLobby);  
}

//Affiche les boutons pour infos propres à la maison du carousel
function focusOnHouse()
{
  $("#menuInfoHouse").prop("hidden", false);
}

//Injection nouveau carousel plan de coupe
function displayPlanDeCoupe()
{
  var carouselPlanDeCoupe = "<div id='myCarousel' class='carousel slide' data-ride='carousel'> \
    <ol class='carousel-indicators'> \
        <li data-target='#myCarousel' data-slide-to='0' class='active'></li> \
        <li data-target='#myCarousel' data-slide-to='1'></li> \
        <li data-target='#myCarousel' data-slide-to='2'></li> \
        <li data-target='#myCarousel' data-slide-to='3'></li> \
    </ol> \
    <div class='carousel-inner'> \
      <div class='item active'> \
        <img src='./img/PlanDeCoupeParadise/MADERA - Plan de Coupe n°1.jpg' class='imgCaroussel' alt='Plan de coupe 1'> \
        <div class='carousel-caption'> \
        <p>Plan de coupe 1</p> \
        </div> \
      </div> \
      <div class='item'> \
        <img src='./img/PlanDeCoupeParadise/MADERA - Plan de Coupe n°2.jpg' class='imgCaroussel' alt='Plan de coupe 2'> \
        <div class='carousel-caption'> \
        <p>Plan de coupe 2</p> \
        </div> \
      </div> \
      <div class='item'> \
        <img src='./img/PlanDeCoupeParadise/MADERA - Plan de Coupe n°3.jpg' class='imgCaroussel' alt='Plan de coupe 3'> \
        <div class='carousel-caption'> \
        <p>Plan de coupe 3</p> \
        </div> \
      </div> \
      <div class='item'> \
        <img src='./img/PlanDeCoupeParadise/MADERA - Plan de Coupe n°4.jpg' class='imgCaroussel' alt='Plan de coupe 4'> \
        <div class='carousel-caption'> \
        <p>Plan de coupe 4</p> \
        </div> \
      </div> \
    </div> \
    <a class='left carousel-control' href='#myCarousel' data-slide='prev'> \
    <span class='glyphicon glyphicon-chevron-left'></span> \
    <span class='sr-only'>Previous</span> \
    </a> \
    <a class='right carousel-control' href='#myCarousel' data-slide='next'> \
    <span class='glyphicon glyphicon-chevron-right'></span> \
    <span class='sr-only'>Next</span> \
    </a> \
  </div> \
    <div class='row'> \
    <div class='col-xs-3'></div> \
    <div class='col-xs-6' id='menuInfoHouse' hidden='true'> \
      <div class='btn-group btn-group-justified'> \
        <div class='btn-group'><button type='button' class='btn btn-success' id='buttonPlanDeCoupe' onclick='displayPlanDeCoupe()'>Plans</button></div> \
        <div class='btn-group'><button type='button' class='btn btn-success' id='buttonVisite' onclick='displayVisite()'>Visite</button></div> \
        <div class='btn-group'><button type='button' class='btn btn-success' id='buttonInfoSup' onclick='displayInfoSup()'>Informations</button></div> \
        <div class='btn-group'><button type='button' class='btn btn-success' id='buttonGenererDevis' onclick='openDevisPDF()'>Afficher devis</button></div> \
      </div> \
    </div> \
    <div class='col-xs-3'></div> \
  </div>";

  $("#containerWorkZone").html(carouselPlanDeCoupe);
  focusOnHouse();
}

function displayListeMesDevis()
{
    var listeMesDevis = "<div class='col-xs-12'> \
        <div class='panel panel-default' id='panelClassic'> \
            <div class='panel-heading'><H4>MES DEVIS</H4></div> \
            <div class='panel-body'> \
                <table class='table table-hover'> \
                    <thead> \
                        <tr> \
                            <th>Prénom</th> \
                            <th>Nom</th> \
                            <th>Email</th> \
                            <th>Numéro devis</th> \
                            <th>Date création</th> \
                            <th>Date validation</th> \
                            <th>Etat devis</th> \
                        </tr> \
                    </thead> \
                    <tbody> \
                        <tr> \
                            <td>Jean</td> \
                            <td>Jean</td> \
                            <td>jean.jean@XXXX.com</td> \
                            <td>D00000001</td> \
                            <th>01/01/2018</th> \
                            <th></th> \
                            <th>Attente validation</th> \
                        </tr> \
                        <tr> \
                            <td>Paul</td> \
                            <td>Paul</td> \
                            <td>paul.paul@XXXX.com</td> \
                            <td>D00000002</td> \
                            <th>02/01/2018</th> \
                            <th>10/01/2018</th> \
                            <th>Refusé</th> \
                        </tr> \
                        <tr> \
                            <td>Sophie</td> \
                            <td>Sophie</td> \
                            <td>sophie.sophie@XXXX.com</td> \
                            <td>D00000003</td> \
                            <th>07/03/2018</th> \
                            <th>18/05/2018</th> \
                            <th>Commande</th> \
                        </tr> \
                        <tr> \
                            <td>Virginie</td> \
                            <td>Virginie</td> \
                            <td>virginie.virginie@XXXX.com</td> \
                            <td>D00000004</td> \
                            <th>23/01/2018</th> \
                            <th>03/03/2018</th> \
                            <th>Terminé</th> \
                        </tr> \
                    </tbody> \
                </table> \
            </div> \
        </div> \
    </div >";
    $("#containerWorkZone").html(listeMesDevis);
}

function openDevisPDF()
{
    window.open("./DevisStandardsMaisonsTypes/MADERA PARADISE Devis standard.pdf");
}

