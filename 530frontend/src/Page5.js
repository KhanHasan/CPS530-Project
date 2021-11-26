const Page5 = () => {

        const mystyle = {
        color: "black",
        paddingLeft: "20%",
        paddingRight: "20%"
      };

    return(
        <div style={mystyle}>
            <h1>Welcome to Page 5</h1>
            <p>
            The conclusion. Rate your experience with the frameworks that you chose. Did they perform 
            to your expectations? Were they difficult to install or configure? Was it easy to create 
            the page(s) with it? Was the learning curve steep compared with regular HTML/CSS/JavaScript/PHP? 
            Would you have done things differently in retrospect? Did you regret your choice of frameworks? 
            </p>
            <br />

            <div>
                <h2>My Experience</h2>
                <p>The frameworks I chose both weren't too bad. They were quite
                    straightforward to use however they were a little confusing intially
                    especially the JSX in react however I was eventually able to figure 
                    it out. They both did perform to my expectations as I was able to make
                    a fairly nice web page using them. Installation and configuration was 
                    easy for frameworks but setting up the server was confusing. Creating 
                    pages with it was pretty easy. The learning curve initially was quite
                    steep however once you get the understanding of it and how it works,
                    its pretty easy. I wouldn't have done anything differently, I'm glad I 
                    learned this and was able to do it myself. I do not regret my choices
                    of frameworks.
                </p>
            </div>
        </div>
    );
}

export default Page5;