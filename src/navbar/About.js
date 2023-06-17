import React from "react";
import './About.css'

function About () {
    return (
        <div className="about_section">
            <div>
            <h1 className="about">ABOUT</h1>
            </div>

            <div className="para">
                <p className="about_para">
                A library is a collection of materials, books or media that are accessible for use and not just for display purposes.
                A library provides physical (hard copies) or digital access (soft copies) materials, and may be a physical location
                or a virtual space, or both. A library's collection can include printed materials and other physical resources in many
                formats such as DVD, CD and cassette as well as access to information, music or other content held on bibliographic databases.
                </p>
                <p className="about_para">
                A library, which may vary widely in size, may be organized for use and maintained by a public body such as a government;
                an institution such as a school or museum; a corporation; or a private individual. In addition to providing materials,
                libraries also provide the services of librarians who are trained and experts at finding, selecting, circulating and organizing
                information and at interpreting information needs, navigating and analyzing very large amounts of information with a variety
                of resources.
                </p>
            </div>
        </div>
    )
}


export default About;