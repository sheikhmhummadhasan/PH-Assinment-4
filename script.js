let all = document.querySelector(".all")
let alll = document.querySelector(".alll")
let interviewbtnclick = document.querySelector(".Interview");
let interviewwbtnclick = document.querySelector(".Intervieww");
let rejectbtnclick = document.querySelector(".Reject");
let rejecttbtnclick = document.querySelector(".Rejectt");
let shows_interview = document.querySelector(".item2 h3");
let shows_reject = document.querySelector(".item3 h3");
let show_sec_2 = document.querySelector(".sec-2");
let show_sec_1 = document.querySelector(".sec-1")
let dustbin_btn = document.querySelectorAll(".card1 i")
let card_interview_btn = document.querySelectorAll(".interview")
let card_reject_btn = document.querySelectorAll(".reject")
let apply_or_notapply = document.querySelectorAll(".work-of-js")
let sec_box2 = document.querySelector(".sec-box2")
let card1 = document.querySelectorAll(".card1")
console.log(card1)


dustbin_btn.forEach((btn) =>{
    btn.addEventListener("click",() =>{
        btn.parentElement.style.display="none"
    })
})

let scor_interview = 0;
let scor_reject = 0;

all.addEventListener("click",()=>{
    show_sec_1.style.display = "block"
    show_sec_2.style.display = "none"
    console.log("clicket all btn")
});

interviewbtnclick.addEventListener("click",()=>{
    show_sec_1.style.display = "none"
    show_sec_2.style.display = "block"
    console.log("clicked interview btn")
});

rejectbtnclick.addEventListener("click",()=>{
    show_sec_1.style.display = "none"
    show_sec_2.style.display = "block"
    console.log("click reject bntn")
});


alll.addEventListener("click",()=>{
    show_sec_1.style.display = "block"
    show_sec_2.style.display = "none"
    console.log("clicket all btn")
});

interviewwbtnclick.addEventListener("click",()=>{
    show_sec_1.style.display = "none"
    show_sec_2.style.display = "block"
    console.log("clicked interview btn")
});

rejecttbtnclick.addEventListener("click",()=>{
    show_sec_1.style.display = "none"
    show_sec_2.style.display = "block"
    console.log("click reject bntn")
});


card_interview_btn.forEach((int) =>{
    int.addEventListener("click",() => {
        int.parentElement.parentElement.parentElement.style.display = "none"
        scor_interview++
        shows_interview.innerHTML = scor_interview;

        apply_or_notapply.forEach((apply) => {
            apply.target.classList.add("inter")
        })
        sec_box2.prepend(card1)
    })

})

card_reject_btn.forEach((int) =>{
    int.addEventListener("click",() => {
        int.parentElement.parentElement.parentElement.style.display = "none"
        scor_reject++
        shows_reject.innerHTML = scor_reject;

        apply_or_notapply.forEach((apply) => {
            apply.traget.classList.add("rej")
        })
    })

})