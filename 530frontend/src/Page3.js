const Page3 = () => {
    const mystyle = {
        color: "black",
        paddingLeft: "20%",
        paddingRight: "20%"
      };

    return(
        <div style={mystyle}>
            <h1>Welcome to Page 3</h1>
            <p>
            A short tutorial showing how to create a great looking page (or pages) with text, 
            images, and styles using your chosen frameworks. The subject of your page(s) is 
            entirely yours. 
            </p>
            <br />
            
            <div>
                <h2>How to Create a Great Looking Page</h2>
                <h6>Simple list of steps with images</h6>
                <p>We will be creating a great looking profile page!</p>
                <ol>
                    <li>Set a background color using the <b>background-color </b> tag </li>
                    <li>For any css you will need to add it in the index.css file and then access
                        that class name in the JSX code
                    </li>
                    <li>For bringing in special fonts, you will need to paste the link
                        into the index.html file which is created for you in the
                        public folder
                    </li>
                    <li>Add a title with a cool font inserted from google fonts</li>
                    <li>Add an image and make its width 100%</li>
                    <li>Format and style the image</li>
                    <li>Add some text and titles using h1 and p tags</li>
                    <li>Place image and text side by side to make it look nice</li>
                </ol>
            </div>
        </div>
    );
}

export default Page3;