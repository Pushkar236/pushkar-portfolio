const config = {
  title: "Pushkar Kirange | Full-Stack Developer",
  description: {
    long: "Explore the portfolio of Pushkar Kirange, a full-stack developer and creative technologist specializing in interactive web experiences, 3D animations, and innovative projects. Discover my latest work, including Coding Ducks, The Booking Desk, Ghostchat, and more. Let's build something amazing together!",
    short:
      "Discover the portfolio of Pushkar Kirange, a full-stack developer creating interactive web experiences and innovative projects.",
  },
  keywords: [
    "Pushkar Kirange",
    "portfolio",
    "full-stack developer",
    "creative technologist",
    "web development",
    "3D animations",
    "interactive websites",
    "Coding Ducks",
    "The Booking Desk",
    "Ghostchat",
    "web design",
    "GSAP",
    "React",
    "Next.js",
    "Spline",
    "Framer Motion",
  ],
  author: "Pushkar Kirange",
  email: "pdkirange236@gmail.com",
  site: "https://localhost:3000",

  // for github stars button
  githubUsername: "Pushkar236",
  githubRepo: "3d-portfolio",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "https://leetcode.com/u/PushkarKirange/",
    linkedin: "https://www.linkedin.com/in/pushkar-kirange-8b8a15298/",
    instagram: "https://www.instagram.com/pushkar.kirange",
    facebook: "https://www.facebook.com/",
    github: "https://github.com/Pushkar236",
  },
};
export { config };
