function addBookmark() {
    let siteName = document.getElementById('siteName').value.trim();
    let siteURL = document.getElementById('siteURL').value.trim();
    if (siteName === "" || siteURL === "") {
        showAlert();
        isValid = false;
    }
    else {
        isValid = "";
    }
    if (isValid) {
        console.log('البيانات صح، كمل تنفيذ الكود هنا!');
    }
        function showAlert() {
        const alertBox = document.getElementById('alertBox');
        alertBox.classList.remove('hidden');
        
        setTimeout(() => {
          alertBox.classList.add('hidden');
        }, 3000);
      }
      
      function closeAlert() {
        document.getElementById('alertBox').classList.add('hidden');
      }
      

   
    bookmarks.push(bookmark);
    displayBookmarks();
    clearForm();
  }
  function clearForm() {
    document.getElementById('siteName').value = "";
    document.getElementById('siteURL').value = "";
  }
  document.getElementById('siteName').addEventListener('input', validateName);
document.getElementById('siteURL').addEventListener('input', validateURL);
function validateName() {
  let siteNameInput = document.getElementById('siteName');
  if (siteNameInput.value.trim().length >= 3) {
    siteNameInput.classList.add('valid');
    siteNameInput.classList.remove('invalid');
  } else {
    siteNameInput.classList.add('invalid');
    siteNameInput.classList.remove('valid');
  }
}
function validateURL() {
  let siteURLInput = document.getElementById('siteURL');
  let pattern = /^(https?:\/\/)?([\w\-])+\.{1}[a-zA-Z]{2,}(\/\S*)?$/;
  if (pattern.test(siteURLInput.value.trim())) {
    siteURLInput.classList.add('valid');
    siteURLInput.classList.remove('invalid');
  } else {
    siteURLInput.classList.add('invalid');
    siteURLInput.classList.remove('valid');
  }
}





