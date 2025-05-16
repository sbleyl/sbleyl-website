import { FaReact, FaNode, FaCss3Alt, FaHtml5 } from "react-icons/fa";
import { SiMongodb, SiExpress } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";

function HomePage() {
    const iconSize = { fontSize: '100px' };

    const iconStyle = {
        display: 'flex',
        justifyContent: 'center',
        gap: '20px',
        textAlign: 'center',
        flexFlow: 'row wrap'
    };

    return (
       <>
            <h2>Home</h2>
            <article>
                <p>
                    My Career Goals are to expand my skillset through a CS degree, which I believe will open doors to many great opportunities. I've always had a passion for 
                    technology, starting with simple programming projects like tic-tac-toe and basic websites as a teenager. While I'm still exploring my options and my focus 
                    may change, web development currently seems like the most intriguing path for me. I'm optimistic about the future of programming and excited to keep 
                    learning and growing my skills.
                </p>
                <p>The technologies used in this site include:</p>
                <div style={iconStyle}>
                    <div>
                        <FaHtml5 style={iconSize} />
                        <p>HTML</p>
                    </div>
                    <div>
                        <FaCss3Alt style={iconSize} />
                        <p>CSS</p>
                    </div>
                    <div>
                        <IoLogoJavascript style={iconSize} />
                        <p>JavaScript</p>
                    </div>
                    <div>
                        <FaNode style={iconSize} />
                        <p>Node.js</p>
                    </div>
                    <div>
                        <SiExpress style={iconSize} />
                        <p>Express</p>
                    </div>
                    <div>
                        <SiMongodb style={iconSize} />
                        <p>MongoDB</p>
                    </div>
                    <div>
                        <FaReact style={iconSize} />
                        <p>React</p>
                    </div>
                </div>
            </article>
       </>
    );
}
export default HomePage;