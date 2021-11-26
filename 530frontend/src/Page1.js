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
                    Enter text here
                </p>
                <h5>Strengths</h5>
                <p>
                    Enter text here
                </p>
                <h5>Weaknesses</h5>
                <p>
                    Enter text here
                </p>
                <h5>Who Uses It</h5>
                <p>
                    Enter text here
                </p>
            </div>
            <br />
            <br />
            <div>
                <h2>Backend Framework: Node.js</h2>
                <h5>Popularity</h5>
                <p>
                    Enter text here
                </p>
                <h5>Strengths</h5>
                <p>
                    Enter text here
                </p>
                <h5>Weaknesses</h5>
                <p>
                    Enter text here
                </p>
                <h5>Who Uses It</h5>
                <p>
                    Enter text here
                </p>
            </div>
        </div>
    );
}

export default Page1;