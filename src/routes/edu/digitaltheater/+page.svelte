<svelte:head>
    <title>Digital Theater Workshop | Denis Protopopov</title> 
	<meta property="og:title" content="Denis Protopopov"/>
	<meta property="og:description" content="Artist and researcher that works at the intersection of technologies, media, visual and performative arts."/>

	<meta name="twitter:title" content="Denis Protopopov"/>
	<meta name="twitter:description" content="Artist and researcher that works at the intersection of technologies, media, visual and performative arts."/>

</svelte:head>

<main>
    <div class="container">
    <div class="content">
        <div class="row">
            <div class="cell">
                <div class="title-logo">
                    <div>
                        <h1>Digital Theater Workshop</h1>
                        <h2>Archived Project (2020-2021)</h2>
                        
                    </div>
                </div>
            </div>
        </div>
        
        <div class="row">
            <div class="cell">
                
                <p>This is an asynchronous online course for those who are interested in the theory and practice of modern theater on the web. We analyze the differences between digital theater and digital performance, game design and net art; give basic knowledge from media theory about the design of interfaces and algorithms; talk about the ethics and aesthetics of digital space and collect a course library for self-study of the topic.</p>
            </div>
        </div>

     

        <div class="row">
            <div class="cell">
                
                <p>In addition, we offer our course participants to study specific tools and platforms with which they can create their own theater projects based on text generators, interactive works and games, chatbots and augmented reality masks, as well as the Flickgame game engine for 16 images. We will give feedback on all the projects of our participants and help with navigation inside the digital space. </p>
            </div>
        </div>

       

        <div class="row">
            <div class="cell">
                <h3>Workshop program</h3>
                
                    <ol>
                        <li>Digital theater. What is it and do we need it?</li>
                           <li> Prospects and limitations. Why do digital theater?</li>
                           <li> Context: digital performance, game design and net art.</li>
                           <li> Interactive storytelling and text games on the Twine platform.</li>
                           <li> The Flickgame engine is like Paint among gaming platforms.</li>
                           <li> Interfaces, data transfer protocols and algorithms.</li>
                           <li>Feminism in the digital space.</li>
                            <li>Creating text generators.</li>
                            <li>Digital theater as a site-specific.</li>
                            <li>AR masks for Instagram and Snapchat.</li>
                            <li>Chatbot as a theatrical tool.</li>
                            <li>Is there a future for digital theater?</li>
                            <li>Course library.</li>
                            <li>Pitching projects.</li>
                    </ol>



                
            </div>
        </div>

       

    </div>
</div>
</main>

<style>
    * {
            box-sizing: border-box;
        }

        body {
            overflow-x: hidden;
        }

        html,
        body {
            width: 100vw;
            height: 100vh;
        }

        html,
        body,
        .container {
            margin: 0;
            padding: 0;
            border: 0;
        }

        .container {
            width: 100%;
            display: flex;
            position: relative;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 16px 10px 0;
        }

        .content {
            position: relative;
            max-width: 780px;
            width: 100%;
            transform-origin: 0 0;
        }

        body {
            background-color: black;
        }

        body,
        h1,
        h2,
        h2bright,
        h3,
        h3bright,
        p,
        ol,
        footer {
            font-family: -apple-system, BlinkMacSystemFont, sans-serif;
        }

        h1 {
            padding: 0;
            margin: 0;
            color: white;
            font-weight: 700;
            font-size: clamp(10px, 8vw, 50px);
        }

        h2 {
            padding: 0;
            margin: 0;
            color: #5f4bd0;
            font-weight: 700;
            font-size: clamp(10px, 5vw, 42px);
        }

        h2bright {
            padding: 0;
            margin: 0;
            color: white;
            font-weight: 700;
            font-size: clamp(10px, 5vw, 42px);
        }

        h3 {
            font-size: clamp(10px, 4.2vw, 38px);
            font-weight: 500;
            color: white;
            padding: 0;
            margin: 0;
        }

        h3bright {
            font-size: clamp(10px, 4.2vw, 38px);
            font-weight: 500;
            color: #1c7a15;
            padding: 0;
            margin: 0;
        }

        footer {
            font-size: clamp(10px, 10vw, 93px);
            color: #1c7a15;
            white-space: nowrap;
            font-weight: 800;
            margin-top: 15px;
        }

        p, ol, li {
            font-size: clamp(10px, 4vw, 36px);
            color: #949494;
            margin: 8px 0 0;
        }

        a {
            color: currentColor;
            text-decoration: none;
        }

        .link {
            color: #594bc4;
        }

        @media (hover: hover) and (pointer: fine) {
            .link:hover {
                text-decoration: underline;
            }

            a.cell:hover {
                background-color: #363636;
            }

            a.bright_cell:hover {
                background-color: #7252e8;
            }

            a.cell:hover .arrow {
                border: solid white;
                border-width: 0 clamp(2px, 1vw, 5px) clamp(2px, 1vw, 5px) 0;
            }
        }

        .row {
            display: flex;
            align-items: stretch;
            width: 100%;
            margin-bottom: clamp(4px, 2vw, 12px);
        }

        .cell {
            display: flex;
            flex-direction: column;
            justify-content: center;
            flex: 1 1 auto;
            border-radius: 16px;
            background-color: #181818;
            transition: background-color 200ms;
            margin: 0 clamp(2px, 1vw, 6px);
            padding: 16px clamp(8px, 4vw, 20px);
        }

        .bright_cell {
            display: flex;
            flex-direction: column;
            justify-content: center;
            flex: 1 1 auto;
            border-radius: 16px;
            background-color: #1c7a15;
            transition: background-color 200ms;
            margin: 0 clamp(2px, 1vw, 6px);
            padding: 16px clamp(8px, 4vw, 20px);
        }

        .centered {
            justify-content: center;
            align-items: center;
        }

        .arrow {
            border: solid #949494;
            border-width: 0 clamp(2px, 1vw, 5px) clamp(2px, 1vw, 5px) 0;
            display: inline-block;
            padding: clamp(4px, 1.4vw, 7px);
            border-radius: 3px;
            ;
            transform: rotate(-45deg);
            -webkit-transform: rotate(-45deg);
            transition: border 200ms;
        }

        .with-arrow {
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .logo {
            width: clamp(60px, 20vw, 138px);
            height: clamp(60px, 20vw, 138px);
            object-fit: contain;
            margin-right: 12px;
            position: relative;
            top: 2px;
        }

        .title-logo {
            display: flex;
            align-items: center;
            margin: clamp(0, 0.8vw, 8px) 0;
        }

        .back-logo {
            width: 200px;
            height: 200px;
        }

        .image {
            position: relative;
            max-width: 780px;
            width: 100%;
            transform-origin: 0 0;

        }
</style>