<template lang="pug">
.root
  .paper
    .title
      v-spacer
      h1.header VINH DO
      v-spacer
    .content
      h3 EDUCATION
      hr.sep-bar
      span Hanoi Amsterdam Highschool for the gifted - Specialization in Mathematics
      span.duration 2020-2023
      v-spacer
      span
        b GPA:
      .GPA
        span Grade 9:
        span Grade 10: 8.9
        span Grade 11: 9.4
      v-spacer
      span 
        b Standardized test scores:
      .standardized
        span IELTS: 8.0
        span SAT: 1520 (Mathematics: 800 | Critical Reading & Writing: 720)
      v-spacer
      span
        b Advanced placement:
      .ap
        span AP Calculus BC: 4 (Subscore Calculus AB: 5)
        span AP Computer Science A: 4
        span AP Statistics: 4

      h3.head2 HONOURS AND MERITS
      hr.sep-bar
      span
        b Domestic & Regional:
      ul
        li
          span Mathematical Young Talent Search 2017 - Gold Medal
        li
          span Mathematical Young Talent Search 2018 - Silver Medal
        li
          span Hanoi Mathematics Olympiad 2019 - 2nd Prize
        li
          span Hanoi Informatics Olympiad 2020 - 3rd Prize
        li
          span Hanoi Informatics Olympiad 2021 - 3rd Prize

      .international
        span
          b International:
        ul
          li
            span 14th International Mathematics and Science Olympiad 2017 (IMSO) - Silver Medal
          li
            span Asian - Pacific Mathematical Olympiad for Primary Schools 2017 (APMOPS) - Silver Medal
          li
            span 7th International Mathematical Modelling Challenge 2021 (IMMC)

      h3.head3 RESEARCH PROJECTS
      hr.sep-bar
      ul
        li 
          span 
            b E-NNOVATE International Innovation Show, Poland - Gold Medal
            b.time1 June 2022
          v-spacer
          span Project: "Design of Distributed Academic-record System based on Blockchain"
        li 
          span 
            b INNOVERSE Innovation & Invention Expo, USA - Gold Medal
            b.time1 July 2022
          v-spacer
          span Project: "Fabrication of Vanadium-doped TiO2 for Polluted Wastewater Treatment"

      h3.head4 EXTRACURRICULARS AND SOCIAL ACTIVITIES
      hr.sep-bar
      ul
        li
          span 
            b Project Compyter
            b.time1 June 2021
          v-spacer
          span Teaching online Python course for 45 secondary school students and raise $800 for charity
        li
          span 
            b Charity for Children's Education
            b.time1 July 2021
          v-spacer
          span Raised $3100, 10 computers, books, bags and clothes from companies and benefactors to donate to poor students in Ha Giang
        li
          span 
            b Helping the blinds
            b.time1 August 2021
          v-spacer
          span Create supporting devices by 3D printing and Arduino coding for blind people at Hanoi Center for the Blind
        li
          span 
            b Raising technology awareness for gifted students in Tuyen Quang
            b.time1 May 2021
          v-spacer
          span Teaching coding basis in C++, Arduino coding for gift students in Tuyen Quang to create air filtering and monitoring devices
        li
          span 
            b Teaching assistant in Math classes for a center
            b.time1 March 2021 - February 2022
          v-spacer
          span Assist in teaching, marking homework and communicating with parents of children in online Math classes of an IMO Silver Medalist
        li
          span
            b Content editor for Facebook group Tran Le English
            b.time1 October 2019 - July 2021
          v-spacer
          span Content editor for Facebook group about English books
        li
          span
            b Making e-commerce website for Tran Le Bookstore
            b.time1 June 2022 - July 2022
          v-spacer
          span Develop frontend and backend for a English books shopping website

      h3.head2 LEADERSHIP
      hr.sep-bar

      h3.head2 INTERNSHIP AND WORKING EXPERIENCE
      hr.sep-bar
      ul
        li
          span
            b Hanoi University of Science and Technology Lab
            b.time1 June 2021 - July 2021
          v-spacer
          span Making call bots by creating workflow and connecting to AI call center for companies and industries
        li
          span
            b International MedTech software company - ISOFH
            b.time1 July 2021 - September 2021
          v-spacer
          span Fixing bugs and developing the web hosting the company's Blockchain project IVIRSE
</template>

<script lang="ts">
import { defineComponent } from "vue";

const Home = defineComponent({});

export default Home;
</script>

<style lang="sass">
.header
  font-family: Georgia, Serif
  margin: 20px

.time1
  float: right

.title
  margin: 5px auto
  display: flex
  justify-content: center

.content
  margin: 15px 70px 5px 70px
  font-family: Georgia, Serif

.paper
  height: 100%
  margin: 0 auto
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