// config script to load recaptcha
<script src="https://www.google.com/recaptcha/enterprise.js" async defer></script>
<script>
  window.onload = function() {
  var recaptcha = document.forms["kontak"]["g-recaptcha-response"];
  recaptcha.required = true;
  recaptcha.oninvalid = function(e) {
  alert("Data yang kamu isi belum lengkap");
  }
  }
  </script>