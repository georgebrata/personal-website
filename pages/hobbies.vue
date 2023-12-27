<template>
    <div class="body max-w-3xl px-4 mx-auto sm:px-6 xl:max-w-5xl xl:px-0">
        <div class="pt-6 pb-8 space-y-2 md:space-y-5">
            <h1 class="mt-6 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
                Hobbies
            </h1>
        </div>
        <main>
            <div class="options mt-2 mb-20">
                <div class="option" @mousedown="activeIndex = 0" :class="{'active':activeIndex === 0}" style="--optionBackground:url(https://66.media.tumblr.com/6fb397d822f4f9f4596dff2085b18f2e/tumblr_nzsvb4p6xS1qho82wo1_1280.jpg);">
                    <div class="shadow"></div>
                    <div class="label">
                        <div class="icon">
                            <img class="w-4 h-4 my-1" src="~assets/hobbies/jogging.png" title="Docker logo" alt="Docker logo"/>
                        </div>
                        <div class="info">
                            <div class="main">Jogging</div>
                            <div class="sub">I love jogging while listening to a good podcast</div>
                        </div>
                    </div>
                </div>
                <div class="option" @mousedown="activeIndex = 1" :class="{'active':activeIndex === 1}" style="--optionBackground:url(https://66.media.tumblr.com/8b69cdde47aa952e4176b4200052abf4/tumblr_o51p7mFFF21qho82wo1_1280.jpg);">
                    <div class="shadow"></div>
                    <div class="label">
                        <div class="icon">
                            <img class="w-4 h-4 my-1" src="~assets/hobbies/cycling.png" title="Docker logo" alt="Docker logo"/>
                        </div>
                        <div class="info">
                            <div class="main">Cycling</div>
                            <div class="sub">Great for the body, amazing for the mind</div>
                        </div>
                    </div>
                </div>
                <div class="option" @mousedown="activeIndex = 2" :class="{'active':activeIndex === 2}" style="--optionBackground:url(https://66.media.tumblr.com/5af3f8303456e376ceda1517553ba786/tumblr_o4986gakjh1qho82wo1_1280.jpg);">
                    <div class="shadow"></div>
                    <div class="label">
                        <div class="icon">
                            <img class="w-4 h-4 my-1" src="~assets/hobbies/archery.png" title="Docker logo" alt="Docker logo"/>
                        </div>
                        <div class="info">
                            <div class="main">Archery</div>
                            <div class="sub">I'm proffesional at hitting targets, no matter the enviroment</div>
                        </div>
                    </div>
                </div>
                <div class="option" @mousedown="activeIndex = 3" :class="{'active':activeIndex === 3}" style="--optionBackground:url(https://66.media.tumblr.com/5516a22e0cdacaa85311ec3f8fd1e9ef/tumblr_o45jwvdsL11qho82wo1_1280.jpg);">
                    <div class="shadow"></div>
                    <div class="label">
                        <div class="icon">
                            <img class="w-4 h-4 my-1" src="~assets/hobbies/karate.png" title="Docker logo" alt="Docker logo"/>
                        </div>
                        <div class="info">
                            <div class="main">Kyokushin</div>
                            <div class="sub">This japanese martial art is rooted in a philosophy of self-improvement, discipline and hard training</div>
                        </div>
                    </div>
                </div>
                <div class="option" @mousedown="activeIndex = 4" :class="{'active':activeIndex === 4}" style="--optionBackground:url(https://66.media.tumblr.com/f19901f50b79604839ca761cd6d74748/tumblr_o65rohhkQL1qho82wo1_1280.jpg);">
                    <div class="shadow"></div>
                    <div class="label">
                        <div class="icon">
                            <img class="w-4 h-4 my-1" src="~assets/hobbies/drone.png" title="Docker logo" alt="Docker logo"/>
                        </div>
                        <div class="info">
                            <div class="main">Drones</div>
                            <div class="sub">Who doesn't love drones?</div>
                        </div>
                    </div>
                </div>
                <!-- <div class="option" @click="activeIndex = 5" :class="{'active':activeIndex === 5}" style="--optionBackground:url(https://66.media.tumblr.com/f19901f50b79604839ca761cd6d74748/tumblr_o65rohhkQL1qho82wo1_1280.jpg);">
                    <div class="shadow"></div>
                    <div class="label">
                        <div class="icon">
                            <i class="fas fa-sun"></i>
                        </div>
                        <div class="info">
                            <div class="main">Drones</div>
                            <div class="sub">Who doesn't love drones?</div>
                        </div>
                    </div>
                </div> -->
            </div>
        </main>
    </div>
</template>

<script>
    // import projectsData from "../data/projects";
    export default {
        data() {
            return {
                items: [],
                activeIndex: Math.floor(Math.random() * 10) % 5,
                API_URL: process.env.apiUrl.concat('?path=hobbies')
            };
        },
        head: {
            title: "George Brata | Hobbies",
            meta: [{
                    charset: "utf-8"
                },
                {
                    name: "viewport",
                    content: "width=device-width, initial-scale=1"
                },
                {
                    hid: "description",
                    name: "description",
                    content: "What keeps me busy in my spare time?",
                },
            ],
            link: [{
                rel: "icon",
                type: "image/x-icon",
                href: "/favicon.ico"
            }],
        },
        async fetch() {
            this.items = await fetch(this.API_URL).then(res => res.json());
        },
    };
</script>

<style>
    .typing {
        width: 48ch;
        animation: typing 2s steps(48), blink .5s step-end infinite alternate;
        white-space: nowrap;
        overflow: hidden;
        border-right: 3px solid;
        font-family: monospace;
    }
    @keyframes typing {
        from {
            width: 0
        }
    }
    @keyframes blink {
        50% {
            border-color: transparent
        }
    }
     :root {
        --user-button-circle: rgba(0, 0, 0, 0.025);
        --user-button-cardborder: rgba(255, 255, 255, 0.25);
        --user-button-text: #323133;
        --user-button-shadow: rgba(0, 0, 0, 0.1);
    }
    @-webkit-keyframes slide {
        0%,
        50% {
            opacity: 0;
            display: block !important;
        }
        100% {
            opacity: 1;
            display: block !important;
        }
    }
    @keyframes slide {
        0%,
        50% {
            opacity: 0;
            display: block !important;
        }
        100% {
            opacity: 1;
            display: block !important;
        }
    }
    body .credit {
        position: absolute;
        bottom: 20px;
        left: 20px;
        color: inherit;
    }
    body .options {
        display: flex;
        flex-direction: row;
        align-items: stretch;
        overflow: hidden;
        max-width: 900px;
        width: 100%;
        height: 400px;
    }
    body .options .option {
        position: relative;
        overflow: hidden;
        min-width: 60px;
        margin: 10px;
        background: var(--optionBackground, var(--defaultBackground, #E6E9ED));
        background-size: auto 120%;
        background-position: center;
        cursor: pointer;
        transition: 0.5s cubic-bezier(0.05, 0.61, 0.41, 0.95);
    }
    body .options .option:nth-child(1) {
        --defaultBackground: #ED5565;
    }
    body .options .option:nth-child(2) {
        --defaultBackground: #FC6E51;
    }
    body .options .option:nth-child(3) {
        --defaultBackground: #FFCE54;
    }
    body .options .option:nth-child(4) {
        --defaultBackground: #2ECC71;
    }
    body .options .option:nth-child(5) {
        --defaultBackground: #5D9CEC;
    }
    body .options .option:nth-child(6) {
        --defaultBackground: #AC92EC;
    }
    @screen md {
        body .options .option.active {
            flex-grow: 10000;
            transform: scale(1);
            max-width: 600px;
            margin: 0px;
            border-radius: 40px;
            background-size: auto 100%;
            /*&:active {
                transform:scale(0.9);
            }*/
        }
    }
        body .options .option.active .shadow {
            box-shadow: inset 0 -120px 120px -120px black, inset 0 -120px 120px -100px black;
        }
        body .options .option.active .label {
            bottom: 20px;
            left: 20px;
        }
        body .options .option.active .label .info>div {
            left: 0px;
            opacity: 1;
        }
        body .options .option:not(.active) {
            flex-grow: 1;
            border-radius: 30px;
        }
        body .options .option:not(.active) .shadow {
            bottom: -40px;
            box-shadow: inset 0 -120px 0px -120px black, inset 0 -120px 0px -100px black;
        }
        body .options .option:not(.active) .label {
            bottom: 10px;
            left: 10px;
        }
        body .options .option:not(.active) .label .info>div {
            left: 20px;
            opacity: 0;
        }
    body .options .option .shadow {
        position: absolute;
        bottom: 0px;
        left: 0px;
        right: 0px;
        height: 120px;
        transition: 0.5s cubic-bezier(0.05, 0.61, 0.41, 0.95);
    }
    body .options .option .label {
        display: flex;
        position: absolute;
        right: 0px;
        height: 40px;
        transition: 0.5s cubic-bezier(0.05, 0.61, 0.41, 0.95);
    }
    body .options .option .label .icon {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        min-width: 40px;
        max-width: 40px;
        height: 40px;
        border-radius: 100%;
        background-color: white;
        color: var(--defaultBackground);
    }
    body .options .option .label .info {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-left: 10px;
        color: white;
        max-width: 90%;
        margin-bottom: 10px;
    }
    body .options .option .label .info>div {
        position: relative;
        transition: 0.5s cubic-bezier(0.05, 0.61, 0.41, 0.95), opacity 0.5s ease-out;
    }
    body .options .option .label .info .main {
        font-weight: bold;
        font-size: 1.2rem;
    }
    body .options .option .label .info .sub {
        transition-delay: 0.1s;
    }
</style>
