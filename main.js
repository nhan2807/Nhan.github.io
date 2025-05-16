     // Simple animation for skill bars when they come into view
     const skillBars = document.querySelectorAll('.skill-progress');
        
     const observer = new IntersectionObserver((entries) => {
         entries.forEach(entry => {
             if (entry.isIntersecting) {
                 const width = entry.target.style.width;
                 entry.target.style.width = '0';
                 setTimeout(() => {
                     entry.target.style.width = width;
                 }, 100);
             }
         });
     }, {threshold: 0.5});

     skillBars.forEach(bar => {
        
         observer.observe(bar);
     });

     // Smooth scrolling for navigation links
     document.querySelectorAll('a[href^="#"]').forEach(anchor => {
         anchor.addEventListener('click', function (e) {
             e.preventDefault();
             document.querySelector(this.getAttribute('href')).scrollIntoView({
                 behavior: 'smooth'
             });
         });
     });
    document.addEventListener("DOMContentLoaded", function () {
      const form = document.getElementById("contactForm");

      form.addEventListener("submit", function (e) {
        e.preventDefault(); // Prevent page reload

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const subject = document.getElementById("subject").value.trim();
        const message = document.getElementById("message").value.trim();

        const recipient = "ltnhan2807@gmail.com";

        const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
          `From: ${name} <${email}>\n\n${message}`
        )}`;

        window.location.href = mailtoLink;
      });
    });