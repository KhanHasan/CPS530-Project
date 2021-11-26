const Page6 = () => {
    const mystyle = {
        color: "black",
        paddingLeft: "20%",
        paddingRight: "20%"
      };

    return(
        <div style={mystyle}>
            <h1>Hello this is Page 6</h1>
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
                <p>Add links in here</p>
            </div>
        </div>
    );
}

export default Page6;