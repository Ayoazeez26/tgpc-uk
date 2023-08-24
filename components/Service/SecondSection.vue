<script setup lang="ts">
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const tooltip = ref(null);
const secondsection = ref(null);
const lastImg = ref(null);
const imgUrls = ref([
  "/img/service.png",
  "/img/find.png",
  "/img/medicals.png",
  "/img/find.png",
]);
const mm = gsap.matchMedia();
const classNameToAdd = "absolute";
const classNameToRemove = "hidden";

onMounted(() => {
  mm.add("(min-width: 1024px)", () => {
    ScrollTrigger.create({
      trigger: secondsection.value,
      pin: tooltip.value,
      // Trigger Scroller
      start: "top center-=250",
      end: "bottom center-=200",
      // markers: true,
    });

    const sections = document.querySelectorAll(".section");

    sections.forEach((section, index) => {
      if (index === 3) {
        ScrollTrigger.create({
          trigger: section,
          start: "top-=50% center-=250",
          end: "top+=20 center-=200",
          // markers: true,
          onEnter: () => {
            console.log(index);
            gsap.set(".tooltip-img", {
              attr: { src: imgUrls.value[index] },
            });
          },
          onLeave: () => {
            tooltip.value.classList.add(classNameToRemove);
            lastImg.value.classList.remove(classNameToRemove);
          },
          onEnterBack: () => {
            tooltip.value.classList.remove(classNameToRemove);
            lastImg.value.classList.add(classNameToRemove);
            gsap.set(".tooltip-img", {
              attr: { src: imgUrls.value[index] },
            });
          },
        });
      } else if (index !== 0) {
        ScrollTrigger.create({
          trigger: section,
          start: "top-=50% center-=250",
          end: "bottom center-=200",
          // markers: true,
          onEnter: () => {
            console.log(index);
            tooltip.value.classList.add(classNameToAdd);
            gsap.set(".tooltip-img", {
              attr: { src: imgUrls.value[index] },
            });
          },
          onEnterBack: () => {
            gsap.set(".tooltip-img", {
              attr: { src: imgUrls.value[index] },
            });
          },
        });
      } else {
        ScrollTrigger.create({
          trigger: section,
          start: "top center-=250",
          end: "bottom center-=200",
          // markers: true,
          onEnter: () => {
            console.log(index);
            tooltip.value.classList.add(classNameToAdd);
            gsap.set(".tooltip-img", {
              attr: { src: imgUrls.value[index] },
            });
          },
          onEnterBack: () => {
            gsap.set(".tooltip-img", {
              attr: { src: imgUrls.value[index] },
            });
          },
        });
      }
    });
  });
});
</script>
<template>
  <div class="px-4 xl:px-0 w-full max-w-[1240px] mx-auto relative">
    <!-- <div ref="tooltip" class=" max-w-[612px] absolute right-0">
      <img class="tooltip-img w-full" src="/img/service.png" />
    </div> -->
    <div ref="secondsection" class="w-full flex flex-col mx-auto">
      <div class="lg:h-[70vh]">
        <div
          class="section flex flex-col justify-between lg:flex-row lg:items-center py-[80px] md:py-[120px] lg:py-0 w-full"
        >
          <div
            class="flex flex-col w-full mb-10 md:mb-0 max-w-[572px] lg:max-w-[420px] xl:max-w-[572px] py-[80px]"
          >
            <p
              class="text-brown font-semibold text-[56px] leading-[72px] md:leading-[80px] md:text-[64px]"
            >
              01
            </p>
            <h2
              class="font-semibold mt-3 text-[24px] md:text-[32px] leading-[42px] md:leading-[48px]"
            >
              Employability Training
            </h2>
            <p class="mt-2 md:mt-6 leading-[28px]">
              We recruit Healthcare professionals. We recruit general staff
              nurses, Speciality nurses, Healthcare Assistants, Support workers,
              Cleaners, Porters, Domestic nurses, Healthcare Assistants, Support
              workers, Cleaners, Porters, Domestic staff.
            </p>
          </div>
          <div ref="tooltip" class="max-w-[612px] right-4 top-0">
            <img class="tooltip-img w-full" src="/img/service.png" />
          </div>
        </div>
      </div>
      <div class="lg:h-[70vh]">
        <div
          class="section flex flex-col justify-between lg:flex-row lg:items-center py-[80px] md:py-[120px] lg:py-0 w-full"
        >
          <div
            class="flex flex-col w-full mb-10 md:mb-0 max-w-[572px] lg:max-w-[420px] xl:max-w-[572px] py-[80px]"
          >
            <p
              class="text-brown font-semibold text-[56px] leading-[72px] md:leading-[80px] md:text-[64px]"
            >
              02
            </p>
            <h2
              class="font-semibold text-[24px] mt-3 md:text-[32px] leading-[42px] md:leading-[48px]"
            >
              Health Care Mandatory Courses
            </h2>
            <p class="mt-2 md:mt-6 leading-[28px]">
              We recruit Healthcare professionals. We recruit general staff
              nurses, Speciality nurses, Healthcare Assistants, Support workers,
              Cleaners, Porters, Domestic nurses, Healthcare Assistants, Support
              workers, Cleaners, Porters, Domestic staff.
            </p>
          </div>
          <img class="w-full lg:hidden max-w-[612px]" src="/img/service.png" />
        </div>
      </div>
      <div class="lg:h-[70vh]">
        <div
          class="section flex flex-col justify-between lg:flex-row lg:items-center py-[80px] md:py-[120px] lg:py-0 w-full"
        >
          <div
            class="flex flex-col w-full mb-10 md:mb-0 max-w-[572px] lg:max-w-[420px] xl:max-w-[572px] py-[80px]"
          >
            <p
              class="text-brown font-semibold text-[56px] leading-[72px] md:leading-[80px] md:text-[64px]"
            >
              03
            </p>
            <h2
              class="font-semibold text-[24px] mt-3 md:text-[32px] leading-[42px] md:leading-[48px]"
            >
              Staff Supply to NHS and Private Care Providers
            </h2>
            <p class="mt-2 md:mt-6 leading-[28px]">
              We recruit Healthcare professionals. We recruit general staff
              nurses, Speciality nurses, Healthcare Assistants, Support workers,
              Cleaners, Porters, Domestic nurses, Healthcare Assistants, Support
              workers, Cleaners, Porters, Domestic staff.
            </p>
          </div>
          <img class="w-full lg:hidden max-w-[612px]" src="/img/service.png" />
        </div>
      </div>
      <div class="lg:h-[70vh]">
        <div
          class="section flex flex-col justify-between lg:flex-row lg:items-center py-[80px] md:py-[120px] lg:py-0 w-full"
        >
          <div
            class="flex flex-col w-full mb-10 md:mb-0 max-w-[572px] lg:max-w-[420px] xl:max-w-[572px] py-[80px]"
          >
            <p
              class="text-brown font-semibold text-[56px] leading-[72px] md:leading-[80px] md:text-[64px]"
            >
              04
            </p>
            <h2
              class="font-semibold text-[24px] mt-3 md:text-[32px] leading-[42px] md:leading-[48px]"
            >
              DCS Care
            </h2>
            <p class="mt-2 md:mt-6 leading-[28px]">
              We recruit Healthcare professionals. We recruit general staff
              nurses, Speciality nurses, Healthcare Assistants, Support workers,
              Cleaners, Porters, Domestic nurses, Healthcare Assistants, Support
              workers, Cleaners, Porters, Domestic staff.
            </p>
          </div>
          <img
            ref="lastImg"
            class="hidden w-full max-w-[612px]"
            src="/img/find.png"
          />
          <img
            class="lg:hidden w-full max-w-[612px]"
            src="/img/find.png"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.slide-child {
  border-left: 4px solid #cb9821;
}
</style>
