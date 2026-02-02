/**
 * loads and decorates the header, mainly the nav
 * @param {Element} block The header block element
 */
export default async function decorate(block) {
    const bodyHtml = `<header class="header-wrapper">
    <div class="header block" data-block-name="header" data-block-status="loading">
      <div>
        <div></div>
      </div>
    </div>
  </header>
  <main data-aue-type="container" data-aue-resource="urn:aemconnection:/content/Pearson-RFP-Demo/index1/jcr:content/root" data-aue-label="Main" data-aue-filter="main">
    <div data-aue-type="container" data-aue-resource="urn:aemconnection:/content/Pearson-RFP-Demo/index1/jcr:content/root/section_1116061065_1" data-aue-behavior="component" data-aue-model="section" data-aue-label="Section" data-aue-filter="section" class="section navigation-container" data-section-status="loaded" style="">
      <!--cq{"decorated":true,"type":"core/franklin/components/block/v1/block","path":"/content/Pearson-RFP-Demo/index1/jcr:content/root/section_1116061065_1/navigation","selectors":null,"servlet":"Script /libs/core/franklin/components/block/v1/block/block.html","totalTime":1,"selfTime":1}-->
      <!--cq{"decorated":true,"type":"core/franklin/components/block/v1/block","path":"/content/Pearson-RFP-Demo/index1/jcr:content/root/section_1116061065_1/metadata","selectors":null,"servlet":"Script /libs/core/franklin/components/block/v1/block/block.html","totalTime":0,"selfTime":0}-->
      <div class="navigation-wrapper">
        <div data-aue-resource="urn:aemconnection:/content/Pearson-RFP-Demo/index1/jcr:content/root/section_1116061065_1/navigation" data-aue-type="component" data-aue-behavior="component" data-aue-model="navigation" data-aue-label="navigation" class="navigation block" data-block-name="navigation" data-block-status="loaded">
          <div>
            <div>
              <div data-aue-prop="text1" data-aue-label="Text 1" data-aue-filter="text" data-aue-type="richtext">
                <p>For School</p>
              </div>
            </div>
          </div>
          <div>
            <div>
              <div data-aue-prop="text2" data-aue-label="Text 2" data-aue-filter="text" data-aue-type="richtext">
                <p>For College</p>
              </div>
            </div>
          </div>
          <div>
            <div>
              <div data-aue-prop="text3" data-aue-label="Text 3" data-aue-filter="text" data-aue-type="richtext">
                <p>For work</p>
              </div>
            </div>
          </div>
          <div>
            <div>
              <div data-aue-prop="text4" data-aue-label="Text 4" data-aue-filter="text" data-aue-type="richtext">
                <p>Explore Pearson</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--cq{"decorated":true,"type":"core/franklin/components/section/v1/section","path":"/content/Pearson-RFP-Demo/index1/jcr:content/root/section_1116061065_1","selectors":null,"servlet":"Script /libs/core/franklin/components/section/v1/section/section.html","totalTime":2,"selfTime":1}-->
    <div data-aue-type="container" data-aue-resource="urn:aemconnection:/content/Pearson-RFP-Demo/index1/jcr:content/root/section_963508404_301234203" data-aue-behavior="component" data-aue-model="section" data-aue-label="Section" data-aue-filter="section" class="section card-carousel-animation-container" data-section-status="loading" style="display: none;">
      <!--cq{"decorated":true,"type":"core/franklin/components/block/v1/block","path":"/content/Pearson-RFP-Demo/index1/jcr:content/root/section_963508404_301234203/card_carousel_animat","selectors":null,"servlet":"Script /libs/core/franklin/components/block/v1/block/block.html","totalTime":2,"selfTime":2}-->
      <!--cq{"decorated":true,"type":"core/franklin/components/block/v1/block","path":"/content/Pearson-RFP-Demo/index1/jcr:content/root/section_963508404_301234203/metadata","selectors":null,"servlet":"Script /libs/core/franklin/components/block/v1/block/block.html","totalTime":0,"selfTime":0}-->
      <div class="card-carousel-animation-wrapper">
        <div data-aue-resource="urn:aemconnection:/content/Pearson-RFP-Demo/index1/jcr:content/root/section_963508404_301234203/card_carousel_animat" data-aue-type="component" data-aue-behavior="component" data-aue-model="card-carousel-animation" data-aue-label="card-carousel-animation" class="card-carousel-animation block" data-block-name="card-carousel-animation" data-block-status="loading">
          <div>
            <div>
              <p data-aue-prop="heroTitle" data-aue-label="Hero Title" data-aue-type="text">Where learning comes to life</p>
            </div>
          </div>
          <div>
            <div>
              <div data-aue-prop="heroDescription" data-aue-label="Hero Description" data-aue-filter="text" data-aue-type="richtext">
                <h4>
                  <strong>Explore learning for every stage of life with Pearson.</strong>
                </h4>
              </div>
            </div>
          </div>
          <div>
            <div>
              <p data-aue-prop="card1Eyebrow" data-aue-label="Card 1 – Eyebrow" data-aue-type="text">Pearson+</p>
            </div>
          </div>
          <div>
            <div>
              <p data-aue-prop="card1Title" data-aue-label="Card 1 – Title" data-aue-type="text">eTextbooks &amp; study tools for quicker, simpler learning</p>
            </div>
          </div>
          <div>
            <div>
              <div data-aue-prop="card1Description" data-aue-label="Card 1 – Description" data-aue-filter="text" data-aue-type="richtext">
                <p>Join more than 1 million students who are getting&nbsp;more out of their study time.</p>
              </div>
            </div>
          </div>
          <div>
            <div>
              <p data-aue-prop="card1CtaLabel" data-aue-label="Card 1 – CTA Label" data-aue-type="text">Buy eTextbooks</p>
            </div>
          </div>
          <div>
            <div></div>
          </div>
          <div>
            <div>
              <p data-aue-prop="card2Eyebrow" data-aue-label="Card 2 – Eyebrow" data-aue-type="text">For Schools</p>
            </div>
          </div>
          <div>
            <div>
              <p data-aue-prop="card2Title" data-aue-label="Card 2 – Title" data-aue-type="text">Prepare K-12 students for what's next</p>
            </div>
          </div>
          <div>
            <div>
              <div data-aue-prop="card2Description" data-aue-label="Card 2 – Description" data-aue-filter="text" data-aue-type="richtext">
                <p>Set college students up for success</p>
              </div>
            </div>
          </div>
          <div>
            <div>
              <p data-aue-prop="card2CtaLabel" data-aue-label="Card 2 – CTA Label" data-aue-type="text">Check out K-12 programs</p>
            </div>
          </div>
          <div>
            <div></div>
          </div>
          <div>
            <div>
              <p data-aue-prop="card3Eyebrow" data-aue-label="Card 3 – Eyebrow" data-aue-type="text">Check out K-12 programs</p>
            </div>
          </div>
          <div>
            <div>
              <p data-aue-prop="card3Title" data-aue-label="Card 3 – Title" data-aue-type="text">Set college students up for success</p>
            </div>
          </div>
          <div>
            <div>
              <div data-aue-prop="card3Description" data-aue-label="Card 3 – Description" data-aue-filter="text" data-aue-type="richtext">
                <p>Set college students up for success</p>
              </div>
            </div>
          </div>
          <div>
            <div>
              <p data-aue-prop="card3CtaLabel" data-aue-label="Card 3 – CTA Label" data-aue-type="text">Explore college offerings</p>
            </div>
          </div>
          <div>
            <div></div>
          </div>
          <div>
            <div>
              <p data-aue-prop="card4Eyebrow" data-aue-label="Card 4 – Eyebrow" data-aue-type="text">For School</p>
            </div>
          </div>
          <div>
            <div>
              <p data-aue-prop="card4Title" data-aue-label="Card 4 – Title" data-aue-type="text">Prepare K-12 students for what's next</p>
            </div>
          </div>
          <div>
            <div>
              <div data-aue-prop="card4Description" data-aue-label="Card 4 – Description" data-aue-filter="text" data-aue-type="richtext">
                <p>Offer pathways for every student — from college prep to career readiness.</p>
              </div>
            </div>
          </div>
          <div>
            <div>
              <p data-aue-prop="card4CtaLabel" data-aue-label="Card 4 – CTA Label" data-aue-type="text">Check out K-12 programs</p>
            </div>
          </div>
          <div>
            <div></div>
          </div>
          <div>
            <div>
              <p data-aue-prop="card5Eyebrow" data-aue-label="Card 5 – Eyebrow" data-aue-type="text">For College</p>
            </div>
          </div>
          <div>
            <div>
              <p data-aue-prop="card5Title" data-aue-label="Card 5 – Title" data-aue-type="text">Set college students up for success</p>
            </div>
          </div>
          <div>
            <div>
              <div data-aue-prop="card5Description" data-aue-label="Card 5 – Description" data-aue-filter="text" data-aue-type="richtext">
                <p>Give them tools and resources that link what&nbsp;they're learning to real-life goals.</p>
              </div>
            </div>
          </div>
          <div>
            <div>
              <p data-aue-prop="card5CtaLabel" data-aue-label="Card 5 – CTA Label" data-aue-type="text">For College</p>
            </div>
          </div>
          <div>
            <div></div>
          </div>
          <div>
            <div>
              <p data-aue-prop="card6Eyebrow" data-aue-label="Card 6 – Eyebrow" data-aue-type="text">For College</p>
            </div>
          </div>
          <div>
            <div>
              <p data-aue-prop="card6Title" data-aue-label="Card 6 – Title" data-aue-type="text">Build employee skills &amp; expertise</p>
            </div>
          </div>
          <div>
            <div>
              <div data-aue-prop="card6Description" data-aue-label="Card 6 – Description" data-aue-filter="text" data-aue-type="richtext">
                <p>Transform careers, find new opportunities, and help people adapt to a changing economy.&nbsp;</p>
              </div>
            </div>
          </div>
          <div>
            <div>
              <p data-aue-prop="card6CtaLabel" data-aue-label="Card 6 – CTA Label" data-aue-type="text">Browse work options</p>
            </div>
          </div>
          <div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
    <!--cq{"decorated":true,"type":"core/franklin/components/section/v1/section","path":"/content/Pearson-RFP-Demo/index1/jcr:content/root/section_963508404_301234203","selectors":null,"servlet":"Script /libs/core/franklin/components/section/v1/section/section.html","totalTime":3,"selfTime":1}-->
    <div data-aue-type="container" data-aue-resource="urn:aemconnection:/content/Pearson-RFP-Demo/index1/jcr:content/root/section_963444097" data-aue-behavior="component" data-aue-model="section" data-aue-label="Section" data-aue-filter="section" class="section containerimageleft container-video-container" data-section-status="initialized" style="display: none;">
      <!--cq{"decorated":true,"type":"core/franklin/components/block/v1/block","path":"/content/Pearson-RFP-Demo/index1/jcr:content/root/section_963444097/container_video","selectors":null,"servlet":"Script /libs/core/franklin/components/block/v1/block/block.html","totalTime":1,"selfTime":1}-->
      <!--cq{"decorated":true,"type":"core/franklin/components/block/v1/block","path":"/content/Pearson-RFP-Demo/index1/jcr:content/root/section_963444097/metadata","selectors":null,"servlet":"Script /libs/core/franklin/components/block/v1/block/block.html","totalTime":1,"selfTime":1}-->
      <div class="container-video-wrapper">
        <div data-aue-resource="urn:aemconnection:/content/Pearson-RFP-Demo/index1/jcr:content/root/section_963444097/container_video" data-aue-type="component" data-aue-behavior="component" data-aue-model="container-video" data-aue-label="container-video" class="container-video block" data-block-name="container-video" data-block-status="initialized">
          <div>
            <div>
              <div data-aue-prop="video-title" data-aue-label="Video Title" data-aue-filter="text" data-aue-type="richtext">
                <p>What if learning is more powerful than we realize?</p>
              </div>
            </div>
          </div>
          <div>
            <div>
              <div data-aue-prop="video-desc" data-aue-label="Video Description" data-aue-filter="text" data-aue-type="richtext">
                <p>When we learn, the benefits extend far beyond what we might expect. Each new skill or insight can transform many parts of our lives.</p>
              </div>
            </div>
          </div>
          <div>
            <div>
              <p data-aue-prop="video-id" data-aue-label="Video ID" data-aue-type="text">TXj6aLD6muM</p>
            </div>
          </div>
          <div>
            <div>
              <p data-aue-prop="video-transcript-title" data-aue-label="Video Transcript Title" data-aue-type="text">View Transcript</p>
            </div>
          </div>
          <div>
            <div>
              <p>
                <a href="https://www.pearson.com/en-us/transcripts/born-to-learn.html" title="https://www.pearson.com/en-us/transcripts/born-to-learn.html">https://www.pearson.com/en-us/transcripts/born-to-learn.html</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--cq{"decorated":true,"type":"core/franklin/components/section/v1/section","path":"/content/Pearson-RFP-Demo/index1/jcr:content/root/section_963444097","selectors":null,"servlet":"Script /libs/core/franklin/components/section/v1/section/section.html","totalTime":2,"selfTime":0}-->
    <div data-aue-type="container" data-aue-resource="urn:aemconnection:/content/Pearson-RFP-Demo/index1/jcr:content/root/section_963444097_612878372" data-aue-behavior="component" data-aue-model="section" data-aue-label="Section" data-aue-filter="section" class="section container-image-left containerimageleft-container" data-section-status="initialized" style="display: none;">
      <!--cq{"decorated":true,"type":"core/franklin/components/block/v1/block","path":"/content/Pearson-RFP-Demo/index1/jcr:content/root/section_963444097_612878372/container_image_left","selectors":null,"servlet":"Script /libs/core/franklin/components/block/v1/block/block.html","totalTime":1,"selfTime":1}-->
      <!--cq{"decorated":true,"type":"core/franklin/components/block/v1/block","path":"/content/Pearson-RFP-Demo/index1/jcr:content/root/section_963444097_612878372/metadata","selectors":null,"servlet":"Script /libs/core/franklin/components/block/v1/block/block.html","totalTime":0,"selfTime":0}-->
      <div class="containerimageleft-wrapper">
        <div data-aue-resource="urn:aemconnection:/content/Pearson-RFP-Demo/index1/jcr:content/root/section_963444097_612878372/container_image_left" data-aue-type="component" data-aue-behavior="component" data-aue-model="container-image-left" data-aue-label="containerimageleft" class="containerimageleft block" data-block-name="containerimageleft" data-block-status="initialized">
          <div>
            <div>
              <div data-aue-prop="Title" data-aue-label="Title" data-aue-filter="text" data-aue-type="richtext">
                <h2>
                  <strong>Learn anytime with Study Prep</strong>
                </h2>
              </div>
            </div>
          </div>
          <div>
            <div>
              <div data-aue-prop="Description" data-aue-label="Description" data-aue-filter="text" data-aue-type="richtext">
                <p>Video lessons that break down concepts, practice&nbsp;exams, and personalized tools to help students get the&nbsp;grades they want.&nbsp;</p>
                <p>Find all this and more in <strong>Study Prep</strong>, available in&nbsp;Pearson+ </p>
              </div>
            </div>
          </div>
          <div>
            <div>
              <div data-aue-prop="Button text" data-aue-label="ButtonText" data-aue-filter="text" data-aue-type="richtext">
                <p class="button-container">
                  <a href="https://www.pearson.com/channels?CEP=pearsonHP" title="Get started" class="button">Get started</a>
                </p>
              </div>
            </div>
          </div>
          <div>
            <div>
              <picture>
                <img src="/adobe/dynamicmedia/deliver/dm-aid--7db04f1c-c208-401b-bbf4-4d8e12e2016c/pearsonplus-app-channels-alt.png?preferwebp=true&amp;width=1280&amp;quality=85" data-aue-prop="image" data-aue-label="Image" data-aue-type="media">
              </picture>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--cq{"decorated":true,"type":"core/franklin/components/section/v1/section","path":"/content/Pearson-RFP-Demo/index1/jcr:content/root/section_963444097_612878372","selectors":null,"servlet":"Script /libs/core/franklin/components/section/v1/section/section.html","totalTime":2,"selfTime":1}-->
    <div data-aue-type="container" data-aue-resource="urn:aemconnection:/content/Pearson-RFP-Demo/index1/jcr:content/root/section" data-aue-behavior="component" data-aue-model="section" data-aue-label="Section" data-aue-filter="section" class="section container-image-right-container" data-section-status="initialized" style="display: none;">
      <!--cq{"decorated":true,"type":"core/franklin/components/block/v1/block","path":"/content/Pearson-RFP-Demo/index1/jcr:content/root/section/container_image_righ","selectors":null,"servlet":"Script /libs/core/franklin/components/block/v1/block/block.html","totalTime":1,"selfTime":1}-->
      <!--cq{"decorated":true,"type":"core/franklin/components/block/v1/block","path":"/content/Pearson-RFP-Demo/index1/jcr:content/root/section/metadata","selectors":null,"servlet":"Script /libs/core/franklin/components/block/v1/block/block.html","totalTime":0,"selfTime":0}-->
      <div class="container-image-right-wrapper">
        <div data-aue-resource="urn:aemconnection:/content/Pearson-RFP-Demo/index1/jcr:content/root/section/container_image_righ" data-aue-type="component" data-aue-behavior="component" data-aue-model="container-image-right" data-aue-label="container-image-right" class="container-image-right block" data-block-name="container-image-right" data-block-status="initialized">
          <div>
            <div>
              <div data-aue-prop="Title" data-aue-label="Title" data-aue-filter="text" data-aue-type="richtext">
                <h2>
                  <strong>College &amp; Career Readiness</strong>
                </h2>
              </div>
            </div>
          </div>
          <div>
            <div>
              <div data-aue-prop="Description" data-aue-label="Description" data-aue-filter="text" data-aue-type="richtext">
                <h5>
                  <strong>The future starts here.</strong>
                </h5>
                <p>Today’s students are tomorrow’s leaders. With engaging, future-ready content, we help educators prepare students for college, careers, and beyond.</p>
              </div>
            </div>
          </div>
          <div>
            <div>
              <div data-aue-prop="Button text" data-aue-label="ButtonText" data-aue-filter="text" data-aue-type="richtext">
                <p class="button-container">
                  <a href="https://www.pearson.com/en-us/schools/college-readiness-career-education.html" title="Explore K-12 solutions" class="button">Explore K-12 solutions</a>
                </p>
              </div>
            </div>
          </div>
          <div>
            <div>
              <picture>
                <img src="/content/dam/2400x800-GettyImages-2177942040-alt.avif" data-aue-prop="image" data-aue-label="Image" data-aue-type="media">
              </picture>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--cq{"decorated":true,"type":"core/franklin/components/section/v1/section","path":"/content/Pearson-RFP-Demo/index1/jcr:content/root/section","selectors":null,"servlet":"Script /libs/core/franklin/components/section/v1/section/section.html","totalTime":2,"selfTime":1}-->
    <div data-aue-type="container" data-aue-resource="urn:aemconnection:/content/Pearson-RFP-Demo/index1/jcr:content/root/section_728385433" data-aue-behavior="component" data-aue-model="section" data-aue-label="Section" data-aue-filter="section" class="section container-image-left-buttons-container" data-section-status="initialized" style="display: none;">
      <!--cq{"decorated":true,"type":"core/franklin/components/block/v1/block","path":"/content/Pearson-RFP-Demo/index1/jcr:content/root/section_728385433/container_image_left","selectors":null,"servlet":"Script /libs/core/franklin/components/block/v1/block/block.html","totalTime":1,"selfTime":1}-->
      <!--cq{"decorated":true,"type":"core/franklin/components/block/v1/block","path":"/content/Pearson-RFP-Demo/index1/jcr:content/root/section_728385433/metadata","selectors":null,"servlet":"Script /libs/core/franklin/components/block/v1/block/block.html","totalTime":0,"selfTime":0}-->
      <div class="container-image-left-buttons-wrapper">
        <div data-aue-resource="urn:aemconnection:/content/Pearson-RFP-Demo/index1/jcr:content/root/section_728385433/container_image_left" data-aue-type="component" data-aue-behavior="component" data-aue-model="container-image-left-buttons" data-aue-label="container-image-left-buttons" class="container-image-left-buttons block" data-block-name="container-image-left-buttons" data-block-status="initialized">
          <div>
            <div>
              <div data-aue-prop="Title" data-aue-label="Title" data-aue-filter="text" data-aue-type="richtext">
                <h2>
                  <strong>Flexible, mobile learning</strong>
                </h2>
              </div>
            </div>
          </div>
          <div>
            <div>
              <div data-aue-prop="Description" data-aue-label="Description" data-aue-filter="text" data-aue-type="richtext">
                <p>
                  <strong>Get interactive content, customizable experiences, and data-driven insights that enhance learning outcomes.</strong>
                </p>
              </div>
            </div>
          </div>
          <div>
            <div>
              <div data-aue-prop="Primary Button text" data-aue-label="PrimaryButtonText" data-aue-filter="text" data-aue-type="richtext">
                <p class="button-container">
                  <a href="https://www.pearson.com/en-us/schools/college-readiness-career-education/platforms-overview.html" title="Explore K-12 platform" class="button">Explore K-12 platform</a>
                </p>
              </div>
            </div>
          </div>
          <div>
            <div>
              <div data-aue-prop="Secondary Button text" data-aue-label="SecondaryPrimaryButtonText" data-aue-filter="text" data-aue-type="richtext">
                <p class="button-container">
                  <a href="https://www.pearson.com/en-us/higher-education/educators/digital-learning-platforms.html" title="Explore college platforms" class="button">Explore college platforms</a>
                </p>
              </div>
            </div>
          </div>
          <div>
            <div>
              <picture>
                <img src="/content/dam/img.avif" data-aue-prop="image" data-aue-label="Image" data-aue-type="media">
              </picture>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--cq{"decorated":true,"type":"core/franklin/components/section/v1/section","path":"/content/Pearson-RFP-Demo/index1/jcr:content/root/section_728385433","selectors":null,"servlet":"Script /libs/core/franklin/components/section/v1/section/section.html","totalTime":1,"selfTime":0}-->
    <div data-aue-type="container" data-aue-resource="urn:aemconnection:/content/Pearson-RFP-Demo/index1/jcr:content/root/section_1211528795" data-aue-behavior="component" data-aue-model="section" data-aue-label="Section" data-aue-filter="section" class="section container-rounded-image-right-container" data-section-status="initialized" style="display: none;">
      <!--cq{"decorated":true,"type":"core/franklin/components/block/v1/block","path":"/content/Pearson-RFP-Demo/index1/jcr:content/root/section_1211528795/container_rounded_im","selectors":null,"servlet":"Script /libs/core/franklin/components/block/v1/block/block.html","totalTime":7,"selfTime":7}-->
      <!--cq{"decorated":true,"type":"core/franklin/components/block/v1/block","path":"/content/Pearson-RFP-Demo/index1/jcr:content/root/section_1211528795/metadata","selectors":null,"servlet":"Script /libs/core/franklin/components/block/v1/block/block.html","totalTime":0,"selfTime":0}-->
      <div class="container-rounded-image-right-wrapper">
        <div data-aue-resource="urn:aemconnection:/content/Pearson-RFP-Demo/index1/jcr:content/root/section_1211528795/container_rounded_im" data-aue-type="component" data-aue-behavior="component" data-aue-model="container-rounded-image-right" data-aue-label="container-rounded-image-right" class="container-rounded-image-right block" data-block-name="container-rounded-image-right" data-block-status="initialized">
          <div>
            <div>
              <div data-aue-prop="Title" data-aue-label="Title" data-aue-filter="text" data-aue-type="richtext">
                <h2>
                  <strong>Transform careers &amp; workplaces</strong>
                </h2>
              </div>
            </div>
          </div>
          <div>
            <div>
              <div data-aue-prop="Description" data-aue-label="Description" data-aue-filter="text" data-aue-type="richtext">
                <p>Build smarter, future-ready teams with AI-driven data and insights from Credly <sup>®</sup> by Pearson. </p>
                <p class="button-container">
                  <a href="https://info.credly.com/" title="Get more info" class="button">Get more info</a>
                </p>
              </div>
            </div>
          </div>
          <div>
            <div>
              <div data-aue-prop="Button text" data-aue-label="ButtonText" data-aue-filter="text" data-aue-type="richtext">
                <p class="button-container">
                  <a href="https://info.credly.com/" title="Get more info" class="button">Get more info</a>
                </p>
              </div>
            </div>
          </div>
          <div>
            <div>
              <picture>
                <img src="/adobe/dynamicmedia/deliver/dm-aid--14185dd8-8e56-41c0-a43b-b2dd1a8b1e4d/img2.webp?preferwebp=true&amp;width=1280&amp;quality=85" data-aue-prop="image" data-aue-label="Image" data-aue-type="media">
              </picture>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--cq{"decorated":true,"type":"core/franklin/components/section/v1/section","path":"/content/Pearson-RFP-Demo/index1/jcr:content/root/section_1211528795","selectors":null,"servlet":"Script /libs/core/franklin/components/section/v1/section/section.html","totalTime":8,"selfTime":1}-->
    <div data-aue-type="container" data-aue-resource="urn:aemconnection:/content/Pearson-RFP-Demo/index1/jcr:content/root/section_2067489567" data-aue-behavior="component" data-aue-model="section" data-aue-label="Section" data-aue-filter="section" class="section container-bgimage-right-container" data-section-status="initialized" style="display: none;">
      <!--cq{"decorated":true,"type":"core/franklin/components/block/v1/block","path":"/content/Pearson-RFP-Demo/index1/jcr:content/root/section_2067489567/container_bgimage_ri","selectors":null,"servlet":"Script /libs/core/franklin/components/block/v1/block/block.html","totalTime":0,"selfTime":0}-->
      <!--cq{"decorated":true,"type":"core/franklin/components/block/v1/block","path":"/content/Pearson-RFP-Demo/index1/jcr:content/root/section_2067489567/metadata","selectors":null,"servlet":"Script /libs/core/franklin/components/block/v1/block/block.html","totalTime":0,"selfTime":0}-->
      <div class="container-bgimage-right-wrapper">
        <div data-aue-resource="urn:aemconnection:/content/Pearson-RFP-Demo/index1/jcr:content/root/section_2067489567/container_bgimage_ri" data-aue-type="component" data-aue-behavior="component" data-aue-model="container-bgimage-right" data-aue-label="container-bgimage-right" class="container-bgimage-right block" data-block-name="container-bgimage-right" data-block-status="initialized">
          <div>
            <div>
              <div data-aue-prop="Title" data-aue-label="Title" data-aue-filter="text" data-aue-type="richtext">
                <h2>
                  <strong>Learning never stops</strong>
                </h2>
              </div>
            </div>
          </div>
          <div>
            <div>
              <div data-aue-prop="Description" data-aue-label="Description" data-aue-filter="text" data-aue-type="richtext">
                <p>
                  <strong>The more we learn, the more we achieve.</strong>
                </p>
              </div>
            </div>
          </div>
          <div>
            <div>
              <picture>
                <img src="/content/dam/img3.avif" data-aue-prop="image" data-aue-label="Image" data-aue-type="media">
              </picture>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--cq{"decorated":true,"type":"core/franklin/components/section/v1/section","path":"/content/Pearson-RFP-Demo/index1/jcr:content/root/section_2067489567","selectors":null,"servlet":"Script /libs/core/franklin/components/section/v1/section/section.html","totalTime":2,"selfTime":2}-->
    <div data-aue-type="container" data-aue-resource="urn:aemconnection:/content/Pearson-RFP-Demo/index1/jcr:content/root/section_594854320" data-aue-behavior="component" data-aue-model="section" data-aue-label="Section" data-aue-filter="section" class="section columns-container-container" data-section-status="initialized" style="display: none;">
      <!--cq{"decorated":true,"type":"core/franklin/components/block/v1/block","path":"/content/Pearson-RFP-Demo/index1/jcr:content/root/section_594854320/columns_container","selectors":null,"servlet":"Script /libs/core/franklin/components/block/v1/block/block.html","totalTime":2,"selfTime":2}-->
      <!--cq{"decorated":true,"type":"core/franklin/components/block/v1/block","path":"/content/Pearson-RFP-Demo/index1/jcr:content/root/section_594854320/metadata","selectors":null,"servlet":"Script /libs/core/franklin/components/block/v1/block/block.html","totalTime":0,"selfTime":0}-->
      <div class="columns-container-wrapper">
        <div data-aue-resource="urn:aemconnection:/content/Pearson-RFP-Demo/index1/jcr:content/root/section_594854320/columns_container" data-aue-type="component" data-aue-behavior="component" data-aue-model="columns-container" data-aue-label="columns-container" class="columns-container block" data-block-name="columns-container" data-block-status="initialized">
          <div>
            <div>
              <div data-aue-prop="Title" data-aue-label="Title" data-aue-filter="text" data-aue-type="richtext">
                <h2>
                  <strong>About Pearson</strong>
                </h2>
              </div>
            </div>
          </div>
          <div>
            <div>
              <div data-aue-prop="Description" data-aue-label="Description" data-aue-filter="text" data-aue-type="richtext">
                <p>
                  <strong>We create meaningful learning experiences for people of all ages. Our mission? To help students, educators, and businesses make progress toward their personal and professional goals.</strong>
                </p>
              </div>
            </div>
          </div>
          <div>
            <div>
              <picture>
                <img src="/content/dam/800x800-PICTOGRAMS-TURQUOISE-35.avif" data-aue-prop="image" data-aue-label="Image" data-aue-type="media">
              </picture>
            </div>
          </div>
          <div>
            <div>
              <div data-aue-prop="Coloum1Title" data-aue-label="Coloum1 Title" data-aue-filter="text" data-aue-type="richtext">
                <h3>
                  <strong>Purpose driven</strong>
                </h3>
              </div>
            </div>
          </div>
          <div>
            <div>
              <div data-aue-prop="Coloum1Description" data-aue-label="Coloum1 Description" data-aue-filter="text" data-aue-type="richtext">
                <p>The right learning solutions make a big difference at every age. We help people realize the lives they imagine through learning.</p>
              </div>
            </div>
          </div>
          <div>
            <div>
              <div data-aue-prop="Coloum1LinkText" data-aue-label="Coloum1 LinkText" data-aue-filter="text" data-aue-type="richtext">
                <p class="button-container">
                  <strong>
                    <a href="https://plc.pearson.com/en-GB" title="Get to know Pearson" class="button primary">
                      <u>Get to know Pearson</u>
                    </a>
                  </strong>
                </p>
              </div>
            </div>
          </div>
          <div>
            <div>
              <div data-aue-prop="Coloum2Title" data-aue-label="Coloum2 Title" data-aue-filter="text" data-aue-type="richtext">
                <h3>
                  <strong>Digital first</strong>
                </h3>
              </div>
            </div>
          </div>
          <div>
            <div>
              <div data-aue-prop="Coloum2Description" data-aue-label="Coloum2 Description" data-aue-filter="text" data-aue-type="richtext">
                <p>Flexible, affordable tech solutions fit the way you live and learn. That's why we focus on adaptability and innovation.</p>
              </div>
            </div>
          </div>
          <div>
            <div>
              <div data-aue-prop="Coloum2LinkText" data-aue-label="Coloum2 LinkText" data-aue-filter="text" data-aue-type="richtext">
                <p class="button-container">
                  <strong>
                    <a href="https://plc.pearson.com/en-GB/sustainability/products" title="Learn how we’re growing" class="button primary">Learn how we’re growing</a>
                  </strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--cq{"decorated":true,"type":"core/franklin/components/section/v1/section","path":"/content/Pearson-RFP-Demo/index1/jcr:content/root/section_594854320","selectors":null,"servlet":"Script /libs/core/franklin/components/section/v1/section/section.html","totalTime":2,"selfTime":0}-->
    <div data-aue-type="container" data-aue-resource="urn:aemconnection:/content/Pearson-RFP-Demo/index1/jcr:content/root/section_1283048011" data-aue-behavior="component" data-aue-model="section" data-aue-label="Section" data-aue-filter="section" class="section" data-section-status="initialized" style="display: none;">
      <!--cq{"decorated":true,"type":"core/franklin/components/block/v1/block","path":"/content/Pearson-RFP-Demo/index1/jcr:content/root/section_1283048011/metadata","selectors":null,"servlet":"Script /libs/core/franklin/components/block/v1/block/block.html","totalTime":0,"selfTime":0}-->
    </div>
    <!--cq{"decorated":true,"type":"core/franklin/components/section/v1/section","path":"/content/Pearson-RFP-Demo/index1/jcr:content/root/section_1283048011","selectors":null,"servlet":"Script /libs/core/franklin/components/section/v1/section/section.html","totalTime":0,"selfTime":0}-->
  </main>
  <footer></footer>`;
    const bodyEle = document.querySelector('body');
    bodyEle.innerHTML = bodyHtml;
  const textKeys = [
    'text1',
    'text2',
    'text3',
    'text4',
  ];
  const navcontainer = document.querySelector('.navigation-container');

  const navTexts = textKeys
    .map((key) => {
      const selector = `[data-aue-prop="${key}"] p`;
      const el = navcontainer.querySelector(selector);
      return el ? el.textContent.trim() : null;
    })
    .filter(Boolean);
  console.log(navTexts);
  const countryEl = navcontainer.querySelector(
    '[data-aue-prop="selectedCountry"]',
  );

  const selectedCountry = countryEl
    ? countryEl.textContent.trim()
    : 'United States';

  const navItemsHTML = navTexts
    .map((text) => [
      '<li class="dropdown mega-nav-full-width">',
      '<a ',
      'href="#" ',
      'role="link" ',
      'class="dropdown-toggle js-opacity-0">',
      text,
      '</a>',
      '</li>',
    ].join(''))
    .join('');
  console.log(navItemsHTML);
  console.log(block);
  const headerTopHTML = [
    '<section class="column-control aem-GridColumn aem-GridColumn--default--12 he-navigation-topnav">',
    '<div class="container">',
    '<div class="row">',
    '<div class="col-sm-9 col-xs-12">',
    '<div role="navigation" class="mega-nav navbar navbar-default section">',
    '<div class="navbar-header">',
    '<button aria-label="items" data-toggle="collapse" data-target="#navbar-collapse-grid" class="navbar-toggle" aria-expanded="false">',
    '<span class="fa fa-bars"></span>',
    '</button>',
    '</div>',

    '<div id="navbar-collapse-grid" class="navbar-collapse collapse">',
    '<ul class="nav navbar-nav">',
    navItemsHTML,
    '</ul>',
    '</div>',

    '</div>',
    '</div>',

    '<div class="col-sm-3 col-xs-12">',
    '<div class="locale-selection section">',
    '<div>',
    '<button class="locale-selection__button selected_en-US" aria-haspopup="true" aria-expanded="false">',
    selectedCountry,
    '<svg class="ls-chevron" width="16" height="16" viewBox="0 0 24 24" ',
    'fill="none" stroke="currentColor" stroke-width="2" ',
    'stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">',
    '<polyline points="6 9 12 15 18 9"></polyline>',
    '</svg>',
    '</button>',
    '</div>',
    '</div>',
    '</div>',


    '</div>',
    '</div>',
    '</section>',
  ].join('');

  block.innerHTML = headerTopHTML;

  const headercontainer = document.querySelector('.header.block');
  const headerHTML = [
    '<section class="column-control he-pr-nav__wrapper has-padding-top--none has-padding-bottom--none ls-search-enabled aem-GridColumn nav-content-selector aem-GridColumn--default--12 isAuthenticated">',
    '<div class="container">',
    '<div class="row">',
    '<div class="col-12">',

    '<div class="logo-v2 header__logo section">',
    '  <a id="logo" href="https://www.pearson.com/en-us.html" aria-label="Pearson Logo">',
    '<svg xmlns="http://www.w3.org/2000/svg" width="120" height="24" viewBox="0 0 120 24" fill="none">',
    '<path d="M6.67175 2.11133V2.11512C6.67175 2.11512 7.13831 5.68646 7.13831 11.7824C7.13831 17.8784 6.67175 21.4535 6.67175 21.4491V21.4529C9.05632 18.9219 10.5191 15.523 10.5191 11.7831V11.7812C10.5191 8.04126 9.05632 4.64226 6.67175 2.11133Z" fill="white" />',
    '<path d="M6.75595 8.51326C6.25593 6.62311 5.31966 4.84218 4.02289 3.22412C2.91047 1.97475 1.56004 0.88447 0.029673 0C1.51395 2.34596 2.51273 6.73359 2.51273 11.7595C2.51273 16.7854 1.51584 21.1629 0.0347248 23.5114C0.0233607 23.5379 0.0113641 23.5644 0 23.5909C0.85357 23.0998 1.65158 22.5448 2.3833 21.9337C4.90929 19.5297 6.57097 16.6446 7.03753 13.5063C7.10445 12.947 7.13918 12.3775 7.13918 11.7999C7.13918 10.6679 7.00659 9.56819 6.75658 8.51263L6.75595 8.51326Z" fill="white" />',
    '<path d="M95.5237 7.20117C90.7741 7.20117 86.9899 10.9215 86.9899 15.6033C86.9899 20.2851 90.7621 23.9903 95.5117 23.9903C100.261 23.9903 104.033 20.2814 104.033 15.6002C104.033 10.919 100.273 7.2018 95.523 7.2018L95.5237 7.20117ZM95.5123 20.2182C92.783 20.2182 91.0999 18.0964 91.0999 15.6033C91.0999 13.1103 92.7837 10.9853 95.5123 10.9853C98.241 10.9853 99.9247 13.1071 99.9247 15.6002C99.9247 18.0932 98.241 20.2182 95.5123 20.2182Z" fill="white" />',
    '<path d="M35.7884 7.20312C31.0779 7.20312 27.6725 11.0062 27.6719 15.6274C27.6719 20.1488 30.9308 24.0005 35.6627 24.0005C39.077 24.0005 42.1851 21.9531 43.3594 18.7644H39.2153C38.5732 19.6179 37.3156 20.3427 35.6886 20.3427C33.0957 20.3427 31.917 18.4916 31.7806 17.0781H43.6321C43.7016 16.623 43.7394 15.8673 43.7394 15.342C43.7394 10.4474 40.1383 7.20312 35.7884 7.20312ZM31.7901 13.9929C31.7901 12.241 33.5174 10.8218 35.6476 10.8218C37.7777 10.8218 39.5063 12.2416 39.5063 13.9929H31.7895H31.7901Z" fill="white" />',
    '<path d="M112.226 7.20312C108.226 7.20312 104.993 10.4342 104.993 14.4355V23.5908H109.049L109.05 14.4411C109.05 12.3736 110.518 11.056 112.22 11.056C113.92 11.056 115.38 12.3837 115.378 14.4519L115.37 23.5908H119.461V14.438C119.461 10.4367 116.227 7.20312 112.226 7.20312Z" fill="white" />',
    '<path d="M73.9591 7.71386C73.5115 7.50426 72.5399 7.20312 71.4306 7.20312C68.2329 7.20312 66.9898 9.66398 66.8521 9.93671V7.61221H63.0123L63.0016 23.5889L67.0548 23.5908V13.1368C67.1659 12.9209 68.3036 10.9803 70.6591 10.9803C71.5398 10.9803 72.3416 11.2517 72.5449 11.3509L73.9597 7.71323L73.9591 7.71386Z" fill="white" />',
    '<path d="M53.0912 7.20117C48.3757 7.20117 44.5416 10.8805 44.5416 15.6734C44.5416 20.1614 47.9035 24.0086 52.4472 23.9992C54.7346 23.9947 56.539 23.0143 57.4771 21.5932V23.5907H61.5834L61.5802 15.3925C61.5783 10.7731 57.7385 7.20117 53.0918 7.20117H53.0912ZM53.0634 20.2719C50.3342 20.2719 48.6504 18.1185 48.6504 15.6254C48.6504 13.1324 50.3348 10.979 53.0634 10.979C55.7921 10.979 57.4765 13.1324 57.4765 15.6254C57.4765 18.1185 55.7921 20.2719 53.0634 20.2719Z" fill="white" />',
    '<path d="M81.2729 14.0529C78.5784 13.4796 77.5007 13.2435 77.5007 12.3275C77.5007 11.2909 78.8821 10.7511 80.3398 10.7511C82.5533 10.7511 84.1897 11.9942 84.3715 12.1324L86.3918 9.16777C85.3577 8.47459 83.3911 7.20312 80.3032 7.20312C76.0164 7.20312 73.5239 9.64378 73.5239 12.3654C73.5239 15.2303 76.2847 16.5838 79.4528 17.2511C81.8765 17.7618 82.619 17.9582 82.619 18.8136C82.619 19.9803 81.2376 20.4512 79.8316 20.4512C77.6629 20.4512 75.8636 19.3307 74.7714 18.1621L72.515 21.092C73.4563 21.9872 75.8933 23.9992 79.7628 23.9992C83.6323 23.9992 86.6961 21.7985 86.6961 19.0699C86.6961 15.7694 84.4391 14.7252 81.2729 14.0516V14.0529Z" fill="white" />',
    '<path d="M20.924 0H12.9211L12.9186 23.5909H16.9459L16.949 15.0909H20.924C25.606 15.0909 28.738 11.858 28.738 7.54546C28.738 3.23296 25.606 0 20.924 0ZM20.4183 11.2506H16.949V3.84028H20.4183C23.1804 3.84028 24.6293 5.32261 24.6293 7.54546C24.6293 9.76832 23.1804 11.2506 20.4183 11.2506Z" fill="white" />',
    '</svg>',
    '  </a>',
    '</div>',

    '<div role="navigation" class="mega-nav navbar navbar-default section he-header-desktop-nav"></div>',

    '<div class="function-panel section function-panel educator-nav__search c-nav__search aem-GridColumn aem-GridColumn--default--12">',
    '<div class="facet__auto_suggest search-box-input-active" data-fp-attributes="{&quot;productsTitle&quot;:&quot;PRODUCTS&quot;,&quot;suggestedTitle&quot;:&quot;SUGGESTED SEARCHES&quot;}" data-hide-tags="true" tabindex="0">',
    '<div class="ais-SearchBox search-box">',
    '<button class="closeBtn" title="Close search box"></button>',

    '<div id="search-learning-stages">',
    '<div class="search-label-container"><span class="search-input-label">Search</span></div>',

    '<div id="search-menu-radio" class="radio-ls-container">',
    '<div class="ls-radio-input-group"><input type="radio" value="" name="learning_stage" id="all" checked=""><label for="all"> View All </label></div>',
    '<div class="ls-radio-input-group"><input type="radio" value="ccrProductCatalog" name="learning_stage" id="ccrProductCatalog"><label for="ccrProductCatalog"> For School </label></div>',
    '<div class="ls-radio-input-group"><input type="radio" value="learnerProductCatalog" name="learning_stage" id="learnerProductCatalog"><label for="learnerProductCatalog"> For College </label></div>',
    '<div class="ls-radio-input-group"><input type="radio" value="workProductCatalog" name="learning_stage" id="workProductCatalog"><label for="workProductCatalog"> For Work </label></div>',
    '</div>',

    '<div id="search-menu-select" class="search-ls-menu">',
    '<button id="expander" class="selected-option" data-value="" aria-expanded="false">View All <svg class="ls-chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9"></polyline></svg></button>',
    '<div class="search-ls-options">',
    '<button class="option" data-value=""> View All </button>',
    '<button class="option" data-value="ccrProductCatalog"> For School </button>',
    '<button class="option" data-value="learnerProductCatalog"> For College </button>',
    '<button class="option" data-value="workProductCatalog"> For Work </button>',
    '</div>',
    '</div>',
    '</div>',

    '<form role="search" class="ais-SearchBox-form headerSearch">',
    '<input class="ais-SearchBox-input search-box-input" type="search" placeholder="What can we help you find?">',
    '<button class="ais-SearchBox-submit search-box-icon" type="submit"></button>',
    '</form>',

    '<button class="close-recents-btn hide" aria-label="Close recent searches"></button>',
    '</div>',
    '<button class="userNav__search" aria-label="Search"></button>',
    '</div>',
    '</div>',

    '<section class="column-control has-padding-top--none has-padding-bottom--none he-header-icon-navigation section">',
    '<div class="row"><div class="col-12"><div class="parsys section">',

    '<div class="he-header-desktop-cart section">',
    '  <a href="/store/en-us/cart" class="cart-link">',
    '    <svg width="20" height="20" viewBox="0 0 24 24" fill="none"',
    '      stroke="currentColor" stroke-width="2"',
    '      stroke-linecap="round" stroke-linejoin="round">',
    '      <circle cx="9" cy="21" r="1"></circle>',
    '      <circle cx="20" cy="21" r="1"></circle>',
    '      <path d="M1 1h4l2.6 13.4a2 2 0 0 0 2 1.6h9.4a2 2 0 0 0 2-1.6L23 6H6"></path>',
    '    </svg>',
    '    <span class="cart-products-indicator">0</span>',
    '  </a>',
    '</div>',

    '<div role="navigation" class="mega-nav navbar navbar-default he-header-help-nav he-icon-dropdown he-drop-down-nav on-left section" aria-label="Support">',
    '  <div class="navbar-header">',
    '    <button aria-label="Support items" title="Support" data-toggle="collapse"',
    '      data-target="#Support" class="navbar-toggle" aria-expanded="false">',
    '      <svg width="20" height="20" viewBox="0 0 24 24" fill="none"',
    '        stroke="currentColor" stroke-width="2"',
    '        stroke-linecap="round" stroke-linejoin="round">',
    '        <circle cx="12" cy="12" r="10"></circle>',
    '        <path d="M9.09 9a3 3 0 0 1 5.82 1c0 2-3 3-3 3"></path>',
    '        <line x1="12" y1="17" x2="12.01" y2="17"></line>',
    '      </svg>',
    '    </button>',
    '  </div>',
    '  <div id="Support" class="navbar-collapse collapse"></div>',
    '</div>',

    '<div class="custom-header he-user-navigation section">',
    '<div class="custom-header__container container">',
    '<div id="custom-header" class="row">',
    '<button class="usernav-signin-button"><span>Sign in</span></button>',
    '</div></div></div>',

    '</div></div></div>',
    '</section>',

    '</div></div></div></section>',
  ].join('');
  if (headercontainer) {
    headercontainer.insertAdjacentHTML('beforeend', headerHTML);
  }

  function initStickyHeader() {
    const headerEL = document.querySelector('header');
    const stickyEl = document.querySelector('.he-pr-nav__wrapper');

    if (!headerEL || !stickyEl) return;

    const stickyOffset = stickyEl.offsetTop;

    window.addEventListener('scroll', () => {
      if (window.scrollY >= stickyOffset) {
        headerEL.classList.add('isSticky');
      } else {
        headerEL.classList.remove('isSticky');
      }
    });
  }

  initStickyHeader();

}
