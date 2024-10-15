<script>
    import { FileCode2, Database, FolderKanban, Timer, FileClock, GraduationCap } from 'lucide-svelte';
    import WaitlistForm from '../lib/components/WaitlistForm.svelte';
    import prompt from "../lib/assets/interviewPrompt.webp";
    import timedQuestion from "../lib/assets/InterviewifyQuestion.webp";
    import trackProgress from "../lib/assets/InterviewTrackProgress.webp";
    const occupations = [
        {
            name: "Software Engineering",
            icon: FileCode2
        },
        {
            name: "Data Science",
            icon: Database
        },
        {
            name: "Product Management",
            icon: FolderKanban
        }
    ];
    let featureIndex = 0;
    const features = [
        {
            key: 0,
            name: "Timed Interview Practice",
            icon: Timer,
            src: timedQuestion,
            description: "Engage in timed practice sessions using real, relevant interview questions to simulate the actual interview experience.",
        },
        {
            key: 1,
            name: "Track Progress",
            icon: FileClock,
            src: trackProgress,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
    ]
</script>

<div class="p-4 flex flex-col lg:grid lg:grid-cols-2 mt-4 gap-10 w-[calc(100vw-1rem)] lg:w-full max-w-screen-2xl mx-auto">
    <div class="col-span-1 flex flex-col gap-8">
        <p class="text-5xl xl:text-6xl font-semibold font-inter"><span class="text-primary">Master</span> the Behavorial <span class="text-primary">Interview</span></p>
        <p class="text-lg text-black/60 w-full xl:w-9/12 text-justify">Enhance your interview skills with our AI app, delivering customized feedback and allowing you to practice whenever you want.</p>
        <WaitlistForm inverse={false} />
    </div>
    <div class="col-span-1 flex justify-center max-w-screen-md mx-auto lg:w-full lg:max-w-full">
        <img src={prompt} class="rounded-lg border-2 border-secondary object-cover" alt="Prompt for interview" />
    </div>
</div>
<div class="w-full bg-secondary">
    <div class="p-4 my-6 flex flex-col gap-12 max-w-screen-2xl mx-auto">
        <div class="flex flex-col gap-5">
            <div class="flex items-center h-3 gap-2">
                <div class="h-full w-0.5 rounded-full bg-[#1FC198]"></div>
                <p class="text-sm font-inter text-[#1FC198]">Field Focused Preparation</p>
            </div>
            <p class="text-3xl font-medium font-inter">Practice interviewing for top tech fields</p>
        </div>
        <div class="flex flex-wrap gap-4 justify-between items-center">
            {#each occupations as occupation}
                <div class="flex items-center gap-4 bg-white px-6 py-3 rounded-lg w-full md:w-fit">
                    <div class="w-14 h-14 rounded-full flex items-center justify-center bg-[#F8F8FF]">
                        <svelte:component this={occupation.icon} class="w-8 h-8 text-primary" />
                    </div>
                    <p class="text-lg font-medium">{occupation.name}</p>
                </div>
            {/each}
        </div>
    </div>
</div>
<div class="w-full bg-primary" id="featureSection">
    <div class="p-4 my-6 flex flex-col items-center gap-20 max-screen-2xl mx-auto">
        <div class="flex flex-col gap-4 justify-center items-center text-center">
            <div class="flex items-center h-3 gap-2">
                <div class="h-full w-0.5 rounded-full bg-[#1FC198]"></div>
                <p class="text-sm font-inter text-[#1FC198]">Interview Platform</p>
            </div>
            <p class="text-3xl font-medium font-inter text-white">Explore Our AI Behavorial Interview Platform</p>
            <p class="text-base font-inter text-white/70">We offer a set of features to help you achieve the best interview performances</p>
        </div>
        <div class="flex flex-col items-center lg:items-start lg:flex-row gap-5 bg-primary rounded-lg">
            <div class="flex flex-col gap-4 w-80 p-4 bg-[#0059E1] rounded-lg">
                {#each features as feature}
                    <button tabindex="0" class={`w-full h-20 px-6 rounded-lg flex gap-2 items-center justify-start ${featureIndex === feature.key ? "bg-white/20" : "bg-transparent"}`} on:click={() => featureIndex = feature.key}>
                        <svelte:component this={feature.icon} class={`w-8 h-8 ${featureIndex === feature.key ? "text-[#1FC198]" : "text-white/60"}`} />
                        <p class={`text-base ${featureIndex === feature.key ? "text-white" : "text-white/60"}`}>{feature.name}</p>
                    </button>
                {/each}
            </div>
            <div class="flex flex-col w-full rounded-lg p-6 max-w-[800px] bg-[#0059E1] lg:grid lg:grid-cols-8 gap-4">
                <div class="col-span-5 w-full">
                    <img src={features[featureIndex].src} class="rounded-sm object-cover" alt={`Image for ${features[featureIndex].name}`} />
                </div>
                <div class="col-span-3 w-full flex flex-col gap-5">
                    <p class="text-xl text-white font-medium">{features[featureIndex].name}</p>
                    <p class="text-base text-white/70">{features[featureIndex].description}</p>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="w-full bg-primary">
    <div class="my-6 p-4 bg-primary flex flex-col gap-6 w-[calc(100vw-1rem)] lg:w-full max-w-screen-2xl mx-auto">
        <div class="flex flex-col gap-3">
            <p class="font-semibold text-3xl font-urbanist text-secondary">interviewify</p>
            <p class="text-sm text-secondary/80">Master the behavioral interview</p>
        </div>
        <WaitlistForm inverse={true} />
        <hr class="w-full h-px rounded-full bg-[#F1F5F9]">
        <p class="text-sm text-secondary">@ 2024 - interviewify. Made with &lt;3 by <a class="underline-none" href="https://www.linkedin.com/in/abdul-andha/">Abdul Andha</a> and <a class="underline-none" href="https://www.linkedin.com/in/johandelao/">Johan Delao.</a></p>
    </div>
</div>
