<svelte:head>
    <title>Denis Protopopov</title> 
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
                            <h1>Denis Protopopov</h1>
                        </div>
                    </div>
                </div>
            </div>
          
            <div class="row">
                <div class="cell">
                    <h3>Bio</h3>
                    <p>Denis Protopopov works at the intersection of research, education, technology, media, visual and performing arts.</p>

                        <p>Denis acquired his Education from Bard College (US) and Smolny College (RU).</p>
                        
                            <p>He participated in Ars Electronica (AT), and a number of museum shows, including Hermitage, VDNKh, AIR gallery, Electromuseum, Central Museum of Communications.</p>
                        
                                <p>His performances were staged on Meyerhold Center, Kuryokhin Center, Alexandrinsky Theatre and Kuryokhin Center.</p>
                        
                                    <p>Denis lectured and leg seminars and workshops in Strelka Institute, New Media Lab (RU), Meyerhold Center, Goethe Institut and others.</p>
                        
                                        <p>He developed online and offline educational projects for Practicum Bootcamp, Meyerhold Center, PERMM, Strelka Institute and others.</p>
                </div>
            </div>



            <div class="row">
                <div class="cell">
                    <h3>On practice</h3>
                    <p>My art, research and educational interests span across algorithmic biases, computation and sexuality, technological embodiment, machine magic and government’s use of machine learning for political repression. In art practice these topics are often expressed, using video, sound, text-based art, augmented reality, interactive fiction, theatre and performance.</p>

                        <p>Critical dataset studies, data subjectivity, algorithmic biases, natural language processing and computer vision, seen through the prism of queer, precarious labour that shapes complex systems – all these and many other topics open the ‘black box’, and reveal processes, limitations, and the danger that acceleration introduces by shaping our surrounding world.</p>

                            <p>Education and learning are major parts of my work. I believe that thee growing importance of software requires a more broad way of curriculum that will help to better understand the politics and aesthetics of data processing, algorithms, and complex systems. It is important to question innovation narratives, environmental aspects, accessibility, binary logic, hierarchies and biases. That is why I design and develop STEM educational projects for artists, performers and underrepresented minority groups.</p>
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