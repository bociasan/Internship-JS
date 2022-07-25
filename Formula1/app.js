import { mockData } from "../mockData.js";
import { mockFlags } from "../flags.js";
import { mockNumbers } from "../numbers.js";
const drivers = [...mockData.sort((a,b) => b.points - a.points)];
const flags = [...mockFlags];
const numbers = [...mockNumbers];
const container = document.querySelector('.drivers-container');

drivers.forEach((driver, index) =>{
    let driverCard = `<div class="driver-card" >         
    <div style="display: flex; justify-content: space-between; ">
        <div class="driver-index" style="font-size: 90; vertical-align: top; "> ${index+1} </div>
      
            <div style="display: flex; flex-direction: row;align-items: center ">
                <div class="pts-container"> 
                    <div class="points-number">
                        ${driver.points}       
                    </div>
                    <div class="pts-div">PTS</div>
                </div>
                
                <div style="display: flex; flex-direction: column; justify-content: space-between">
                    <img class="add-img" src="arrow.png" style="width: 3em; height: 2.2em; padding: 0 10px 0 10px;">
                    <img class="dec-img" src="arrow.png" style="width: 3em; height: 2.2em; transform: rotate(180deg); padding: 0 10px 0 10px;">
                </div>
            </div>
    </div>
    <div class="line"></div>
    <div class="space-between">
        <div style="display: flex;">
            <canvas class="team-color" width="8px" height="30px" style="background: ${driver.hex}; margin-right: 5px;">
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
    
    <div class="div-relative" style="height: 18em">
        <img id="driver-img" src="${driver.image}" style="height: 17em">
        <img class="driver-number" src="${numbers.find((number) => number.number === driver.number).image}">
        <div class="plus-div"></div>
    </div>
</div> <!-- End card -->  `



    container.innerHTML += driverCard

})

// container.querySelectorAll("#add-button").forEach((btn) => {
//     btn.addEventListener("click", (e) => increaseScore(e));
//     });
//
// container.querySelectorAll("#dec-button").forEach((btn) => {
//     btn.addEventListener("click", (e) => decreaseScore(e));
//     });


container.querySelectorAll(".add-img").forEach((btn) => {
    btn.addEventListener("click", (e) => increaseScore(e));
    });

container.querySelectorAll(".dec-img").forEach((btn) => {
    btn.addEventListener("click", (e) => decreaseScore(e));
    });

container.querySelectorAll(".driver-card").forEach((driverCard) => {
    // driverCard.addEventListener("onmouseover", (e) => changeBorderColor("green"));
    driverCard.addEventListener("mouseover", (e) => driverCard.style.borderColor =  driverCard.querySelector(".team-color").style.backgroundColor)


    driverCard.addEventListener("mouseout", (e) => driverCard.style.borderColor = "black");
});


const increaseScore = (event) => {
    const score = event.target.parentElement.parentElement.querySelector(".points-number");
    score.innerHTML = Number(score.innerHTML) + 1;
    verifySorting();
  };

const decreaseScore = (event) => {
    const score = event.target.parentElement.parentElement.querySelector(".points-number");
    score.innerHTML = Number(score.innerHTML) - 1 > 0 ? Number(score.innerHTML) - 1 : 0 ;
    verifySorting();
  };

function verifySorting(){
    let driversCardArray = Array.from(document.querySelectorAll(".driver-card"))
        .sort((a,b) => {
            return b.querySelector(".points-number").innerHTML - a.querySelector(".points-number").innerHTML
        })
    container.innerHTML = ""
    driversCardArray.forEach((driverCard, index) => {
        driverCard.querySelector(".driver-index").innerHTML = index+1
        container.appendChild(driverCard)
    })
}

function changeBorderColor (driverCard,color){
    // this.style.backgroundColor = "blue";
    //console.log(driverCard.style.borderColor = "green")

}


