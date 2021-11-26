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
                <ol>
                    <li>Open a terminal(Windows Command Prompt or PowerShell)</li>
                    <li>Create a new project folder and cd into it</li>
                    <li>Install React using the following command, it will 
                        install all the dependencies
                        <br />
                        <i><b>npx create-react-app my-app</b></i>
                    </li>
                    <li>It will ask you for permission to create-react-app, after
                        approving, cd into the folder
                    </li>
                    <li>Once in the folder, start your react app with the
                        following command in terminal<br />
                        <i><b>npm start</b></i>
                    </li>
                    <li>Finally when you are ready to deploy your web app, run the
                        following command to create a build of your app in the
                        "build" folder
                        <br />
                        <i><b>npm run build</b></i>
                    </li>
                </ol>
            </div>
            <br />
            <div>
                <h2>Installing Node.js</h2>
                <p>Installing Node.js isn't too difficult, however make sure you have the 
                    following pre-requisites.
                </p>
                <br />
                <h6>Prerequisites</h6>
                <ul>
                    <li>Ubuntu server configured with non-root user with <b>sudo </b>
                     privileges.</li>
                     <li>Domain name pointed at servers IP address. Use DigitalOcean</li>
                     <li>Nginx installed</li>
                     <li>Nginx configured with SSL</li>
                </ul>
                <br />
                <h6>Getting Started</h6>
                <ol>
                    <li>Need to install NodeSource PPA to get access to contents. 
                        Go to home directly and use <b>curl </b> to retrieve installation
                        script using following commands:
                        <br />
                        <b>$ cd ~</b>
                        <br />
                        <b>$ curl -sL https://deb.nodesource.com/setup_16.x -o nodesource_setup.sh</b>
                    </li>
                    <li>Now run the script under sudo: 
                        <br />
                        <b>$ sudo bash nodesource_setup.sh</b>
                    </li>
                    <li>
                    PPA will be added to your configuration and your local package cache will be 
                    updated automatically. After running the setup script from nodesource, you can 
                    install the Node.js package using the following command: 
                        <br />
                        <b>$ sudo apt-get install nodejs</b>
                    </li>
                    <li>
                        The nodejs package contains npm so you don't need to install it seperately however
                        you will need to install the build-essential package:
                        <br />
                        <b>$ sudo apt-get install build-essential</b>
                    </li>
                </ol>
            </div>
        </div>
    );
}

export default Page2;