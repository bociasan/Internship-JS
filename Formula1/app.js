import { mockData } from "../mockData.js";
import { mockFlags } from "../flags.js";
const drivers = [...mockData.sort((a,b) => b.points - a.points)];
const flags = [...mockFlags];
//console.log(flags)
const container = document.querySelector('.drivers-container');
//console.log(drivers)

drivers.forEach((driver, index) =>{
    let driverCard = `<div class="driver-card"> 
            
    <div style="display: flex; justify-content: space-between;">
        <div style="font-size: 90; vertical-align: top; "> ${index+1} </div>
        <div> 
            <div id="points" style="font-size: 40; padding: 6px 0 0 0; text-align: right;">
                ${driver.points}       
            </div>

            <div class="pts-div">PTS</div>

        </div>
    </div>

    <div class="line"></div>

    <div class="space-between">
        <div style="display: flex;">
            <canvas id="team-color" width="8px" height="30px" style="background: ${driver.hex}; margin-right: 5px;">
            </canvas>
            <div>
                <div class="driver-firstname">${driver.firstName}</div>
                <div class="driver-lastname">${driver.lastName}</div>
            </div>
        </div>

        <img class="flag" src="${flags.find((flag) => flag.country === driver.country).image}" width=20%>
        
    </div>

    <div class="line"></div>

    <div class="team-name">${driver.team}</div> 

    <div class="div-relative" >
        <img id="driver-img" src="${driver.image}" width=70% style=" ">

        <div class="driver-number">${driver.number}</div>
        <div class="plus-div"></div>
    </div>


    <div class="line"></div>
    <div class="space-between" style="position: relative;">
        <button id="add-button" class="pts-button">+</button>
        <button id="dec-button" class="pts-button">-</button>
    </div>


</div> <!-- End card -->  `
    
    container.innerHTML += driverCard


})

container.querySelectorAll("#add-button").forEach((btn) => {
    btn.addEventListener("click", (e) => increaseScore(e));
    });

container.querySelectorAll("#dec-button").forEach((btn) => {
    btn.addEventListener("click", (e) => decreaseScore(e));
    });

const increaseScore = (event) => {
    const score = event.target.parentElement.parentElement.querySelector("#points");
    score.innerHTML = Number(score.innerHTML) + 1;
  };

  const decreaseScore = (event) => {
    const score = event.target.parentElement.parentElement.querySelector("#points");
    score.innerHTML = Number(score.innerHTML) - 1 > 0 ? Number(score.innerHTML) - 1 : 0 ;
  };