$(document).ready(function() {
  $('#userForm').on('submit', function(e) {
      e.preventDefault();
      let name = $('#name').val();
      let company = $('#company').val();
      let tagline = $('#tagline').val();
      let email = $('#email').val();
      let phone = $('#phone').val();
      let website = $('#website').val().trim();
      let address = $('#address').val();

      $('#cardName').text(name);
      $('#cardCompany').text(company);
      $('#cardTagline').text(tagline);
      $('#cardEmail').text(`✉️ ${email}`);
      $('#cardPhone').text(`📞 ${phone}`);
      $('#cardWebsite').text(website ? `🌐 ${website}` : "");
      $('#cardAddress').text(`📍 ${address}`);

      let qrContent = `BEGIN:VCARD\nVERSION:3.0\nFN:${name}\nORG:${company}\nTITLE:${tagline}\nEMAIL:${email}\nTEL:${phone}\n${website ? `URL:${website}\n` : ""}ADR:${address}\nEND:VCARD`;

      $('#qrcode').html(''); // Clear previous QR
      new QRCode(document.getElementById("qrcode"), {
          text: qrContent,
          width: 100,
          height: 100
      });
  });
});