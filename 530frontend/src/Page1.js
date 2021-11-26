const Page1 = () => {
    const mystyle = {
        color: "black",
        paddingLeft: "20%",
        paddingRight: "20%"
      };

    return(
        <div style={mystyle}>
            <h1>Welcome to Page 1</h1>
            <h5>Question</h5>
            <p>
            A summary snapshot presentation of the chosen frontend Framework: Popularity, strengths, 
            weaknesses, which developers mostly use it and for what kind of websites. A summary snapshot 
            presentation of the chosen backend Framework: Popularity, strengths, weaknesses, which 
             developers mostly use it and for what kind of websites. 
            </p>
            <br />
            <br />
            <div>
            <h2>Frontend Framework: React</h2>
            <h5>Popularity</h5>
                <p>
                    React is one of the most popular Javascript frontend frameworks. According to
                    a stack overflow survey, it ranks number 2 in most popular. A lot of jobs require
                    react experience.
                </p>
                <h5>Strengths</h5>
                <ul>
                    <li>Simple to read and easy to use</li>
                    <li>Designed for easy maintenance</li>
                    <li>It's very robust, interactive and dynamic</li>
                    <li>It's search engine optimization friendly</li>
                    <li>It's easy to test</li>
                    <li>It has reusable components</li>
                </ul> 
                <h5>Weaknesses</h5>
                <ul>
                    <li>High pace of development</li>
                    <li>Poor documentation, it's accelerating so fast, so there isn't much documentation for it</li>
                    <li>Only covers the UI layers of app so you still need other technologies</li>
                    <li>JSX could be a barrier for new developers as a lot of people complain about the
                        complexity of the learning curve
                    </li>
                </ul>
                <h5>Who Uses It</h5>
                <p>
                    The developers that mostly use React are frontend Javascript developers. They will
                    be able to embrace the JS, build components with pure JS and understand styling with
                    CSS-in-JS. Usually want people who are stron in pure JavaScript.
                </p>
            </div>
            <br />
            <br />
            <div>
            <h2>Backend Framework: Node.js</h2>
                <h5>Popularity</h5>
                <p>
                    Node.js is extremely lightweight and has high flexibility which is why
                    it's popularity has grown significantly in recent years. As of early 2020, more than 50%
                    of developers use Node.js in there projects. A lot of big companies also use it such
                    as eBay and AliExpress.
                </p>
                <h5>Strengths</h5>
                <ul>
                    <li>Asynchronous event driven IO helps with concurrent request handling</li>
                    <li>Uses JS which is quite straightforward</li>
                    <li>The same code is used with server and client side</li>
                    <li>NPM modules have become huge and are still growing</li>
                    <li>Large active and vibrant community</li>
                </ul>
                <h5>Weaknesses</h5>
                <ul>
                    <li>Doesn'r provide scalability, one CPU is onot going to be enough
                        for large platforms
                    </li>
                    <li>Working with relational databases isn't as fluent with Node.js</li>
                    <li>Using a callback can lead to tons of nested callbacks</li>
                    <li>Need experience with JavaScript or else will run into some problems</li>
                </ul>
                <h5>Who Uses It</h5>
                <p>
                    All sorts of developers use node.js as it is to the go-to language for building
                    dynamic websites. Developers at big companies such as Microsoft, LinkedIn, Netflix
                    and etc use Node.js.
                </p>
            </div>
        </div>
    );
}

export default Page1;