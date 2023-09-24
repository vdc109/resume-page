<template lang="pug">
.root
  .paper
    .title
      v-spacer
      h1.header VINH DO
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
      h3.head2 EDUCATION
      hr.sep-bar
      span
        b Florida State University
        b.duration Expected May 2027
      v-spacer
      span Bachelor of Science, Computer Science & Applied Mathematics

      .international
        v-spacer
        span
          b Hanoi Amsterdam Highschool for the gifted - Mathematics Honor Class (2020-2023)
        span.duration 
          b May 2023
        v-spacer 
        span High School Diploma
        span.time1 Overall GPA: 9.3/10
      
      v-spacer

      h3.head3 PERSONAL PROJECTS
      hr.sep-bar
      ul
        li
          span
            b Resume site   
            span (Link: 
              a(href="https://github.com/vdc109/resume-page") https://github.com/vdc109/resume-page
            span )  
          b.time1 Aug 2022 - Oct 2022
          v-spacer
          span Resume website based with descriptive links 
            a(href="https://resume-page-site.netlify.app" target="_blank") https://resume-page-site.netlify.app
          v-spacer
          
        li
          span
            b Assistive stick for the blind 
            span (Project link: 
            a(href="https://github.com/vdc109/Assistive-stick-for-the-blind" target="_blank") https://github.com/vdc109/Assistive-stick-for-the-blind
            span )
          b.time1 Jun 2022
          v-spacer
          span Ultrasonic sensor stick warning dangerous obstacles for the blind
          v-spacer
        
        li
          span
            b Hurricane ML 
            span (Project link:
              a(href="https://github.com/vdc109/HurricaneML") https://github.com/vdc109/HurricaneML
            span )
          b.time1 Sep 2023
          v-spacer 
          span Used EfficientNetB7 CNN model to predict flood damage from satellite image, presented on product using ReactJS, Typescript, and Flask API
          v-spacer
      
      h3.head2 RELEVENT EXPERIENCE
      hr.sep-bar
      ul
        li
          span
            b Hanoi University of Science and Technology | 
          span Hanoi, Vietnam
          v-spacer 
          span 
            i Intern Developer
          b.time1 Apr 2022 - Jun 2022
          v-spacer
          span
          span Developing call bots based on diagram flow of deep learning model 
        li
          span
            b ISOFH |
          span Hanoi, Vietnam
          v-spacer
          span
            i Front-end Software Developer Intern
          b.time1 May 2023 - Jul 2023
          v-spacer
          span Fixing bugs and developing the web frontend hosting the company's Blockchain project IVIRSE
      
      h3.head2 LEADERSHIP
      hr.sep-bar
      ul
        li
          span
            b Co-founder and leader of Edutech club
            b.time1 Nov 2020 - Now
          v-spacer Organize STEM classes, events, and activities to raise funds to help unfortunate people in less developed provinces of Vietnam
          
      h3.head4 EXTRACURRICULAR COURSES
      hr.sep-bar
      ul
        li
          b Harvard's CS50
          b.time1 May - June 2021
          v-spacer
          span Harvard University Introduction to Computer Science on EdX
          v-spacer
        li
          b Harvard's CS50: Python programming
          b.time1 June - July 2022
          v-spacer
          span Harvard University Python Programming on EdX
          v-spacer
          
        li
          b Algorithm, Part I
          b.time1 June - July 2022
          v-spacer
          span Princeton University Data Structure & Algorithms on Coursera
          v-spacer
      
      h3.head4 SKILLS
      hr.sep-bar
      span 
        b Programming Languages: 
      span C++, Java, UNIX, Pascal, Python, HTML, CSS, Javascript, Typescript, Vue, Sass
      v-spacer
      span
        b Tools, Frameworks: 
      span Git, ReactJS, VueTS, Flask API
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
  margin: 5px auto 0 auto
  display: flex
  justify-content: center

.contact
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
  max-width: 65%
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
