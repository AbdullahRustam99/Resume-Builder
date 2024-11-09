"use strict";
const NameEle = document.getElementById("First-name");
const emailEle = document.getElementById("Email");
const numberEle = document.getElementById("Number");
const pictureEle = document.getElementById("Picture");
const educationYearEle = document.getElementById("Year");
const educationEle = document.getElementById("Edu");
const educationInstitutEle = document.getElementById("Ins");
const experienceEle = document.getElementById("Exp");
const experienceDurationEle = document.getElementById("Dueration");
const experienceTitleEle = document.getElementById("Title");
const skillEle = document.getElementById("Skills");
const output = document.getElementById("resumeOutput");
const submitBtn = document.getElementById("sub-btn");
const aboutEle = document.getElementById("About");
const fieldEle = document.getElementById("your-field");
const editBtnEle = document.getElementById("edit-btn");
const editEle = document.querySelectorAll('[contenteditable]');
let img = "";
function handleImageUpload() {
    if (pictureEle) {
        const file = pictureEle.files[0];
        const reader = new FileReader();
        reader.addEventListener("load", () => {
            img = reader.result;
        });
        reader.addEventListener("error", () => {
            console.error("Error reading file");
        });
        reader.readAsDataURL(file);
    }
}
function generateResume() {
    if (NameEle &&
        emailEle &&
        numberEle &&
        pictureEle &&
        educationEle &&
        fieldEle &&
        educationInstitutEle &&
        educationYearEle &&
        experienceEle &&
        skillEle &&
        experienceDurationEle &&
        experienceTitleEle) {
        const userDetails = {
            name: NameEle.value,
            number: numberEle.value,
            email: emailEle.value,
            picture: pictureEle.value,
            education: educationEle.value,
            filed: fieldEle.value,
            educationIns: educationInstitutEle.value,
            educationYear: educationYearEle.value,
            experience: experienceEle.value,
            experienceDur: experienceDurationEle.value,
            experienceTitle: experienceTitleEle.value,
            skill: skillEle.value,
            About: aboutEle.value,
        };
        console.log(userDetails.About);
        let resume = `  <main>
      <div class="Box"  >
        <div class="Information">
          <div class="Pic">
            <img
              class="profile-img"
              src=${img}
              alt="Img"
              height="100%"
              width="50%"
            />
            <div contenteditable="false">
              <h3>${userDetails.name}</h3>
              <h5>${userDetails.filed}</h5>
            </div>
          </div>
          <div class="contact" contenteditable="false">
            <h3>Contact :</h3>
            <div class="flex">
              <img src="./img/Email Icon.png" alt="" />
              <p>${userDetails.email}</p>
            </div>
            <div class="flex">
              <img src="./img/Phone Number.png" alt="" />
              <p>${userDetails.number}</p>
            </div>
          </div>
        </div>
        <div class="about" contenteditable="false">
          <h3>About</h3>
          <p>
            ${userDetails.About}
          </p>
        </div>
        <div class="Work">
          <h3>Work Experience</h3>
          <div class="work-flex" contenteditable="false">
            
              <div class="work-Ex" >
                <h4>${userDetails.experienceTitle}</h4>
                <p>2${userDetails.experienceDur}</p>
              </div>
              <p
                >${userDetails.experience}</p
              >
            
          </div>
        </div>
        <div class="education">
          <h3>Education</h3>
          <div class="edu-flex" contenteditable="false">
            <div class="education-Ex">
              <p>${userDetails.educationYear}</p>
              <h4>${userDetails.education}</h4>
              <p id="p">${userDetails.educationIns}</p>
            </div>
          </div>
        </div>
        <div class="Skill">
          <div class="skill-ex">
          <h3>Skills</h3>
          </div>
          <div id="toggle">
            <ul contenteditable="false">
              <li>${userDetails.skill}</li>
            </ul>
          </div>
        </div>
        <div id="submit">
          <button id="edit-btn">Edit Resume</button>
        </div>
      </div>
      </main>`;
        if (userDetails.name !== "" &&
            userDetails.number !== "" &&
            userDetails.email !== "" &&
            userDetails.education !== "" &&
            userDetails.educationIns !== "" &&
            userDetails.educationYear !== "" &&
            userDetails.experience !== "" &&
            userDetails.experienceDur !== "" &&
            userDetails.experienceTitle !== "" &&
            img !== "" &&
            userDetails.skill !== "") {
            output.innerHTML = resume;
            let isEditable = false;
            function edit() {
                isEditable = true;
                editEle.forEach((e) => {
                    e.contentEditable = isEditable;
                });
                editBtnEle.textContent = isEditable ? "Save" : "Edit";
            }
            editBtnEle.addEventListener("click", edit);
        }
    }
    else {
        alert("Fill Complete Information");
    }
}
;
pictureEle.addEventListener("change", handleImageUpload);
submitBtn.addEventListener("click", generateResume);
