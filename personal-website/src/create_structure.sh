#!/bin/bash

# Define the directory structure
directories=(
  "components/common"
  "components/HomePage"
  "components/AboutMe"
  "components/Portfolio"
  "components/Blog"
  "components/AboutMe/WorkExperience"
  "components/AboutMe/WorkExperience/Job"
  "components/pages"
)

files=(
  "components/common/Header.js"
  "components/common/Footer.js"
  "components/common/Navigation.js"
  "components/common/ContactForm.js"
  "components/common/SocialMediaLinks.js"
  "components/HomePage/Introduction.js"
  "components/HomePage/Skills.js"
  "components/HomePage/FeaturedProjects.js"
  "components/HomePage/LatestBlogPosts.js"
  "components/AboutMe/PersonalInformation.js"
  "components/AboutMe/Education.js"
  "components/AboutMe/WorkExperience/JobDetails.js"
  "components/AboutMe/Certifications.js"
  "components/Portfolio/Project.js"
  "components/Portfolio/ProjectDetails.js"
  "components/Blog/BlogPost.js"
  "components/Blog/PostDetails.js"
  "components/pages/HomePage.js"
  "components/pages/AboutMe.js"
  "components/pages/Portfolio.js"
  "components/pages/Blog.js"
  "components/pages/Contact.js"
  "App.js"
  "App.css"
  "index.js"
  "index.css"
)

# Create directories
for dir in "${directories[@]}"; do
  mkdir -p "src/$dir"
done

# Create files
for file in "${files[@]}"; do
  touch "src/$file"
done

# Display a message
echo "Directory structure and files created successfully!"
