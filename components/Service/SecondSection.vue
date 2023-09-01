<script setup lang="ts">
// import Scrollbar from 'smooth-scrollbar';

const { $gsap, $ScrollTrigger } = useNuxtApp();
const tooltip = ref(null);
const tooltipImg = ref(null);
const secondsection = ref(null);
const secondsectionbody = ref(null);
const placeImg = ref(null);
const lastImg = ref(null);
const imgUrls = ref([
  "/img/employability.png",
  "/img/service.png",
  "/img/staff-supply.png",
  "/img/dcs-care.png",
]);
const mm = $gsap.matchMedia();
const classNameToAdd = "absolute";
const classNameToRemove = "hidden";
const lastClassNameToRemove = "lg:block";
const ctx = $gsap.context(() => {});
onUnmounted(() => {
  ctx.revert();
});
onMounted(() => {
  setTimeout(() => {
    $ScrollTrigger.refresh();
  }, 600);
  // const imageElements = document.querySelectorAll('.pinned-panel img');
  // $gsap.utils.toArray(".scrollable1").forEach((section, index) => {
  //   const pinnedPanelImg = document.querySelector(".pinned-panel img");
  //   $gsap.fromTo(
  //     pinnedPanelImg,
  //     { opacity: 0 }, // Start with opacity 0
  //     {
  //       scrollTrigger: {
  //         // @ts-ignore
  //         trigger: section,
  //         start: "top center+=200px",
  //         end: "bottom center+=500px",
  //         // markers: true,
  //         onEnter: () => {
  //           imageElements[index].classList.toggle("show");
  //           console.log(index, "check the current section index here");
  //         },
  //         onLeaveBack: () => {
  //           imageElements[index].classList.toggle("show");
  //           console.log(index, "check the current section index here leaving");
  //         },
  //         onEnterBack: () => {
  //           imageElements[index].classList.toggle("show");
  //           console.log(index, "check the current section index here");
  //         },
  //       },
  //       opacity: 1, // Reset opacity for next animation
  //     }
  //   );
  // });

  // Scrollbar.init(document.querySelector('.secondsection'));
  // let bodyScrollBar = Scrollbar.init(document.body, {
  //   damping: 0.1,
  //   delegateTo: document,
  // });
  // $ScrollTrigger.scrollerProxy(secondsection.value, {
  //   scrollTop(value) {
  //     if (arguments.length) {
  //       bodyScrollBar.scrollTop = value;
  //     }
  //     return bodyScrollBar.scrollTop;
  //   },
  // });
  // bodyScrollBar.addListener($ScrollTrigger.update);

  // $gsap.set(".img-wrap-img", {
  //   zIndex: (i, target, targets) => targets.length - i,
  // });

  // let images = $gsap.utils.toArray(".img-wrap-img:not(.img-4)");

  // images.forEach((image, i) => {
  //   let tl = $gsap.timeline({
  //     scrollTrigger: {
  //       trigger: secondsectionbody.value,
  //       scroller: secondsection.value,
  //       start: () => "top -" + window.innerHeight * (i + 0.5),
  //       end: () => "+=" + window.innerHeight,
  //       scrub: true,
  //       toggleActions: "play none reverse none",
  //       invalidateOnRefresh: true,
  //     },
  //   });

  //   tl.to(image, { height: 0 });
  // });

  // $gsap.set(".text-wrap-text", { zIndex: (i, target, targets) => targets.length - i });

  // let texts = $gsap.utils.toArray('.text-wrap-text');

  // texts.forEach((text, i) => {
  //   let tl = $gsap.timeline({
  //     scrollTrigger: {
  //       trigger: secondsectionbody.value,
  //       scroller: secondsection.value,
  //       start: () => 'top -' + (window.innerHeight*i),
  //       end: () => '+=' + window.innerHeight,
  //       scrub: true,
  //       toggleActions: 'play none reverse none',
  //       invalidateOnRefresh: true,
  //     }
  //   })

  //   tl
  //   .to(text, { duration: 0.33, opacity: 1, y: '50%' })
  //   .to(text, { duration: 0.33, opacity: 0, y: '0%' }, 0.66)
  // })
  ctx.add(() => {
    // placeImg.value.src = "/img/service.png";
    mm.add("(min-width: 1024px)", () => {
      $gsap.to(tooltip.value, {
        opacity: 1,
      });
      $ScrollTrigger.create({
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
          $ScrollTrigger.create({
            trigger: section,
            start: "top-=50% center-=250",
            end: "top+=20 center-=200",
            // markers: true,
            onEnter: () => {
              // console.log(index);
              $gsap.set(".tooltip-img", {
                attr: { src: imgUrls.value[index] },
              });
            },
            onLeave: () => {
              // tooltip.value.classList.add(classNameToRemove);
              tooltip.value.classList.remove(lastClassNameToRemove);
              lastImg.value.classList.remove(classNameToRemove);
            },
            onEnterBack: () => {
              lastImg.value.classList.add(classNameToRemove);
              tooltip.value.classList.add(lastClassNameToRemove);
              // tooltip.value.classList.remove(classNameToRemove);
              $gsap.set(".tooltip-img", {
                attr: { src: imgUrls.value[index] },
              });
            },
          });
        } else if (index !== 0) {
          $ScrollTrigger.create({
            trigger: section,
            start: "top-=50% center-=250",
            end: "bottom center-=200",
            // markers: true,
            onEnter: () => {
              // console.log(index);
              tooltip.value.classList.add(classNameToAdd);
              $gsap.set(".tooltip-img", {
                attr: { src: imgUrls.value[index] },
              });
            },
            onEnterBack: () => {
              console.log(index);
              $gsap.set(".tooltip-img", {
                attr: { src: imgUrls.value[index] },
              });
            },
          });
        } else {
          $ScrollTrigger.create({
            trigger: section,
            start: "top center-=250",
            end: "bottom center-=200",
            // markers: true,
            onEnter: () => {
              // console.log(index);
              tooltip.value.classList.add(classNameToAdd);
              $gsap.set(".tooltip-img", {
                attr: { src: imgUrls.value[index] },
              });
            },
            onEnterBack: () => {
              console.log(index);

              $gsap.set(".tooltip-img", {
                attr: { src: imgUrls.value[index] },
              });
            },
          });
        }
      });
    });
  });
});
</script>
<template>
  <div
    ref="secondsection"
    class="px-4 xl:px-0 w-full max-w-[1240px] mx-auto relative"
  >
    <!-- <div ref="tooltip" class=" max-w-[612px] absolute right-0">
      <img class="tooltip-img w-full" src="/img/service.png" />
    </div> -->
    <div class="scroller flex w-full pb-[10rem] lg:gap-10">
      <div class="scrollable h-fit w-full flex flex-col items-start mx-auto">
        <!-- <div
          class="text-wrap relative overflow-hidden w-full max-w-[572px] lg:max-w-[420px] xl:max-w-[572px] h-[80vh]"
        >
          <div
            class="text-wrap-text flex flex-col mb-10 lg:mb-0 absolute left-0 top-0 right-0 bottom-0 z-[1] w-full h-full tranlate-y-full opacity-0"
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
          <div
            class="text-wrap-text flex flex-col mb-10 lg:mb-0 absolute left-0 top-0 right-0 bottom-0 z-[1] w-full h-full tranlate-y-full opacity-0"
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
          <div
            class="text-wrap-text flex flex-col mb-10 lg:mb-0 absolute left-0 top-0 right-0 bottom-0 z-[1] w-full h-full tranlate-y-full opacity-0"
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
          <div
            class="text-wrap-text flex flex-col mb-10 lg:mb-0 absolute left-0 top-0 right-0 bottom-0 z-[1] w-full h-full tranlate-y-full opacity-0"
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
        </div>
        <div
          class="img-wrap relative overflow-hidden h-[80vh] w-full max-w-[612px]"
        >
          <img class="img-wrap-img img-1" src="/img/service.png" />
          <img class="img-wrap-img img-2" src="/img/find.png" />
          <img class="img-wrap-img img-3" src="/img/medicals.png" />
          <img class="img-wrap-img img-4" src="/img/find.png" />
        </div> -->
        <div class="scrollable1 lg:h-[70vh]">
          <div
            class="section flex flex-col justify-between lg:flex-row lg:items-center py-[80px] md:py-[120px] lg:py-0 w-full"
          >
            <div
              class="flex flex-col w-full mb-10 lg:py-20 lg:mb-0 max-w-[572px] lg:max-w-[420px] xl:max-w-[572px]"
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
                Our employability training is designed to help you develop the
                skills and knowledge you need to succeed in the healthcare
                industry. Our employability training is delivered by experienced
                healthcare professionals who are passionate about helping you
                succeed.
              </p>
            </div>
            <div ref="tooltip" class="max-w-[612px] right-0 top-0">
              <img
                class="lg:hidden tooltip-img w-full"
                src="/img/employability.png"
              />
            </div>
          </div>
        </div>
        <div class="scrollable1 lg:h-[70vh]">
          <div
            class="section flex flex-col justify-between lg:flex-row lg:items-center py-[80px] md:py-[120px] lg:py-0 w-full"
          >
            <div
              class="flex flex-col w-full mb-10 lg:py-20 lg:mb-0 max-w-[572px] lg:max-w-[420px] xl:max-w-[572px]"
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
                Healthcare mandatory courses are essential for anyone working in
                the healthcare industry. These courses cover a variety of topics
                that are essential for providing safe and effective care to
                patients. Our courses are delivered by experienced instructors
                who are passionate about helping you learn.
              </p>
            </div>
            <img
              class="w-full lg:hidden max-w-[612px]"
              src="/img/service.png"
            />
          </div>
        </div>
        <div class="scrollable1 lg:h-[70vh]">
          <div
            class="section flex flex-col justify-between lg:flex-row lg:items-center py-[80px] md:py-[120px] lg:py-0 w-full"
          >
            <div
              class="flex flex-col w-full mb-10 lg:py-20 lg:mb-0 max-w-[572px] lg:max-w-[420px] xl:max-w-[572px]"
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
                Wana Health Care Services is a leading provider of staff supply
                to the NHS and private care providers. We have a wide network of
                qualified and experienced healthcare professionals who can be
                deployed quickly and flexibly to meet your staffing needs. We
                are committed to providing our clients with the highest quality
                staffing solutions.
              </p>
            </div>
            <img
              class="w-full lg:hidden max-w-[612px]"
              src="/img/staff-supply.png"
            />
          </div>
        </div>
        <div class="scrollable1 w-full lg:h-[70vh]">
          <div
            class="section flex flex-col justify-between lg:flex-row lg:items-center py-[80px] md:py-[120px] lg:py-0 w-full"
          >
            <div
              class="flex flex-col w-full mb-10 lg:py-20 lg:mb-0 max-w-[572px] lg:max-w-[420px] xl:max-w-[572px]"
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
                DCS CARE is a healthcare recruitment agency that specializes in
                sourcing local jobs for local people. We are a team of highly
                motivated and passionate healthcare professionals who have
                worked in the industry for over 10 years. We value our
                candidates as real partners and assets, and we offer fair charge
                rates.
              </p>
            </div>
            <img
              ref="lastImg"
              class="hidden w-full max-w-[612px] h-fit"
              src="/img/dcs-care.png"
            />
            <!-- <img
              class="lg:hidden w-full max-w-[612px]"
              src="/img/dcs-care.png"
            /> -->
          </div>
        </div>
      </div>
      <!-- <div ref="tooltip" class=""> -->
      <img
        ref="tooltip"
        class="tooltip-img hidden lg:block w-full max-w-[612px] h-fit right-0 top-0"
        src="/img/employability.png"
      />
      <!-- </div> -->
      <!-- <div class="pinned-panel hidden lg:block sticky self-start w-full top-[20rem] h-[35rem]">
        <img class="w-full h-full object-cover" src="/img/employability.png" />
        <img class="w-full h-full object-cover" src="/img/service.png" />
        <img class="w-full h-full object-cover" src="/img/staff-supply.png" />
        <img class="w-full h-full object-cover" src="/img/dcs-care.png" />
      </div> -->
    </div>
  </div>
</template>

<style lang="scss" scoped>
// .img-wrap-img {
//   left: 0%;
//   top: 0%;
//   right: 0%;
//   bottom: 0%;
//   z-index: 1;
//   width: 100%;
//   height: 100%;

//   &.img-1 {
//     z-index: auto;
//   }
//   &.img-2 {
//     z-index: auto;
//   }
//   &.img-3 {
//     z-index: auto;
//   }
//   &.img-4 {
//     z-index: auto;
//   }
// }

.pinned-panel img {
  opacity: 0;
  z-index: 0;
  position: absolute;
  transition: opacity 0.3s ease-in-out, z-index 0.3s ease-in-out;
}

.pinned-panel img.show {
  opacity: 1;
  z-index: 1;
}
</style>
