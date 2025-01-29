// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      })
    })
  })
  
  // Import GSAP
  import gsap from "gsap"
  import { ScrollTrigger } from "gsap/ScrollTrigger"
  gsap.registerPlugin(ScrollTrigger)
  
  // Fade in animations for sections
  gsap.utils.toArray(".fade-in").forEach((element) => {
    gsap.from(element, {
      opacity: 0,
      y: 50,
      duration: 1,
      scrollTrigger: {
        trigger: element,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    })
  })
  
  // Parallax effect for hero section
  gsap.to(".hero", {
    backgroundPosition: "50% 100%",
    ease: "none",
    scrollTrigger: {
      trigger: ".hero",
      start: "top top",
      end: "bottom top",
      scrub: true,
    },
  })
  
  // Timeline animation
  gsap.from(".timeline-item", {
    opacity: 0,
    x: -50,
    stagger: 0.2,
    duration: 1,
    scrollTrigger: {
      trigger: ".timeline",
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none reverse",
    },
  })
  
  // Typing effect for hero text
  const heroText = "Computer Science Student | AI/ML Enthusiast | Software Developer"
  let i = 0
  const speed = 50
  
  function typeWriter() {
    if (i < heroText.length) {
      document.querySelector(".hero .lead").innerHTML += heroText.charAt(i)
      i++
      setTimeout(typeWriter, speed)
    }
  }
  
  window.addEventListener("load", typeWriter)
  
  // Form submission
  document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault()
  
    // Here you would typically send the form data to a server
    // For this example, we'll just log it to the console
    console.log("Form submitted!")
    console.log("Name:", document.getElementById("name").value)
    console.log("Email:", document.getElementById("email").value)
    console.log("Message:", document.getElementById("message").value)
  
    // Clear the form
    this.reset()
  
    // Show a success message
    alert("Thank you for your message! I will get back to you soon.")
  })
  
  // Add class to animate elements when they come into view
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active")
        }
      })
    },
    {
      threshold: 0.1,
    },
  )
  
  document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el))
  
  