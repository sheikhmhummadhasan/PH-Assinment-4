// let interview_arr = [];
// let reject_arr = [];
// let currentTab = "all";

// const secBox2 = document.getElementById("sec-box2");

// document.getElementById("filter-buttons").addEventListener("click", function (event) {

//     const buttons = document.querySelectorAll(".btn-filter");
//     buttons.forEach(btn => btn.classList.remove("btn-active"));

//     if (event.target.classList.contains("all")) {

//         currentTab = "all";
//         event.target.classList.add("btn-active");

//         document.getElementById("sec-1").classList.remove("hide");
//         document.getElementById("sec-2").classList.add("hide");
//         document.getElementById("sec-box2").classList.remove("hide");

//     }

//     else if (event.target.classList.contains("interview")) {

//         currentTab = "interview";
//         event.target.classList.add("btn-active");

//         secBox2.innerHTML = "";

//         if (interview_arr.length > 0) {

//             interview_arr.forEach(p => {

//                 const post = document.createElement("div");
//                 post.className = "card1 card-1 jobcard";

//                 post.innerHTML = `
//                     <h2 class="companyName">${p.companyName}</h2>
//                     <p class="position">${p.position}</p>
//                     <p class="location">${p.location}</p>
//                     <div class="work-of-js">INTERVIEW</div>
//                     <p class="discription">${p.discription}</p>
//                 `;

//                 secBox2.appendChild(post);

//             });

//             document.getElementById("sec-2").classList.add("hide");

//         } else {

//             document.getElementById("sec-2").classList.remove("hide");

//         }

//     }

// });

// secBox2.addEventListener("click", function (event) {

//     const el = event.target.closest(".card1");

//     if (!el) return;

//     if (event.target.classList.contains("interview")) {

//         const data = {

//             companyName: el.querySelector(".companyName").innerText,
//             position: el.querySelector(".position").innerText,
//             location: el.querySelector(".location").innerText,
//             discription: el.querySelector(".discription").innerText

//         };

//         interview_arr.push(data);

//         el.remove();

//     }

//     postCount();
//     random();

// });

// function postCount() {

//     document.getElementById("total-count").innerText =
//         secBox2.children.length;

//     document.getElementById("interview-count").innerText =
//         interview_arr.length;

//     document.getElementById("reject-count").innerText =
//         reject_arr.length;

// }

// function random() {

//     const totalCount = secBox2.children.length;
//     const randomText = document.getElementById("random-text");

//     if (currentTab === "all") {

//         randomText.innerText = `${totalCount} jobs`;

//     }
//     else if (currentTab === "interview") {

//         randomText.innerText =
//             `${interview_arr.length} interview jobs`;

//     }
//     else if (currentTab === "reject") {

//         randomText.innerText =
//             `${reject_arr.length} reject jobs`;

//     }

// }

// postCount();
// random();