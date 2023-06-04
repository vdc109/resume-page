<template lang="pug">
.root
  .paper
    .title
      v-spacer
      h1.header VINH DO
      v-spacer
    .contact
      v-spacer
      span Email: vinhdc109@gmail.com | Phone: (+84)855595596
      v-spacer
    .content
      h3.head2 EDUCATION
      hr.sep-bar
      span Hanoi Amsterdam Highschool for the gifted - Mathematics Honor Class
      span.duration 2020-2023
      v-spacer
      span.GPA 
        b GPA: 
        span Grade 9: 8.8 
        span Grade 10: 8.7 
        span Grade 11: 9.4 
        span Grade 12: 9.4 (Mid-year)
      v-spacer
      b Standardized test scores:
      .standardized
        span IELTS: 8.0
        span SAT: 1520 (Mathematics: 800 | Critical Reading & Writing: 720)
      v-spacer
      span
        b Extracurricular coursework:
        ul
          li Completed all of Harvard's CS50 2022 problemsets, labs, and final project
          li Advanced placement:
            .ap
              span AP Calculus BC: 5 (Subscore Calculus AB: 5)
              span AP Computer Science A: 5
              span AP Statistics: 5

      h3.head2 HONORS AND MERITS
      hr.sep-bar
      span
        b Domestic & Regional:
      ul
        li
          span Hanoi Mathematics Municipal Academic Competition 2020 - 2nd Prize
        li
          span Hanoi Informatics Municipal Academic Competition 2021 - 3rd Prize
        li
          span Vietnam Mathematical Young Talent Search 2018 - Gold Medal

      .international
        span
          b International:
        ul
          li
            span South East Asia Math Olympiad 2022 - Silver Medal (SEAMO)
          li
            span 7th International Mathematical Modelling Challenge 2021 (IMMC)
          li
            span 14th International Mathematics and Science Olympiad 2017 (IMSO) - Silver Medal

      h3.head3 RESEARCH & PERSONAL PROJECTS
      hr.sep-bar
      ul
        li
          b E-NNOVATE International Innovation Show 2022 - Gold Medal
          b.time1 Aug 2022
          v-spacer
          span Project: "Fabrication of Vanadium-doped TiO2 for Polluted Wastewater Treatment"
        li
          b INNOVERSE Innovation & Invention Expo 2022, USA - Gold Medal
          b.time1 Jul 2022
          v-spacer
          span Project: "Making Use of Speed Braker to Generate Electricity"
        li
          span
            b Resume site   
            span (Link: 
            a(href="https://resume-page-site.netlify.app" target="_blank") https://resume-page-site.netlify.app
            span )  
          b.time1 Aug 2022 - Oct 2022
          v-spacer
          span Resume website based with descriptive links 
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
      
      h3.head2 INTERNSHIP AND WORKING EXPERIENCE
      hr.sep-bar
      ul
        li
          span
            b Tran Le Bookstore
          b.time1 Jun 2019 - Now
          v-spacer
          span Content writer for the bookstore FB page with 11000 members and manage work related to marketing and reviewing English books 
        li
          span
            b Hanoi University of Science and Technology Lab
          b.time1 Apr 2022 - Jun 2022
          v-spacer
          span Developing call bots according to companies' and industries' orders
        li
          span
            b International MedTech software company ISOFH
          b.time1 Jul 2022 - Aug 2022
          v-spacer
          span Fixing bugs and developing the web frontend hosting the company's Blockchain project IVIRSE
      
      h3.head2 LEADERSHIP
      hr.sep-bar
      ul
        li
          span
            b Admin group Facebook SuTi cùng con hoc Toán 
          b.time1 Jun 2021 - Now
          v-spacer
          span Sharing online resources, learning tips, and methods in STEM and Facebook groups of parents of students 6 to 13
          v-spacer
        li
          span
            b Admin group English Book Corner 
          b.time1 Apr 2021 - Now
          v-spacer
          span Sharing online resources, learning tips, and review and recommending books for students 6 to 13
        li
          span
            b Co-founder and leader of Edutech club
            b.time1 Nov 2021 - Now
          v-spacer Organize STEM classes, events, and activities to raise funds to help unfortunate people in less developed provinces
          
      h3.head4 EXTRACURRICULARS AND SOCIAL ACTIVITIES
      hr.sep-bar
      ul
        li
          b Teaching and teaching assistant in STEM subjects for centers and projects
          b.time1 2020 - Now
          ul
            li
              span Teaching online Python courses for secondary school students to raise funds in Project Compyter.
            li
              span Teach Arduino coding for gifted students to make air monitoring devices in Tuyen Quang.
        li
          b Volunteering and charity activities
          b.time1 2021 - Now
          ul
            li
              span Raised and donated 100 million VND, 11 computers, books, bags, and clothes to poor students in Ha Giang.
            li
              span Create supporting devices and donate 20 million VND for blind people at the Blind Center in Nam Dinh.
          v-spacer
          
        li
          b Club: 
          b.time1 2020 - Now
          span
            b GART 6520 - Hanoi Amsterdam Robotic Club
          v-spacer
          span Help organize STEM-related events at the US embassy
        li
          b Publication:
          b.time1 2017 - 2018
          a(href="https://drive.google.com/drive/folders/1MrNQ4lD80jJbxGmMm2NPX8LUxPN93N8M?usp=sharing" target="_blank")
            b Answer key booklet for A Closer Look - Tennessee grade 1-6
          v-spacer
          span Wrote an answer key book to help around 200 students/year who wish to self-study science
        
</template>

<script lang="ts">
import { defineComponent } from "vue";

const Home = defineComponent({});

export default Home;
</script>

<style lang="sass">
.header
  font-size: 30px
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
  font-size: 15px
  margin: 0 auto
  max-width: 95%
  font-family: Georgia, Serif

.paper
  height: 100%
  margin: 0px auto
  max-width: 90%
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
