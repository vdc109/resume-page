<template lang="pug">
  .root
    .paper
      .title
        v-spacer
        h3.header VINH DO
        v-spacer
      .contact
        v-spacer
        span Email: vinhdocong109@gmail.com | Phone: (448)-867-6272
        v-spacer
      .content
        h3.head2 PROFILE
        hr.sep-bar
        span Github: 
          a(href="https://github.com/vdc109" target="_blank") https://github.com/vdc109
        v-spacer 
        span LinkedIn: 
          a(href = 'https://www.linkedin.com/in/vinh-do-84a117241/') https://www.linkedin.com/in/vinh-do-84a117241/
        v-spacer 
        span Leetcode: 
          a(href = 'https://leetcode.com/vinhdocong109/') https://leetcode.com/vinhdocong109/
        h3.head2 EDUCATION
        hr.sep-bar
        span
          b Florida State University
          b.duration Expected May 2027
        v-spacer
        span Bachelor of Science, Computer Science & Applied Mathematics
        span.duration Cumulative GPA: 3.8/4.0
        
        .international
          span 
            b Relevent and extracurricular coursework 
          v-spacer 
          span Calculus/Data Structures and Algorithms/Android App Development/Web Development/Multivariative Calculus for Machine Learning/Linear Algebra/ Linear Algebra for Machine Learning
        
        v-spacer
  
        h3.head3 PERSONAL PROJECTS
        hr.sep-bar
        span
          b Resume site   
          span (Link: 
            a(href="https://github.com/vdc109/resume-page") https://github.com/vdc109/resume-page
          span )  
        b.time1 Aug 2022 - Oct 2022
        v-spacer
        ul
          li
            span Resume website developed using Vue Typescript framework
          li  
            span Deployed on Netlify 
              a(href="https://resume-page-site.netlify.app" target="_blank") https://resume-page-site.netlify.app
        v-spacer
        
        span
          b Assistive stick for the blind 
          span (Project link: 
          a(href="https://github.com/vdc109/Assistive-stick-for-the-blind" target="_blank") https://github.com/vdc109/Assistive-stick-for-the-blind
          span )
        b.time1 Jun 2022
        v-spacer
        ul
          li
            span Using Arduino ESP32 chip and ultrasonic sensor to warn dangerous obstacles for the blind
          li 
            span Displayed statistics on Arduino IoT cloud application
        v-spacer
      
        span
          b Hurricane ML 
          span (Project link: 
            a(href="https://github.com/vdc109/HurricaneML") https://github.com/vdc109/HurricaneML
          span )
        b.time1 Sep 2023
        v-spacer 
        ul
          li
            span Used Tensorflow to train EfficientNetB7 CNN machine learning model to detect flood damage from satellite images
          li 
            span Presented in product using ReactJS, Typescript, and Flask API
        v-spacer
        span
          b Fullstack realtime messaging application 
          span (Project link: 
            a(href="https://github.com/vdc109/MessageApp") https://github.com/vdc109/MessageApp
          span )
        b.time1 Oct 2023
        v-spacer 
        ul 
          li
            span Used Angular Typescript for website frontend frontend
          li
            span Integrated with NodeJS Express backend accessing MongoDB database server deployed on AWS
        v-spacer
        
        h3.head2 RELEVENT EXPERIENCE
        hr.sep-bar
        span
          b Hanoi University of Science and Technology | 
        span Hanoi, Vietnam
        v-spacer 
        span 
          i Intern Developer
        b.time1 Apr 2022 - Jun 2022
        v-spacer
        span Developing call bots based on diagram flow of deep learning model 

        v-spacer
        span
          b ISOFH | 
        span Hanoi, Vietnam
        v-spacer
        span
          i Front-end Software Developer Intern
        b.time1 May 2023 - Jul 2023
        v-spacer
        ul 
          li
            span Front-end developing for website hosting the company's Blockchain project IVIRSE using ReactJS
          li 
            span Integration with Python and Solidarity backend
        
        v-spacer 
        span 
          b Florida State University | 
        span Tallahassee, FL 
        v-spacer 
        span 
          i Research Assistant
        b.time1 Nov 2023 - 
        v-spacer 
        span Develop partial differential functions to create visualization model for professor's project on multi-phase flow fluid dynamics
        
        h3.head4 SKILLS
        hr.sep-bar
        span 
          b Programming Languages: 
        span C++, Java, UNIX, Pascal, Python, HTML, CSS, Javascript, Typescript
        v-spacer
        span
          b Tools, Frameworks: 
        span Git, React, Vue, Flask API, Spring Boot, Express, Angular, AWS, MongoDB, Netlify
  </template>
  
  <script lang="ts">
  import { defineComponent } from "vue";
  
  const Home = defineComponent({});
  
  export default Home;
  </script>
  
  <style lang="sass">
  .header
    font-size: 24px
    font-family: Georgia, Serif
    margin: 10px
  
  .time1
    float: right
  
  .title
    margin: 2px auto 0 auto
    display: flex
    justify-content: center
  
  .contact
    margin: 0
    display: flex
    font-family: Georgia, Serif
    justify-content: center
    
  .content
    font-size: 12px
    margin: 0 auto
    max-width: 95%
    font-family: Georgia, Serif
  
  .paper
    height: 100%
    margin: 0px auto
    max-width: 100%
    background-color: #fff
  
  .root
    width: 100%
    background-color: rgb(204,204,204)
  
  .head2
    margin: 20px 0 5px 0
  
  .head3
    margin: 20px 0 5px 0
  
  .head4
    margin: 20px 0 5px 0
  
  .duration
    float: right
  
  .GPA
    display: flex
    justify-content: space-between
  
  .standardized
    display: flex
    justify-content: space-between
  
  .ap
    display: flex
    justify-content: space-between
  
  .international
    margin: 10px 0 5px 0
  </style>
