let currentTab = "all";
let total_interview_list = [];
let total_reject_list = []; 

let total = document.querySelector(".item1 h3");
let total_interview = document.querySelector(".item2 h3");
let total_reject = document.querySelector(".item3 h3");

let sec_box2 = document.querySelector(".sec-box2");
let sec_1 = document.querySelector(".sec-1");
let sec_2 = document.querySelector(".sec-2");

let allBtn = document.querySelector(".all");
let InterviewBtn = document.querySelector(".Interview");
let RejectBtn = document.querySelector(".Reject");
let status = document.querySelector(".status h3 span");

function calclute() {
    total.innerText = sec_box2.children.length;
    status.innerText = sec_box2.children.length;
    total_interview.innerText = total_interview_list.length;
    total_reject.innerText = total_reject_list.length;
}
calclute();

InterviewBtn.addEventListener("click",()=>{
    status.innerHTML = `${total_interview_list.length}`
})
RejectBtn.addEventListener("click",()=>{
    status.innerHTML = `${total_reject_list.length}`
})

// toggle buttons
function togglestyle(e) {

    allBtn.classList.remove("btn-all");
    InterviewBtn.classList.remove("btn-all");
    RejectBtn.classList.remove("btn-all");

    allBtn.classList.add("btn-all-3");
    InterviewBtn.classList.add("btn-all-3");
    RejectBtn.classList.add("btn-all-3");

    let getclass = document.querySelector("." + e);

    getclass.classList.remove("btn-all-3");
    getclass.classList.add("btn-all");

    if (e === "all") {
        currentTab = "all"
        sec_1.classList.remove("display-hide");
        sec_2.classList.add("display-hide");
    }

    else if (e === "Interview") {
        currentTab = "Interview"
        sec_1.classList.add("display-hide");
        sec_2.classList.remove("display-hide");
        randerinterview();
    }

    else if (e === "Reject") {
        currentTab = "Reject";
        sec_1.classList.add("display-hide");
        sec_2.classList.remove("display-hide");
        randerreject();
    }
}

// section 1 click
sec_1.addEventListener("click", (e) => {

    let parentnode = e.target.closest(".card1");

    // if (!parentnode) return;

    let companyName = parentnode.querySelector(".companyName").innerText;

    let allValue = {
        companyName: companyName,
        position: parentnode.querySelector(".position").innerText,
        location: parentnode.querySelector(".location").innerText,
        work_of_js: "",
        discription: parentnode.querySelector(".discription").innerText,
        interview: "Interview",
        reject: "Reject",
        i: '<i class="ri-delete-bin-line"></i>'
    };

    //interview click
    if (e.target.classList.contains("interview")) {

        togglestyle('Interview')

        // remove from reject list
        total_reject_list = total_reject_list.filter(
            item => item.companyName !== companyName
        );

        allValue.work_of_js = "INTERVIEW";

        let elem = parentnode.querySelector(".work-of-js");

        elem.innerText = "INTERVIEW";
        elem.style.backgroundColor = "green";
        elem.style.color = "white";

        if (!total_interview_list.find(
            item => item.companyName === companyName
        )) {
            total_interview_list.push(allValue);
        }

        calclute();
        randerinterview()
        
    }


    // reject click
    if (e.target.classList.contains("reject")) {

        togglestyle('Reject');

        // remove from interview list
        total_interview_list = total_interview_list.filter(
            item => item.companyName !== companyName
        );

        allValue.work_of_js = "REJECT";

        let elem = parentnode.querySelector(".work-of-js");

        elem.innerText = "REJECT";
        elem.style.backgroundColor = "red";
        elem.style.color = "white";

        if (!total_reject_list.find(
            item => item.companyName === companyName
        )) {
            total_reject_list.push(allValue);
        }

        calclute();
        randerreject()
        
    }


    // delete click
    if (e.target.classList.contains("ri-delete-bin-line")) {

        parentnode.remove();

        total_interview_list = total_interview_list.filter(
            item => item.companyName !== companyName
        );

        total_reject_list = total_reject_list.filter(
            item => item.companyName !== companyName
        );

        calclute();

        if (InterviewBtn.classList.contains("btn-all")) {
            randerinterview();
        }

        if (RejectBtn.classList.contains("btn-all")) {
            randerreject();
        }
    }

});



// section 2 click
sec_2.addEventListener("click", (e) => {

    let parentnode = e.target.closest(".card1");

    // if (!parentnode) return;

    let companyName = parentnode.querySelector(".companyName").innerText;

    let allValue = {
        companyName: companyName,
        position: parentnode.querySelector(".position").innerText,
        location: parentnode.querySelector(".location").innerText,
        work_of_js: "",
        discription: parentnode.querySelector(".discription").innerText,
        interview: "Interview",
        reject: "Reject",
        i: '<i class="ri-delete-bin-line"></i>'
    };


    // interview click
    if (e.target.classList.contains("interview")) {
        togglestyle('Interview');
        total_reject_list = total_reject_list.filter(
            item => item.companyName !== companyName
        );

        allValue.work_of_js = "INTERVIEW";

        parentnode.remove();

        if (!total_interview_list.find(
            item => item.companyName === companyName
        )) {
            total_interview_list.push(allValue);
        }

        randerinterview();
        calclute();
    }


    // reject click
    if (e.target.classList.contains("reject")) {
        togglestyle('Reject')
        total_interview_list = total_interview_list.filter(
            item => item.companyName !== companyName
        );

        allValue.work_of_js = "REJECT";

        parentnode.remove();

        if (!total_reject_list.find(
            item => item.companyName === companyName
        )) {
            total_reject_list.push(allValue);
        }

        randerreject();
        calclute();
    }


    // delete click
    if (e.target.classList.contains("ri-delete-bin-line")) {

        parentnode.remove();

        total_interview_list = total_interview_list.filter(
            item => item.companyName !== companyName
        );

        total_reject_list = total_reject_list.filter(
            item => item.companyName !== companyName
        );

        calclute();
    }

});




// render interview
function randerinterview() {

    sec_2.innerHTML = "";

     if (total_interview_list.length === 0) {
        sec_2.innerHTML = `
            <div class="sec-box2-alrt">
                <i class="ri-file-warning-fill"></i>
                <h2>No jobs available</h2>
                <p>Check back soon for new job opportunities</p>
            </div>
        `;
    } else{
        
        for (let inter of total_interview_list) {
    
            let div = document.createElement("div");
    
            div.className = "card1";
    
            div.innerHTML = `
            <h2 class="companyName">${inter.companyName}</h2>
            <p class="position">${inter.position}</p>
            <p class="location">${inter.location}</p>
            <div class="work-of-js" style="background-color: green; color: white;">INTERVIEW</div>
            <p class="discription">${inter.discription}</p>
            <div class="card-btn-box">
                <div class="child-of-card-box">
                    <button class="interview">Interview</button>
                    <button class="reject">Reject</button>
                </div>
            </div>
            ${inter.i}
            `;
    
            sec_2.appendChild(div);
        }
    }

}



// render reject
function randerreject() {

    sec_2.innerHTML = "";

    if (total_reject_list.length === 0) {
        sec_2.innerHTML = `
            <div class="sec-box2-alrt">
                <i class="ri-file-warning-fill"></i>
                <h2>No jobs available</h2>
                <p>Check back soon for new job opportunities</p>
            </div>
        `;
    }else{

        for (let rej of total_reject_list) {
    
            let div = document.createElement("div");
    
            div.className = "card1";
    
            div.innerHTML = `
            <h2 class="companyName">${rej.companyName}</h2>
            <p class="position">${rej.position}</p>
            <p class="location">${rej.location}</p>
            <div class="work-of-js" style="background-color: red; color: white;">REJECT</div>
            <p class="discription">${rej.discription}</p>
            <div class="card-btn-box">
                <div class="child-of-card-box">
                    <button class="interview">Interview</button>
                    <button class="reject">Reject</button>
                </div>
            </div>
            ${rej.i}
            `;
    
            sec_2.appendChild(div);
        }
    }

}