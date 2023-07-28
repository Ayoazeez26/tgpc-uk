<script setup lang="ts">
const active = ref("all");
const roles = ref([
  {
    title: "Product Designer",
    category: "Design",
    type: "Remote",
    to: "/job",
    duration: "Contract",
  },
  {
    title: "Engineering Manager",
    category: "Software Development",
    type: "Semi-Remote",
    to: "/job",
    duration: "Part-time",
  },
  {
    title: "Customer Success Manager",
    category: "Customer Success",
    type: "On-site",
    to: "/job",
    duration: "Full-time",
  },
  {
    title: "Account Executive",
    category: "Sales",
    type: "Remote",
    to: "/job",
    duration: "Part-time",
  },
  {
    title: "SEO Marketing Manager",
    category: "Marketing",
    type: "Semi-Remote",
    to: "/job",
    duration: "Full-time",
  },
]);

const displayRoles = computed(() => {
  if (active.value === "all") {
    return roles.value;
  } else {
    return roles.value.filter((val) => active.value === val.category);
  }
});
</script>
<template>
  <div
    class="w-full max-w-[1240px] mx-auto py-[60px] md:py-[180px] text-grey-2 overflow-x-hidden relative"
  >
    <div class="w-full flex flex-col md:flex-row justify-between lg:gap-[120px]">
      <div class="flex flex-col mx-4 xl:mx-0 gap-x-2 max-w-[717px] w-full">
        <h1 class="text-grey font-medium text-[40px]">
          Mental Health Home Care Registered Manager
        </h1>
        <div class="flex gap-4 mt-5">
          <div
            class="border border-primary rounded-full gap-2 flex items-center px-3 py-2"
          >
            <img src="/svg/pin.svg" alt="pin" />
            <p class="text-primary font-medium pt-1 tracking-wide">
              Location: Rainham, Essex
            </p>
          </div>
          <div
            class="border border-primary rounded-full gap-2 flex items-center px-3 py-2"
          >
            <img src="/svg/currency.svg" alt="pin" />
            <p class="text-primary font-medium pt-1 tracking-wide">
              Salary: £35k
            </p>
          </div>
        </div>
        <div
          class="border border-primary rounded-full gap-2 flex items-center px-3 py-2 mt-4 max-w-max"
        >
          <img src="/svg/time.svg" alt="pin" />
          <p class="text-primary font-medium pt-1 tracking-wide">
            Full time, 40 hours per week, flexible with some weekend and on-call
            duties
          </p>
        </div>
        <p class="mt-5 text-lg tracking-wide">
          Crystalize Care Services is a leading provider of high quality home
          care services for people with mental health needs in Essex. We are
          looking for a passionate, dedicated and experienced registered manager
          to join our team and lead the delivery of our services.
        </p>
        <div class="mt-10 w-full">
          <h2 class="text-3xl font-medium">Responsibilities</h2>
          <p class="mt-5 mb-8 text-lg tracking-wide">
            As a registered manager, you will be responsible for:
          </p>
          <ul class="text-lg tracking-wide list-outside image">
            <li class="mb-3">
              Ensuring the delivery of safe, effective and person-centered care
              in accordance with the Care Quality Commission standards,
              legislation and best practice guidelines.
            </li>
            <li class="mb-3">
              Managing the day-to-day operations of the service, including
              budgeting, staffing, quality assurance, risk management and
              compliance.
            </li>
            <li class="mb-3">
              Developing and .maintaining positive relationships with service
              users, their families, carers and other professionals involved in
              their care.
            </li>
            <li class="mb-3">
              Recruiting, training, supervising and appraising staff and
              ensuring they have the skills, knowledge and support they need to
              perform their roles.
            </li>
            <li class="mb-3">
              Promoting a culture of continuous improvement, innovation and
              learning within the service and the organisation.
            </li>
            <li class="mb-3">
              Representing Crystalize Care Services in the local community and
              building partnerships with other agencies and stakeholders.
            </li>
          </ul>
        </div>
        <div class="mt-10 w-full">
          <h2 class="text-3xl font-medium">Qualifications</h2>
          <p class="mt-5 mb-8 text-lg tracking-wide">
            To be successful in this role, you will need:
          </p>
          <ul class="text-lg tracking-wide list-outside image">
            <li class="mb-3">
              A QCF Level 5 in Leadership for Health and Social Care Services or
              equivalent qualification recognised by the Care Quality
              Commission, or be willing to attain one.
            </li>
            <li class="mb-3">
              Previous experience of managing a home care service for people
              with mental health needs.
            </li>
            <li class="mb-3">
              Excellent communication, leadership and organisational skills.
            </li>
            <li class="mb-3">
              A strong commitment to person-centred care and recovery-oriented
              practice.
            </li>
            <li class="mb-3">
              A good understanding of the mental health legislation,
              safeguarding procedures and regulatory frameworks.
            </li>
            <li class="mb-3">
              A full UK driving licence and access to your own vehicle.
            </li>
          </ul>
          <p class="mt-5 mb-8 text-lg tracking-wide">
            If you are interested in this exciting opportunity, please apply by
            sending your CV and a covering letter to
            <a
              class="text-primary font-semibold"
              href="mailto:crystalizecaretraining@gmail.com"
              >crystalizecaretraining@gmail.com</a
            >
            by 31st August 2023.
          </p>
          <p class="mt-5 mb-8 text-lg tracking-wide">
            Crystalize Care Services is an equal opportunities employer and
            welcomes applications from all sections of the community.
          </p>
        </div>
      </div>
      <div
        class="flex flex-col items-center gap-y-10 px-4 md:px-0 w-full md:max-w-[403px]"
      >
        <div
          class="px-8 py-10 rounded-2xl border border-primary bg-blue-2 w-full"
        >
          <div class="flex flex-col items-center justify-between mb-2">
            <h5 class="text-grey text-xl font-semibold mb-6">
              Sounds like a match?
            </h5>
            <nuxt-link
              to="/"
              class="text-grey-4 bg-primary p-6 w-full text-center font-semibold"
              >Apply Now</nuxt-link
            >
          </div>
        </div>
        <div
          class="px-8 py-10 rounded-2xl border border-primary bg-blue-2 w-full"
        >
          <div class="flex flex-col items-center justify-between mb-2">
            <h5 class="text-grey text-xl font-semibold mb-6">Share this job</h5>
            <div class="flex justify-center md:justify-start gap-3">
              <a href="#" target="_blank"
                ><Icon name="ic:round-facebook" size="24px" color="#800020"
              /></a>
              <a href="#" target="_blank"
                ><Icon name="mdi:linkedin" size="24px" color="#800020"
              /></a>
              <a href="#" target="_blank"
                ><Icon name="mdi:twitter-box" size="24px" color="#800020"
              /></a>
              <a href="#" target="_blank"
                ><Icon name="ri:instagram-fill" size="24px" color="#800020"
              /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
li {
  background: url("/svg/list.svg") no-repeat left top+5px;
  padding: 3px 0 3px 40px;
  list-style: none;
  margin: 0;
  line-height: 28px;
}
</style>
