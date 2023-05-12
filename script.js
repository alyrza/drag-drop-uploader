const dropzone = document.querySelector("#dropzone");
const previewZone = document.querySelector("#previewzone");
const previewImage = document.querySelector("#previewzone > img");
const dropzoneText = document.querySelector("#dropzoneText");
const fileInput = document.querySelector("#file-input");
const backBtn = document.querySelector(".backBtn");

dropzone.addEventListener("dragenter", (e) => {
  e.preventDefault();
  e.stopPropagation();
  dropzoneText.textContent = "... لطفا فایل را رها کنید";
});

dropzone.addEventListener("dragleave", (e) => {
  e.preventDefault();
  e.stopPropagation();
  dropzoneText.textContent =
    "... برای آپلود فایل کلیک کنید یا فایل را بکشید و سپس رها کنید";
});

dropzone.addEventListener("dragover", (e) => {
  e.preventDefault();
  e.stopPropagation();
  dropzoneText.textContent = "... لطفا فایل را رها کنید";
});

dropzone.addEventListener("drop", (e) => {
  e.preventDefault();
  e.stopPropagation();
  let draggedData = e.dataTransfer;
  let file = draggedData.files[0];
  fileHandler(file);
});

dropzone.addEventListener("click", (e) => {
  fileInput.click();
});

fileInput.addEventListener("change", function () {
  const file = this.files[0];
  fileHandler(file);
});

function fileHandler(file) {
  try {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      //image and file name
      preview.src = reader.result;
      dropzone.classList.add("hide");
      previewZone.classList.remove("hide");
    };
  } catch (error) {
    // error
  }
}

backBtn.addEventListener("click", () => {
  dropzone.classList.remove("hide");
  previewZone.classList.add("hide");
});
