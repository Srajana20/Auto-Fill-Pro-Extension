document.getElementById("userInfoForm").addEventListener("submit", function (event) {
    event.preventDefault();
  
    const fname = document.getElementById("fname").value;
    const lname = document.getElementById("lname").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const linkedin = document.getElementById("linkedin").value;
  
    chrome.storage.sync.set({ fname, lname, email, phone, linkedin }, function () {
      alert("User Info Saved!");
    });
  });
  