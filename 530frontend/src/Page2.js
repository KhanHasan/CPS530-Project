const Page2 = () => {
    const mystyle = {
        color: "black",
        paddingLeft: "20%",
        paddingRight: "20%"
      };

    return(
        <div style={mystyle}>
            <h1>Hello this is Page 2</h1>
            <p>
            A tutorial showing in short simple steps how to install the frameworks on your chosen platform. 
            Back-end frameworks cannot be installed on the Ryerson servers, you will have to host on an external 
            server. You can use shared hosting or better yet a VPS service or something similar, or set your own 
            server on your own machine (must have permanent connection and be ip accessible). DigitalOcean 
            (https://www.digitalocean.com/?refcode=6350bfbec950) is an inexpensive and versatile option. If you 
            use my link, you get a credit of a few dollars.  Provide installation instructions for both frameworks.
            </p>
            <br />

            <div>
                <h2>Installing React</h2>
            </div>
            <br />
            <div>
                <h2>Installing Node.js</h2>
            </div>
        </div>
    );
}

export default Page2;