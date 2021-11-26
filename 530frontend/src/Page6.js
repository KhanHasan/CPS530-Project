const Page6 = () => {
    const mystyle = {
        color: "black",
        paddingLeft: "20%",
        paddingRight: "20%"
      };

    return(
        <div style={mystyle}>
            <h1>Welcome to Page 6</h1>
            <p>
            A credits and references page. Identify the team members (with pictures if possible) 
            and mention the different members' responsibilities. Also mention references here if 
            non original material was used. 
            </p>

            <br />
            <br />

            <div>
                <h2>Credits</h2>
                <h3>Team Members: Me!</h3>
                <h5>Responsibilities: All of them</h5>
            </div>
            <br />
            <br />
            <div>
                <h2>References</h2>
                <p>https://www.better.dev/react-popularity</p>
                <p>https://www.bairesdev.com/blog/why-react-is-so-popular/</p>
                <p>https://www.javatpoint.com/pros-and-cons-of-react</p>
                <p>https://medium.com/selleo/top-trends-in-node-js-to-watch-in-2021-d94ff38cc31e</p>
                <p>https://www.voidcanvas.com/describing-node-js/</p>
                <p>https://trio.dev/blog/companies-use-node-js</p>
                <p>https://docs.microsoft.com/en-us/windows/dev-environment/javascript/react-on-windows</p>
                <p>https://www.digitalocean.com/community/tutorials/how-to-set-up-a-node-js-application-for-production-on-ubuntu-16-04</p>
            </div>
        </div>
    );
}

export default Page6;